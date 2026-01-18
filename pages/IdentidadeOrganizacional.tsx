import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FEATURES } from "../constants";

const IdentidadeOrganizacional: React.FC = () => {
  const [formData, setFormData] = useState({
    purpose: "",
    business: "",
    mission: "",
    vision: "",
    values: ["Inovação", "Foco no Resultado", "Transparência"],
  });

  const handleSaveDraft = () => {
    alert("Rascunho da Identidade Organizacional salvo.");
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
      <PageHeader
        title="Identidade Organizacional"
        breadcrumbs={["Início", "BSC-LADE 2", "Identidade"]}
        status="Definição de Pilares"
      />

      <div className="max-w-5xl mx-auto px-6 py-10 w-full space-y-10">
        {/* Logomarca */}
        <section className="bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/5 rounded-lg">
              <span className="material-symbols-outlined text-primary">
                add_photo_alternate
              </span>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Logomarca da Organização
            </h3>
          </div>

          <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
            <input accept="image/*" className="hidden" id="logo-upload" type="file" />
            <label
              className="flex flex-col items-center cursor-pointer w-full text-center"
              htmlFor="logo-upload"
            >
              <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">
                image
              </span>
              <span className="text-sm font-bold text-primary uppercase tracking-tight">
                Anexar logotipo estratégico
              </span>
              <span className="text-[11px] text-gray-500 mt-2 uppercase font-bold tracking-widest opacity-60">
                Recomendado: 400x120px | PNG ou SVG
              </span>
            </label>
          </div>
        </section>

        {/* Fundamentação */}
        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex items-start gap-4 shadow-sm">
          <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div>
            <h3 className="font-bold text-primary text-sm uppercase tracking-tight">
              Fundamentação Estratégica PNLADE
            </h3>
            <p className="text-sm text-primary/80 mt-1 max-w-3xl leading-relaxed">
              Defina os elementos que darão suporte a todas as decisões do ciclo.
              A coerência entre Propósito, Missão e Visão é vital para o sucesso do
              Balanced Scorecard.
            </p>
          </div>
        </div>

        {/* Formulário */}
        <form className="space-y-8 pb-32">
          <div className="grid grid-cols-1 gap-8">
            {/* Propósito */}
            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary">
                  wb_sunny
                </span>
                <h3 className="text-base font-bold uppercase tracking-widest">
                  1. Propósito
                </h3>
              </div>
              <textarea
                className="w-full min-h-32 p-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary text-lg font-medium placeholder:opacity-40"
                placeholder="Qual o impacto real que a organização deseja gerar no mundo?"
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({ ...formData, purpose: e.target.value })
                }
              />
            </div>

            {/* Negócio */}
            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  business_center
                </span>
                <h3 className="text-base font-bold uppercase tracking-widest">
                  2. O Negócio
                </h3>
              </div>
              <input
                className="w-full h-14 px-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold"
                placeholder="Definição concisa do que a empresa faz"
                type="text"
                value={formData.business}
                onChange={(e) =>
                  setFormData({ ...formData, business: e.target.value })
                }
              />
            </div>

            {/* Missão e Visão */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                  3. Missão
                </h3>
                <textarea
                  className="w-full min-h-48 p-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  value={formData.mission}
                  onChange={(e) =>
                    setFormData({ ...formData, mission: e.target.value })
                  }
                />
              </div>

              <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
                  4. Visão
                </h3>
                <textarea
                  className="w-full min-h-48 p-5 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  value={formData.vision}
                  onChange={(e) =>
                    setFormData({ ...formData, vision: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Valores */}
            <div className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
              <h3 className="text-base font-bold uppercase tracking-widest mb-6">
                5. Valores Fundamentais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {formData.values.map((v, idx) => (
                  <input
                    key={idx}
                    className="rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs font-bold uppercase tracking-tighter"
                    defaultValue={v}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Rodapé */}
          <div className="flex flex-col sm:flex-row items-center justify-end pt-10 border-t border-gray-200 dark:border-gray-800 gap-4">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl font-bold text-[11px] uppercase tracking-widest"
            >
              Salvar Rascunho
            </button>

            {/* BOTÃO DE IA — OPACO E DESATIVADO */}
            <button
              type="button"
              disabled
              title="Funcionalidade de IA desativada"
              className="px-8 py-4 border border-secondary text-secondary rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 opacity-40 cursor-not-allowed"
            >
              <span className="material-symbols-outlined">psychology</span>
              Consultoria por IA (desativada)
            </button>

            <button
              type="submit"
              className="px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/20"
            >
              Próxima Etapa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IdentidadeOrganizacional;

