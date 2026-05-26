"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db, storage, auth } from "../../lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged, User } from "firebase/auth";

const DISCIPLINAS = [
  { slug: 'geral', nome: 'Geral / Multidisciplinar' }, // Substituto do "Geral"
  { slug: 'infantil', nome: 'Infantil' },
  { slug: 'artes', nome: 'Artes' },
  { slug: 'biologia', nome: 'Biologia' },
  { slug: 'ciencias', nome: 'Ciências' },
  { slug: 'desenhos', nome: 'Desenhos' },
  { slug: 'educacao-fisica', nome: 'Educação Física' },
  { slug: 'educacao-financeira', nome: 'Educação Financeira' },
  { slug: 'filosofia', nome: 'Filosofia' },
  { slug: 'fisica', nome: 'Física' },
  { slug: 'geografia', nome: 'Geografia' },
  { slug: 'historia', nome: 'História' },
  { slug: 'ingles', nome: 'Inglês' },
  { slug: 'livros', nome: 'Livros' },
  { slug: 'matematica', nome: 'Matemática' },
  { slug: 'portugues', nome: 'Português' },
  { slug: 'quimica', nome: 'Química' },
  { slug: 'sociologia', nome: 'Sociologia' },
  { slug: 'simulados', nome: 'Simulados' },
];

