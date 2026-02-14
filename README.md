<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🎯 BSC-LADE 2 - Plataforma de Gestão Estratégica com IA

> Estruture, execute e monitore a estratégia da sua organização com inteligência artificial.

**BSC-LADE 2** é uma plataforma SaaS moderna que implementa o modelo de Balanced Scorecard integrado com **Google Gemini** para auxiliar organizações na definição, execução e monitoramento de estratégia.

---

## 🌐 Ambiente de Produção

**URL Oficial:** 🔗 https://myapp-bsc-lade.abacusai.app

Acesse a plataforma já em produção hospedada em **Abacus.AI** com deploy automático.

---

## ✨ O que você pode fazer

- 📋 **Identidade Organizacional** - Capture os 5 pilares: Propósito, Negócio, Missão, Visão e Valores
- 🤖 **Análise com IA** - Gemini analisa coerência estratégica e sugere KPIs
- 📊 **Balanced Scorecard** - Defina objetivos alinhados a 4 perspectivas (Financeira, Clientes, Processos, Aprendizado)
- 🎯 **KPIs Inteligentes** - IA sugere indicadores estruturados e metodologia
- 🚀 **Projetos Estratégicos** - Gerencie iniciativas vinculadas aos objetivos
- 👥 **Controle de Acessos** - Admin, Gestor e Visualizador

---

## 🚀 Começar Rapidamente

### Pré-requisitos

