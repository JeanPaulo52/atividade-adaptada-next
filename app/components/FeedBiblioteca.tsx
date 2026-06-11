"use client";

import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';
import AdCard from './AdCard';

interface FeedBibliotecaProps {
  itensLocais?: any[];
}

const IMAGEM_PADRAO_ARTIGO = "https://placehold.co/600x600/e2e8f0/475569?text=Artigo";

// 👇 Função atualizada com todos os IDs oficiais do seu sistema
const formatarNomeMateria = (materia: string) => {
  if (!materia) return 'Geral / Multidisciplinar';
  
  const nomesEspeciais: Record<string, string> = {
    'artes': 'Artes',
    'biologia': 'Biologia',
    'ciencias': 'Ciências',
    'desenhos': 'Desenhos',
    'educacao-fisica': 'Educação Física',
    'educacao-financeira': 'Educação Financeira',
    'fisica': 'Física',
    'filosofia': 'Filosofia',
    'geografia': 'Geografia',
    'historia': 'História',
    'ingles': 'Inglês',
    'quimica': 'Química',
    'livros': 'Livros',
    'matematica': 'Matemática',
    'portugues': 'Português',
    'geral': 'Geral',
    'sociologia': 'Sociologia',
    'simulados': 'Simulados',
    'infantil': 'Infantil'
  };
  
  const materiaFormatada = materia.toLowerCase().trim();
  return nomesEspeciais[materiaFormatada] || materia.charAt(0).toUpperCase() + materia.slice(1);
};

const extrairData = (campoData: any) => {
  if (!campoData) return 0;
  if (campoData.seconds) return campoData.seconds * 1000;
  if (typeof campoData === 'number') return campoData;
  if (typeof campoData === 'string') return new Date(campoData).getTime();
  if (campoData.toMillis) return campoData.toMillis();
  return 0;
};

// 🌟 CATEGORIAS ORGANIZADAS (Principais primeiro, depois em ordem alfabética)
const CATEGORIAS = [
  "Todos",
  "Atividades",
  "Artigos",
  "Artes",
  "Biologia",
  "Ciências",
  "Desenhos",
  "Educação Financeira",
  "Educação Física",
  "Filosofia",
  "Física",
  "Geografia",
  "Geral",
  "História",
  "Infantil",
  "Inglês",
  "Livros",
  "Matemática",
  "Português",
  "Química",
  "Simulados",
  "Sociologia"
];

