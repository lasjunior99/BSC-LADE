
import React from 'react';
import PageHeader from '../components/PageHeader';
import { MOCK_PROJECTS } from '../constants';
import { ProjectStatus } from '../types';

const ProjetosEstrategicos: React.FC = () => {
  const getStatusStyle = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.PENDING: return 'bg-amber-100 text-amber-700';
      case ProjectStatus.VALIDATED: return 'bg-green-100 text-green-700';
      case ProjectStatus.NEEDS_ADJUSTMENT: return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const downloadProjectTemplate = () => {
    const csvContent = "Nome_Projeto;Gestor;Objetivo_Vinculado;Prazo;Status;Orcamento_Estimado\nExpansao Regional;João Silva;obj-1;2024-12-31;Pendente;50000";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "modelo_projetos_estrategicos.csv");
    link.click();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
      <PageHeader 
        title="Projetos Estratégicos" 
        breadcrumbs={['Gestão Estratégica', 'Projetos']}
        status="Validação de Iniciativas"
      />

      <div className="p-4 md:p-8 space-y-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight leading-none uppercase">Gerenciamento de Iniciativas</h1>
            <p className="text-[#548292] text-sm font-medium">Assegure a execução da estratégia através de projetos validados e monitorados.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button 
              onClick={downloadProjectTemplate}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg text-[10px] font-bold uppercase tracking-tight hover:bg-gray-50 transition-all"
            >
              <span className="material-symbols-outlined text-sm">download_for_offline</span>
              Modelo Planilha
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-tight hover:opacity-90 transition-all shadow-md">
              <span className="material-symbols-outlined text-sm">add_circle</span>
              Cadastrar Projeto
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MOCK_PROJECTS.map((proj) => (
            <div key={proj.id} className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col group hover:shadow-md hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${getStatusStyle(proj.status)}`}>
                  {proj.status}
                </span>
                <button className="text-slate-300 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight mb-4 uppercase tracking-tighter">{proj.name}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-gray-800">
                  <span className="material-symbols-outlined text-primary text-lg">track_changes</span>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase">Objetivo Vinculado</span>
                    <span className="text-xs font-semibold truncate max-w-[180px]">{proj.linkedObjectiveId}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-gray-800" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80')" }}></div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 uppercase">Gestor do Projeto</span>
                    <span className="text-xs font-semibold">{proj.manager}</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#548292] uppercase">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  {new Date(proj.deadline).toLocaleDateString()}
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                  Validar <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
          
          <div className="bg-gray-100/30 dark:bg-white/5 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/30 transition-all">
            <div className="size-14 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-4 text-[#548292] group-hover:text-primary group-hover:scale-110 transition-all">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </div>
            <h4 className="text-sm font-bold text-[#548292] group-hover:text-primary uppercase tracking-wider">Novo Projeto Estratégico</h4>
            <p className="text-[11px] text-slate-400 mt-2 max-w-[200px]">Clique para cadastrar uma nova iniciativa vinculada a um objetivo.</p>
          </div>
        </div>

        {/* Global actions */}
        <div className="flex items-center justify-end gap-4">
            <button className="px-6 py-3 border border-primary text-primary rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all">
                Salvar Rascunho
            </button>
            <button className="px-8 py-3 bg-primary text-white rounded-lg text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:opacity-95 transition-all">
                Exportar Relatório Final
            </button>
        </div>
      </div>

      <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-[#548292]">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-amber-400"></span>
            <span>01 Projeto em Rascunho</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-green-500"></span>
            <span>01 Projeto Validado</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-xs">update</span>
          Sincronizado em {new Date().toLocaleTimeString()}
        </div>
      </footer>
    </div>
  );
};

export default ProjetosEstrategicos;
