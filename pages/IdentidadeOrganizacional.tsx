
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { analyzeStrategicIdentity } from '../geminiService';

const IdentidadeOrganizacional: React.FC = () => {
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    purpose: '',
    business: '',
    mission: '',
    vision: '',
    values: ['Inovação', 'Foco no Resultado', 'Transparência'],
  });

  const handleAIAnalysis = async () => {
    if (!formData.purpose || !formData.mission) {
      alert("Por favor, preencha ao menos o Propósito e a Missão para a análise.");
      return;
    }
    setLoadingAI(true);
    const feedback = await analyzeStrategicIdentity(formData);
    setAiFeedback(feedback || "Análise indisponível.");
    setLoadingAI(false);
  };

  const handleSaveDraft = () => {
    alert("Rascunho da Identidade Organizacional salvo.");
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
      <PageHeader 
        title="Identidade Organizacional" 
        breadcrumbs={['Início', 'BSC-LADE 2', 'Identidade']}
        status="Definição de Pilares"
      />
      
      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-10">
        <section className="bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/5 rounded-lg">
              <span className="material-symbols-outlined text-primary">add_photo_alternate</span>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Logomarca da Organização</h3>
          </div>
          <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
            <input accept="image/*" className="hidden" id="logo-upload" type="file" />
            <label className="flex flex-col items-center cursor-pointer w-full text-center" htmlFor="logo-upload">
              <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">image</span>
              <span className="text-sm font-bold text-primary uppercase tracking-tight">Anexar logotipo estratégico</span>
              <span className="text-[11px] text-gray-500 mt-2 uppercase font-bold tracking-widest opacity-60">Recomendado: 400x120px | PNG ou SVG</span>
            </label>
          </div>
        </section>

        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div>
            <h3 className="font-bold text-primary text-sm uppercase tracking-tight">Fundamentação Estratégica PNLADE</h3>
            <p className="text-sm text-primary/80 mt-1 max-w-3xl leading-relaxed">
              Defina os elementos que darão suporte a todas as decisões do ciclo. A coerência entre Propósito, Missão e Visão é vital para o sucesso do Balanced Scorecard.
            </p>
          </div>
        </div>

        {aiFeedback && (
          <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20 animate-in fade-in slide-in-from-top-4 duration-500 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 text-secondary">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">psychology</span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest">Feedback Inteligente Gemini</h4>
              </div>
              <button onClick={() => setAiFeedback(null)} className="p-1 hover:bg-secondary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-slate-400">close</span>
              </button>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-loose">
              {aiFeedback.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
            </div>
          </div>
        )}

        <form className="space-y-8 pb-32">
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary">wb_sunny</span>
                <h3 className="text-base font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100">1. Propósito</h3>
              </div>
              <textarea 
                className="w-full min-h-32 p-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary text-lg font-medium placeholder:opacity-40" 
                placeholder="Qual o impacto real que a organização deseja gerar no mundo?"
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
              />
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">business_center</span>
                <h3 className="text-base font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100">2. O Negócio</h3>
              </div>
              <input 
                className="w-full h-14 px-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold" 
                placeholder="Definição concisa do que a empresa faz" 
                type="text" 
                value={formData.business}
                onChange={(e) => setFormData({...formData, business: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">rocket</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">3. Missão</h3>
                </div>
                <textarea 
                  className="w-full min-h-48 p-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed" 
                  placeholder="Compromisso diário da organização..."
                  value={formData.mission}
                  onChange={(e) => setFormData({...formData, mission: e.target.value})}
                />
              </div>
              <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest">4. Visão</h3>
                </div>
                <textarea 
                  className="w-full min-h-48 p-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed" 
                  placeholder="Objetivo aspiracional de longo prazo..."
                  value={formData.vision}
                  onChange={(e) => setFormData({...formData, vision: e.target.value})}
                />
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">military_tech</span>
                  <h3 className="text-base font-bold uppercase tracking-widest">5. Valores Fundamentais</h3>
                </div>
                <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline flex items-center gap-1" type="button">
                  <span className="material-symbols-outlined text-sm">add</span> Adicionar Novo
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {formData.values.map((v, idx) => (
                  <div key={idx} className="relative group">
                    <input 
                      className="w-full pr-10 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-primary text-xs font-bold uppercase tracking-tighter" 
                      type="text" 
                      defaultValue={v} 
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end pt-10 border-t border-gray-200 dark:border-gray-800 gap-4">
            <button 
              type="button"
              onClick={handleSaveDraft}
              className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-gray-50 transition-all"
            >
              Salvar Rascunho
            </button>
            <button 
              type="button"
              onClick={handleAIAnalysis}
              disabled={loadingAI}
              className="w-full sm:w-auto px-8 py-4 border border-secondary text-secondary rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-secondary/5 transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined">{loadingAI ? 'sync' : 'psychology'}</span>
              {loadingAI ? 'Processando...' : 'Consultoria por IA'}
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-[11px] uppercase tracking-widest flex items-center justify-center gap-2" type="submit">
              Próxima Etapa: Resultados
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IdentidadeOrganizacional;
