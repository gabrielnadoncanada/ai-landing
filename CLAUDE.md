# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # next dev — serveur de développement (http://localhost:3000)
npm run build        # next build — build de production (lance aussi le check TypeScript)
npm run start        # next start — sert le build de production

npm run lint         # eslint . (config Next flat + prettier)
npm run lint:fix     # eslint . --fix
npm run format       # prettier --write .
npm run format:check # prettier --check .

node scripts/hex-to-oklch.mjs "#2f97d4" ["#..."]   # convertit un hex sRGB en oklch()
node scripts/token-usage.mjs                       # compte l'usage réel de chaque token --color-*
```

Il n'y a **pas de tests ni de `tailwind.config.js`** dans ce projet (Tailwind v4 = config CSS-first).

## Architecture

Landing page « Supo » (assistant IA). Stack : **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4**.

### Double existence : prototype statique ↔ portage Next.js

Le même site existe sous deux formes qui partagent **`styles.css`** :

| Statique (prototype d'origine) | Next.js (portage)                                              |
| ------------------------------ | -------------------------------------------------------------- |
| `index.html` (markup)          | `app/page.tsx` assemble `app/components/*.tsx`                 |
| `app.js` (JS vanilla)          | `app/components/SupoRuntime.tsx` (`"use client"`, `useEffect`) |
| `styles.css`                   | `styles.css` (importé dans `app/layout.tsx`)                   |

Le prototype statique (`index.html` + `app.js`) reste en **JS vanilla** (chargé tel quel par le navigateur, hors build Next) ; seul le portage Next.js est en TypeScript.

Chaque composant de `app/components/` est le portage React d'une section de `index.html` (Header, Hero, Features, Crafted, Pricing, Testimonials, FinalCta, Footer, MenuOverlay, SvgSymbols). Ils sont réexportés via `app/components/index.ts`.

**`app.js` et `SupoRuntime.tsx` implémentent le même comportement dynamique** (carrousel de témoignages, pastilles « drops », étincelles, topbar collante au scroll, overlay de menu, smooth-scroll des ancres, toast de sélection de plan). Toute modification de l'un doit être répercutée dans l'autre. `SupoRuntime.tsx` ajoute en plus le nettoyage des listeners au démontage.

Ces comportements reposent sur des **IDs DOM partagés** entre le markup et le runtime : `topbar`, `menuOverlay`, `menuOpen`, `menuClose`, `row1`, `row2`, `drops`, `spark`. Renommer un ID exige de le changer aux deux endroits.

### Système de design CSS — c'est le cœur du dépôt

`styles.css` utilise la config CSS-first de Tailwind v4 (pas de fichier JS de config) et est organisé en **3 couches de tokens** (voir les bannières de commentaires dans le fichier). C'est l'objet du refactor en cours (cf. historique git) :

1. **Primitives** (`:root`) — les **~27 seules vraies couleurs OKLCH**, ce sont les leviers. Les rampes `--brand-*` sont pilotées par `--brand-hue`, les rouges d'erreur par `--danger-hue`.
2. **Sémantique / mapping** (`@theme inline`) — tokens `--color-*`, alias d'une ligne vers une primitive (souvent via `color-mix()`). **Aucune couleur magique ici.**
3. **Échelle** (`@theme`) — breakpoints (`xs`/`mobile`/`tablet`), échelle de titres (`--text-hero`, `--text-h2`…), rayons, tracking, animations.

**Règle d'or palette : pour changer une couleur, on édite les primitives — jamais les valeurs en aval.** Préférer `color-mix(in oklch, …)` et `var()` à toute nouvelle couleur littérale.

**Règle de tokenisation (post-nettoyage) :** on ne crée un token `--color-*` que s'il est **réutilisé à plusieurs endroits** ou s'il fait partie de la **palette d'un composant** (ex. `danger-*`, `glowbar-*`, boutons `*-button-*`). Une couleur **mono-usage** s'inline directement au point d'appel — pas de token « d'un seul endroit » :

- dans une classe de composant → arbitrary value Tailwind avec underscores : `bg-[color-mix(in_oklch,var(--glow-cyan)_55%,transparent)]` ;
- dans une `@utility` de `styles.css` → CSS normal (espaces) directement dans la règle.
  ⚠️ En remplaçant une **classe** utilitaire (`bg-foo`) par une arbitrary value, garder l'**espace** qui sépare des classes voisines — Tailwind n'émet aucune erreur sur une classe fusionnée/invalide (le build passe quand même).

- Les tokens `--color-*` de `@theme inline` deviennent automatiquement des utilitaires Tailwind (`bg-bg`, `text-ink`, `border-line`, etc.).
- Les ombres et gradients réutilisés sont des **custom utilities** définies avec `@utility` (`shadow-btn`, `bg-pro-card`, `bg-title-gradient`…), dérivées de l'accent. Les ombres composées utilisent `color-mix(... var(--brand-500) X%, transparent)`.
- Les polices sont chargées via `next/font/google` dans `app/layout.tsx` (Poppins → `--font-poppins`, Newsreader → `--font-newsreader`) et exposées en tokens `--font-body` / `--font-display`.

### Conventions

- **TypeScript** : `tsconfig.json` en mode `strict`. Composants en `.tsx`. La plupart sont présentationnels sans props ; seuls `layout.tsx` (props `children`) et `SupoRuntime.tsx` (handlers DOM) portent des annotations notables.
- **ESLint** : `eslint.config.mjs` (flat config) = `eslint-config-next` (core-web-vitals + typescript) + `eslint-config-prettier`. Le prototype statique (`app.js`, `scripts/`) est ignoré.
- **Prettier** (`.prettierrc.json`) : pas de point-virgule, guillemets doubles, tri d'imports (`@ianvs/prettier-plugin-sort-imports`) et tri des classes Tailwind (`prettier-plugin-tailwindcss`).
- Server Components par défaut ; seul ce qui touche au DOM/navigateur porte `"use client"`.
