"use client";

import { useState, useRef, useEffect } from 'react';
import { db, auth, storage } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function NovoArtigo() {
  const [user, setUser] = useState<User | null>(null);
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [capaArquivo, setCapaArquivo] = useState<File | null>(null);
  const [capaPrevia, setCapaPrevia] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  
  // ✨ NOVO ESTADO: Controla o balão bonitinho
  const [toast, setToast] = useState<{ visivel: boolean; mensagem: string; tipo: 'sucesso' | 'erro' | 'aviso' }>({
    visivel: false,
    mensagem: "",
    tipo: "sucesso"
  });
  
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ✨ NOVA FUNÇÃO: Dispara o balão na tela
  const mostrarToast = (mensagem: string, tipo: 'sucesso' | 'erro' | 'aviso') => {
    setToast({ visivel: true, mensagem, tipo });
    // Esconde automaticamente após 3 segundos
    setTimeout(() => {
      setToast(prev => ({ ...prev, visivel: false }));
    }, 3000);
  };

  // Verificar se está logado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        mostrarToast("Você precisa estar logado para escrever um artigo!", "aviso");
        setTimeout(() => router.push('/'), 2000); // Espera o usuário ler antes de redirecionar
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleTrocarCapa = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCapaArquivo(file);
      setCapaPrevia(URL.createObjectURL(file));
    }
  };

  const salvarArtigo = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !titulo || !texto) {
      mostrarToast("Por favor, preencha o título e o texto do artigo!", "aviso");
      return;
    }

    setEnviando(true);

    try {
      let urlCapa = "";

      if (capaArquivo) {
        const nomeArquivo = `${Date.now()}_${user.uid}`;
        const storageRef = ref(storage, `artigos/${nomeArquivo}`);
        await uploadBytes(storageRef, capaArquivo);
        urlCapa = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "artigos"), {
        titulo: titulo,
        texto: texto,
        capaUrl: urlCapa,
        autorNome: user.displayName || "Professor(a)",
        autorAvatar: user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`,
        autorId: user.uid,
        createdAt: serverTimestamp(),
        likes: 0,
        comentariosCount: 0
      });

      mostrarToast("Artigo publicado com sucesso! 🎉", "sucesso");
      
      // ✨ Espera 2 segundos para o usuário ver o balão de sucesso antes de ir pra home
      setTimeout(() => {
        router.push('/'); 
      }, 2000);

    } catch (error) {
      console.error("Erro ao salvar artigo:", error);
      mostrarToast("Ocorreu um erro ao salvar o artigo.", "erro");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen relative">
      
      {/* ✨ O BALÃO BONITINHO (TOAST) ✨ */}
      <div 
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          toast.visivel ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className={`px-6 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 text-white
          ${toast.tipo === 'sucesso' ? 'bg-green-500' : ''}
          ${toast.tipo === 'erro' ? 'bg-red-500' : ''}
          ${toast.tipo === 'aviso' ? 'bg-orange-500' : ''}
        `}>
          {toast.tipo === 'sucesso' && '✅'}
          {toast.tipo === 'erro' && '❌'}
          {toast.tipo === 'aviso' && '⚠️'}
          {toast.mensagem}
        </div>
      </div>

      {/* Cabeçalho */}
      <div className="bg-white border-b border-slate-200 p-4 sticky top-0 z-10">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
          <button onClick={() => router.back()} className="text-slate-500 font-bold hover:text-purple-600 transition-colors">Cancelar</button>
          <h1 className="font-bold text-lg text-purple-900">Escrever Artigo</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <main className="container mx-auto max-w-3xl p-4 pt-8 pb-20">
        <form onSubmit={salvarArtigo} className="space-y-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
          
          {/* Capa do Artigo (Estilo "Banner") */}
          <div>
            <label className="block text-slate-700 font-bold mb-2">Capa do Artigo <span className="text-slate-400 font-normal">(Opcional)</span></label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-48 md:h-64 bg-purple-50 border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-purple-100 transition-colors overflow-hidden relative group"
            >
              {capaPrevia ? (
                <>
                  <img src={capaPrevia} className="w-full h-full object-cover" alt="Capa Preview" />
                  <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center transition-all">
                    <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full">Trocar Capa</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-4">
                  <span className="text-4xl block mb-2">🖼️</span>
                  <p className="text-purple-600 font-medium">Clique para fazer upload da capa</p>
                  <p className="text-purple-400 text-sm mt-1">Recomendado: imagem na horizontal</p>
                </div>
              )}
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleTrocarCapa} />
            </div>
          </div>

          {/* Título do Artigo */}
          <div>
            <input 
              type="text" 
              placeholder="Título do seu artigo..."
              className="w-full p-2 text-3xl md:text-4xl font-black text-slate-800 border-none outline-none placeholder:text-slate-300 focus:ring-0 bg-transparent"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <hr className="border-slate-100" />

          {/* Corpo do Texto */}
          <div>
            <textarea 
              placeholder="Escreva o conteúdo do seu artigo aqui..."
              className="w-full p-2 text-lg text-slate-700 leading-relaxed border-none outline-none placeholder:text-slate-300 focus:ring-0 bg-transparent min-h-[400px] resize-y"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              required
            />
          </div>

          {/* Botão Publicar */}
          <div className="pt-4 flex justify-end">
            <button 
              type="submit"
              disabled={enviando}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-200 transition-all disabled:bg-slate-300 disabled:shadow-none text-lg flex items-center gap-2"
            >
              {enviando ? (
                <>
                  <span className="animate-spin text-xl">⏳</span> Publicando...
                </>
              ) : (
                "Publicar Artigo"
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}