export default function FeedBiblioteca({ itensLocais }: FeedBibliotecaProps) {
  const [materiais, setMateriais] = useState<any[]>([]);
  const [filtroAtivo, setFiltroAtivo] = useState<string>('Todos');
  const [limiteVisivel, setLimiteVisivel] = useState(15);
  const [statusCarregamento, setStatusCarregamento] = useState({ 
    ativ: !!itensLocais, 
    art: !!itensLocais 
  });
  const [numColunas, setNumColunas] = useState(2); 

  const INTERVALO_DE_ANUNCIOS = 24; 
  const LIMITE_MAXIMO_ANUNCIOS = 2;

  useEffect(() => {
    if (itensLocais && itensLocais.length > 0) {
      const apenasBiblioteca = itensLocais.filter(item => item.tipo === 'atividade' || item.tipo === 'artigo');
      setMateriais(apenasBiblioteca);
      return; 
    }

    const qAtividades = query(collection(db, "atividades"));
    const qArtigos = query(collection(db, "artigos"));

    let atividadesFB: any[] = [];
    let artigosFB: any[] = [];

    const combinarTudo = () => {
      const todos = [...atividadesFB, ...artigosFB];
      const itensUnicos = Array.from(new Map(todos.map(item => [item.id || item.slug, item])).values());
      const ordenados = itensUnicos.sort((a, b) => (b.dataReal || 0) - (a.dataReal || 0));
      setMateriais(ordenados);
    };

    const unsubAtiv = onSnapshot(qAtividades, (snap) => {
      atividadesFB = snap.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id, tipo: 'atividade', materia: data.materia || 'geral',
          titulo: data.titulo, imagemCapa: data.imagemUrl || data.imagem,
          isFirebase: true, dataReal: extrairData(data.createdAt || data.dataCriacao)
        };
      });
      combinarTudo();
      setStatusCarregamento(prev => ({ ...prev, ativ: true }));
    });

    const unsubArt = onSnapshot(qArtigos, (snap) => {
      artigosFB = snap.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id, tipo: 'artigo', titulo: data.titulo,
          imagemCapa: data.capaUrl || data.imagemUrl || IMAGEM_PADRAO_ARTIGO,
          autorNome: data.autorNome || "Equipe", isFirebase: true,
          dataReal: extrairData(data.createdAt || data.dataCriacao)
        };
      });
      combinarTudo();
      setStatusCarregamento(prev => ({ ...prev, art: true }));
    });

    return () => { unsubAtiv(); unsubArt(); };
  }, [itensLocais]);

  useEffect(() => {
    const lidarComEventos = () => {
      const alturaTotal = document.body.offsetHeight;
      const posicaoAtual = window.innerHeight + window.scrollY;
      
      if (alturaTotal > 0 && (posicaoAtual / alturaTotal) >= 0.7) {
        setLimiteVisivel(prev => prev + 15);
      }

      const width = window.innerWidth;
      if (width >= 1024) setNumColunas(5);
      else if (width >= 768) setNumColunas(4);
      else if (width >= 640) setNumColunas(3);
      else setNumColunas(2);
    };

    lidarComEventos();
    window.addEventListener('scroll', lidarComEventos);
    window.addEventListener('resize', lidarComEventos);

    return () => {
      window.removeEventListener('scroll', lidarComEventos);
      window.removeEventListener('resize', lidarComEventos);
    };
  }, []);

  const carregando = !(statusCarregamento.ativ && statusCarregamento.art);

  if (carregando) {
    return <div className="text-center py-20 text-slate-500 animate-pulse font-medium">Carregando acervo da biblioteca...</div>;
  }

  const materiaisFiltrados = materiais.filter(item => {
    if (filtroAtivo === "Todos") return true;
    if (filtroAtivo === "Artigos") return item.tipo === "artigo";
    if (filtroAtivo === "Atividades") return item.tipo === "atividade";
    
    if (item.tipo === "atividade") {
      return formatarNomeMateria(item.materia) === filtroAtivo;
    }
    return false;
  });

  const materiaisVisiveis = materiaisFiltrados.slice(0, limiteVisivel);

  const itensComAnuncios: any[] = [];
  materiaisVisiveis.forEach((item, index) => {
    itensComAnuncios.push(item);
    const numAnuncioAtual = Math.floor((index + 1) / INTERVALO_DE_ANUNCIOS);
    if ((index + 1) % INTERVALO_DE_ANUNCIOS === 0 && numAnuncioAtual <= LIMITE_MAXIMO_ANUNCIOS) {
      itensComAnuncios.push({ isAd: true, id: `ad-${index}` });
    }
  });

  const colunas = Array.from({ length: numColunas }, () => [] as any[]);
  itensComAnuncios.forEach((item, index) => {
    colunas[index % numColunas].push(item);
  });

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 pb-10 pt-4 px-4 sm:px-0">
      
      {/* 🪄 BARRA DE FILTROS */}
      <div className="relative w-full overflow-hidden -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="flex flex-nowrap overflow-x-auto gap-2 pb-3 pt-1 w-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              onClick={() => { setFiltroAtivo(categoria); setLimiteVisivel(15); }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all active:scale-95 shadow-sm border cursor-pointer ${
                filtroAtivo === categoria
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-3 w-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none md:hidden"></div>
      </div>

      {/* Grid Estilo Pinterest REAL */}
      {itensComAnuncios.length === 0 ? (
        <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-6 text-slate-500">
          <p className="font-bold text-base">Nenhum material encontrado para "{filtroAtivo}"</p>
        </div>
      ) : (
        <div className="flex w-full gap-4 sm:gap-6 mt-0 items-start">
          {colunas.map((coluna, indexColuna) => (
            <div key={`col-${indexColuna}`} className="flex flex-col flex-1 gap-4 sm:gap-6">
              
              {coluna.map((item, indexLinha) => {
                if (item.isAd) {
                  return (
                    <div key={item.id} className="py-2">
                      <AdCard />
                      <p className="text-[9px] text-slate-400 text-center mt-1.5 uppercase tracking-widest font-semibold">Publicidade</p>
                    </div>
                  );
                }

                const isArtigo = item.tipo === 'artigo';
                const isAtividade = item.tipo === 'atividade';
                const isPriority = indexLinha === 0;
                
                let linkDestino = '#';
                if (isArtigo) linkDestino = item.isFirebase ? `/artigos/${item.id}` : `/artigos/${item.slug}`;
                else if (isAtividade) linkDestino = item.isFirebase ? `/atividades/${item.materia || 'geral'}/${item.id}` : `/atividades/${item.materia}/${item.slug}`;

                return (
                  <Link href={linkDestino} key={item.id} className="block group w-full">
                    {isArtigo ? (
                      <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-purple-500 transition-all duration-300 flex flex-col w-full">
                        <div className="relative w-full aspect-square overflow-hidden bg-slate-100 border-b-2 border-slate-100">
                          <img
                            src={item.imagemCapa}
                            alt={item.titulo}
                            loading={isPriority ? "eager" : "lazy"}
                            onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 opacity-0"
                          />
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-slate-700 uppercase tracking-wider shadow-sm border border-slate-100">Artigo</div>
                        </div>
                        <div className="p-4 md:p-5 flex flex-col flex-1">
                          <h2 className="font-bold text-sm md:text-base text-slate-900 leading-snug group-hover:text-purple-600 transition-colors line-clamp-3 mb-2">{item.titulo}</h2>
                          {item.autorNome && <div className="mt-auto flex items-center text-[11px] text-slate-400 font-semibold uppercase tracking-wide"><span className="truncate max-w-[120px]">{item.autorNome}</span></div>}
                        </div>
                      </div>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 w-full min-h-[220px]">
                        <img
                          src={item.imagemCapa}
                          alt={item.titulo}
                          loading={isPriority ? "eager" : "lazy"}
                          onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500 opacity-0"
                        />
                        <div className="absolute top-3 left-3 flex gap-2 z-10">
                          <span className="bg-cyan-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {formatarNomeMateria(item.materia)}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                          <h2 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-3">{item.titulo}</h2>
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Indicador de carregamento */}
      {materiaisVisiveis.length < materiaisFiltrados.length && (
        <div className="text-center py-6 text-slate-400 text-sm animate-pulse mt-4">
          Buscando mais conteúdos...
        </div>
      )}
    </div>
  );
}