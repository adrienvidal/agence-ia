# Agence IA — Adrien Vidal

Landing page personnelle pour les services d'automatisation IA et agents sur-mesure.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind v4** (config CSS uniquement, pas de `tailwind.config.ts`)
- **Framer Motion** pour les animations
- **shadcn/ui** (style new-york)

## Démarrage

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run start     # Serveur de production
npm run lint      # ESLint
npm run format    # Prettier
```

## Structure

```
app/              # Next.js App Router
components/       # Sections de la page (toutes "use client")
lib/
  data.ts         # Tout le contenu statique (textes, liens, projets, FAQ)
  utils.ts        # Helper cn()
```

Tout le contenu éditorial (textes, URL Calendly, projets, FAQ) se trouve dans [`lib/data.ts`](lib/data.ts).

## Déploiement

Déployé sur [Vercel](https://vercel.com). Chaque push sur `main` déclenche un déploiement automatique.
