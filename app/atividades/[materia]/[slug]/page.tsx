import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { Metadata } from 'next';
import { cache } from 'react'; 
import CarrosselImagens from '../../../components/CarrosselImagens';
import BotaoDownload from '../../../components/BotaoDownload'; 
import InteracoesAtividade from '../../../components/InteracoesAtividade'; // O NOSSO NOVO COMPONENTE

// === IMPORTAÇÕES DO FIREBASE ===
import { db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const getAtividadeData = cache(async (materia: string, paramSlug: string) => {
  const slug = decodeURIComponent(paramSlug);
  
  try {
    const fullPath = path.join(process.cwd(), 'conteudo/atividades', materia, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();
      const imagensLista = data.imagens || (data.imagem ? [data.imagem] : []);

      return {
        slug, materia, contentHtml,
        titulo: data.titulo || "Atividade Sem Título",
        descricao: data.descricao || "",
        imagens: imagensLista,
        pdf: data.pdf || null,
        idade: data.idade || null,
        habilidades: data.habilidades || null,
        materiais: data.materiais || null,
        autorNome: data.autorNome || data.autor || null,
        autorFoto: data.autorFoto || data.foto || null,
        erro: false
      };
    }
  } catch (e) {}

  try {
    const firebaseId = slug.startsWith('fb-') ? slug.replace('fb-', '') : slug;
    const docRef = doc(db, "atividades", firebaseId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const descFormatada = data.descricao ? `<p>${data.descricao.replace(/\n/g, '<br/>')}</p>` : '';

      let autorFinal = {
        nome: data.autorNome || "Professor Parceiro",
        foto: data.autorAvatar || null
      };

      if (data.autorId) {
        try {
          const userRef = doc(db, "users", data.autorId);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            autorFinal.nome = userData.nome || userData.displayName || autorFinal.nome;
            autorFinal.foto = userData.fotoUrl || userData.photoURL || autorFinal.foto;
          }
        } catch (err) {}
      }

      return {
        slug, materia: data.materia || materia, contentHtml: descFormatada,
        titulo: data.titulo || "Sem Título", descricao: data.descricao || "",
        imagens: data.imagens || (data.imagemUrl ? [data.imagemUrl] : []),
        pdf: data.pdf || null, idade: data.idade || null,
        habilidades: data.habilidades || null, materiais: data.materiais || null,
        autorId: data.autorId || null, autorNome: autorFinal.nome, 
        autorFoto: autorFinal.foto, erro: false
      };
    }
  } catch (e) {}

  return { erro: true };
});

export async function generateMetadata({ params }: { params: Promise<{ materia: string; slug: string }> }): Promise<Metadata> {
  const { materia, slug } = await params;
  const atividade = await getAtividadeData(materia, slug);
  if (atividade.erro) return { title: 'Atividade não encontrada' };
  
  return {
    title: `${atividade.titulo} | Atividade Adaptada`,
    description: atividade.descricao,
    openGraph: {
      title: atividade.titulo,
      description: atividade.descricao, 
      images: atividade.imagens.length > 0 ? [atividade.imagens[0]] : [], 
    }
  };
}

export default async function AtividadePage({ params }: { params: Promise<{ materia: string; slug: string }> }) {
  const { materia, slug } = await params;
  const atividade = await getAtividadeData(materia, slug);

  if (atividade.erro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-500">Atividade não encontrada. 😢</h1>
      </div>
    );
  }

  const nomeMateria = materia.charAt(0).toUpperCase() + materia.slice(1).replace('-', ' ');
  const imagemCapa = atividade.imagens.length > 0 ? atividade.imagens[0] : "";
  const nomeAutor = atividade.autorNome || "Professor Parceiro";
  const fotoAutor = atividade.autorFoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(nomeAutor)}&background=random&color=fff`;
  const perfilUrl = atividade.autorId ? `/profile/${atividade.autorId}` : "#";

  const CartaoDetalhes = ({ className = "" }: { className?: string }) => (
    <div className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-sm h-fit ${className}`}>
      <h3 className="font-bold text-lg mb-5 text-slate-900 border-b border-slate-100 pb-3">Detalhes</h3>
      <div className="space-y-5 text-sm">
        {atividade.idade && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
              <span className="material-symbols-outlined text-slate-600 text-[20px]">face</span>
            </div>
            <div>
              <strong className="block text-slate-900">Idade Recomendada</strong>
              <span className="text-slate-600">{atividade.idade}</span>
            </div>
          </div>
        )}
        {atividade.habilidades && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
              <span className="material-symbols-outlined text-slate-600 text-[20px]">psychology</span>
            </div>
            <div>
              <strong className="block text-slate-900">Habilidades</strong>
              <span className="text-slate-600">{atividade.habilidades}</span>
            </div>
          </div>
        )}
        {atividade.materiais && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
              <span className="material-symbols-outlined text-slate-600 text-[20px]">architecture</span>
            </div>
            <div>
              <strong className="block text-slate-900">Materiais</strong>
              <span className="text-slate-600">{atividade.materiais}</span>
            </div>
          </div>
        )}
        {!atividade.idade && !atividade.habilidades && !atividade.materiais && (
           <div className="text-slate-500 italic">Nenhum detalhe adicional informado.</div>
        )}
      </div>
    </div>
  );

  const urlDownload = atividade.pdf || (atividade.imagens?.length > 0 ? atividade.imagens[0] : null);
  const ehPdf = !!atividade.pdf;

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans">
      <div className="container mx-auto px-4 md:px-6 pt-8 pb-4 text-sm text-slate-500 max-w-5xl">
        <Link href="/" className="hover:text-blue-600 transition-colors">Início</Link> <span className="mx-2">&gt;</span>
        <Link href="/atividades" className="hover:text-blue-600 transition-colors">Atividades</Link> <span className="mx-2">&gt;</span>
        <Link href={`/atividades/${materia}`} className="hover:text-blue-600 transition-colors">{nomeMateria}</Link>
      </div>

      <main className="container mx-auto px-4 md:px-6 max-w-5xl mt-2">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          <div className="flex-1 space-y-6 flex flex-col">
            <div className="bg-white border-y sm:border sm:border-slate-200 sm:rounded-2xl overflow-hidden shadow-sm flex flex-col">
              
              <Link href={perfilUrl} className="p-3 sm:p-4 flex items-center gap-3 hover:bg-slate-50 transition-colors">
                <img src={fotoAutor} className="w-9 h-9 rounded-full object-cover border border-slate-200 bg-white" alt={`Foto de ${nomeAutor}`} />
                <span className="text-sm font-bold text-slate-900">{nomeAutor}</span>
              </Link>

              <div className="bg-slate-50 w-full border-y border-slate-100 relative">
                <CarrosselImagens imagens={atividade.imagens} titulo={atividade.titulo} />
              </div>

              {/* AQUI ENTRA O NOSSO NOVO COMPONENTE COM A BARRA E COMENTÁRIOS */}
              <InteracoesAtividade 
                atividade={atividade} 
                slug={slug} 
                materia={materia} 
                imagemCapa={imagemCapa} 
                urlDownload={urlDownload} 
                ehPdf={ehPdf} 
              />
              
            </div>

            <CartaoDetalhes className="lg:hidden" />
          </div>

          <aside className="hidden lg:block lg:w-[320px] xl:w-[340px] flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {urlDownload && (
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex justify-center">
                   <BotaoDownload urlParaDownload={urlDownload} titulo={atividade.titulo} isPdf={ehPdf} />
                </div>
              )}
              <CartaoDetalhes />
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}