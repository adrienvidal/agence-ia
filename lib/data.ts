export const SITE_URL = "https://viloris.io";

export const SHOW_REALISATIONS = true;
export const SHOW_UPCOMING_PROJECT = false;
export const CALENDLY_URL = "https://calendly.com/viloris/30min";

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
    "Nous aidons les entreprises à scaler sans recruter: en construisant l'infrastructure IA et web qui travaille à leur place.",
  cta_primary: "Réserver mon audit gratuit",
  cta_secondary: "Voir mes réalisations",
  gdpr: "RGPD · données hébergées en Europe",
  workflow: {
    filename: "lead_qualification",
    steps: [
      { label: "Lead reçu via formulaire", time: "09:42:01" },
      { label: "Agent IA analyse le profil", time: "09:42:02" },
      { label: "Score de qualification : 87/100", time: "09:42:03" },
      { label: "CRM mis à jour automatiquement", time: "09:42:04" },
      { label: "Email de bienvenue envoyé", time: "09:42:04" },
      { label: "Notification Slack → vous", time: "09:42:05" },
    ],
    footer: "6 actions · 0 intervention humaine",
    caption: "Exemple d'automatisation déployée en 2 semaines",
  },
  clients_tagline:
    "12 ans à construire des interfaces exigeantes pour des grandes marques. Cette rigueur, je l'applique aujourd'hui aux PME qui veulent le même niveau d'exécution, sans les délais d'une agence.",
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
    title: "Temps perdu",
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
  label: "Systèmes types",
  title: "Ce que nous pouvons construire pour vous",
  subtitle:
    "Des exemples de ce que nous construisons. Chaque mission part de votre réalité, pas d'un catalogue.",
  note: "Votre situation ne ressemble à aucun de ces cas ? C'est souvent le signe qu'elle mérite une solution sur-mesure.",
  demo_badge: "Cas d'usage",
  cta: "Réserver mon audit gratuit",
  problem_label: "Problème",
  solution_label: "Solution",
};

export const PROJECTS = [
  {
    name: "Qualification de leads IA",
    tags: ["Agent IA sur-mesure", "N8n", "RAG"],
    subtitle: "Qualification de leads automatique",
    description:
      "Un agent IA qui qualifie les leads entrants 24h/24, répond aux questions fréquentes et prend les rendez-vous sans intervention humaine.",
    problem:
      "Vous triez vos leads manuellement, répondez aux mêmes questions, gérez les rendez-vous à la main. Des heures perdues chaque jour, sans garantie de suivi.",
    solution:
      "Un workflow N8n couplé à un agent RAG qui analyse, qualifie et route chaque lead vers le bon interlocuteur.",
    metric: { value: "3h", label: "Gain de temps par jour" },
  },
  {
    name: "Synchronisation CRM automatisée",
    tags: ["Automatisation", "CRM", "Reporting"],
    subtitle: "Synchronisation CRM × Notion × Email",
    description:
      "Toutes les données client centralisées et synchronisées en temps réel. Reporting automatique chaque lundi matin.",
    problem:
      "Vos outils ne communiquent pas entre eux. Chaque donnée est saisie deux fois, les rapports n'existent pas, les décisions se prennent à l'instinct.",
    solution:
      "Un pipeline N8n bidirectionnel qui synchronise tout automatiquement et génère des rapports via IA.",
    metric: { value: "100%", label: "Données fiables, zéro saisie manuelle" },
  },
  {
    name: "Relances commerciales automatiques",
    tags: ["Automatisation", "N8n", "Email"],
    subtitle: "Séquence de suivi post-devis automatisée",
    description:
      "Un système qui détecte les devis sans réponse et déclenche une séquence de relance personnalisée au bon moment — sans aucune intervention manuelle.",
    problem:
      "Vous envoyez un devis et vous attendez. Les relances manuelles tombent dans l'oubli. Des prospects chauds refroidissent faute d'un simple suivi.",
    solution:
      "Un workflow N8n qui surveille vos devis ouverts et envoie des relances ciblées selon l'inaction du prospect, jusqu'à la décision.",
    metric: { value: "0", label: "prospect oublié après un devis envoyé" },
  },
];

export const UPCOMING_PROJECT = {
  title: "Réceptionniste Vocal IA",
  status: "En développement",
  description: "Agent téléphonique 24/7 · en cours de build",
};

export const PROCESS_SECTION = {
  label: "Processus",
  title: "6 étapes. Zéro mauvaise surprise.",
  beyond_title: "Et après la livraison ?",
  beyond_description:
    "Nous ne disparaissons pas une fois le projet terminé. Si vous voulez continuer à optimiser, ajouter des automatisations ou scaler sans recruter, un accompagnement mensuel est possible.",
  cta: "Discuter de mon projet",
};

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Appel découverte — gratuit",
    body: "30 minutes pour identifier ce qui freine vraiment votre croissance. Nous posons des questions. Pas de pitch. Pas d'engagement.",
  },
  {
    n: "02",
    title: "Diagnostic & proposition",
    body: "Si votre situation correspond, vous recevez une proposition sous 48h. Prix fixe, périmètre clair, zéro zone grise.",
  },
  {
    n: "03",
    title: "Signature & démarrage",
    body: "Vous signez le devis et réglez 50 % à la commande. On démarre dans les 48h.",
  },
  {
    n: "04",
    title: "Construction du système",
    body: "Nous construisons chaque automatisation de zéro, documentée avant d'être développée. Vous voyez ce qui se construit, étape par étape.",
  },
  {
    n: "05",
    title: "Suivi transparent",
    body: "Un espace Notion dédié, mis à jour en continu. Un point écrit chaque fin de semaine — vous savez toujours où on en est.",
  },
  {
    n: "06",
    title: "Livraison garantie",
    body: "Nous livrons, vous testez. Les 50 % restants sont réglés uniquement quand vous êtes 100 % satisfait.",
  },
];

