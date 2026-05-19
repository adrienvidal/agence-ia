export const CALENDLY_URL = "https://calendly.com/adrienvidal";

export const META = {
  title: "Adrien Vidal — Automatisation IA & Agents sur-mesure",
  description:
    "Développeur senior (Chanel, Darty, Fnac) spécialisé en automatisation IA et agents sur-mesure pour les PME qui veulent scaler sans recruter. Diagnostic gratuit 30 min.",
  og: {
    title: "Adrien Vidal — Automatisation IA & Agents sur-mesure",
    description: "Automatisation IA et agents sur-mesure pour PME. Diagnostic gratuit 30 min.",
  },
};

export const NAV = {
  cta: "Audit gratuit",
};

export const NAV_LINKS = [
  { label: "Services", href: "#diagnostic" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Processus", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export const TOOLS = [
  "N8n",
  "OpenAI",
  "Next.js",
  "Notion",
  "Vercel",
  "Supabase",
  "GitHub",
  "Anthropic",
  "Tailwind",
];

export const TOOLS_BAR = {
  label: "Les outils que j'utilise au quotidien",
};

export const PAINS = [
  {
    title: "Temps perdu",
    body: "Copier-coller des données, répondre aux mêmes e-mails, gérer la facturation manuellement… Vous êtes l'otage de votre propre système.",
  },
  {
    title: "Données éparpillées",
    body: "Notion, CRM, Google Sheets — aucun outil ne se parle. Zéro vision claire pour prendre des décisions.",
  },
  {
    title: "Trafic & acquisition",
    body: "Votre produit est bon mais personne ne le trouve. Pas de stratégie d'acquisition — vous dépendez du bouche-à-oreille.",
  },
];

export const PROJECTS = [
  {
    name: "LeadBot Pro",
    tags: ["Agent IA sur-mesure", "N8n", "RAG"],
    subtitle: "Qualification de leads automatique",
    description:
      "Un agent IA qui qualifie les leads entrants 24/7, répond aux questions fréquentes et prend les rendez-vous sans intervention humaine.",
    problem:
      "L'équipe commerciale passait 3h/jour à trier des leads non qualifiés et répondre aux mêmes questions.",
    solution:
      "Un workflow N8n + agent RAG qui analyse, qualifie et route chaque lead vers le bon interlocuteur.",
    metric: { value: "3h", label: "Gain de temps par jour" },
  },
  {
    name: "SyncFlow",
    tags: ["Automatisation", "CRM", "Reporting"],
    subtitle: "Synchronisation CRM × Notion × Email",
    description:
      "Toutes les données client centralisées et synchronisées en temps réel. Reporting automatique chaque lundi matin.",
    problem:
      "3 outils qui ne se parlaient pas. Des données en double, des erreurs de saisie, aucun rapport fiable.",
    solution:
      "Un pipeline N8n bidirectionnel qui synchronise tout automatiquement et génère des rapports IA.",
    metric: { value: "100%", label: "Données fiables, zéro saisie manuelle" },
  },
];

export const UPCOMING_PROJECT = {
  title: "Réceptionniste Vocal IA",
  status: "En développement",
  description: "Agent téléphonique 24/7 · en cours de build",
};

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Audit gratuit 30 min",
    body: "On identifie vos process chronophages et vos leviers de croissance. Pas de pitch.",
  },
  {
    n: "02",
    title: "Appel d'onboarding",
    body: "On définit la solution adaptée à votre activité, votre budget et vos objectifs.",
  },
  {
    n: "03",
    title: "Solution sur-mesure",
    body: "Je construis le système. Pas un template — chaque automatisation est documentée avant développement.",
  },
  {
    n: "04",
    title: "Démarrage du projet",
    body: "Vous signez le devis et réglez 50% à la commande. On démarre immédiatement.",
  },
  {
    n: "05",
    title: "Suivi en temps réel",
    body: "Un espace Notion dédié. Rapport chaque fin de semaine.",
  },
  {
    n: "06",
    title: "Livraison & solde",
    body: "Livraison clé en main. Vous réglez les 50% restants uniquement quand vous êtes 100% satisfait.",
  },
];

