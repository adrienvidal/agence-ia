export const SITE_URL = "https://viloris.io";

export const SHOW_REALISATIONS = false;
export const CALENDLY_URL = "https://calendly.com/adrienvidal";

export const META = {
  title: "viloris.io — Automatisation IA & Agents sur-mesure",
  description:
    "Développeur senior (Chanel, Darty, Fnac) spécialisé en automatisation IA et agents sur-mesure pour les PME qui veulent scaler sans recruter. Diagnostic gratuit 30 min.",
  og: {
    title: "viloris.io — Automatisation IA & Agents sur-mesure",
    description: "Automatisation IA et agents sur-mesure pour PME. Diagnostic gratuit 30 min.",
  },
};

export const NAV = {
  cta: "Audit gratuit",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Processus", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  badge: "Automatisations & Agents IA",
  headline: "Travaillez moins.",
  headline_accent: "Produisez plus.",
  description:
    "J'aide les entreprises à se doter d'une infrastructure web et IA performante, pour scaler sans recruter.",
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
  clients_tagline:
    "10 ans à construire des interfaces exigeantes pour des grandes marques. Cette rigueur, je l'applique aujourd'hui aux PME qui veulent le même niveau d'exécution, sans les délais d'une agence.",
  clients: [
    { name: "Chanel", logo: "/clients/chanel.webp" },
    { name: "Fnac-Darty", logo: "/clients/fnacdarty.webp" },
    { name: "Prisma Media", logo: "/clients/prismamedia.webp" },
    { name: "Yves Rocher", logo: "/clients/yvesrocher.webp" },
  ],
};

export const TOOLS_BAR = {
  label: "Les outils que j'utilise au quotidien",
};

export const TOOLS: { label: string; icon?: string }[] = [
  { label: "N8n", icon: "SiN8n" },
  { label: "Make", icon: "SiMake" },
  { label: "Zapier", icon: "SiZapier" },
  { label: "LangChain", icon: "SiLangchain" },
  { label: "Hugging Face", icon: "SiHuggingface" },
  { label: "Python", icon: "SiPython" },
  { label: "Anthropic", icon: "SiAnthropic" },
  { label: "Next.js", icon: "SiNextdotjs" },
  { label: "Supabase", icon: "SiSupabase" },
  { label: "PostgreSQL", icon: "SiPostgresql" },
  { label: "Stripe", icon: "SiStripe" },
  { label: "Airtable", icon: "SiAirtable" },
  { label: "Notion", icon: "SiNotion" },
  { label: "Linear", icon: "SiLinear" },
  { label: "Vercel", icon: "SiVercel" },
  { label: "GitHub", icon: "SiGithub" },
  { label: "Tailwind", icon: "SiTailwindcss" },
];

export const PAIN_SECTION = {
  label: "Diagnostic",
  title: "Votre business tourne. Vos systèmes, non.",
  subtitle: "Vous avancez, mais vous portez tout à bout de bras.",
  cta: "Construire mon infrastructure digitale",
};

export const PAINS = [
  {
    title: "Vous êtes le système",
    body: "Relances manuelles, devis à recopier, suivis qui tombent à l'eau. Sans vous, rien ne tourne. Votre croissance est plafonnée par votre propre disponibilité.",
  },
  {
    title: "Vos outils ne se parlent pas",
    body: "CRM, agenda, formulaires, Google Sheets : chaque brique est isolée. Résultat : vous saisissez deux fois les mêmes infos et vous pilotez à l'instinct.",
  },
  {
    title: "Trafic & Acquisition",
    body: "Votre offre est solide, mais votre visibilité repose sur le réseau et le hasard. Pas de machine d'acquisition, pas de croissance prévisible.",
  },
];

export const SERVICES_SECTION = {
  label: "Services",
  title: "Ce que je fais pour vous",
  intro:
    "Je conçois des systèmes digitaux complets : site haute performance, agents IA et automatisations, pour que votre business attire, qualifie et convertit en automatique.",
};