export const FOUNDER_SECTION = {
  label: "Le mot du fondateur",
  name: "Adrien Vidal",
  company: "Fondateur · VILORIS.IO",
  role: "Développeur IA & Automatisation",
  bio: [
    "J'ai passé 12 ans à construire des interfaces exigeantes pour Chanel, Darty, Fnac. Cette rigueur technique, je l'applique à l'automatisation IA pour les PME qui veulent scaler sans recruter.",
    "L'objectif à chaque mission : comprendre ce qui freine vraiment votre croissance et construire des systèmes sur-mesure qui vous redonnent du temps.",
  ],
  testimonial: {
    quote:
      "Il est intervenu sur des projets de A à Z, dans un contexte exigeant, avec des contraintes fortes de performance.",
    author: "Marine Benoit-Jannin",
    role: "Lead développeur front-end — Chanel",
  },
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
L'objectif : comprendre ce qui freine votre croissance et voir si nous pouvons y remédier ensemble. Aucun pitch, aucune pression.

Si votre situation correspond à ce que nous faisons, vous recevez un devis sur-mesure. Une fois validé, nous démarrons dans les 48h.

Chaque mission inclut une phase de diagnostic approfondi. Nous cartographions vos processus, nous identifions les points de friction et nous construisons la solution adaptée à votre réalité. Jamais un template.`,
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: `Nous nous adaptons à votre environnement existant. Aucune raison de tout reconstruire ou de vous imposer des outils que vous ne maîtrisez pas.

Notre stack principal tourne autour de N8N pour l'automatisation, orchestré avec vos outils du quotidien : Notion, Google Workspace, votre CRM. Pour les agents IA, nous utilisons des modèles hébergés en Europe, conformes RGPD.

Le choix final dépend toujours de votre projet et de vos contraintes. Nous prenons ce qui est juste pour vous, pas ce qui est tendance.`,
  },
  {
    q: "Combien de temps prend la livraison ?",
    a: `Une automatisation ciblée peut être opérationnelle en quelques jours.
Un système complet (agent IA, intégrations, site) demande généralement 2 à 4 semaines.

Les délais sont définis ensemble lors de l'onboarding, une fois que nous avons une vision claire du périmètre. Aucun chiffre annoncé au hasard.

Si un imprévu technique survient, vous êtes informé immédiatement. La transparence fait partie du contrat.`,
  },
  {
    q: "Ai-je besoin de compétences techniques ?",
    a: `Aucune. Tout ce que nous livrons est documenté et pris en main avec vous.

L'objectif : que vous soyez autonome dès la livraison, sans dépendre de nous pour les opérations du quotidien.

Pour les évolutions et la maintenance, c'est une autre histoire. C'est là qu'une relation long terme prend tout son sens.`,
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: `La livraison est un point de départ. Un système digital qui reste figé le jour de sa mise en ligne perd de sa valeur en quelques mois.

Nous proposons un accompagnement mensuel pour monitorer vos automatisations, les faire évoluer et en ajouter de nouvelles au fil de votre croissance.

L'objectif à terme : scaler sans jamais être ralenti par l'opérationnel.`,
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: `Vos données restent en Europe, point final.

Nous n'utilisons aucune plateforme américaine pour traiter vos informations. Nos solutions sont hébergées sur des serveurs européens, conformes RGPD, avec des modèles IA dédiés à votre projet, jamais mutualisés.

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

export const CONTACT_FORM = {
  title: "Réservez votre audit gratuit",
  subtitle: "Décrivez votre situation. Je reviens sous 24h.",
  fields: {
    name: { label: "Prénom & Nom", placeholder: "Jean Dupont" },
    email: { label: "Email professionnel", placeholder: "jean@entreprise.com" },
    company: { label: "Entreprise", placeholder: "Votre société (optionnel)" },
    services: { label: "Service(s) qui vous intéressent" },
    message: {
      label: "Votre situation en quelques mots",
      placeholder: "Ex : je perds 2h par jour à qualifier mes leads manuellement…",
    },
  },
  services: [
    "Agents IA & Automatisations",
    "Site Web Haute Performance",
    "Maintenance & Évolution",
    "Je ne sais pas encore",
  ],
  cta: "Envoyer ma demande",
  gdpr: "Données hébergées en Europe · RGPD",
  success: {
    title: "Demande reçue !",
    message:
      "Je reviens vers vous sous 24h. En attendant, vous pouvez réserver directement un créneau dans mon agenda.",
    cta: "Réserver mon créneau maintenant",
  },
};

export const FOOTER = {
  address: {
    street: "4 place Auguste Métivier",
    city: "75020 Paris",
  },
  contact: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adrien-vidal-308b4864/",
      icon: "linkedin",
    },
  ],
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
