# Technical Specification - BSC-LADE 2

**Versão:** 1.0  
**Data:** 14 de fevereiro de 2026  
**Status:** ✅ Aprovado para Desenvolvimento  
**Linguagem:** Português (Brasil)

---

## Índice

1. [Stack Tecnológico](#1-stack-tecnológico)
2. [Dependências do Projeto](#2-dependências-do-projeto)
3. [Configuração do Vite](#3-configuração-do-vite)
4. [Gerenciamento de Variáveis de Ambiente](#4-gerenciamento-de-variáveis-de-ambiente)
5. [Arquitetura de Pastas](#5-arquitetura-de-pastas)
6. [Fluxo de Inicialização](#6-fluxo-de-inicialização)
7. [Configuração TypeScript](#7-configuração-typescript)
8. [Scripts NPM](#8-scripts-npm)
9. [Integração Gemini API](#9-integração-gemini-api)
10. [Desenvolvimento Local](#10-desenvolvimento-local)
11. [Build e Deploy](#11-build-e-deploy)
12. [Directives de Evolução](#12-directives-de-evolução)

---

## 1. Stack Tecnológico

### 1.1 Visão Geral

| Camada | Tecnologia | Versão | Propósito |
|---|---|---|---|
| **Runtime** | Node.js | 18+ | Execução de JavaScript/TypeScript |
| **Framework Frontend** | React | 19.2.3 | UI componentizada |
| **Linguagem** | TypeScript | ~5.8.2 | Tipagem estática e segurança |
| **Build Tool** | Vite | 6.2.0 | Fast build & dev server |
| **Router** | React Router | 7.12.0 | Navegação SPA client-side |
| **IA/LLM** | Google GenAI SDK | 1.37.0 | Integração Gemini API |
| **Styling** | Tailwind CSS | (CDN) | Utility-first CSS via CDN |
| **Icons** | Material Symbols | (CDN) | Ícones via Google Fonts |

### 1.2 Justificativa de Escolhas

**React 19.2.3:**
- ✅ Ecosystem maduro e consolidado
- ✅ Suporte a hooks e functional components
- ✅ Excelente performance com React Router v7
- ✅ Comunidade ativa e abundância de recursos

**TypeScript ~5.8.2:**
- ✅ Type-safety em todo o codebase
- ✅ Melhor DX (Developer Experience) com autocomplete
- ✅ Detecção de erros em tempo de desenvolvimento
- ✅ Documentação automática via tipos

**Vite 6.2.0:**
- ✅ Build extremamente rápido (10x mais que Webpack)
- ✅ Dev server com HMR (Hot Module Replacement) instantâneo
- ✅ Bundle otimizado com tree-shaking automático
- ✅ Configuração mínima, zero boilerplate

**React Router 7.12.0:**
- ✅ Roteamento client-side eficiente
- ✅ Suporte a nested routes e lazy loading
- ✅ Hooks modernos (useLocation, useParams, etc)
- ✅ Sem necessidade de backend routing

**Google GenAI 1.37.0:**
- ✅ SDK oficial do Google
- ✅ Suporte completo a Gemini models
- ✅ Structured output (JSON schemas)
- ✅ Gerenciamento de rate limiting nativo

**Tailwind CSS (CDN):**
- ✅ Utility-first CSS extremamente rápido
- ✅ Dark mode nativo com `dark:` prefix
- ✅ Customização via script de configuração
- ✅ Sem necessidade de build step adicional

---

## 2. Dependências do Projeto

### 2.1 package.json Completo

```json
{
  "name": "bsc-lade-2---plataforma-de-gestão-estratégica",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react-router-dom": "^7.12.0",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "@google/genai": "^1.37.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

### 2.2 Descrição de Cada Dependência

#### **Dependências de Produção** (`dependencies`)

**`react@^19.2.3`**
- **Propósito:** Framework principal de UI
- **Tamanho:** ~42KB (gzipped)
- **Recursos:**
  - Functional components e hooks
  - Virtual DOM e reconciliação eficiente
  - Context API para state management
  - Suporte a async components (Suspense)
- **Compatibilidade:** Node 18+
- **Atualização:** Compatível com versões 19.x sem breaking changes críticos

**`react-dom@^19.2.3`**
- **Propósito:** Binding do React para DOM
- **Tamanho:** ~35KB (gzipped)
- **Recursos:**
  - Renderização React → DOM
  - Hydration para SSR (futura)
  - Portal components
  - createRoot API moderna
- **Dependência de:** react (mesma versão)

**`react-router-dom@^7.12.0`**
- **Propósito:** Roteamento SPA client-side
- **Tamanho:** ~15KB (gzipped)
- **Recursos:**
  - `<BrowserRouter>` / `<HashRouter>` (usamos HashRouter)
  - `<Routes>` e `<Route>` declarativas
  - Hooks: `useLocation()`, `useNavigate()`, `useParams()`
  - Lazy loading com `React.lazy()`
  - Programmatic navigation
- **Configuração:** HashRouter para evitar configuração de servidor
- **Roadmap:** Suporte a nested routes em versões futuras

**`@google/genai@^1.37.0`**
- **Propósito:** SDK oficial para Google GenAI (Gemini)
- **Tamanho:** ~25KB (gzipped)
- **Recursos:**
  - Acesso a modelos Gemini (1.0 Flash, 2.0 Flash, etc)
  - Structured output (JSON schemas)
  - Streaming responses
  - Rate limiting client-side
  - Error handling robusto
- **Autenticação:** API Key via environment variable
- **Endpoint:** `https://generativelanguage.googleapis.com/v1beta/`
- **Pricing:** Pay-as-you-go (modelo Flash mais económico)

#### **Dependências de Desenvolvimento** (`devDependencies`)

**`typescript@~5.8.2`**
- **Propósito:** Compilador TypeScript
- **Versão:** Fixa (~) para estabilidade
- **Recursos:**
  - Strict mode: `noImplicitAny`, `strictNullChecks`
  - Path mapping: `@/*`
  - Decorators experimentais
  - Lib ES2022
- **Config:** [tsconfig.json](#7-configuração-typescript)

**`vite@^6.2.0`**
- **Propósito:** Build tool e dev server
- **Tamanho:** ~8MB (incluindo deps)
- **Recursos:**
  - Dev server com HMR
  - SSG (Static Site Generation)
  - Plugin ecosystem (React, Vue, etc)
  - Suporte a variáveis de ambiente (`.env*`)
- **Config:** [vite.config.ts](#3-configuração-do-vite)

**`@vitejs/plugin-react@^5.0.0`**
- **Propósito:** Plugin Vite para React
- **Features:**
  - JSX/TSX transformation
  - Fast Refresh (HMR instantâneo)
  - Automatic React imports
  - Suporte a Suspense
- **Compatibilidade:** Vite 5+, React 16.8+

**`@types/node@^22.14.0`**
- **Propósito:** Tipos TypeScript para Node.js APIs
- **Recursos:**
  - Tipping do runtime Node (fs, path, etc)
  - Usado por Vite em tempo de build
  - Não conflita com navegador
- **Nota:** Não incluir em bundle (devDependency)

---

## 3. Configuração do Vite

### 3.1 vite.config.ts Detalhado

```typescript
// filepath: c:\Users\lasju\BSC-LADE\vite.config.ts
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Carrega variáveis de ambiente baseado no modo (dev, build, preview)
    const env = loadEnv(mode, '.', '');
    
    return {
      // ========== SERVER ==========
      server: {
        port: 3000,              // Porta do dev server
        host: '0.0.0.0',         // Aceita conexões externas (Docker-friendly)
        // middlewareMode: false,  // Default: false (integrado ao Vite)
        // cors: true,             // Default: true
      },
      
      // ========== PLUGINS ==========
      plugins: [
        react(),                 // Transforma JSX/TSX
      ],
      
      // ========== DEFINE (Variáveis Globais) ==========
      define: {
        // Injeta GEMINI_API_KEY no build como constante global
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      },
      
      // ========== RESOLVE ==========
      resolve: {
        alias: {
          // Path mapping para imports mais limpos
          '@': path.resolve(__dirname, '.'),
          // Exemplo de uso:
          // import { types } from '@/types'
          // invés de:
          // import { types } from '../../../types'
        }
      }
    };
});
```

### 3.2 Explicação de Cada Seção

#### **3.2.1 Função de Configuração**

```typescript
export default defineConfig(({ mode }) => {
```

- **`defineConfig`:** Helper do Vite que adiciona type-checking
- **`mode`:** String que indica o contexto:
  - `'development'` → `npm run dev`
  - `'production'` → `npm run build`
  - `'preview'` → `npm run preview`
- **`loadEnv(mode, '.', '')`:** Carrega `.env*` do diretório raiz
  - Modo 'development' carrega `.env` + `.env.local` + `.env.development`
  - Modo 'production' carrega `.env` + `.env.local` + `.env.production`

#### **3.2.2 Seção Server**

```typescript
server: {
  port: 3000,
  host: '0.0.0.0',
}
```

| Opção | Valor | Efeito |
|---|---|---|
| `port` | 3000 | Dev server em `http://localhost:3000` |
| `host` | `0.0.0.0` | Aceita conexões de qualquer IP (necessário para Docker/WSL) |

#### **3.2.3 Seção Plugins**

```typescript
plugins: [
  react(),
]
```

- **`@vitejs/plugin-react`:**
  - Transforma `.tsx` → `.js` via Babel
  - Ativa Fast Refresh (HMR instantâneo)
  - Injeta importações React automaticamente (opcional)

#### **3.2.4 Seção Define (Critical)**

```typescript
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
}
```

**Importância:** Este é o mecanismo principal de injeção de variáveis de ambiente.

- **O que faz:**
  - Lê `GEMINI_API_KEY` do `.env.local`
  - Substitui **textualmente** todas as ocorrências de `process.env.GEMINI_API_KEY` no código fonte com seu valor
  - Exemplos:
    ```typescript
    // Antes do build:
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Depois do build (em production):
    const apiKey = "abc123def456...";  // Injetado pelo Vite
    ```

- **Por que JSON.stringify()?**
  - Adiciona aspas duplas ao valor (necessário para strings)
  - Exemplo:
    ```typescript
    JSON.stringify("my-api-key")  // "\"my-api-key\""
    ```

- **Dupla Definição:**
  - `process.env.API_KEY` e `process.env.GEMINI_API_KEY` apontam para o mesmo valor
  - Oferece flexibilidade em caso de mudanças futuras

#### **3.2.5 Seção Resolve**

```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, '.'),
  }
}
```

**Path Mapping:**
- Permite imports como `import X from '@/types'`
- Resolve para a raiz do projeto
- Melhora legibilidade e refactoring

**Exemplo:**
```typescript
// Com alias:
import { StrategicIdentity } from '@/types';

// Sem alias (muito pior):
import { StrategicIdentity } from '../../../../types';
```

---

## 4. Gerenciamento de Variáveis de Ambiente

### 4.1 Fluxo Completo de Injeção

```
.env.local (não versionado)
    ↓
loadEnv() do Vite
    ↓
define { 'process.env.GEMINI_API_KEY': ... }
    ↓
Build/Bundle
    ↓
JavaScript Runtime
    ↓
geminiService.ts usa: import.meta.env.VITE_GEMINI_API_KEY
```

### 4.2 Arquivo .env.local (Template)

Crie este arquivo na raiz do projeto (** não versione **):

```env
# filepath: c:\Users\lasju\BSC-LADE\.env.local

# ========== GEMINI API ==========
VITE_GEMINI_API_KEY=your-actual-api-key-here

# ========== FIREBASE (Futuro) ==========
VITE_FIREBASE_API_KEY=firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id

# ========== APP CONFIG ==========
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:3000
```

### 4.3 Acesso em Tempo de Runtime

#### **Opção 1: Usando `import.meta.env` (Recomendado)**

```typescript
// Em qualquer arquivo .ts/.tsx
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Isso funciona porque:
// 1. Vite substitui import.meta.env.VITE_* durante build
// 2. Em desenvolvimento, Vite serve dinamicamente
// 3. Em produção, o valor está hard-coded no bundle
```

#### **Opção 2: Usando `process.env` (Compatibilidade)**

```typescript
// Funciona, mas é menos eficiente (Vite precisa fazer polyfill)
const apiKey = process.env.VITE_GEMINI_API_KEY;
```

**Diferença:**
- `import.meta.env`: Padrão ES modules moderno ✅
- `process.env`: Legado Node.js (requer polyfill do Vite) ⚠️

### 4.4 Implementação em geminiService.ts

```typescript
// filepath: c:\Users\lasju\BSC-LADE\geminiService.ts

import { GoogleGenAI, Type } from "@google/genai";

/**
 * Recupera a API Key do ambiente (injetada pelo Vite)
 * @throws {Error} Se API key não está configurada
 */
const getApiKey = () => {
  // Vite substitui isso em build-time:
  // const apiKey = "abc123...";  (em produção)
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Gemini API key is missing. " +
      "Configure VITE_GEMINI_API_KEY in .env.local"
    );
  }

  return apiKey;
};

/**
 * Inicializa cliente Gemini com API key segura
 */
const getAI = () => {
  return new GoogleGenAI({
    apiKey: getApiKey(),
  });
};

// ... resto do código ...
```

### 4.5 Configuração em .gitignore

```gitignore
# filepath: c:\Users\lasju\BSC-LADE\.gitignore

# ========== ENVIRONMENT ==========
*.local              # Inclui .env.local, .env.development.local, etc
.env.local
.env.*.local
```

**Por que?**
- Evita commitar secrets (API keys, passwords)
- Cada desenvolvedor tem seu próprio `.env.local`
- CI/CD injeta variáveis via sistema

---

## 5. Arquitetura de Pastas

### 5.1 Estrutura Completa

```
c:\Users\lasju\BSC-LADE\
│
├── 📄 Arquivos de Configuração
│   ├── package.json               # Dependências e scripts NPM
│   ├── tsconfig.json              # Configuração TypeScript
│   ├── vite.config.ts             # Configuração Vite
│   ├── .gitignore                 # Git exclusions
│   └── .env.local (NÃO VERSIONAR) # Variáveis locais
│
├── 📁 Public Assets (Futuro)
│   └── public/                    # Arquivos estáticos (se necessário)
│
├── 📁 Código Fonte
│   ├── index.html                 # Entry point HTML
│   ├── index.tsx                  # React root
│   ├── App.tsx                    # Router principal
│   ├── types.ts                   # Interfaces TypeScript
│   ├── constants.tsx              # MOCK_DATA e constantes
│   ├── metadata.json              # Metadata do app
│   │
│   ├── 📁 components/
│   │   ├── PageHeader.tsx         # Cabeçalho com status
│   │   └── Sidebar.tsx            # Menu lateral
│   │
│   ├── 📁 pages/
│   │   ├── IdentidadeOrganizacional.tsx
│   │   ├── ContratoResultados.tsx
│   │   ├── ProjetosEstrategicos.tsx
│   │   └── Admin.tsx
│   │
│   ├── 📁 services/
│   │   ├── geminiService.ts       # ⭐ Integração IA
│   │   └── firebase.ts            # (Futuro) Firebase
│   │
│   ├── 📁 hooks/ (Futuro)
│   │   ├── useStrategicIdentity.ts
│   │   └── useKPI.ts
│   │
│   ├── 📁 context/ (Futuro)
│   │   └── StrategicContext.ts
│   │
│   └── 📁 utils/ (Futuro)
│       ├── formatters.ts
│       └── validators.ts
│
├── 📁 docs/
│   ├── PRD.md                     # Product Requirements
│   └── TECHNICAL-SPEC.md          # Este arquivo
│
├── .gitignore
└── README.md
```

### 5.2 Convenção de Nomeação

**Arquivos:**
- Componentes: PascalCase (ex: `PageHeader.tsx`)
- Utils/Services: camelCase (ex: `geminiService.ts`)
- Tipos: PascalCase (in types.ts)

**Pastas:**
- Sempre lowercase (ex: `components/`, `services/`)
- Plural quando contém múltiplos arquivos

**Imports:**
```typescript
// ✅ Bom
import { PageHeader } from '@/components/PageHeader';
import { analyzeStrategicIdentity } from '@/services/geminiService';
import { StrategicIdentity } from '@/types';

// ❌ Evitar
import PageHeader from '@/components/pageheader';
import analyzestrategicidentity from '@/services/geminiserv';
```

---

## 6. Fluxo de Inicialização

### 6.1 De .env.local até Runtime

```
.env.local (não versionado)
    ↓ (1. Desenvolvedor local)
Desenvolvedor
    ↓ (2. npm run dev)
Vite Dev Server
    ↓ (3. loadEnv VITE_GEMINI_API_KEY)
vite.config.ts
    ↓ (4. define process.env.GEMINI_API_KEY)
Browser Runtime
    ↓ (5. geminiService.getApiKey import.meta.env)
Google GenAI Client
    ↓ (6. API Request)
Gemini API
    ↓ (7. Response JSON)
Google GenAI Client
    ↓ (8. analyzeStrategicIdentity)
React Component
    ↓ (9. setState)
UI Update
```

### 6.2 Sequência Detalhada

1. **Desenvolvimento Local:**
   - Você cria `.env.local` com `VITE_GEMINI_API_KEY=<sua-chave>`

2. **Inicialização Vite:**
   - Execute `npm run dev`
   - Vite carrega `vite.config.ts`
   - Executa `loadEnv('development', '.', '')`
   - Lê arquivo `.env.local` (e `.env`)

3. **Injeção em Build-Time (Desenvolvimento):**
   - Vite substitui dinamicamente `import.meta.env.VITE_GEMINI_API_KEY`
   - No dev server, cada requisição recebe valor atual de `.env.local`

4. **Uso em Runtime:**
   - `geminiService.ts` chama `getApiKey()`
   - Retorna valor injetado pelo Vite
   - Inicializa `GoogleGenAI({ apiKey: ... })`

5. **API Call:**
   - Função como `analyzeStrategicIdentity()` chama `ai.models.generateContent()`
   - Google GenAI SDK envia request para `generativelanguage.googleapis.com`
   - Response retorna com análise IA

6. **React Update:**
   - Componente recebe response via Promise
   - `setState` atualiza UI
   - Usuário vê resultado

---

## 7. Configuração TypeScript

### 7.1 tsconfig.json Explicado

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "allowImportingTsExtensions": true,
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "paths": {
      "@/*": ["./*"]
    },
    "types": ["node"]
  }
}
```

**Strict Mode Ativado:**
- `noImplicitAny`: Nunca use `any` implícito
- `strictNullChecks`: null/undefined type-safe
- `strictFunctionTypes`: Function parameter types strict

---

## 8. Scripts NPM

### 8.1 package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 8.2 Explicação e Uso

#### **`npm run dev`**
- Inicia Vite dev server em `http://localhost:3000`
- Hot Module Replacement ativo
- Perfeito para desenvolvimento

#### **`npm run build`**
- Compila e otimiza para produção
- Output em `dist/`
- Minificado e com tree-shaking

#### **`npm run preview`**
- Simula ambiente de produção localmente
- Serve arquivos de `dist/`
- Testar antes de deploy

---

## 9. Integração Gemini API

### 9.1 Arquitetura de Chamadas

```typescript
// filepath: c:\Users\lasju\BSC-LADE\geminiService.ts

import { GoogleGenAI, Type } from "@google/genai";

const getApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Gemini API key is missing");
  }
  return apiKey;
};

const getAI = () => {
  return new GoogleGenAI({ apiKey: getApiKey() });
};

export const analyzeStrategicIdentity = async (identity: any) => {
  try {
    const ai = getAI();
    const prompt = `[Prompt customizado PNLADE]`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não foi possível gerar a análise no momento.";
  }
};

export const suggestKPIsForObjective = async (objectiveName: string) => {
  try {
    const ai = getAI();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Para o objetivo: "${objectiveName}", sugira KPIs...`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              description: { type: Type.STRING },
              methodology: { type: Type.STRING },
              polarity: { type: Type.STRING },
            },
            required: ["name", "description", "methodology", "polarity"],
          },
        },
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};
```

### 9.2 Modelos Gemini Suportados

| Modelo | Latência | Custo | Use Case |
|---|---|---|---|
| `gemini-3-flash-preview` | 50-100ms | 💰 (mais barato) | Análise rápida, sugestões IA |
| `gemini-2-flash` | 100-200ms | 💰 | Análise moderada |
| `gemini-1-pro` | 500-1000ms | 💸 | Análise profunda |

**Recomendação:** Use `gemini-3-flash-preview` para MVP

---

## 10. Desenvolvimento Local

### 10.1 Setup Inicial

**Pré-requisitos:**
- Node.js 18+ ([download](https://nodejs.org))
- Git
- VSCode recomendado

**Passo 1: Clonar repo**
```bash
git clone <repo-url>
cd BSC-LADE
```

**Passo 2: Instalar dependências**
```bash
npm install
```

**Passo 3: Configurar `.env.local`**
```bash
echo "VITE_GEMINI_API_KEY=<sua-chave-aqui>" > .env.local
```

**Passo 4: Iniciar dev server**
```bash
npm run dev
```

### 10.2 Fluxo de Desenvolvimento

```
Editar arquivo .tsx/.ts
    ↓
Salvar (Ctrl+S)
    ↓
Vite detecta mudança
    ↓
Fast Refresh (HMR)
    ↓
Browser recarrega módulo
    ↓
Estado preservado
    ↓
Novo componente em < 100ms
```

---

## 11. Build e Deploy

### 11.1 Arquitetura de Deployment

**Ambiente Oficial de Produção:**
- 🌐 URL: **https://myapp-bsc-lade.abacusai.app**
- 📦 Provider: **Abacus.AI**
- 🔄 CI/CD: Automático ao merge em `main`
- 🛡️ HTTPS: Padrão (obrigatório)

```
Local (Vite) → GitHub → Abacus.AI CI/CD → Production
   ↓              ↓              ↓              ↓
 Validação    Pull Request   Build+Test   Deployment
```

### 11.2 Fluxo de Desenvolvimento e Deploy

#### **Fase 1: Desenvolvimento Local (Vite)**

```bash
npm run dev
```

**Propósito:**
- ✅ Validação de interface e funcionalidades
- ✅ Testes rápidos com Hot Module Replacement
- ✅ Verificação de comportamento antes do push
- ℹ️ Ambiente isolado (não afeta produção)

**Servidor Local:**
- Porta: `http://localhost:3000`
- Modo: Development (sem otimizações)
- Variáveis: Lidas de `.env.local`

**Checklist antes de fazer push:**
- [ ] Componentes renderizam corretamente
- [ ] Integração Gemini funciona (análise de identidade, sugestão de KPIs)
- [ ] Navegação entre páginas funciona
- [ ] Dark mode ativa/desativa
- [ ] Filtros e formulários funcionam
- [ ] Não há erros no console (F12)

#### **Fase 2: Build para Produção**

```bash
npm run build
```

**O que acontece:**
1. TypeScript compilado → JavaScript
2. JSX/TSX transpilado
3. Código minificado e otimizado
4. Tree-shaking de imports não usados
5. Output em pasta `dist/`

**Saída em `dist/`:**
```
dist/
├── index.html                   # HTML minificado
├── assets/
│   ├── index-XxXxXxXx.js       # Bundle JavaScript principal
│   ├── index-XxXxXxXx.css      # CSS inline (zero HTTP requests)
│   └── vendor-XxXxXxXx.js      # Dependências (React, Router, Gemini)
└── .vite/manifest.json         # Metadados de assets
```

**Características de Produção:**
- 📦 Bundle size: ~120KB gzipped (otimizado)
- 🗜️ Minificação: Esbuild (rápido)
- 🔤 Hashing de filenames: Cache busting automático
- 📊 Source maps: Desativados (segurança)

#### **Fase 3: Validação Local (Antes de Push)**

```bash
npm run preview
```

**Propósito:**
- Simula ambiente de produção localmente
- Valida bundle final antes de enviar
- Testa compressão/gzip
- Performance da build

**Executar:**
```bash
npm run build  # Se não existir dist/
npm run preview
# Acessa em http://localhost:4173
```

**Validações:**
- [ ] Aplicação carrega corretamente
- [ ] Não há erros 404 em assets
- [ ] Gemini API funciona
- [ ] Performance aceitável (< 2s load time)

#### **Fase 4: Push para GitHub**

```bash
# 1. Status
git status

# 2. Adicionar arquivos modificados
git add .

# 3. Commit com mensagem descritiva
git commit -m "feat: descrição da funcionalidade"

# 4. Push para main
git push origin main
```

**Convenção de Mensagens:**
```
feat:     Nova funcionalidade
fix:      Correção de bug
docs:     Apenas documentação
style:    Formatação de código
refactor: Reorganização sem mudar funcionalidade
perf:     Melhorias de performance
test:     Adição de testes
ci:       Mudanças em CI/CD
```

#### **Fase 5: CI/CD Abacus.AI (Automático)**

```
Push para main
    ↓
Webhook Abacus.AI acionado
    ↓
1. Clone do repositório
2. npm install
3. npm run build
4. Testes (se configurado)
5. Deploy em https://myapp-bsc-lade.abacusai.app
    ↓
Produção Atualizada
```

**Tempo de Deploy:** ~2-5 minutos (após push)

### 11.3 Variáveis de Ambiente em Produção

**Abacus.AI Dashboard:**

1. Acesse dashboard da Abacus.AI
2. Navegue até **Settings → Environment Variables**
3. Adicione variáveis necessárias:

```env
# ========== GEMINI API (PRODUÇÃO) ==========
VITE_GEMINI_API_KEY=<api-key-producao>

# ========== FIREBASE (Futura) ==========
VITE_FIREBASE_PROJECT_ID=bsc-lade-prod
VITE_FIREBASE_API_KEY=<firebase-key-prod>
```

**Notas Importantes:**
- ✅ Variáveis em Abacus.AI **nunca** são expostas em logs
- ✅ Diferentes de `.env.local` (desenvolvimento)
- ✅ Seguramente injetadas durante build do Vite

### 11.4 Monitoramento pós-Deploy

**URL de Produção:** https://myapp-bsc-lade.abacusai.app

**Verificações pós-deployment:**

```bash
# 1. Verificar se aplicação está online
curl -I https://myapp-bsc-lade.abacusai.app

# 2. Confirmar que último commit foi deployado
# Verificar em: https://myapp-bsc-lade.abacusai.app/metadata.json
```

**Em caso de erro:**

1. Acessar Abacus.AI Dashboard
2. Verificar logs de build
3. Procurar erro em "Build History"
4. Fazer fix no código local
5. Push novamente (auto-redeploy)

### 11.5 Rollback em Caso de Problema

Se houver problema em produção:

```bash
# 1. Identificar commit anterior estável
git log --oneline

# 2. Reverter
git revert <commit-id>

# 3. Push (Abacus.AI redeploy automático)
git push origin main
```

Ou usar Abacus.AI Dashboard para redeployar commit anterior.

### 11.6 Build Optimization para Abacus.AI

**Configuração em vite.config.ts (futura):**

```typescript
export default defineConfig({
  build: {
    target: 'es2020',           // Browsers modernos
    minify: 'terser',           // Minificação agressiva
    sourcemap: false,           // Não incluir source maps em produção
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'gemini': ['@google/genai']
        }
      }
    }
  }
});
```

### 11.7 Domínio Customizado (Futuro)

Se quiser usar domínio próprio (ex: `bsc-lade.com`):

1. Registrar domínio (GoDaddy, Namecheap, etc)
2. Apontar DNS para Abacus.AI nameservers
3. Configurar em Abacus.AI Dashboard
4. Certificado SSL automático (Let's Encrypt)

---

## 12. Directives de Evolução

---

## 12. Directives de Evolução

### 12.1 Melhorias Futuras

- [ ] Context API para state management
- [ ] Firebase para persistência
- [ ] Testes com Vitest
- [ ] ESLint e Prettier
- [ ] CI/CD com GitHub Actions
- [ ] Monitoramento e observabilidade

### 12.2 Performance Tuning

```typescript
// Code splitting de rotas
const IdentidadeOrganizacional = React.lazy(() => 
  import('./pages/IdentidadeOrganizacional')
);
```

### 12.3 Docker

```dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## Conclusão

Este documento cobre a configuração técnica completa do **BSC-LADE 2**. 

**Para novos desenvolvedores:**
1. Leia seções 2 (Dependências), 4 (Env) e 10 (Dev Local)
2. Configure `.env.local`
3. Execute `npm run dev`
4. Comece a editar em `src/`

**Próxima revisão:** 31 de março de 2026

---

**Documento criado:** 14 de fevereiro de 2026  
**Status:** ✅ Aprovado para Implementação
