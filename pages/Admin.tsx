
import React from 'react';
import PageHeader from '../components/PageHeader';
import { MOCK_USERS } from '../constants';

const Admin: React.FC = () => {
  const downloadUserTemplate = () => {
    const csvContent = "Nome;Email;Perfil;Status\nExemplo Silva;exemplo@empresa.com;Gestor;Ativo";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "modelo_importacao_usuarios.csv");
    link.click();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
      <PageHeader 
        title="Controle de Acessos" 
        breadcrumbs={['Admin', 'Gestão de Usuários']}
        status="Configurações do Sistema"
      />

      <div className="p-4 md:p-8 flex-1 overflow-y-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-gray-100 dark:border-gray-800 pb-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">Colaboradores do Plano</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-lg text-sm">Defina quem pode editar, visualizar ou validar os indicadores e projetos estratégicos.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
             <button 
              onClick={downloadUserTemplate}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-gray-200 dark:border-gray-800 text-gray-600 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all"
            >
              <span className="material-symbols-outlined text-base">download</span>
              Modelo Importação
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 text-[10px] uppercase tracking-widest">
              <span className="material-symbols-outlined text-base">person_add</span>
              Novo Usuário
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-gray-200 dark:border-gray-800">Nome do Colaborador</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-gray-200 dark:border-gray-800">Contato / E-mail</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-gray-200 dark:border-gray-800 text-center">Perfil de Acesso</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-gray-200 dark:border-gray-800 text-center">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-gray-200 dark:border-gray-800 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MOCK_USERS.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs text-slate-500 dark:text-slate-400">{user.email}</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-flex px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${user.active ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border`}>
                      <span className={`w-1 h-1 rounded-full ${user.active ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {user.active ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
                        <span className="material-symbols-outlined text-base">edit_square</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors hover:bg-red-50 rounded-lg">
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-end gap-4 pt-10 border-t border-gray-100 dark:border-gray-800">
           <button className="px-8 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
                Salvar Configurações
            </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
