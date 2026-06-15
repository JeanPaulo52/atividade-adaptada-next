"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, db } from "../lib/firebase"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import BotaoNovoPost from '../components/BotaoNovoPost'; 
import BarraPesquisa from './BarraPesquisa'; 

export default function Navbar() {
  const router = useRouter();
  
  // Estados de Autenticação e Dados
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Estados de Notificações Separados
  const [unreadNotifs, setUnreadNotifs] = useState(0);
  const [unreadChats, setUnreadChats] = useState(0);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const unsubscribeDoc = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
          setLoading(false);
        });

        // Busca todas as notificações não lidas
        const notifQuery = query(
          collection(db, "users", currentUser.uid, "notifications"),
          where("lida", "==", false)
        );
        
        const unsubscribeNotif = onSnapshot(notifQuery, (snap) => {
          let chatsCount = 0;
          let notifsCount = 0;

          snap.docs.forEach(doc => {
            const data = doc.data();
            
            // ✨ NOVO FILTRO: Se o link tem '/mensagens', é do chat!
            if (data.link && typeof data.link === 'string' && data.link.includes('/mensagens')) {
              chatsCount++;
            } else {
              notifsCount++;
            }
          });

          setUnreadChats(chatsCount);
          setUnreadNotifs(notifsCount);
        });

        return () => {
          unsubscribeDoc();
          unsubscribeNotif();
        };
      } else {
        setUserData(null);
        setUnreadNotifs(0);
        setUnreadChats(0);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  return (
    <>
      {/* =========================================================
          HEADER FIXO NO TOPO (DESKTOP E ELEMENTOS DO TOPO MOBILE)
          ========================================================= */}
      <header className="bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-slate-200/60 sticky top-0 z-50 transition-all duration-300">
        
        {/* NAVEGAÇÃO DESKTOP (Escondida no celular) */}
        <nav className="hidden md:flex container mx-auto px-4 sm:px-6 py-3 justify-between items-center">
          {/* LOGO DESKTOP */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-red-600">Atividade</span>
            <span className="text-blue-600">Adaptada</span>
            <span className="text-slate-900">.com</span>
          </Link>

          {/* LINKS DESKTOP ATUALIZADOS */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="relative font-bold text-slate-800 hover:text-blue-600 transition-colors group">
              Biblioteca
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <Link href="/comunidade" className="relative font-medium text-slate-500 hover:text-blue-600 transition-colors group">
              Comunidade
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link href="/atividades" className="relative font-medium text-slate-500 hover:text-blue-600 transition-colors group">
              Atividades
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <div className="pl-4 border-l border-slate-200">
              <BotaoNovoPost />
            </div>
          </div>

          {/* ÁREA DO USUÁRIO DESKTOP */}
          <div className="flex items-center gap-5">
            <BarraPesquisa />

            {loading ? (
              <div className="w-10 h-10 bg-slate-200 animate-pulse rounded-full"></div>
            ) : user ? (
              <div className="flex items-center gap-3">
                {/* SINO DE NOTIFICAÇÕES (DESKTOP) */}
                <Link href="/notificacoes" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-all relative">
                  <span className="material-symbols-outlined text-[24px]">notifications</span>
                  {unreadNotifs > 0 && (
                    <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
                      {unreadNotifs > 9 ? '9+' : unreadNotifs}
                    </span>
                  )}
                </Link>

                {/* ÍCONE DE CHAT (DESKTOP) */}
                <Link href="/mensagens" className="text-slate-500 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-all relative">
                  <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
                  {unreadChats > 0 && (
                    <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white border-2 border-white">
                      {unreadChats > 9 ? '9+' : unreadChats}
                    </span>
                  )}
                </Link>

                <Link href="/profile" className="ml-2 group">
                  <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-blue-600 to-red-600 hover:scale-105 transition-transform shadow-sm">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                      {userData?.photoURL || user.photoURL ? (
                        <img src={userData?.photoURL || user.photoURL} alt="Perfil" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-blue-600 font-bold text-lg">
                          {user.email?.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <Link href="/login" className="bg-slate-900 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-all">
                Entrar
              </Link>
            )}
          </div>
        </nav>

        {/* NAVEGAÇÃO DE TOPO MOBILE */}
        <nav className="md:hidden flex justify-between items-center px-4 py-3">
          <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-end">
            <span className="text-red-600">A</span>
            <span className="text-blue-600">A</span>
            <span className="text-slate-900 text-base mb-[2px]">.com</span>
          </Link>

          <div className="flex items-center gap-3">
            <BarraPesquisa />
            {user ? (
              <>
                {/* SINO DE NOTIFICAÇÕES (MOBILE) */}
                <Link href="/notificacoes" className="text-slate-600 hover:text-blue-600 relative">
                  <span className="material-symbols-outlined text-[26px]">notifications</span>
                  {unreadNotifs > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
                      {unreadNotifs > 9 ? '9+' : unreadNotifs}
                    </span>
                  )}
                </Link>

                {/* ÍCONE DE CHAT (MOBILE) */}
                <Link href="/mensagens" className="text-slate-600 hover:text-blue-600 relative">
                  <span className="material-symbols-outlined text-[26px]">chat_bubble</span>
                  {unreadChats > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white border-2 border-white">
                      {unreadChats > 9 ? '9+' : unreadChats}
                    </span>
                  )}
                </Link>
              </>
            ) : (
              <Link href="/login" className="bg-slate-900 text-white font-bold py-1.5 px-4 rounded-full text-sm">
                Entrar
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* =========================================================
          BARRA INFERIOR MOBILE (ESTILO INSTAGRAM/TIKTOK)
          ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-200/60 z-50 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <div className="flex justify-around items-center h-16 px-1 relative">
          
          <Link href="/" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-blue-600 active:scale-95 transition-all group">
            <span className="material-symbols-outlined text-[28px] group-hover:fill-current">local_library</span>
            <span className="text-[10px] font-medium mt-0.5">Biblioteca</span>
          </Link>

          <Link href="/comunidade" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-blue-600 active:scale-95 transition-all group">
            <span className="material-symbols-outlined text-[28px]">groups</span>
            <span className="text-[10px] font-medium mt-0.5">Comunidade</span>
          </Link>

          <div className="relative -top-6 flex justify-center items-center">
            <div className="absolute w-[72px] h-[72px] bg-white rounded-full shadow-[0_-4px_10px_rgba(0,0,0,0.04)] -z-10"></div>
            <div className="[&_span.font-bold]:hidden [&_button]:w-[54px] [&_button]:h-[54px] [&_button]:p-0 [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:shadow-blue-500/40 [&_span.material-symbols-outlined]:text-[30px] [&_span.material-symbols-outlined]:m-0 active:scale-95 transition-transform">
              <BotaoNovoPost />
            </div>
          </div>

          <Link href="/atividades" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-blue-600 active:scale-95 transition-all group">
            <span className="material-symbols-outlined text-[28px]">extension</span>
            <span className="text-[10px] font-medium mt-0.5">Atividades</span>
          </Link>

          {user ? (
            <Link href="/profile" className="flex flex-col items-center justify-center w-14 h-full active:scale-95 transition-all">
              <div className="w-7 h-7 rounded-full p-[2px] bg-gradient-to-tr from-blue-600 to-red-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                  {userData?.photoURL || user.photoURL ? (
                    <img src={userData?.photoURL || user.photoURL} alt="Perfil" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-blue-600 font-bold text-xs">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
              <span className="text-[10px] font-medium text-slate-500 mt-1">Perfil</span>
            </Link>
          ) : (
            <Link href="/login" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-blue-600 active:scale-95 transition-all">
               <span className="material-symbols-outlined text-[28px]">login</span>
               <span className="text-[10px] font-medium mt-0.5">Entrar</span>
            </Link>
          )}

        </div>
      </div>
    </>
  );
}