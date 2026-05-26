import React from 'react';

export const metadata = {
  title: 'Política de Privacidade | [AtividadeAdaptada.com.br]',
  description: 'Saiba como coletamos, usamos e protegemos seus dados.',
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            A sua privacidade é importante para nós. É política do <strong>[AtividadeAdaptada.com.br]</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site e em outros sites que possuímos e operamos.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço, como ao criar uma conta, postar atividades ou interagir na plataforma. Coletamos essas informações por meios justos e legais, com o seu conhecimento e consentimento.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de Conta:</strong> Nome de usuário, endereço de e-mail e foto de perfil (quando fornecidos via Google ou e-mail).</li>
            <li><strong>Conteúdo Gerado:</strong> Postagens, comentários, curtidas e materiais didáticos que você compartilha publicamente no site.</li>
            <li><strong>Dados de Navegação:</strong> Utilizamos cookies para entender como você interage com o nosso feed, permitindo que nosso algoritmo sugira conteúdos mais relevantes para você.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Uso das informações</h2>
          <p>
            As informações coletadas são utilizadas para manter e melhorar o funcionamento da plataforma, personalizar o seu feed (exibindo postagens com maior engajamento) e gerenciar a sua conta. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Publicidade e Cookies de Terceiros</h2>
          <p>
            O nosso site exibe anúncios fornecidos por parceiros (como o Google AdSense). Esses parceiros podem usar cookies para exibir anúncios relevantes com base em suas visitas anteriores ao nosso site ou a outros sites na internet. Você pode gerenciar ou desativar os cookies nas configurações do seu navegador.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Direitos do Usuário (LGPD)</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, compreendendo que talvez não possamos fornecer alguns dos serviços desejados (como curtir, comentar ou criar posts). Você também tem o direito de solicitar a exclusão da sua conta e de todos os seus dados associados a qualquer momento.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: <strong>[atividadeadaptada.com@gmail.com]</strong>.
          </p>

          <div className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>
      </div>
    </div>
  );
}