export const SERVICES = [
  {
    badge: "Par où commencer",
    icon: "Bot",
    name: "Agents IA & Automatisations",
    description:
      "Vos leads qualifiés, vos emails traités, vos outils synchronisés. Sans que vous leviez le petit doigt.",
    items: [
      "Agent IA de qualification de leads",
      "Agent IA support client / FAQ",
      "Automatisations métier sur-mesure (N8n)",
      "Audit & cartographie de vos flux automatisables",
    ],
  },
  {
    badge: "L'étape suivante",
    icon: "Globe",
    name: "Site Web Haute Performance",
    description:
      "Un site qui travaille pour vous 24h/24. Chaque page est conçue pour transformer un visiteur en prospect qualifié.",
    items: [
      "Site vitrine premium orienté conversion",
      "Landing page campagne",
      "Refonte de site existant",
      "Intégration d'un agent IA directement dans votre site",
    ],
  },
  {
    badge: "Pour durer et scaler",
    icon: "Wrench",
    name: "Maintenance & Évolution Continue",
    description:
      "Votre système évolue avec vous chaque mois. Zéro bug non traité, zéro automatisation qui décroche.",
    items: [
      "Maintenance site (sécurité, performances, mises à jour)",
      "Suivi & évolution de vos agents IA",
      "Gestion continue de vos automatisations N8n",
      "Accompagnement stratégique mensuel",
    ],
  },
];

export const SERVICES_LIAISON =
  "La plupart des clients commencent par un agent IA. Le reste suit naturellement.";

export const REALISATIONS_SECTION = {
  label: "Réalisations",
  title: "Ce qu'on a déjà construit",
  cta: "Lancer votre projet",
  problem_label: "Problème",
  solution_label: "Solution",
};

export const PROJECTS = [
  {
    name: "LeadBot Pro",
    tags: ["Agent IA sur-mesure", "N8n", "RAG"],
    subtitle: "Qualification de leads automatique",
    description:
      "Un agent IA qui qualifie les leads entrants 24h/24, répond aux questions fréquentes et prend les rendez-vous sans intervention humaine.",
    problem:
      "L'équipe commerciale perdait 3h par jour à trier des leads non qualifiés et à répondre aux mêmes questions.",
    solution:
      "Un workflow N8n couplé à un agent RAG qui analyse, qualifie et route chaque lead vers le bon interlocuteur.",
    metric: { value: "3h", label: "Gain de temps par jour" },
  },
  {
    name: "SyncFlow",
    tags: ["Automatisation", "CRM", "Reporting"],
    subtitle: "Synchronisation CRM × Notion × Email",
    description:
      "Toutes les données client centralisées et synchronisées en temps réel. Reporting automatique chaque lundi matin.",
    problem:
      "Trois outils qui ne se parlaient pas. Des doublons, des erreurs de saisie, aucun rapport sur lequel s'appuyer.",
    solution:
      "Un pipeline N8n bidirectionnel qui synchronise tout automatiquement et génère des rapports via IA.",
    metric: { value: "100%", label: "Données fiables, zéro saisie manuelle" },
  },
];

export const UPCOMING_PROJECT = {
  title: "Réceptionniste Vocal IA",
  status: "En développement",
  description: "Agent téléphonique 24/7 · en cours de build",
};

export const PROCESS_SECTION = {
  label: "Processus",
  title: "Une méthode claire et décisive",
  beyond_title: "Au-delà de la mission",
  beyond_description:
    "Je ne disparais pas après la livraison. Un retainer est disponible pour optimiser en continu, ajouter de nouvelles automatisations et soutenir votre croissance sur la durée.",
  cta: "Discuter de mon projet",
};

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Audit gratuit 30 min",
    body: "On identifie vos process chronophages et vos vrais points de friction. Zéro pitch.",
  },
  {
    n: "02",
    title: "Appel d'onboarding",
    body: "On définit la solution adaptée à votre activité, votre budget et vos objectifs.",
  },
  {
    n: "03",
    title: "Solution sur-mesure",
    body: "Je construis le système. Chaque automatisation est documentée avant d'être développée. Pas un template.",
  },
  {
    n: "04",
    title: "Démarrage du projet",
    body: "Vous signez le devis et réglez 50% à la commande. On démarre dans les 48h.",
  },
  {
    n: "05",
    title: "Suivi en temps réel",
    body: "Un espace Notion dédié. Rapport chaque fin de semaine.",
  },
  {
    n: "06",
    title: "Livraison & solde",
    body: "Livraison clé en main. Les 50% restants sont réglés uniquement quand vous êtes 100% satisfait.",
  },
];

