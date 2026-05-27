"use client";

import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import AdCard from './AdCard'; 

const IMAGEM_PADRAO_ARTIGO = "https://placehold.co/600x600/e2e8f0/475569?text=Artigo";

const formatarNomeMateria = (materia: string) => {
  if (!materia) return 'Geral';
  const nomesEspeciais: Record<string, string> = {
    'matematica': 'Matemática', 'portugues': 'Português', 'historia': 'História',
    'geografia': 'Geografia', 'ciencias': 'Ciências', 'artes': 'Artes',
    'educacao-fisica': 'Educação Física', 'ingles': 'Inglês'
  };
  return nomesEspeciais[materia] || materia.charAt(0).toUpperCase() + materia.slice(1);
};

// ✨ TRADUTOR UNIVERSAL DE DATAS ✨
// Esta função garante que qualquer tipo de data vinda do Firebase seja lida corretamente
const extrairData = (campoData: any) => {
  if (!campoData) return 0; // Se não tiver data, vai pro fim da fila
  if (campoData.seconds) return campoData.seconds * 1000; // Timestamp do Firebase
  if (typeof campoData === 'number') return campoData; // Se já for milissegundos
  if (typeof campoData === 'string') return new Date(campoData).getTime(); // Se for texto (ex: "2024-05-01")
  if (campoData.toMillis) return campoData.toMillis(); // Outro formato do Firebase
  return 0;
};