- ✅ **Node.js** 18+ ([download](https://nodejs.org))
- ✅ **Git**
- ✅ **Google Gemini API Key** ([obter](https://ai.google.dev/))
- ✅ **Editor:** VSCode recomendado

### Instalação

```bash
# 1. Clonar repositório
git clone https://github.com/lasjunior99/BSC-LADE.git
cd BSC-LADE

# 2. Instalar dependências
npm install

# 3. Criar arquivo de variáveis locais
echo "VITE_GEMINI_API_KEY=your-api-key-here" > .env.local

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

O app estará disponível em: **http://localhost:3000**

### Develop Workflow

```bash
# 🔧 Desenvolvimento (hot reload habilitado)
npm run dev

# 📦 Build para produção
npm run build

# 👁️ Validar build localmente (antes de fazer push)
npm run preview

# 📤 Fazer push (CI/CD Abacus.AI auto-deploya)
git push origin main
```

---

## 📚 Documentação

Para entender o projeto em profundidade:

| Documento | Propósito | Público |
|---|---|---|
| [**PRD.md**](docs/PRD.md) | Visão, objetivos, escopo funcional, roadmap | Product, Stakeholders |
| [**TECHNICAL-SPEC.md**](docs/TECHNICAL-SPEC.md) | Stack, configuração, deployment, evolução | Desenvolvedores |
| [**README.md**](README.md) (este) | Início rápido, como contribuir | Todos |

---

## 🛠️ Stack Tecnológico

```
Frontend:   React 19.2.3 + TypeScript 5.8.2
Build:      Vite 6.2.0
Roteamento: React Router 7.12.0
IA/LLM:     Google GenAI SDK 1.37.0 (Gemini)
Styling:    Tailwind CSS (CDN)
Deploy:     Abacus.AI
```

**Por que essas escolhas?** Veja [TECHNICAL-SPEC.md › Stack Tecnológico](docs/TECHNICAL-SPEC.md#1-stack-tecnológico)

---

## 📁 Estrutura do Projeto

```
BSC-LADE/
├── src/
│   ├── pages/               # Páginas principais (4 módulos)
│   ├── components/          # Componentes reutilizáveis
│   ├── services/
│   │   └── geminiService.ts # ⭐ Integração IA
│   ├── types.ts             # Interfaces TypeScript
│   ├── constants.tsx        # Mock data
│   └── App.tsx              # Router principal
├── docs/
│   ├── PRD.md               # Product Requirements
│   └── TECHNICAL-SPEC.md    # Especificação Técnica
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .env.local (não versione)
```

---

## 🔐 Configuração de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# ========== GEMINI API ==========
VITE_GEMINI_API_KEY=sua-api-key-aqui

# ========== APP CONFIG ==========
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:3000
```

**⚠️ IMPORTANTE:** Nunca commite `.env.local`. Ele está em `.gitignore`.

Para produção, variáveis são configuradas em **Abacus.AI Dashboard**.

---

## 🤝 Como Contribuir

### Workflow de Desenvolvimento

1. **Criar branch para sua feature:**
   ```bash
   git checkout -b feature/sua-funcionalidade
   ```

2. **Desenvolver localmente:**
   ```bash
   npm run dev
   # Edite em src/
   # Vite faz hot reload automático
   ```

3. **Validar antes do push:**
   - [ ] Componentes renderizam (sem erros em F12)
   - [ ] Funcionalidades testadas
   - [ ] Dark mode funciona
   - [ ] Gemini API responde

4. **Build final:**
   ```bash
   npm run build
   npm run preview
   # Confirmar que tudo funciona
   ```

5. **Commit com convenção:**
   ```bash
   git add .
   git commit -m "feat: descrição da funcionalidade"
   # Opções: feat, fix, docs, style, refactor, perf, test, ci
   ```

6. **Push e Pull Request:**
   ```bash
   git push origin feature/sua-funcionalidade
   # Abrir PR em GitHub
   ```

### Convenção de Commits

```
feat:     Nova funcionalidade
fix:      Correção de bug
docs:     Apenas documentação
style:    Formatação (sem mudar lógica)
refactor: Reorganização de código
perf:     Melhoria de performance
test:     Adição de testes
ci:       Mudanças em CI/CD
chore:    Outras mudanças
```

Exemplo bom:
```bash
git commit -m "feat: adicionar sugestão de KPIs via Gemini"
git commit -m "fix: corrigir validação de identidade organizacional"
```

---

## 🐛 Troubleshooting

| Problema | Solução |
|---|---|
| `Gemini API key is missing` | Configure `VITE_GEMINI_API_KEY` em `.env.local` |
| `Module not found` | Execute `npm install` novamente |
| HMR não atualiza | Abra DevTools (F12), reinicie `npm run dev` |
| Build falha | Verifique erros TypeScript: `npm run build` |
| Porta 3000 ocupada | Mude em `vite.config.ts` → `server.port` |

---

## 📊 Roadmap

### Fase 1 (MVP - Atual) ✅
- [x] Identidade Organizacional com IA
- [x] Contrato de Resultados (Objetivos & KPIs)
- [x] Projetos Estratégicos
- [x] Gestão de Acessos
- [x] Deploy em Abacus.AI

### Fase 2 (Dashboard & Analytics)
- [ ] Dashboard com KPIs em tempo real
- [ ] Gráficos e relatórios visuais
- [ ] Alertas de desvios

### Fase 3 (Colaboração)
- [ ] Comentários em objetivos
- [ ] Histórico de versões
- [ ] Notificações em Slack/Teams

### Fase 4 (Enterprise)
- [ ] Multi-organizacional
- [ ] SSO/SAML
- [ ] API pública

---

## 📝 Licença

Este projeto é privado. Restrições de uso se aplicam.

---

## 👨‍💼 Suporte

- 📖 Dúvidas sobre uso? Consulte [PRD.md](docs/PRD.md)
- 🔧 Dúvidas técnicas? Consulte [TECHNICAL-SPEC.md](docs/TECHNICAL-SPEC.md)
- 🐛 Bug? [Abra uma issue no GitHub](https://github.com/lasjunior99/BSC-LADE/issues)

---

## 🚀 Deployed em

🔗 **https://myapp-bsc-lade.abacusai.app**

Cada push em `main` dispara deployment automático via CI/CD Abacus.AI (~2-5 minutos).

---

**Última atualização:** 14 de fevereiro de 2026  
**Status:** ✅ Em desenvolvimento ativo
