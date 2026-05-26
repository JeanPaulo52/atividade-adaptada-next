import FeedPrincipal from './components/FeedPrincipal'; 

// 👇 IMPORTS DO NEXT E FIREBASE (Limpos e simplificados)
import { cookies } from 'next/headers';
import { db } from './lib/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

const IMAGEM_PADRAO_ARTIGO = "https://placehold.co/600x600/e2e8f0/475569?text=Artigo";

async function getConteudoFirebase() {
  const itens: any[] = [];
  
  try {
    // --- BUSCAR ATIVIDADES ---
    const snapAtividades = await getDocs(collection(db, "atividades"));
    snapAtividades.forEach(doc => {
      const d = doc.data();
      itens.push({
        tipo: 'atividade',
        id: doc.id, 
        slug: doc.id,
        materia: d.materia || 'geral',
        titulo: d.titulo || d.descricao || "Sem título",
        imagemCapa: d.imagemUrl || d.imagens?.[0] || IMAGEM_PADRAO_ARTIGO,
        autorNome: d.autorNome || "Professor(a)",
        autorAvatar: d.autorAvatar,
        autorId: d.autorId,
        isFirebase: true,
        dataCriacao: d.createdAt?.seconds ? d.createdAt.seconds * 1000 : (d.data ? new Date(d.data).getTime() : Date.now())
      });
    });

    // --- BUSCAR ARTIGOS ---
    const snapArtigos = await getDocs(collection(db, "artigos"));
    snapArtigos.forEach(doc => {
      const d = doc.data();
      itens.push({
        tipo: 'artigo',
        id: doc.id,
        slug: doc.id,
        titulo: d.titulo || "Artigo Sem Título",
        imagemCapa: d.capaUrl || d.imagemUrl || IMAGEM_PADRAO_ARTIGO,
        autorNome: d.autorNome || "Professor(a)",
        autorAvatar: d.autorAvatar,
        autorId: d.autorId,
        isFirebase: true,
        dataCriacao: d.createdAt?.seconds ? d.createdAt.seconds * 1000 : Date.now()
      });
    });

    // --- BUSCAR MOMENTOS / POSTAGENS ---
    const snapMomentos = await getDocs(collection(db, "postagens"));
    snapMomentos.forEach(doc => {
      const d = doc.data();
      itens.push({
        tipo: 'momento',
        id: doc.id, 
        slug: doc.id,
        descricao: d.descricao || d.texto,
        imagens: d.imagens || (d.imagemUrl ? [d.imagemUrl] : []),
        autorNome: d.autorNome,
        autorAvatar: d.autorAvatar,
        autorId: d.autorId, 
        isFirebase: true,
        dataCriacao: d.createdAt?.seconds ? d.createdAt.seconds * 1000 : Date.now()
      });
    });

  } catch (error) {
    console.error("Erro ao buscar conteúdo do Firebase:", error);
  }
  return itens;
}

export default async function HomePage() {
  // Agora buscamos apenas do Firebase
  const todosOsItens = await getConteudoFirebase();

  // =========================================================
  // ✨ ALGORITMO DE RECOMENDAÇÃO (O CÉREBRO) ✨
  // =========================================================

  let interessesUsuario: Record<string, number> = {};
  
  const cookieStore = await cookies();
  const userIdLogado = cookieStore.get('user_uid')?.value;

  if (userIdLogado) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userIdLogado));
      if (userDoc.exists() && userDoc.data().interesses) {
        interessesUsuario = userDoc.data().interesses;
      }
    } catch (err) {
      console.error("Erro ao buscar perfil do usuário", err);
    }
  }

  // Calcula os pontos de cada item baseado nos interesses
  const itensOrdenados = todosOsItens.map(item => {
    let score = item.dataCriacao; 

    if (item.materia) {
      const materiaFormatada = item.materia.toLowerCase().trim();
      
      if (interessesUsuario[materiaFormatada]) {
        const pontosDeInteresse = interessesUsuario[materiaFormatada];
        // Bônus: cada ponto de interesse "rejuvenesce" a postagem em 2 dias para o algoritmo
        const bonusDePontos = pontosDeInteresse * (1000 * 60 * 60 * 24 * 2); 
        score += bonusDePontos;
      }
    }

    return { ...item, algorithmScore: score };
  });

  // Ordena do maior Score para o menor
  itensOrdenados.sort((a, b) => b.algorithmScore - a.algorithmScore);

  // =========================================================

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans">
      <div className="h-6"></div> 

      <main className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        {/* Passamos a lista 100% Firebase e ordenada para o Feed */}
        <FeedPrincipal itensLocais={itensOrdenados} />
      </main>
    </div>
  );
}