
import React from 'react';

interface PageHeaderProps {
  title: string;
  breadcrumbs: string[];
  status?: string;
  showExport?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, status, showExport = true }) => {
  const handleSaveDraft = () => {
    alert('Rascunho da página salvo.');
  };

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10 print:hidden">
      <div className="flex flex-col">
        <nav className="flex items-center gap-2 text-[10px] text-[#548292] font-bold uppercase tracking-widest mb-0.5">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="material-symbols-outlined text-[10px]">chevron_right</span>}
              <span className={idx === breadcrumbs.length - 1 ? 'text-[#0f171a] dark:text-gray-300' : 'hover:text-primary cursor-pointer'}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </nav>
        <h2 className="text-lg font-bold tracking-tight uppercase">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        {status && (
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-[9px] font-bold text-secondary uppercase tracking-tighter">Status Atual</span>
            <span className="text-xs text-gray-500 italic">{status}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <button 
            onClick={handleSaveDraft}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-[10px] font-bold uppercase tracking-tight hover:bg-primary/20 transition-all"
          >
            <span className="material-symbols-outlined text-sm">save</span>
            Salvar Rascunho
          </button>
          
          {showExport && (
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-[10px] font-bold uppercase tracking-tight hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Exportar PDF
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
