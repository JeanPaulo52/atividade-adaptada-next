'use client';

import { useState } from 'react';
import BotaoFavorito from './BotaoFavorito';
import Comentarios from './Comentarios';
import BotaoDownload from './BotaoDownload';

interface InteracoesAtividadeProps {
  atividade: any; 
  slug: string;
  materia: string;
  imagemCapa: string;
  urlDownload: string | null;
  ehPdf: boolean;
}

export default function InteracoesAtividade({ 
  atividade, 
  slug, 
  materia, 
  imagemCapa, 
  urlDownload, 
  ehPdf 
}: InteracoesAtividadeProps) {
  
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [textoExpandido, setTextoExpandido] = useState(false);

  // Compartilhamento nativo do celular
  const handleCompartilhar = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: atividade.titulo,
          text: 'Veja esta atividade incrível!',
          url: window.location.href,
        });
      } catch (e) {
        console.log('Compartilhamento cancelado', e);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado com sucesso!');
    }
  };

  // Verifica se o texto é grande o suficiente para precisar do botão "mais/menos"
  const precisaDeLerMais = atividade.contentHtml && atividade.contentHtml.length > 200;

  return (
    <div className="p-3 sm:p-4">
      
      {/* BARRA DE AÇÕES */}
      <div className="flex items-center gap-4 mb-4">
        
        <BotaoFavorito slug={slug} titulo={atividade.titulo} imagem={imagemCapa} materia={materia} variante="minimalista" tipo="atividades" />
        
        <button 
          onClick={() => setMostrarComentarios(!mostrarComentarios)}
          className="text-slate-800 hover:text-blue-500 transition-colors flex items-center gap-1.5 group" 
          title="Ver comentários"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 active:scale-90 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 11.996c0 2.29.968 4.414 2.564 5.966V21l3.222-1.933c.96.262 1.986.408 3.05.408z" />
          </svg>
        </button>
        
        <button 
          onClick={handleCompartilhar}
          className="text-slate-800 hover:text-green-500 transition-colors flex items-center gap-1.5 group"
          title="Compartilhar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 active:-translate-y-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>

      {/* TÍTULO E DESCRIÇÃO COM "LER MAIS / MENOS" */}
      <div className="mt-2 text-slate-800 text-sm">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-snug">
          {atividade.titulo}
        </h1>
        
        <div className="relative">
          <div 
            className={`leading-relaxed break-words prose prose-slate max-w-none prose-p:my-1 prose-headings:font-bold prose-headings:text-slate-900 transition-all ${
              !textoExpandido && precisaDeLerMais ? 'line-clamp-2 overflow-hidden' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: atividade.contentHtml || "" }} 
          />
          
          {/* ✨ AQUI ESTÁ A MÁGICA DO BOTÃO MAIS/MENOS */}
          {precisaDeLerMais && (
            <button 
              onClick={() => setTextoExpandido(!textoExpandido)}
              className="text-slate-500 font-bold hover:text-slate-800 mt-1 text-sm inline-block"
            >
              {textoExpandido ? 'menos' : 'mais'}
            </button>
          )}
        </div>
      </div>

      {/* BOTÃO DE DOWNLOAD (MOBILE) */}
      {urlDownload && (
        <div className="mt-6 flex justify-center lg:hidden">
          <BotaoDownload urlParaDownload={urlDownload} titulo={atividade.titulo} isPdf={ehPdf} />
        </div>
      )}

      {/* CAIXA DE COMENTÁRIOS EXPANSÍVEL */}
      {mostrarComentarios && (
        <div className="mt-6 pt-4 border-t border-slate-100 transition-all duration-300">
          <Comentarios slug={slug} tipo="atividades" />
        </div>
      )}

    </div>
  );
}