"use client";

import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Link from 'next/link';

// 👇 Importamos o seu Feed Principal
import FeedPrincipal from '../components/FeedPrincipal';

export default function ComunidadePage() {
  const [user, setUser] = useState<User | null>(null);

  // Monitorar Login do Usuário para exibir (ou não) o aviso
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">

      <main className="container mx-auto px-4 pt-6 max-w-3xl">
        {/* AVISO DE LOGIN */}
        {!user && (
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-6 text-center text-amber-800 font-medium shadow-sm">
            Faça login para interagir na comunidade!
          </div>
        )}

        {/* 🚀 O FEED PRINCIPAL ASSUME O CONTROLE AQUI */}
        <FeedPrincipal />

      </main>
    </div>
  );
}