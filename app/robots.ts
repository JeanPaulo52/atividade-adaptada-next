import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Se houver alguma página que você NÃO quer no Google (ex: painel admin), 
      // você pode colocar aqui. Se não tiver, pode deixar só a barra.
      disallow: '/api/', 
    },
    // Aqui nós linkamos o seu sitemap dinâmico!
    sitemap: 'https://www.atividadeadaptada.com.br/sitemap.xml',
  };
}