export const FOUNDER_SECTION = {
  label: "Le mot du fondateur",
  name: "Adrien Vidal",
  company: "Fondateur · WEBNROLLS EURL",
  role: "Développeur IA & Automatisation",
  clients_label: "Ils m'ont fait confiance",
  bio: [
    "J'ai passé 10 ans à construire des interfaces exigeantes pour Chanel, Darty, Fnac. Cette rigueur technique, je l'applique à l'automatisation IA pour les PME qui veulent scaler sans recruter.",
    "L'objectif à chaque mission : comprendre ce qui freine vraiment votre croissance et construire des systèmes sur-mesure qui vous redonnent du temps.",
  ],
};

export const CLIENTS = ["Chanel", "Fnac", "Darty", "Prisma Media", "Yves Rocher"];

export const FAQ_SECTION = {
  label: "FAQ",
  title: "Vos questions, nos réponses",
};

export const FAQ = [
  {
    q: "Comment se passe une mission concrètement ?",
    a: `Tout commence par un appel de 30 minutes, gratuit et sans engagement.
L'objectif : comprendre ce qui freine votre croissance et voir si on peut y remédier ensemble. Aucun pitch, aucune pression.

Si votre situation correspond à ce qu'on fait, vous recevez un devis sur-mesure. Une fois validé, on démarre dans les 48h.

Chaque mission inclut une phase de diagnostic approfondi. On cartographie vos processus, on identifie les points de friction et on construit la solution adaptée à votre réalité. Jamais un template.`,
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: `On s'adapte à votre environnement existant. Aucune raison de tout reconstruire ou de vous imposer des outils que vous ne maîtrisez pas.

Notre stack principal tourne autour de N8N pour l'automatisation, orchestré avec vos outils du quotidien : Notion, Google Workspace, votre CRM. Pour les agents IA, on utilise des modèles hébergés en Europe, conformes RGPD.

Le choix final dépend toujours de votre projet et de vos contraintes. On prend ce qui est juste pour vous, pas ce qui est tendance.`,
  },
  {
    q: "Combien de temps prend la livraison ?",
    a: `Une automatisation ciblée peut être opérationnelle en quelques jours.
Un système complet (agent IA, intégrations, site) demande généralement 2 à 4 semaines.

Les délais sont définis ensemble lors de l'onboarding, une fois qu'on a une vision claire du périmètre. Aucun chiffre annoncé au hasard.

Si un imprévu technique survient, vous êtes informé immédiatement. La transparence fait partie du contrat.`,
  },
  {
    q: "Ai-je besoin de compétences techniques ?",
    a: `Aucune. Tout ce qu'on livre est documenté et pris en main avec vous.

L'objectif : que vous soyez autonome dès la livraison, sans dépendre de nous pour les opérations du quotidien.

Pour les évolutions et la maintenance, c'est une autre histoire. C'est là qu'une relation long terme prend tout son sens.`,
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: `La livraison est un point de départ. Un système digital qui reste figé le jour de sa mise en ligne perd de sa valeur en quelques mois.

On propose un accompagnement mensuel pour monitorer vos automatisations, les faire évoluer et en ajouter de nouvelles au fil de votre croissance.

L'objectif à terme : scaler sans jamais être ralenti par l'opérationnel.`,
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: `Vos données restent en Europe, point final.

On n'utilise aucune plateforme américaine pour traiter vos informations. Nos solutions sont hébergées sur des serveurs européens, conformes RGPD, avec des modèles IA dédiés à votre projet, jamais mutualisés.

Performances maximales sans compromis sur la confidentialité. Ce n'est pas une option.`,
  },
];

export const CTA_FINAL = {
  headline: "Une tâche vous fait perdre des heures ?",
  headline_accent: "Discutons-en.",
  description: "Réservez un audit gratuit. Aucune pression commerciale, uniquement de l'expertise.",
  cta: "Lancer l'audit gratuit",
  subtext: "Audit 100% gratuit et sans engagement",
};

export const FOOTER = {
  address: {
    street: "4 place Auguste Métivier",
    city: "75020 Paris",
  },
  contact: [{ label: "contact@viloris.io", href: "mailto:contact@viloris.io" }],
  ressources: [{ label: "FAQ", href: "#faq" }],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Condition générale d'utilisation", href: "/cgu" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Politique de cookies (UE)", href: "/cookies" },
  ],
  subfooter: {
    text: "© Tous droits réservés — Site réalisé par ",
    linkLabel: "Viloris.io",
    linkHref: "https://viloris.io",
  },
};