export default function CriarAtividadePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Estados do Formulário
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [materia, setMateria] = useState("");
  const [habilidades, setHabilidades] = useState("");
  
  // ✨ NOVO: Estados de Arquivos para MÚLTIPLAS IMAGENS
  const [imagens, setImagens] = useState<File[]>([]);
  const [previewImagens, setPreviewImagens] = useState<string[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const [toast, setToast] = useState<{ ativo: boolean; mensagem: string; tipo: 'sucesso' | 'erro' | 'aviso' }>({ ativo: false, mensagem: '', tipo: 'sucesso' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login"); 
      }
    });
    return () => unsubscribe();
  }, [router]);

  const mostrarToast = (mensagem: string, tipo: 'sucesso' | 'erro' | 'aviso' = 'sucesso') => {
    setToast({ ativo: true, mensagem, tipo });
    setTimeout(() => setToast(prev => ({ ...prev, ativo: false })), 3000);
  };

  // ✨ NOVO: Função que lida com várias imagens de uma vez
  const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const arquivosSelecionados = Array.from(e.target.files);
      
      setImagens((prev) => [...prev, ...arquivosSelecionados]);
      
      const novasPrevias = arquivosSelecionados.map(file => URL.createObjectURL(file));
      setPreviewImagens((prev) => [...prev, ...novasPrevias]);
    }
  };

  // ✨ NOVO: Função para remover uma imagem caso tenha escolhido errado
  const removerImagem = (index: number) => {
    setImagens(prev => prev.filter((_, i) => i !== index));
    setPreviewImagens(prev => prev.filter((_, i) => i !== index));
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return mostrarToast("Você precisa estar logado!", "aviso");
    if (imagens.length === 0) return mostrarToast("Por favor, selecione pelo menos uma imagem de capa.", "aviso");
    if (!materia) return mostrarToast("Por favor, selecione uma disciplina.", "aviso");

    setLoading(true);

    try {
      // 1. ✨ NOVO: Upload de TODAS as Imagens (Loop)
      const imagensUrls: string[] = [];
      
      for (const imagem of imagens) {
        const imageRef = ref(storage, `capas/${Date.now()}_${imagem.name}`);
        const uploadImgResult = await uploadBytes(imageRef, imagem);
        const url = await getDownloadURL(uploadImgResult.ref);
        imagensUrls.push(url);
      }

      // 2. Upload do PDF (OPCIONAL)
      let pdfUrl = null;
      if (pdfFile) {
        const pdfRef = ref(storage, `pdfs/${Date.now()}_${pdfFile.name}`);
        const uploadPdfResult = await uploadBytes(pdfRef, pdfFile);
        pdfUrl = await getDownloadURL(uploadPdfResult.ref);
      }

      // 3. Salvar no Firestore
      const novaAtividade = {
        titulo,
        descricao,
        materia,
        habilidades,
        imagens: imagensUrls, // ✨ NOVO: Salva um array com todas as imagens
        imagemUrl: imagensUrls[0], // Mantemos isso por segurança para não quebrar códigos antigos
        pdf: pdfUrl,
        autorId: user.uid,
        autorNome: user.displayName || "Professor Parceiro", 
        autorAvatar: user.photoURL || null,
        dataCriacao: new Date().toISOString(),
      };

      await addDoc(collection(db, "atividades"), novaAtividade);

      mostrarToast("Atividade publicada com sucesso!", "sucesso");
      
      setTimeout(() => {
        router.push(`/atividades/${materia}`);
      }, 1500);

    } catch (error) {
      console.error("Erro ao publicar atividade:", error);
      mostrarToast("Ocorreu um erro ao salvar. Tente novamente.", "erro");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="min-h-screen bg-slate-50"></div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6 relative">
      
      {toast.ativo && (
        <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-xl font-bold text-white flex items-center gap-3 transition-all animate-bounce
          ${toast.tipo === 'sucesso' ? 'bg-green-500' : toast.tipo === 'erro' ? 'bg-red-500' : 'bg-orange-500'}
        `}>
          <span className="material-symbols-outlined">
            {toast.tipo === 'sucesso' ? 'check_circle' : toast.tipo === 'erro' ? 'error' : 'warning'}
          </span>
          {toast.mensagem}
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        
        <div className="bg-blue-600 p-8 text-center">
          <h1 className="text-3xl font-black text-white mb-2">Compartilhar Atividade</h1>
          <p className="text-blue-100">Seu material será salvo com segurança em nosso banco de dados.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          <div className="flex flex-col gap-2">
            <label className="font-bold text-slate-700">Título da Atividade *</label>
            <input 
              required
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ex: Jogo da Memória Silábico"
              className="p-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-700">Disciplina *</label>
              <select 
                required
                value={materia}
                onChange={(e) => setMateria(e.target.value)}
                className="p-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-all bg-white cursor-pointer"
              >
                <option value="" disabled>Selecione uma categoria...</option>
                {DISCIPLINAS.map(d => (
                  <option key={d.slug} value={d.slug}>{d.nome}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-700">Habilidades (Opcional)</label>
              <input 
                type="text"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
                placeholder="Ex: EF01MA01..."
                className="p-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-slate-700">Descrição / Como aplicar *</label>
            <textarea 
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={5}
              placeholder="Explique passo a passo como realizar esta atividade..."
              className="p-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 outline-none transition-all resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-slate-700">Arquivo da Atividade (PDF) - Opcional</label>
            <div className="relative border-2 border-slate-200 rounded-xl p-4 flex items-center gap-4 bg-slate-50 hover:border-blue-400 transition-colors">
              <span className="material-symbols-outlined text-red-500 text-3xl">picture_as_pdf</span>
              <div className="flex-1">
                <input 
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfChange}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />
              </div>
            </div>
            {pdfFile && <p className="text-xs text-green-600 font-medium">✅ {pdfFile.name} selecionado</p>}
          </div>

          {/* ✨ NOVO: ÁREA DE MÚLTIPLAS IMAGENS */}
          <div className="flex flex-col gap-2">
            <label className="font-bold text-slate-700">Imagens (Capa e páginas da atividade) *</label>
            
            {/* Input escondido, acionado pelo label */}
            <input 
              type="file"
              id="upload-imagens"
              accept="image/*"
              multiple
              onChange={handleImagemChange}
              className="hidden"
            />

            {previewImagens.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-2 border-slate-200 rounded-2xl bg-slate-50">
                {previewImagens.map((src, index) => (
                  <div key={index} className="relative aspect-square group">
                    <img src={src} alt="Preview" className="w-full h-full object-cover rounded-xl shadow-sm border border-slate-200" />
                    {/* Botão de excluir */}
                    <button 
                      type="button" 
                      onClick={() => removerImagem(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-transform hover:scale-110"
                      title="Remover imagem"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                    {/* Badge de capa para a primeira imagem */}
                    {index === 0 && (
                      <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                        Capa
                      </span>
                    )}
                  </div>
                ))}
                
                {/* Botão para adicionar mais */}
                <label 
                  htmlFor="upload-imagens" 
                  className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-blue-500 hover:border-blue-400 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-3xl mb-1">add_photo_alternate</span>
                  <span className="text-sm font-medium">Adicionar</span>
                </label>
              </div>
            ) : (
              <label 
                htmlFor="upload-imagens" 
                className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl p-10 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">photo_library</span>
                <p className="font-medium text-slate-600">Clique para selecionar várias imagens</p>
                <p className="text-xs text-slate-400 mt-1">A primeira imagem selecionada será a capa</p>
              </label>
            )}
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 rounded-xl text-lg font-bold text-white transition-all shadow-md flex items-center justify-center gap-2
                ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"}
              `}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Enviando arquivos...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">cloud_upload</span>
                  Publicar Atividade no Banco
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}