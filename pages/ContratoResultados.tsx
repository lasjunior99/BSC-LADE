
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MOCK_OBJECTIVES } from '../constants';
import { Perspective } from '../types';

const ContratoResultados: React.FC = () => {
  const [filter, setFilter] = useState<string | 'ALL'>('ALL');

  const filteredObjectives = filter === 'ALL' 
    ? MOCK_OBJECTIVES 
    : MOCK_OBJECTIVES.filter(o => o.perspective === filter);

  const getPerspectiveStyle = (p: Perspective) => {
    switch (p) {
      case Perspective.FINANCIAL: return 'bg-sky-100 text-sky-700';
      case Perspective.CUSTOMER: return 'bg-amber-100 text-amber-700';
      case Perspective.PROCESSES: return 'bg-green-100 text-green-700';
      case Perspective.LEARNING: return 'bg-purple-100 text-purple-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const downloadTemplate = () => {
    const csvContent = "Perspectiva;Objetivo;KPI;Descricao;Meta;Responsavel\nFinanceira;Aumentar Receita;Faturamento Mensal;Soma das vendas brutas;1000000;Diretor Financeiro";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "modelo_contrato_resultados.csv");
    link.click();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
      <PageHeader 
        title="Contrato de Resultados" 
        breadcrumbs={['Gestão Estratégica', 'Ciclo 2024', 'Contrato de Resultados']}
        status="Em Construção"
      />

      <div className="p-4 md:p-8 space-y-6">
        {/* Import Template Section */}
        <div className="bg-white dark:bg-surface-dark p-6 border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600">
              <span className="material-symbols-outlined">table_chart</span>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-tight">Importação de Dados</h3>
              <p className="text-xs text-gray-500">Importe seus objetivos e indicadores em massa via planilha.</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={downloadTemplate}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg text-[10px] font-bold uppercase tracking-tight hover:bg-gray-50 transition-all"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Baixar Modelo
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-tight hover:opacity-90 transition-all shadow-md">
              <span className="material-symbols-outlined text-sm">upload_file</span>
              Importar Planilha
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <div className="relative shrink-0">
              <select 
                className="appearance-none bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg pl-4 pr-10 py-1.5 text-[10px] font-bold text-primary uppercase focus:ring-1 focus:ring-primary cursor-pointer"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="ALL">Todas Perspectivas</option>
                {Object.values(Perspective).map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-sm">arrow_drop_down</span>
            </div>
          </div>
          <div className="relative w-full md:max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary" 
              placeholder="Pesquisar objetivo estratégico..." 
              type="text" 
            />
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-light dark:bg-white/5 border-b border-gray-200 dark:border-gray-800">
                <th className="w-48 px-6 py-4 text-[10px] font-bold text-[#548292] uppercase tracking-widest">Perspectiva</th>
                <th className="px-6 py-4 text-[10px] font-bold text-[#548292] uppercase tracking-widest">Objetivo e Indicadores</th>
                <th className="w-64 px-6 py-4 text-[10px] font-bold text-[#548292] uppercase tracking-widest">Responsável</th>
                <th className="w-20 px-6 py-4 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredObjectives.map((obj) => (
                <React.Fragment key={obj.id}>
                  <tr className="group hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 align-top">
                      <div className={`inline-flex items-center px-3 py-1 rounded-lg text-[9px] font-bold uppercase ${getPerspectiveStyle(obj.perspective)}`}>
                        {obj.perspective}
                      </div>
                    </td>
                    <td className="p-4 align-top">
                      <p className="text-sm font-bold leading-tight mb-4">{obj.name}</p>
                      
                      <div className="space-y-2 ml-4 border-l-2 border-primary/10 pl-4">
                        {obj.kpis.map((kpi) => (
                          <div key={kpi.id} className="bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/20 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-primary text-base">monitoring</span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{kpi.name}</span>
                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">{kpi.dataSource} • {kpi.periodicity}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                               <button className="p-1 text-gray-400 hover:text-primary transition-colors">
                                 <span className="material-symbols-outlined text-sm">edit</span>
                               </button>
                            </div>
                          </div>
                        ))}
                        <button className="flex items-center gap-1.5 text-[10px] font-bold text-primary/70 hover:text-primary mt-2">
                          <span className="material-symbols-outlined text-sm">add</span> Adicionar Indicador
                        </button>
                      </div>
                    </td>
                    <td className="p-4 align-top">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs uppercase">
                          {obj.responsible.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-semibold">{obj.responsible}</span>
                      </div>
                    </td>
                    <td className="p-4 align-top text-center">
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <div className="p-4 bg-gray-50/50 dark:bg-white/5 border-t border-gray-200 dark:border-gray-800">
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-[11px] uppercase tracking-wider py-2 px-4 rounded-lg transition-all hover:bg-white dark:hover:bg-gray-800">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Adicionar Novo Objetivo Estratégico
            </button>
          </div>
        </div>

        {/* Footer actions for saving */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button className="px-6 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
                Salvar Rascunho
            </button>
            <button className="px-8 py-3 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Avançar para Projetos
            </button>
        </div>
      </div>
    </div>
  );
};

export default ContratoResultados;
