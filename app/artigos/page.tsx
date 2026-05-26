// 🛡️ Agora é um arquivo do servidor, mas que busca da nuvem e não de pastas locais
import Link from 'next/link';
import { Metadata } from 'next';
// 👇 Importamos o Firebase, igualzinho na página inicial
import { db } from '../lib/firebase'; // Verifique se o caminho pro seu arquivo firebase.ts está correto aqui
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export const metadata: Metadata = {
  title: 'Artigos e Leituras | Nosso Site',
  description: 'Explore nossos artigos, dicas e textos educativos.',
};

export const dynamic = 'force-dynamic'; // Para não ficar com os artigos presos no cache antigo

const IMAGEM_PADRAO = "https://placehold.co/600x600/e2e8f0/475569?text=Artigo";

// ✨ A MÁGICA ACONTECE AQUI: Vamos no Firebase buscar os artigos!
async function getArtigosDoFirebase() {
  const artigos: any[] = [];

  try {
    // 1. Apontamos para a coleção "artigos" no seu banco
    const artigosRef = collection(db, "artigos");
    
    // 2. Trazemos tudo (podemos até já ordenar por data se quiser)
    const q = query(artigosRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    // 3. Montamos a lista exatamente como sua página precisa
    snapshot.forEach(doc => {
      const data = doc.data();
      artigos.push({
        slug: doc.id, // O ID do documento vira o link da página
        titulo: data.titulo || "Artigo Sem Título",
        // Puxa a capa se existir, senão usa o quadrado cinza
        imagemCapa: data.capaUrl || data.imagemUrl || IMAGEM_PADRAO, 
        descricao: data.descricao || data.resumo || "",
        autorNome: data.autorNome || "Equipe",
        dataPublicacao: data.createdAt?.seconds 
          ? new Date(data.createdAt.seconds * 1000).toLocaleDateString('pt-BR') 
          : "Data desconhecida"
      });
    });

  } catch (error) {
    console.error("Erro ao buscar artigos do Firebase:", error);
  }

  return artigos;
}

// Transformamos a página em async para poder esperar (await) o Firebase
export default async function CatalogoArtigosPage() {
  const artigos = await getArtigosDoFirebase();

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      <div className="container mx-auto px-4 md:px-6 pt-6 pb-8">
        
        {/* GRADE DE ARTIGOS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          
          {artigos.map((artigo) => (
            <Link key={artigo.slug} href={`/artigos/${artigo.slug}`}>
              
              <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex flex-col group h-full">
                
                {/* ÁREA DA IMAGEM QUADRADA */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-100 border-b-2 border-slate-100">
                  <img 
                    src={artigo.imagemCapa} 
                    alt={artigo.titulo} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-slate-700 uppercase tracking-wider shadow-sm border border-slate-100">
                    Artigo
                  </div>
                </div>

                {/* ÁREA DO TEXTO */}
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h2 className="font-bold text-base md:text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3 mb-3">
                    {artigo.titulo}
                  </h2>
                  
                  {/* Informações do autor e data no rodapé do card */}
                  <div className="mt-auto flex justify-between items-center text-xs text-slate-400 font-semibold uppercase tracking-wide">
                    <span className="truncate max-w-[100px]">{artigo.autorNome}</span>
                    <span className="text-[10px]">{artigo.dataPublicacao}</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* MENSAGEM SE ESTIVER VAZIO */}
        {artigos.length === 0 && (
          <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto mt-8">
            <span className="material-symbols-outlined text-4xl mb-3 text-slate-300">article</span>
            <p className="text-lg font-medium">Nenhum artigo encontrado.</p>
            <p className="text-sm mt-1">Eles aparecerão aqui assim que forem postados no banco de dados.</p>
          </div>
        )}

      </div>
    </div>
  );
}