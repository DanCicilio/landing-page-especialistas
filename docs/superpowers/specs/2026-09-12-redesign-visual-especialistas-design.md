# Redesenho visual da landing page (Magic UI + Aceternity)

**Data:** 2026-09-12
**Repositório:** DanCicilio/landing-page-especialistas
**Status:** Aprovado para planejamento

## Contexto e problema

A landing page atual (Dan Cicilio, Pri Martins & Pietro Cicilio — agência de web design, performance e Google Meus Negócios) está implementada em Next.js 14 + Tailwind puro, com gradientes estáticos e animações CSS básicas (fade/slide). O layout é bem estruturado, mas carece da "atratividade visual" que sites modernos (SaaS premium, tipo Linear/Vercel/Stripe) entregam através de motion design.

Existem hoje duas versões quase idênticas do site: `app/page.jsx` (PT) e `app/en/page.jsx` (EN), cada uma com seu próprio `ContactModal` inline duplicado.

## Objetivo

Reformar visualmente todas as seções da landing page usando componentes das bibliotecas gratuitas **Magic UI** e **Aceternity UI** (modelo copy-paste, sem custo, compatíveis com Tailwind), mantendo o conteúdo/copy atual e resolvendo a duplicação PT/EN como parte do trabalho.

**Fora de escopo:** mudança de copy/conteúdo; uso do 21st.dev (adiado até haver fluxo de caixa — ver decisão registrada); novas seções; SEO/analytics.

## Paleta de cores (decisão fundamentada)

Pesquisa de psicodinâmica das cores aplicada ao nicho (agência de marketing digital/performance para PMEs, posicionamento premium):

- **Base (primary): indigo/roxo** — transmite confiança + tecnologia (indigo) e criatividade/premium (roxo); tendência 2026 para diferenciar marcas de tecnologia sem cair no azul corporativo genérico.
- **Acento (accent): âmbar/laranja** — usado **somente** em CTAs/botões de ação, onde vermelho/laranja comprovadamente aumenta conversão (dados de A/B testing).
- **Descartado:** paleta dourado/oliva encontrada nos materiais de marca antigos (`D:\CLIENTES\MARTINSCICILIO.COM`) — tom mais orgânico/artesanal, não alinhado a "performance e conversão digital".
- Fontes: Studio1 Design (color psychology & conversions), BizNameLab (tech brand palette 2026), LD Marketing (psicologia das cores).

Essa paleta é implementada como tokens em `tailwind.config.js` (`primary`, `primary-dark`, `accent`), não hardcoded nos componentes.

## Arquitetura

```
app/
  page.jsx          → composição das seções (PT)
  en/page.jsx        → composição das seções (EN)
components/
  ContactModal.jsx   → único componente, recebe locale/textos como prop (elimina duplicação)
  sections/
    Hero.jsx
    Services.jsx
    GoogleBusiness.jsx
    Portfolio.jsx
    Team.jsx
    CtaFinal.jsx
    SiteFooter.jsx
  magicui/            → componentes copiados do Magic UI usados nas seções acima
  aceternity/          → componentes copiados do Aceternity UI usados nas seções acima
lib/
  i18n/content.js     → dicionário PT/EN com os textos de cada seção (extraídos do conteúdo atual)
```

Cada componente em `components/sections/` recebe `{ locale, content }` e não contém texto hardcoded — isso elimina a duplicação total dos arquivos PT/EN sem mudar o conteúdo existente.

### Dependências novas
- `framer-motion` (ou `motion`, conforme a versão que os componentes copiados exigirem)
- `clsx`, `tailwind-merge` (utilitários que os componentes Magic UI/Aceternity esperam)

### Ajustes em `tailwind.config.js`
- Tokens de cor (`primary`, `primary-dark`, `accent`)
- Keyframes/animações exigidas pelos componentes copiados (grid pattern, shimmer, border-beam, meteors, etc. — cada componente Magic UI/Aceternity documenta suas próprias keyframes)

## Mapeamento seção a seção

| Seção | Estado atual | Novo tratamento |
|---|---|---|
| Hero | gradiente estático + 2 blobs decorativos | fundo `Spotlight` ou `AnimatedGridPattern`; headline com `TextGenerateEffect`; CTAs em `ShimmerButton` |
| Serviços | 4 cards estáticos, ícone-bloco colorido | `BentoGrid` (Magic UI) com `BorderBeam` no hover |
| Google Meus Negócios | 2 colunas estáticas, card de estatística fixo | mantém layout de 2 colunas; número 73% vira `NumberTicker` animado ao entrar na viewport |
| Portfólio | 3 cards com gradiente estático | `3D CardContainer` (Aceternity) com tilt no mouse |
| Time | 3 avatares-bloco coloridos | `CardHoverEffect` (Aceternity) com glow/rotação sutil |
| CTA final | gradiente + botão estático | fundo `BackgroundBeams`/`Meteors`; botão em `ShimmerButton` |
| Footer | estático | sem alteração (não precisa de motion) |
| ContactModal | duplicado em PT/EN | unificado em `components/ContactModal.jsx`, texto vem de `lib/i18n/content.js` |

## Testes / verificação

- `npm run dev` e checagem visual via browser das duas rotas (`/` e `/en`) em desktop e mobile (viewport emulado).
- Confirmar que todos os links/CTAs (WhatsApp, e-mail, LinkedIn, Instagram) continuam funcionando após a extração dos componentes.
- Checar `npm run build` para garantir compatibilidade com o deploy atual na Vercel (`vercel.json` já configurado).
- Revisão visual final comparando com a paleta aprovada (sem cores fora do tema indigo/roxo/âmbar).

## Decisões registradas em memória (contexto entre sessões)
- Priorizar sempre ferramentas gratuitas até haver fluxo de caixa (21st.dev adiado).
- Escolher paletas de cor sempre via pesquisa de psicodinâmica das cores + nicho, não por preferência isolada.
