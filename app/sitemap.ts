import { MetadataRoute } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './lib/firebase'; // Ajuste o caminho se a sua pasta lib não ficar na raiz

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.atividadeadaptada.com.br';

  // 1. ROTAS FIXAS (Páginas principais do site)
  const rotasEstaticas: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0, // Prioridade máxima
    },
    {
      url: `${baseUrl}/artigos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/atividades`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 2. BUSCAR ARTIGOS NO FIREBASE
  let rotasArtigos: MetadataRoute.Sitemap = [];
  try {
    const artigosSnap = await getDocs(collection(db, 'artigos'));
    rotasArtigos = artigosSnap.docs.map((doc) => {
      // Usa o ID do documento como slug (conforme estruturamos antes)
      return {
        url: `${baseUrl}/artigos/${doc.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      };
    });
  } catch (error) {
    console.error("Erro ao gerar sitemap de artigos:", error);
  }

  // 3. BUSCAR ATIVIDADES NO FIREBASE
  let rotasAtividades: MetadataRoute.Sitemap = [];
  try {
    const atividadesSnap = await getDocs(collection(db, 'atividades'));
    rotasAtividades = atividadesSnap.docs.map((doc) => {
      const data = doc.data();
      const materia = data.materia || 'geral';
      // Prioriza o slug, se não tiver, usa o ID
      const identificador = data.slug || doc.id; 

      return {
        url: `${baseUrl}/atividades/${materia}/${identificador}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      };
    });
  } catch (error) {
    console.error("Erro ao gerar sitemap de atividades:", error);
  }

  // Retorna tudo combinado para o Google!
  return [...rotasEstaticas, ...rotasArtigos, ...rotasAtividades];
}