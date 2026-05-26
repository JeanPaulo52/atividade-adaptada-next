import React from 'react';

export const metadata = {
  title: 'Termos de Uso | [AtividadeAdaptada.com.br]',
  description: 'Regras de utilização da nossa plataforma.',
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Termos de Uso</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>
            Ao acessar o site <strong>[Atividadeadaptada.com.br]</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Criação de Conta e Segurança</h2>
          <p>
            Para interagir na plataforma (postar, comentar, curtir), você precisará criar uma conta. Você é responsável por manter a confidencialidade da sua conta e senha. Informações falsas ou contas criadas para enviar spam resultarão em banimento imediato.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Conteúdo Gerado pelo Usuário</h2>
          <p>
            A nossa plataforma permite que educadores e alunos compartilhem materiais, atividades e momentos. Ao postar qualquer conteúdo, você:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Garante que possui os direitos autorais ou permissão para compartilhar o material.</li>
            <li>Concede ao <strong>[Atividadeadaptada.com.br]</strong> uma licença não exclusiva para exibir esse conteúdo publicamente no feed da plataforma.</li>
            <li>Concorda em não postar conteúdos ofensivos, ilegais, discurso de ódio, spam ou materiais que violem os direitos de terceiros.</li>
          </ul>
          <p>
            Reservamo-nos o direito de remover qualquer conteúdo que viole estas regras, sem aviso prévio.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">3. Isenção de Responsabilidade</h2>
          <p>
            Os materiais no site são fornecidos "como estão". O <strong>[Atividadeadaptada.com.br]</strong> não oferece garantias, expressas ou implícitas, sobre a exatidão ou confiabilidade dos materiais pedagógicos postados pelos usuários. O uso de qualquer material encontrado aqui é de sua inteira responsabilidade.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">4. Modificações dos Termos</h2>
          <p>
            O <strong>[Atividadeadaptada.com.br]</strong> pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">5. Legislação Aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>

          <div className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>
      </div>
    </div>
  );
}