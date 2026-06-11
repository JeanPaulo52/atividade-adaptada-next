"use client";

import React from 'react';
import FeedBiblioteca from '../components/FeedBiblioteca'; // Ajuste o caminho se necessário

export default function PaginaBiblioteca() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto py-6">
        <div className="text-center my-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            📚 Biblioteca de Conteúdos
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Explore artigos profundos e atividades adaptadas compartilhadas por professores.
          </p>
        </div>

        {/* Componente estilo Pinterest */}
        <FeedBiblioteca />
      </main>
    </div>
  );
}