export const HERO = {
  badge: "Automatisations & Agents IA",
  headline: "Travaillez moins.",
  headline_accent: "Produisez plus.",
  description:
    "J'aide les entreprises à se doter d'une infrastructure web et IA performante — pour scaler sans recruter.",
  cta_primary: "Réserver mon audit gratuit",
  cta_secondary: "Voir mes réalisations",
  social_proof: "100% clients satisfaits",
  gdpr: "RGPD · données hébergées en Europe",
  card: {
    name: "Adrien Vidal",
    role: "Développeur IA & Automatisation",
    availability: "Répond en 24h",
    stat1: { value: "10 ans", label: "Expérience front-end senior" },
    stat2: { value: "+8", label: "Systèmes IA déployés" },
    stack_label: "Stack signature",
    stack: ["N8n", "OpenAI", "Anthropic", "Next.js", "Notion"],
  },
};

export const PAIN_SECTION = {
  label: "Diagnostic",
  title: "Votre entreprise est freinée par l'opérationnel.",
  subtitle: "Vous scalez, mais vos process ne suivent pas…",
  cta: "Automatiser mes process",
};

export const REALISATIONS_SECTION = {
  label: "Réalisations",
  title: "Ce qu'on a déjà construit",
  cta: "Lancer votre projet",
  problem_label: "Problème",
  solution_label: "Solution",
};

export const PROCESS_SECTION = {
  label: "Processus",
  title: "Une méthode claire et décisive",
  beyond_title: "Au-delà de la mission",
  beyond_description:
    "Je ne disparais pas après la livraison. Retainer disponible pour optimiser en continu, ajouter de nouvelles automatisations et accompagner votre croissance.",
  cta: "Discuter de mon projet",
};

export const FOUNDER_SECTION = {
  label: "Le mot du fondateur",
  name: "Adrien Vidal",
  company: "Fondateur · WEBNROLLS EURL",
  role: "Développeur IA & Automatisation",
  clients_label: "Ils m'ont fait confiance",
  bio: [
    "J'ai passé 10 ans à construire des interfaces exigeantes pour Chanel, Darty, Fnac. Cette rigueur technique, je l'applique aujourd'hui à l'automatisation IA pour les PME qui veulent scaler sans recruter.",
    "Mon objectif : comprendre ce qui freine vraiment votre croissance et construire des systèmes sur-mesure qui vous redonnent votre temps.",
  ],
  quote:
    "« On n'automatise pas pour remplacer l'humain. On le libère pour qu'il se concentre sur ce qui compte vraiment. »",
  quote_attribution: "— Adrien Vidal · Fondateur, WEBNROLLS",
};

export const FAQ_SECTION = {
  label: "FAQ",
  title: "Vos questions, nos réponses",
  guarantee_title: "Satisfait, ou on corrige.",
  guarantee_description:
    "Je ne lâche pas un projet tant que vous n'êtes pas 100% satisfait du résultat final.",
};

export const CTA_FINAL = {
  headline: "Une tâche vous fait perdre des heures ?",
  headline_accent: "Discutons-en.",
  description: "Réservez un audit gratuit. Pas de pression commerciale, que de l'expertise.",
  cta: "Lancer l'audit gratuit",
  subtext: "Audit 100% gratuit et sans engagement",
};

export const FOOTER = {
  copyright: "© 2025 Adrien Vidal · WEBNROLLS EURL · Paris",
  links: [
    { label: "FAQ", href: "#faq" },
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};

export const CLIENTS = ["Chanel", "Fnac", "Darty", "Prisma Media", "Yves Rocher"];

export const FAQ = [
  {
    q: "Comment se passe une mission concrètement ?",
    a: "On commence par un audit gratuit de 30 min pour cartographier vos process. Ensuite je vous envoie une proposition sur-mesure sous 48h. Après validation, le projet démarre dans la semaine.",
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "N8n pour les automatisations, OpenAI / Anthropic pour les agents IA, Next.js + Tailwind pour les sites, Notion comme CRM et espace de suivi client, Vercel pour le déploiement.",
  },
  {
    q: "Combien de temps prend la livraison ?",
    a: "Entre 1 et 4 semaines selon la complexité. Un agent IA Starter = 1 semaine. Un système complet avec intégrations = 3 à 4 semaines.",
  },
  {
    q: "Ai-je besoin de compétences techniques ?",
    a: "Aucune. Je livre avec une documentation complète et une session de prise en main. Vous pouvez tout piloter depuis Notion.",
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: "Je reste disponible pour des ajustements pendant 30 jours. Un retainer mensuel est disponible pour continuer à optimiser et développer le système.",
  },
  {
    q: "Mes données passent-elles par ChatGPT ?",
    a: "Non. Selon votre choix, vos données peuvent transiter uniquement par des modèles hébergés en Europe (Mistral, Azure EU). Je configure ça dès le départ.",
  },
];
