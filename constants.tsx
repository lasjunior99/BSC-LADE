
import React from 'react';
import { Perspective, ProjectStatus, UserRole, User, StrategicObjective, Project } from './types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Ricardo Silva', email: 'ricardo.silva@empresa.com.br', role: UserRole.ADMIN, active: true },
  { id: '2', name: 'Ana Oliveira', email: 'ana.oliveira@empresa.com.br', role: UserRole.MANAGER, active: true },
  { id: '3', name: 'Carlos Santos', email: 'carlos.santos@empresa.com.br', role: UserRole.VIEWER, active: false },
  { id: '4', name: 'Mariana Costa', email: 'mariana.costa@empresa.com.br', role: UserRole.MANAGER, active: true },
];

export const MOCK_OBJECTIVES: StrategicObjective[] = [
  {
    id: 'obj-1',
    perspective: Perspective.FINANCIAL,
    name: 'Maximizar o Retorno sobre Capital Empregado (ROCE) em 12% ao ano.',
    responsible: 'Alice Johnson',
    kpis: [
      {
        id: 'kpi-1',
        name: 'EBITDA / Ativos Totais Médios',
        description: 'Medido via auditoria interna trimestral.',
        dataSource: 'ERP / Contabilidade',
        polarity: 'higher_is_better',
        periodicity: 'Mensal',
        responsible: 'Financeiro',
        targets: [
          { month: 'Janeiro', planned: 75, actual: 78 },
          { month: 'Fevereiro', planned: 75, actual: 72 }
        ]
      }
    ]
  },
  {
    id: 'obj-2',
    perspective: Perspective.CUSTOMER,
    name: 'Consolidar a liderança em CSAT no mercado de Enterprise SaaS.',
    responsible: 'Bob Smith',
    kpis: [
      {
        id: 'kpi-2',
        name: 'Net Promoter Score (NPS)',
        description: 'Apurado mensalmente via Zendesk.',
        dataSource: 'Zendesk API',
        polarity: 'higher_is_better',
        periodicity: 'Mensal',
        responsible: 'Customer Success',
        targets: [
          { month: 'Janeiro', planned: 70, actual: 72 }
        ]
      }
    ]
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    name: 'Expansão de Mercado Internacional',
    deadline: '2024-12-31',
    linkedObjectiveId: 'obj-1',
    manager: 'Carlos Silveira',
    sponsor: 'Diretoria Executiva',
    summary: 'Entrada estratégica em mercados da América Latina.',
    assumptions: 'Estabilidade cambial e aprovação regulatória.',
    importance: 'Diversificação de receita.',
    team: 'Marketing, Vendas, Jurídico',
    status: ProjectStatus.PENDING,
    phases: [{ name: 'Pesquisa de Mercado', deadline: '2024-03-30' }],
    deliveries: [{ name: 'Relatório de Viabilidade', date: '2024-04-15' }]
  },
  {
    id: 'proj-2',
    name: 'Otimização de Processos Internos',
    deadline: '2024-06-30',
    linkedObjectiveId: 'obj-2',
    manager: 'Ana Paula',
    sponsor: 'VP de Operações',
    summary: 'Redução de desperdícios via Lean.',
    assumptions: 'Colaboração total das áreas.',
    importance: 'Aumento de margem.',
    team: 'Ops, RH',
    status: ProjectStatus.VALIDATED,
    phases: [{ name: 'Mapeamento AS-IS', deadline: '2024-02-15' }],
    deliveries: [{ name: 'Manual de Processos', date: '2024-03-20' }]
  }
];
