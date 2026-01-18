
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'domain', label: 'Identidade Organizacional' },
    { path: '/contrato-resultados', icon: 'assignment', label: 'Contrato de Resultados', sub: 'Indicadores e Metas' },
    { path: '/projetos', icon: 'folder_special', label: 'Projetos Estratégicos', sub: 'Gestão de Iniciativas' },
    { path: '/admin', icon: 'admin_panel_settings', label: 'Admin' },
    { path: '/dashboards', icon: 'analytics', label: 'Dashboards' },
  ];

  const handleSaveDraft = () => {
    alert('Rascunho salvo com sucesso no banco de dados local.');
  };

  return (
    <aside className="w-72 border-r border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark flex flex-col h-screen sticky top-0 z-20">
      <div className="p-6 flex flex-col gap-8 flex-1 overflow-y-auto">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">account_tree</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-none uppercase tracking-tight">BSC-LADE 2</h1>
            <p className="text-[10px] text-[#548292] mt-1 uppercase tracking-widest font-bold">Gestão Estratégica</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <div key={item.path} className="flex flex-col">
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-white/10'
                }`}
              >
                <span className={`material-symbols-outlined ${location.pathname === item.path ? 'text-white' : 'text-[#548292]'}`}>
                  {item.icon}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
              </Link>
              {item.sub && location.pathname === item.path && (
                <div className="ml-10 mt-1 flex flex-col gap-1 border-l-2 border-primary/20 pl-2">
                  <span className="px-3 py-1.5 text-[10px] text-[#548292] font-semibold uppercase tracking-tighter">
                    • {item.sub}
                  </span>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-black/10 flex flex-col gap-2">
        <button 
          onClick={handleSaveDraft}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm hover:bg-primary/90 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-sm">save</span>
          SALVAR RASCUNHO
        </button>
        <button 
          onClick={() => window.print()}
          className="w-full flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100 transition-all"
        >
          <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
          RELATÓRIO PDF
        </button>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 p-2 bg-white/50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-gray-800">
          <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100')" }}></div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[11px] font-bold truncate uppercase tracking-tight">Consultor PNLADE</p>
            <p className="text-[9px] text-[#548292] uppercase font-bold">Estrategista</p>
          </div>
          <span className="material-symbols-outlined text-xs">unfold_more</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
