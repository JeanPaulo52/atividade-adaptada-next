'use client';

// 1. Importamos o banner real que criamos antes
import AdBanner from './AdBanner'; 

export default function AdCard() {
  // Mude para 'false' apenas quando o site for para o ar
  const MODO_TESTE = false; 

  if (MODO_TESTE) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full break-inside-avoid mb-4">
        <div className="px-4 pt-3 pb-1 border-b border-slate-100">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Patrocinado
          </span>
        </div>
        <div className="p-2 flex-grow min-h-[250px] flex items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 m-4 rounded-lg">
          <span className="text-slate-400 text-sm font-medium text-center">
            O Anúncio do Google<br/>aparecerá aqui
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full break-inside-avoid mb-4">
      <div className="px-4 pt-3 pb-1 border-b border-slate-100">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Patrocinado
        </span>
      </div>
      <div className="p-2 flex-grow min-h-[250px] flex items-center justify-center">
        {/* 2. CHAMADA REAL: Aqui você coloca o slot específico para o Feed */}
        <AdBanner dataAdSlot="3287886775" />
      </div>
    </div>
  );
}