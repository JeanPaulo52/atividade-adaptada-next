import React from 'react';

export const metadata = {
  title: 'Contato | [AtividadeAdaptada.com.br]',
  description: 'Fale com a nossa equipe.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
        
        <span className="material-symbols-outlined text-5xl text-blue-500 mb-4">mail</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Fale Conosco</h1>
        <p className="text-slate-600 mb-10 text-sm md:text-base">
          Tem alguma dúvida, sugestão, encontrou algum erro ou quer anunciar na nossa plataforma? Estamos prontos para te ouvir! Escolha um dos canais abaixo.
        </p>

        <div className="flex flex-col gap-4">
          
          {/* E-mail */}
          <a 
            href="mailto:atividadeadaptada.com@gmail.com" 
            className="flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 py-4 px-6 rounded-xl font-bold transition-colors group"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 transition-colors">alternate_email</span>
            atividadeadaptada.com@gmail.com
          </a>

        </div>

      </div>
    </div>
  );
}