export default function FeedPrincipal({ 
  itensLocais = [], 
  modoPesquisa = false 
}: { 
  itensLocais?: any[], 
  modoPesquisa?: boolean 
}) {
  const [feedCompleto, setFeedCompleto] = useState<any[]>(itensLocais);

  const INTERVALO_DE_ANUNCIOS = 12;
  const LIMITE_MAXIMO_ANUNCIOS = 4;

  useEffect(() => {
    if (modoPesquisa) {
      setFeedCompleto(itensLocais);
      return;
    }

    const qAtividades = query(collection(db, "atividades"), orderBy("createdAt", "desc"));
    const qArtigos = query(collection(db, "artigos"), orderBy("createdAt", "desc"));
    const qMomentos = query(collection(db, "momentos"), orderBy("createdAt", "desc"));

    let atividadesFB: any[] = [];
    let artigosFB: any[] = [];
    let momentosFB: any[] = [];

    const combinarTudo = () => {
      const fbPosts = [...atividadesFB, ...artigosFB, ...momentosFB];
      const todosJuntos = [...fbPosts, ...itensLocais];

      const itensUnicos = Array.from(
        new Map(todosJuntos.map(item => [item.id || item.slug, item])).values()
      );
      
      // ✅ ORDENAÇÃO CRONOLÓGICA PURA MISTURADA
      const feedCronologico = itensUnicos.sort((a, b) => {
        // Agora ele usa a data tratada que criamos lá no snapshot
        const dataA = a.dataReal || 0;
        const dataB = b.dataReal || 0;

        return dataB - dataA; // O maior (mais novo) fica no topo, misturando todos
      });
      
      setFeedCompleto(feedCronologico);
    };

    const unsubAtiv = onSnapshot(qAtividades, (snap) => {
      atividadesFB = snap.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id, tipo: 'atividade',
          materia: data.materia || 'geral',
          titulo: data.titulo,
          imagemCapa: data.imagemUrl || data.imagem,
          isFirebase: true,
          // Lendo a data corretamente com a nova função
          dataReal: extrairData(data.createdAt || data.dataCriacao)
        };
      });
      combinarTudo();
    });

    const unsubArt = onSnapshot(qArtigos, (snap) => {
      artigosFB = snap.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id, tipo: 'artigo',
          titulo: data.titulo,
          imagemCapa: data.capaUrl || data.imagemUrl || IMAGEM_PADRAO_ARTIGO,
          autorNome: data.autorNome || "Equipe",
          isFirebase: true,
          dataReal: extrairData(data.createdAt || data.dataCriacao)
        };
      });
      combinarTudo();
    });

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
          id: documento.id, tipo: 'momento',
          descricao: data.descricao,
          imagens: data.imagens || [],
          autorNome: nomeFinal,
          autorAvatar: avatarFinal || `https://ui-avatars.com/api/?name=${encodeURIComponent(nomeFinal)}&background=random&color=fff`,
          autorId: data.autorId, isFirebase: true,
          dataReal: extrairData(data.createdAt || data.dataCriacao)
        };
      });

      momentosFB = await Promise.all(promessas);
      combinarTudo();
    });

    return () => { unsubAtiv(); unsubArt(); unsubMom(); };
  }, [itensLocais, modoPesquisa]);

  return (
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
      {feedCompleto.map((item, index) => {
        const isArtigo = item.tipo === 'artigo';
        const isMomento = item.tipo === 'momento';
        const isAtividade = item.tipo === 'atividade';
        
        let linkDestino = '#';
        if (isArtigo) linkDestino = item.isFirebase ? `/artigos/${item.id}` : `/artigos/${item.slug}`;
        else if (isAtividade) linkDestino = item.isFirebase ? `/atividades/${item.materia || 'geral'}/${item.id}` : `/atividades/${item.materia}/${item.slug}`;
        else if (isMomento) linkDestino = `/postagem/${item.id}`; 

        const numAnuncioAtual = Math.floor((index + 1) / INTERVALO_DE_ANUNCIOS);
        const mostrarAnuncio = (index + 1) % INTERVALO_DE_ANUNCIOS === 0 && numAnuncioAtual <= LIMITE_MAXIMO_ANUNCIOS;
        const isPriority = index < 8; 

        return (
          <React.Fragment key={item.id || item.slug || `feed-item-${index}`}>
            <div className="break-inside-avoid">
              <Link href={linkDestino} className="block group">
                
                {/* --- DESIGN MOMENTO --- */}
                {isMomento ? (
                  <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col h-full">
                    <div className="p-3 flex items-center gap-2 border-b border-slate-50">
                      <img src={item.autorAvatar} alt={item.autorNome} className="w-7 h-7 rounded-full object-cover border border-slate-200" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-800 line-clamp-1">{item.autorNome}</span>
                      </div>
                    </div>
                    {item.imagens && item.imagens.length > 0 && (
                      <div className="relative w-full overflow-hidden bg-slate-100 min-h-[140px]">
                        <img 
                          src={item.imagens[0]} 
                          alt="Momento" 
                          loading={isPriority ? "eager" : "lazy"}
                          onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500 opacity-0" 
                        />
                        {item.imagens.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-sm">+ {item.imagens.length - 1}</div>
                        )}
                      </div>
                    )}
                    <div className="p-3 md:p-4">
                      <p className="text-[13px] md:text-sm text-slate-600 leading-snug line-clamp-4 break-words">{item.descricao}</p>
                    </div>
                  </div>
                ) : isArtigo ? (
                  /* --- DESIGN ARTIGO --- */
                  <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-purple-500 transition-all duration-300 flex flex-col h-full">
                    <div className="relative w-full aspect-square overflow-hidden bg-slate-100 border-b-2 border-slate-100">
                      <img 
                        src={item.imagemCapa} 
                        alt={item.titulo} 
                        loading={isPriority ? "eager" : "lazy"}
                        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 opacity-0" 
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-slate-700 uppercase tracking-wider shadow-sm border border-slate-100">Artigo</div>
                    </div>
                    <div className="p-4 md:p-5 flex flex-col flex-1">
                      <h2 className="font-bold text-sm md:text-base text-slate-900 leading-snug group-hover:text-purple-600 transition-colors line-clamp-3 mb-2">{item.titulo}</h2>
                      {item.autorNome && <div className="mt-auto flex items-center text-[11px] text-slate-400 font-semibold uppercase tracking-wide"><span className="truncate max-w-[120px]">{item.autorNome}</span></div>}
                    </div>
                  </div>
                ) : (
                  /* --- DESIGN ATIVIDADE --- */
                  <div className="relative rounded-2xl overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 min-h-[220px]">
                    <img 
                      src={item.imagemCapa} 
                      alt={item.titulo} 
                      loading={isPriority ? "eager" : "lazy"}
                      onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500 opacity-0" 
                    />
                    <div className="absolute top-3 left-3 flex gap-2 z-10">
                      <span className="bg-cyan-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">{formatarNomeMateria(item.materia)}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                      <h2 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-3">{item.titulo}</h2>
                    </div>
                  </div>
                )}
              </Link>
            </div>

            {mostrarAnuncio && (
              <div className="break-inside-avoid py-2">
                <AdCard />
                <p className="text-[9px] text-slate-400 text-center mt-1.5 uppercase tracking-widest font-semibold">Publicidade</p>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}