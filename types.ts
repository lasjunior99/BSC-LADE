
export enum Perspective {
  FINANCIAL = 'Financeira',
  CUSTOMER = 'Clientes',
  PROCESSES = 'Processos Internos',
  LEARNING = 'Aprendizado e Crescimento'
}

export enum ProjectStatus {
  PENDING = 'Pendente',
  VALIDATED = 'Validado',
  NEEDS_ADJUSTMENT = 'Necessita Complemento'
}

export enum UserRole {
  ADMIN = 'Admin',
  MANAGER = 'Gestor',
  VIEWER = 'Visualizador'
}

export interface StrategicIdentity {
  purpose: string;
  business: string;
  mission: string;
  vision: string;
  values: string[];
  logoUrl?: string;
}

export interface KPI {
  id: string;
  name: string;
  description: string;
  dataSource: string;
  polarity: 'higher_is_better' | 'lower_is_better' | 'on_target';
  periodicity: 'Mensal' | 'Trimestral' | 'Semestral' | 'Anual';
  responsible: string;
  targets: { month: string; planned: number; actual: number }[];
}

export interface StrategicObjective {
  id: string;
  perspective: Perspective;
  name: string;
  responsible: string;
  kpis: KPI[];
}

export interface Project {
  id: string;
  name: string;
  deadline: string;
  linkedObjectiveId: string;
  manager: string;
  sponsor: string;
  summary: string;
  assumptions: string;
  importance: string;
  team: string;
  status: ProjectStatus;
  phases: { name: string; deadline: string }[];
  deliveries: { name: string; date: string }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
  avatarUrl?: string;
}
