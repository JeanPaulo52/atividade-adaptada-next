"use client";

import React from 'react';
// 👇 Ajustamos o caminho do import para a raiz do seu projeto
import FeedBiblioteca from './components/FeedBiblioteca'; 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto py-6">

        {/* 🚀 O seu componente estilo Pinterest carregando tudo em tempo real sozinho */}
        <FeedBiblioteca />
        
      </main>
    </div>
  );
}