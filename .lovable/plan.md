# Website 90focus — Landing UI/UX

Site institucional de página única (com secções âncora + rota `/manifesto` opcional) para apresentar a app **90focus**: motivação e foco mental para jogadores de futebol. Sem backend — apenas UI/UX, moderno, minimalista, fiel ao logótipo (preto profundo + verde neon + cinza cromado).

## Direção visual

Baseada no logo enviado:

- **Paleta**: fundo `#0A0A0A` (preto estádio), superfície `#111214`, texto `#F5F5F5`, cinza `#8A8F98`, **acento verde neon `#7CFF3A`** (o mesmo do raio), toque cromado sutil em gradientes.
- **Tipografia**: display condensada/stencil desportiva para títulos (ex. _Anton_ ou _Bebas Neue_) + sans-serif técnica para corpo (ex. _Inter_ ou _Space Grotesk_). Tracking apertado, uppercase nos headings.
- **Tom**: performance, disciplina, mentalidade de atleta — não "wellness soft". Frases curtas, imperativas ("Entra em campo com a mente pronta").
- **Motion**: fade+slide subtil no scroll, hover com brilho verde nos CTAs, um raio animado (SVG stroke-draw) no hero. Nada excessivo.
- **Composição**: muito espaço negro, grelha assimétrica, linhas diagonais finas (a lembrar as riscas do "90" do logo) como divisores.

## Estrutura do site

Rota única `/` (route file `src/routes/index.tsx`) com secções:

1. **Nav fixa minimal** — logo 90focus à esquerda, links âncora (Manifesto · App · Treino Mental · FAQ), CTA "Descarregar".
2. **Hero** — fundo preto com textura de estádio esbatida, logo grande, headline tipo _"90 minutos. Uma mentalidade."_, subheadline de 1 linha, dois CTAs (App Store / Google Play — placeholders), raio verde animado.
3. **O que é o 90focus** (explicação simples pedida) — parágrafo curto + 3 pilares em cards minimais com ícone linear verde:
   - Foco pré-jogo
   - Gestão de pressão em campo
   - Recuperação mental pós-jogo
4. **Como funciona** — 3 passos numerados (01/02/03 em estilo camisola) com micro-descrição: escolhe a sessão → ouve/lê guiado → entra em campo.
5. **Features** — grelha bento 4-6 blocos: sessões áudio guiadas, rotinas pré-jogo, diário mental, respiração 4-7-8, biblioteca por posição, tracking de streak.
6. **Mockup da app** — placeholder de 2-3 ecrãs do telemóvel em ângulo (gerar imagens ou usar frames vazios com o verde de destaque).
7. **Para quem é** — 3 personas curtas: jogador amador, jogador de formação, semi-profissional.
8. **FAQ** — accordion shadcn com 5-6 perguntas.
9. **CTA final** — full-bleed preto, headline forte, botões de download.
10. **Footer** — minimal: logo, links legais, redes sociais, © 90focus.

## SEO / metadata

Em `src/routes/__root.tsx` substituir os defaults por:

- title: `90focus — Mentalidade de atleta em 90 minutos`
- description: `App de motivação e foco mental para jogadores de futebol. Sessões guiadas para antes, durante e depois do jogo.`
- og:title, og:description, og:type=website, twitter:card=summary_large_image.
- og:image só quando existir uma imagem hero real (senão omitir).
- Lang do `<html>` para `pt`.

## Detalhes técnicos

- Tudo em `src/routes/index.tsx` + componentes em `src/components/site/` (Hero, Pillars, HowItWorks, Features, Mockups, Personas, FAQ, CtaFinal, Footer, Nav).
- Tokens no `src/styles.css`: adicionar `--brand-green: oklch(...)`, `--brand-green-glow`, `--surface-1`, gradientes cromados e sombra `--shadow-glow` no `:root` (tema já é escuro por defeito neste site — override das variáveis existentes para dark permanente, sem toggle).
- Fontes carregadas via `<link>` no `head()` do `__root.tsx` (Google Fonts), **não** `@import` no CSS.
- Ícones: `lucide-react` (já disponível) — estilo linear fino.
- Animações: `framer-motion` (adicionar via `bun add framer-motion`).
- Logo: usar a imagem enviada via `lovable-assets` a partir de `/mnt/user-uploads/Focus_1.png` (sem copiar binário para o repo).
- Sem alteração de backend, sem Cloud, sem rotas API.

## Fora de âmbito

- Login, base de dados, pagamentos.
- Conteúdo real das sessões (fica placeholder).
- Versões i18n (só português, com possibilidade futura).
