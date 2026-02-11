# 📄 Documento de Requisitos do Produto (PRD) - Portfólio Digital 2025 (Grupo Zonta)

> **Versão:** 1.0  
> **Status:** Em Desenvolvimento  
> **Público-Alvo:** Stakeholders Internos, Equipes de Desenvolvimento e Marketing  
> **Dispositivo Alvo:** LG 50" UM7500PSB (Otimizado para TV e Kiosk Mode)

---

## 1. Visão Geral do Produto

O **Portfólio Digital 2025** é uma aplicação web interativa desenvolvida para apresentar o ecossistema digital do **Grupo Zonta** (Condor, Gigante Atacadista, Hipermais, etc.). A plataforma serve como um _showcase_ visual de alta fidelidade, permitindo a exibição dos projetos em dois modos principais: uma grade de navegação interativa e um modo de apresentação automática (slideshow).

O design é focado em elegância corporativa, utilizando a identidade visual do grupo (Azul Condor e Vermelho Condor) com animações fluidas para criar uma experiência imersiva em telas grandes.

---

## 2. Objetivos Principais

1.  **Centralizar a Apresentação:** Reunir todos os produtos digitais do grupo em uma única interface coesa.
2.  **Facilitar Demonstrações:** Permitir que stakeholders apresentem o portfólio sem depender de navegação manual complexa em múltiplos sites.
3.  **Experiência Visual Premium:** Utilizar animações e transições de alta qualidade para refletir a modernidade e inovação do grupo.
4.  **Flexibilidade de Exibição:** Suportar tanto interação direta (kiosk) quanto modo passivo (TV de recepção/hall).

---

## 3. Funcionalidades Chave

### 3.1. Tela Inicial (Grid View)

- **Grade de Projetos:** Exibição de todos os sites cadastrados em uma grade responsiva.
- **Cartões Interativos:** Cada projeto é representado por um cartão com:
  - Logo oficial (extraído de `public/logos`).
  - Status do projeto (Online, Novo, Finalizado).
  - Descrição curta e metadados (Empresa, Produção Interna/Agência).
  - Link direto para acesso.
- **Design:** Fundo com padrão "Enterprise Grid", cabeçalho com branding e rodapé informativo.

### 3.2. Modo Apresentação Automática (AutoSlideshow)

- **Navegação Cíclica:** Alterna automaticamente entre os projetos a cada 15 segundos.
- **Conteúdo Rico:**
  - Verifica se há vídeo de demonstração (`video`).
  - Se não, verifica se o site permite iframe (`allowIframe`).
  - Fallback para screenshot animado (efeito Ken Burns).
- **Barra de Progresso:** Indicador visual do tempo restante para o próximo slide.
- **Controles Manuais:** Botões para pausar, avançar ou retroceder manualmente.
- **Simulação de Tráfego:** Overlay visual indicando "Simulação de Tráfego Real" para maior imersão.

---

## 4. Especificações Técnicas

### 4.1. Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (com variáveis CSS nativas)
- **Animações:** [Framer Motion](https://www.framer.com/motion/) (transições de página, hovers e sliders)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Linguagem:** TypeScript

### 4.2. Estrutura de Dados (`src/data/sites.json`)

Os projetos são gerenciados através de um arquivo JSON centralizado, facilitando a manutenção sem necessidade de alterar código.

```json
{
  "name": "Nome do Projeto",
  "company": "Empresa Responsável",
  "url": "https://url-do-projeto.com",
  "production": "Interno" | "Agência",
  "description": "Breve descrição...",
  "status": "Online" | "Novo" | "Finalizado",
  "thumbnail": "/logos/nome-do-arquivo.png",
  "screenshot": "/screenshots/nome.png",
  "video": "/videos/nome.webp",
  "allowIframe": boolean
}
```

### 4.3. Assets e Mídia

- **Logos:** Armazenados localmente em `/public/logos` para garantir carregamento instantâneo e alta resolução.
- **Screenshots/Vídeos:** Assets de fallback localizados em `/public/screenshots` e `/public/videos`.
- **Branding:**
  - `condor-red`: #D71920
  - `condor-blue`: #002D5C
  - `enterprise-bg`: #F3F6F8

---

## 5. Guia de Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
npm install
# ou
yarn install
```

### Ambiente de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
npm run build
npm start
```

---
