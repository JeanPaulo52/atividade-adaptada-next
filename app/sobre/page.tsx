import React from 'react';

export const metadata = {
  title: 'Sobre Nós | [AtividadeAdaptada.com.br]',
  description: 'Conheça a missão e a história da nossa plataforma.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        
        <div className="text-center mb-10">
          <span className="material-symbols-outlined text-5xl text-blue-500 mb-4">school</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Sobre o [AtividadeAdaptada.com.br]</h1>
          <p className="text-lg text-slate-500">Conectando educadores e inspirando o aprendizado.</p>
        </div>
        
        <div className="space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 border-l-4 border-blue-500 pl-3">A Nossa Missão</h2>
            <p>
              Acreditamos que a educação é a ferramenta mais poderosa para transformar o mundo. Nossa missão é criar um espaço seguro, inteligente e colaborativo onde educadores e alunos possam compartilhar ideias, atividades e momentos que enriquecem o dia a dia na sala de aula.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 border-l-4 border-purple-500 pl-3">Como Funciona?</h2>
            <p>
              Mais do que um simples repositório de arquivos, somos uma rede social focada na educação. Aqui você pode:
            </p>
            <ul className="list-none space-y-3 mt-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-500">library_books</span>
                Descobrir e favoritar atividades separadas por matérias.
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-500">article</span>
                Ler artigos e metodologias compartilhadas por outros profissionais.
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-500">photo_library</span>
                Compartilhar "Momentos" da sua jornada educacional.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 border-l-4 border-green-500 pl-3">Feito para Você</h2>
            <p>
              Todo o nosso sistema foi desenhado para valorizar o que importa. Nosso algoritmo inteligente garante que as postagens mais curtidas e comentadas cheguem até você, poupando seu tempo e entregando o que há de melhor na nossa comunidade.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}