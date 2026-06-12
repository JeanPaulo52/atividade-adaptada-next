"use client";

import React, { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { 
  collection, query, orderBy, onSnapshot, doc, getDoc, 
  updateDoc, increment, arrayUnion, arrayRemove, addDoc, serverTimestamp 
} from 'firebase/firestore';
import Link from 'next/link';
import AdCard from './AdCard'; 

export default function FeedPrincipal({ 
  itensLocais = [], 
  modoPesquisa = false 
}: { 
  itensLocais?: any[], 
  modoPesquisa?: boolean 
}) {
  const [feedMomentos, setFeedMomentos] = useState<any[]>(itensLocais);
  const [usuarioLogado, setUsuarioLogado] = useState<any>(null);
  
  // 🚀 NOVO: Controle de renderização em lotes
  const [limiteVisivel, setLimiteVisivel] = useState(10);
  
  // 🚀 NOVO: Controle de quais posts estão com o texto expandido ("Ler mais")
  const [postsExpandidos, setPostsExpandidos] = useState<string[]>([]);
  
  // Estados para controle dos comentários
  const [postAbertoId, setPostAbertoId] = useState<string | null>(null);
  const [comentarios, setComentarios] = useState<any[]>([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [enviandoComentario, setEnviandoComentario] = useState(false);

  // 🛡️ DENSIDADE DE ANÚNCIOS (Ajustado para Feed Vertical)
  const INTERVALO_DE_ANUNCIOS = 8; 
  const LIMITE_MAXIMO_ANUNCIOS = 3;

  // Monitora o login do usuário
  useEffect(() => {
    const unsubAuth = auth.onAuthStateChanged((user) => setUsuarioLogado(user));
    return () => unsubAuth();
  }, []);

  // Monitora e carrega o Feed de Momentos
  useEffect(() => {
    if (modoPesquisa) {
      setFeedMomentos(itensLocais);
      return;
    }

    const qMomentos = query(collection(db, "momentos"), orderBy("createdAt", "desc"));
    
    const unsubMom = onSnapshot(qMomentos, async (snap) => {
      const promessas = snap.docs.map(async (documento) => {
        const data = documento.data();
        let nomeFinal = data.autorNome || "Professor(a)";
        let avatarFinal = data.autorAvatar || null;

        if (data.autorId) {
          try {
            const userRef = doc(db, "users", data.autorId);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
              const userData = userSnap.data();
              nomeFinal = userData.nome || userData.displayName || nomeFinal;
              avatarFinal = userData.fotoUrl || userData.photoURL || avatarFinal;
            }
          } catch (e) { console.error(e); }
        }

        return {
          id: documento.id, 
          tipo: 'momento',
          descricao: data.descricao || "", // Garantindo que não seja null
          imagens: data.imagens || [],
          autorNome: nomeFinal,
          autorAvatar: avatarFinal || `https://ui-avatars.com/api/?name=${encodeURIComponent(nomeFinal)}&background=random&color=fff`,
          autorId: data.autorId, 
          curtidas: data.totalFavoritos || 0,
          comentarios: data.totalComentarios || 0,
          curtidoPorMim: data.usuariosQueCurtiram?.includes(auth.currentUser?.uid) || false,
          dataReal: data.createdAt?.seconds ? data.createdAt.seconds * 1000 : Date.now()
        };
      });

      const resultados = await Promise.all(promessas);
      // Garante a ordenação decrescente por data
      resultados.sort((a, b) => b.dataReal - a.dataReal);
      setFeedMomentos(resultados);
    });

    return () => unsubMom();
  }, [itensLocais, modoPesquisa, usuarioLogado]);

  // 🚀 NOVO: DETECTAR ROLAGEM ANTECIPADA (70%)
  useEffect(() => {
    const lidarComEventos = () => {
      const alturaTotal = document.body.offsetHeight;
      const posicaoAtual = window.innerHeight + window.scrollY;
      
      if (alturaTotal > 0 && (posicaoAtual / alturaTotal) >= 0.7) {
        setLimiteVisivel(prev => prev + 10);
      }
    };

    window.addEventListener('scroll', lidarComEventos);
    return () => window.removeEventListener('scroll', lidarComEventos);
  }, []);

  // Carrega os comentários em tempo real quando o modal abrir
  useEffect(() => {
    if (!postAbertoId) {
      setComentarios([]);
      return;
    }

    const qComentarios = query(
      collection(db, "momentos", postAbertoId, "comentarios"),
      orderBy("createdAt", "asc")
    );

    const unsubCom = onSnapshot(qComentarios, (snap) => {
      const lista = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComentarios(lista);
    });

    return () => unsubCom();
  }, [postAbertoId]);

  // Função para dar Like direto no Feed
  const lidarComCurtida = async (idMomento: string, jaCurtido: boolean) => {
    if (!usuarioLogado) {
      alert("Você precisa estar logado para curtir as publicações!");
      return;
    }

    const uid = usuarioLogado.uid;
    const momentoRef = doc(db, "momentos", idMomento);

    setFeedMomentos(prev => prev.map(item => 
      item.id === idMomento 
        ? { ...item, curtidoPorMim: !jaCurtido, curtidas: jaCurtido ? item.curtidas - 1 : item.curtidas + 1 } 
        : item
    ));

    try {
      await updateDoc(momentoRef, {
        totalFavoritos: increment(jaCurtido ? -1 : 1),
        usuariosQueCurtiram: jaCurtido ? arrayRemove(uid) : arrayUnion(uid)
      });
    } catch (e) { console.error("Erro ao curtir:", e); }
  };

  // Função para compartilhar nativo
  const lidarComCompartilhar = async (idMomento: string, nomeAutor: string) => {
    const linkPost = `${window.location.origin}/postagem/${idMomento}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Postagem de ${nomeAutor}`,
          text: `Olha só o que ${nomeAutor} compartilhou!`,
          url: linkPost,
        });
      } catch (e) { console.log("Compartilhamento cancelado", e); }
    } else {
      navigator.clipboard.writeText(linkPost)
        .then(() => alert("Link da postagem copiado para a área de transferência!"))
        .catch(() => alert("Erro ao copiar link."));
    }
  };

  // Função para enviar novo comentário
  const enviarComentario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuarioLogado || !novoComentario.trim() || !postAbertoId) return;

    setEnviandoComentario(true);
    try {
      const colRef = collection(db, "momentos", postAbertoId, "comentarios");
      await addDoc(colRef, {
        autorId: usuarioLogado.uid,
        autorNome: usuarioLogado.nome || usuarioLogado.displayName || "Usuário",
        autorAvatar: usuarioLogado.fotoUrl || usuarioLogado.photoURL || "",
        texto: novoComentario,
        createdAt: serverTimestamp()
      });
      
      await updateDoc(doc(db, "momentos", postAbertoId), {
        totalComentarios: increment(1)
      });

      setNovoComentario("");
    } catch (e) { console.error("Erro ao comentar:", e); }
    setEnviandoComentario(false);
  };

  // 🚀 NOVO: Função para expandir/recolher o texto ("mais" e "menos")
  const toggleTextoExpandido = (id: string) => {
    setPostsExpandidos(prev => 
      prev.includes(id) 
        ? prev.filter(postId => postId !== id) // Remove da lista (recolhe)
        : [...prev, id] // Adiciona na lista (expande)
    );
  };

  // 🚀 PREPARAÇÃO DOS DADOS VISÍVEIS + INJEÇÃO DE ANÚNCIOS
  const momentosVisiveis = feedMomentos.slice(0, limiteVisivel);
  const feedComAnuncios: any[] = [];
  
  momentosVisiveis.forEach((item, index) => {
    feedComAnuncios.push(item);
    const numAnuncioAtual = Math.floor((index + 1) / INTERVALO_DE_ANUNCIOS);
    if ((index + 1) % INTERVALO_DE_ANUNCIOS === 0 && numAnuncioAtual <= LIMITE_MAXIMO_ANUNCIOS) {
      feedComAnuncios.push({ isAd: true, id: `ad-${index}` });
    }
  });

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6 sm:gap-8 pb-10 pt-4">
      
      <style>{`
        @keyframes customFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes customSlideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-custom-fade { animation: customFadeIn 0.2s ease-out forwards; }
        .animate-custom-slide { animation: customSlideUp 0.35s cubic-bezier(0.15, 1, 0.3, 1) forwards; }
      `}</style>

      {/* LISTA DE POSTAGENS E ANÚNCIOS */}
      {feedComAnuncios.map((item) => {
        
        // Renderiza o anúncio se for o item fantasma
        if (item.isAd) {
          return (
            <div key={item.id} className="py-2 px-4 sm:px-0">
              <AdCard />
              <p className="text-[10px] text-slate-400 text-center mt-1.5 uppercase tracking-widest font-semibold">Patrocinado</p>
            </div>
          );
        }

        // LÓGICA DO TEXTO LONGO (Corte em 100 caracteres)
        const limiteCaracteres = 100;
        const textoLongo = item.descricao && item.descricao.length > limiteCaracteres;
        const textoEstaExpandido = postsExpandidos.includes(item.id);

        // Renderiza a postagem normal
        return (
          <div key={item.id} className="bg-white border-y sm:border sm:border-slate-200 sm:rounded-2xl overflow-hidden shadow-sm flex flex-col">
            
            <div className="p-3 sm:p-4 flex items-center gap-3">
              <img src={item.autorAvatar} className="w-9 h-9 rounded-full object-cover border border-slate-200" alt="" />
              <span className="text-sm font-bold text-slate-900">{item.autorNome}</span>
            </div>

            {item.imagens && item.imagens.length > 0 && (
              <div className="bg-slate-50 min-h-[300px] flex items-center justify-center overflow-hidden">
                <img src={item.imagens[0]} loading="lazy" className="w-full max-h-[600px] object-contain" alt="Conteúdo visual" />
              </div>
            )}

            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-4 mb-3">
                <button 
                  onClick={() => lidarComCurtida(item.id, item.curtidoPorMim)}
                  className={`transition-colors flex items-center gap-1.5 group ${item.curtidoPorMim ? 'text-rose-500' : 'text-slate-800 hover:text-rose-500'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill={item.curtidoPorMim ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 active:scale-90 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  {item.curtidas > 0 && <span className="text-sm font-bold">{item.curtidas}</span>}
                </button>

                <button 
                  onClick={() => setPostAbertoId(item.id)}
                  className="text-slate-800 hover:text-blue-500 transition-colors flex items-center gap-1.5 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 11.996c0 2.29.968 4.414 2.564 5.966V21l3.222-1.933c.96.262 1.986.408 3.05.408z" />
                  </svg>
                  {item.comentarios > 0 && <span className="text-sm font-bold">{item.comentarios}</span>}
                </button>

                <button 
                  onClick={() => lidarComCompartilhar(item.id, item.autorNome)}
                  className="text-slate-800 hover:text-green-500 transition-colors flex items-center gap-1.5 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 active:translate-x-1 active:-translate-y-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>

              {/* 👇 AQUI ACONTECE A MÁGICA DO TEXTO (Mais / Menos) */}
              <div className="text-sm text-slate-800 leading-relaxed break-words mt-2">
                <span className="font-bold mr-2">{item.autorNome}</span>
                
                {!textoLongo || textoEstaExpandido ? (
                  <span>{item.descricao}</span>
                ) : (
                  <span>{item.descricao.substring(0, limiteCaracteres)}...</span>
                )}

                {textoLongo && (
                  <button 
                    onClick={() => toggleTextoExpandido(item.id)} 
                    className="text-slate-500 font-medium ml-1 hover:text-slate-800 focus:outline-none"
                  >
                    {textoEstaExpandido ? 'menos' : 'mais'}
                  </button>
                )}
              </div>

              {item.comentarios > 0 && (
                <button onClick={() => setPostAbertoId(item.id)} className="text-slate-500 text-xs mt-2 font-semibold hover:underline">
                  Ver todos os {item.comentarios} comentários
                </button>
              )}
            </div>
          </div>
        );
      })}

      {/* Indicadores de Feed Vazio ou Carregando */}
      {feedMomentos.length === 0 ? (
        <div className="text-center py-20 px-4 text-slate-500">
          <p className="font-bold text-lg mb-2">Nenhum momento ainda</p>
          <p className="text-sm">Seja o primeiro a compartilhar algo incrível com a comunidade!</p>
        </div>
      ) : momentosVisiveis.length < feedMomentos.length && (
        <div className="text-center py-6 text-slate-400 text-sm animate-pulse mt-2">
          Buscando mais atualizações...
        </div>
      )}

      {/* GAVETA DE COMENTÁRIOS ANIMADA (Intocável) */}
      {postAbertoId && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-custom-fade">
          <div className="absolute inset-0" onClick={() => setPostAbertoId(null)}></div>
          <div className="relative bg-white w-full max-w-lg h-[80vh] sm:h-[600px] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-custom-slide">
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-2.5 sm:hidden block shrink-0" />

            <div className="p-4 border-b flex items-center justify-between bg-white sticky top-0 z-10">
              <span className="font-bold text-slate-900 text-base">Comentários</span>
              <button onClick={() => setPostAbertoId(null)} className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60">
              {comentarios.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 11.996c0 2.29.968 4.414 2.564 5.966V21l3.222-1.933c.96.262 1.986.408 3.05.408z" />
                  </svg>
                  <p className="font-semibold text-sm">Nenhum comentário ainda.</p>
                  <p className="text-xs">Inicie a conversa!</p>
                </div>
              ) : (
                comentarios.map((c) => (
                  <div key={c.id} className="flex gap-3 items-start">
                    <img src={c.autorAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(c.autorNome)}`} className="w-8 h-8 rounded-full border border-slate-200 bg-white object-cover" alt="" />
                    <div className="flex flex-col bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-100 max-w-[85%]">
                      <span className="text-xs font-bold text-slate-900">{c.autorNome}</span>
                      <p className="text-sm text-slate-700 mt-0.5 leading-relaxed break-words">{c.texto}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t bg-white">
              {usuarioLogado ? (
                <form onSubmit={enviarComentario} className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                  <input 
                    type="text" 
                    value={novoComentario}
                    onChange={(e) => setNovoComentario(e.target.value)}
                    placeholder="Adicione um comentário..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-900 placeholder:text-slate-400 py-1"
                  />
                  <button 
                    disabled={!novoComentario.trim() || enviandoComentario}
                    className="text-blue-600 font-bold text-sm disabled:opacity-40 px-2 active:scale-95 transition-transform"
                  >
                    {enviandoComentario ? '...' : 'Postar'}
                  </button>
                </form>
              ) : (
                <p className="text-center text-sm text-slate-500 font-medium py-2">
                  Você precisa <Link href="/login" className="text-blue-600 font-bold hover:underline">entrar</Link> para comentar.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}