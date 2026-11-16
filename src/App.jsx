import { useState, useEffect, useRef, useCallback } from 'react';


const T = {
  es: {
    tabs: ['Inicio','Sobre mí','Habilidades','Proyectos','Contacto'],
    eyebrow: 'Ing. en Sistemas · El Salvador',
    status: 'Disponible para pasantías',
    heroSub: 'Próxima a egresar de Ingeniería en Sistemas Informáticos, con interés en análisis de datos y desarrollo de software. Me motiva transformar datos en información útil y explorar nuevas oportunidades para poner en práctica mis conocimientos, adquirir experiencia y seguir creciendo profesionalmente.',
    seeProjects: 'Ver proyectos',
    aboutLabel: '01 — Sobre mí',
    aboutTitle: 'Datos que cuentan historias',
    revealLines: [
      'Soy estudiante de Ingeniería en Sistemas Informáticos con enfoque en datos y Business Intelligence, y pronto egresaré.',
      'Me apasiona transformar datos crudos en historias claras que impulsan decisiones estratégicas.',
      'Cuento con certificaciones, badges y diplomas en SQL, Data Analytics y Azure DP-900 — y manejo inglés a nivel TOEFL ITP.',
      'Busco una pasantía en datos, desarrollo u otras áreas de mi carrera donde pueda aportar valor desde el primer día.',
    ],
    metaRows: [
      ['Disponibilidad','Pasantía · tiempo completo · desde dic. 2026'],
      ['Universidad','Universidad Católica de El Salvador'],
      ['Enfoque','Business Intelligence · Data Analysis · SQL'],
      ['Idiomas','Español (nativo) · Inglés TOEFL ITP (B2+)'],
    ],
    kpis: [
      {val:'5',key:'Proyectos de datos',sub:'SQL · Tableau · Power BI'},
      {val:'4',key:'Credenciales',sub:'Cisco · Microsoft · FEDISAL · CCSA'},
      {val:'B2+',key:'Inglés TOEFL ITP',sub:'Centro Cultural Salvadoreño'},
      {val:'Dic 2026',key:'Disponible desde',sub:'Pasantía · full-time'},
    ],
    certsHead: 'Certificaciones y credenciales',
    certs: [
      {name:'Data Analytics Fundamentals',org:'Cisco Networking Academy',type:'cisco'},
      {name:'Azure Data Fundamentals (DP-900)',org:'Microsoft',type:'azure'},
      {name:'Administración SQL Server',org:'FEDISAL · may. 2023',type:'sql'},
      {name:'TOEFL ITP',org:'CCSA · ene. 2022',type:'toefl'},
    ],
    skillsLabel:'02 — Habilidades',
    skillsTitle:'Stack técnico',
    skillsSub: 'Tecnologías que he usado en proyectos o que estoy aprendiendo activamente.',
    skillCols: [
      { title:'Datos y BI', items:[
        {name:'Power BI',type:'powerbi'},{name:'DAX',type:'dax'},
        {name:'Tableau',type:'tableau'},{name:'Excel',type:'excel'}
      ]},
      { title:'Lenguajes', items:[
        {name:'Python',type:'python'},{name:'SQL',type:'sql'},
        {name:'JavaScript',type:'javascript'},{name:'C#',type:'csharp'}
      ]},
      { title:'Frameworks y librerías', items:[
        {name:'React',type:'react'},{name:'.NET',type:'dotnet'},
        {name:'ASP.NET Core',type:'dotnet'},{name:'Bootstrap',type:'bootstrap'}
      ]},
      { title:'Bases de datos', items:[
        {name:'SQL Server',type:'sqlserver'},{name:'MySQL',type:'mysql'},
        {name:'MongoDB',type:'mongodb'},{name:'Firebase',type:'firebase'}
      ]},
      { title:'Diseño y colaboración', items:[
        {name:'Figma',type:'figma'},{name:'Canva',type:'canva'},
        {name:'Loom',type:'loom'},{name:'LucidChart',type:'lucid'}
      ]},
    ],
    projLabel:'03 — Proyectos',
    projTitle:'De la pregunta al producto',
    projects: [
      {num:'01',type:'Análisis de datos',name:'Dashboard de abandono de clientes',desc:'Modelo estrella de 5 tablas y 12 medidas DAX sobre 7,043 clientes. Los contratos mes a mes y la fibra óptica presentan el mayor churn.',stack:['Power BI','DAX','Power Query'],links:[],thumb:'churn',stats:[{v:'7,043',k:'clientes'},{v:'5',k:'tablas'},{v:'12',k:'medidas DAX'},{v:'3',k:'páginas'}]},
      {num:'02',type:'Desarrollo web',team:'En equipo · 3',name:'Sistema de reservas de cine',desc:'Desarrollé el módulo de empleado: reservas con mapa de asientos interactivo, boletos PDF con QR y dashboard de estadísticas.',stack:['ASP.NET Core','SQL Server','Bootstrap'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/Cinemax'}],thumb:'cine',stats:[{v:'PDF + QR',k:'boletos'},{v:'Dashboard',k:'de estadísticas'}]},
      {num:'03',type:'App móvil iOS',team:'En equipo · 2',name:'App de pedidos para panadería',desc:'Implementé la capa de datos con Firebase y participé en las vistas de admin y cliente, con reglas de negocio y precios por rol.',stack:['Swift','Firebase','MVVM'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/TrigoYMiel'}],thumb:'ios'},
      {num:'04',type:'Visualización BI',name:'Acceso a internet en el mundo',desc:'Dashboard interactivo con KPIs, mapa y tendencias de internet, móvil y banda ancha entre 1990 y 2016, con filtros por país y año.',stack:['Tableau','Our World in Data'],links:[{label:'Tableau Public →',href:'https://public.tableau.com/app/profile/sara.essie.ascencio.ch.vez/viz/TheWorldGetsConnectedInternetAccessAroundtheWorld/OurWorldinData'}],thumb:'tv'},
      {num:'05',type:'Desarrollo web',team:'En equipo · 3',name:'Manejo de productos de supermercado',desc:'Implementé el CRUD con inventario en tiempo real, lectura de códigos QR y la arquitectura base del proyecto.',stack:['React','MongoDB','JavaScript'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/FreshMarketProyecto'}],thumb:'react'},
    ],
    contactLabel:'04 — Contacto',
    contactTitle:'¡Lista para nuevos retos!',
    contactIntro: 'Me entusiasma la posibilidad de aprender, aportar mis conocimientos y crecer profesionalmente. Estoy abierta a oportunidades de pasantía en datos, desarrollo de software y otras áreas de la tecnología.',
    copyEmailLabel: 'Correo · click para copiar',
    copiedLabel: '✓ ¡Copiado!',
  },
  en: {
    tabs:['Home','About','Skills','Projects','Contact'],
    eyebrow:'Systems Engineering · El Salvador',
    status:'Available for internships',
    heroSub: 'About to graduate in Computer Systems Engineering, with an interest in data analysis and software development. I am motivated to turn data into useful information and to explore new opportunities to apply my knowledge, gain experience and keep growing professionally.',
    seeProjects:'View projects',
    aboutLabel:'01 — About me', aboutTitle:'Data that tells stories',
    revealLines:[
      'I am a Computer Systems Engineering student focused on data and Business Intelligence, and I will graduate soon.',
      'I love turning raw data into clear stories that drive strategic decisions.',
      'I hold certifications, badges and diplomas in SQL, Data Analytics and Azure DP-900 — and I speak English at TOEFL ITP level.',
      'I am looking for an internship in data, development or other areas of my career where I can add value from day one.',
    ],
    metaRows:[
      ['Availability','Internship · full-time · starting Dec 2026'],
      ['University','Universidad Católica de El Salvador'],
      ['Focus','Business Intelligence · Data Analysis · SQL'],
      ['Languages','Spanish (native) · English TOEFL ITP (B2+)'],
    ],
    kpis:[{val:'5',key:'Data projects',sub:'SQL · Tableau · Power BI'},{val:'4',key:'Credentials',sub:'Cisco · Microsoft · FEDISAL · CCSA'},{val:'B2+',key:'English TOEFL ITP',sub:'Centro Cultural Salvadoreño'},{val:'Dec 2026',key:'Available from',sub:'BI / data internship'}],
    certsHead:'Certifications & credentials',
    certs:[
      {name:'Data Analytics Fundamentals',org:'Cisco Networking Academy',type:'cisco'},
      {name:'Azure Data Fundamentals (DP-900)',org:'Microsoft',type:'azure'},
      {name:'SQL Server Administration',org:'FEDISAL · May 2023',type:'sql'},
      {name:'TOEFL ITP',org:'CCSA · Jan 2022',type:'toefl'}
    ],
    skillsLabel:'02 — Skills', skillsTitle:'Tech stack',
    skillsSub: "Technologies I've used in projects or I'm actively learning.",
    skillCols:[
      {title:'Data & BI',items:[{name:'Power BI',type:'powerbi'},{name:'DAX',type:'dax'},{name:'Tableau',type:'tableau'},{name:'Excel',type:'excel'}]},
      {title:'Languages',items:[{name:'Python',type:'python'},{name:'SQL',type:'sql'},{name:'JavaScript',type:'javascript'},{name:'C#',type:'csharp'}]},
      {title:'Frameworks & libraries',items:[{name:'React',type:'react'},{name:'.NET',type:'dotnet'},{name:'ASP.NET Core',type:'dotnet'},{name:'Bootstrap',type:'bootstrap'}]},
      {title:'Databases',items:[{name:'SQL Server',type:'sqlserver'},{name:'MySQL',type:'mysql'},{name:'MongoDB',type:'mongodb'},{name:'Firebase',type:'firebase'}]},
      {title:'Design & collaboration',items:[{name:'Figma',type:'figma'},{name:'Canva',type:'canva'},{name:'Loom',type:'loom'},{name:'LucidChart',type:'lucid'}]},
    ],
    projLabel:'03 — Projects', projTitle:'From question to product',
    projects:[
      {num:'01',type:'Data analysis',name:'Customer Churn Dashboard',desc:'5-table star schema and 12 DAX measures over 7,043 customers. Month-to-month contracts and fiber optic show the highest churn.',stack:['Power BI','DAX','Power Query'],links:[],thumb:'churn',stats:[{v:'7,043',k:'customers'},{v:'5',k:'tables'},{v:'12',k:'DAX measures'},{v:'3',k:'pages'}]},
      {num:'02',type:'Web development',team:'Team of 3',name:'Cinema Reservation System',desc:'Built the employee module: reservations with an interactive seat map, PDF tickets with QR codes, and a statistics dashboard.',stack:['ASP.NET Core','SQL Server','Bootstrap'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/Cinemax'}],thumb:'cine',stats:[{v:'PDF + QR',k:'tickets'},{v:'Dashboard',k:'statistics'}]},
      {num:'03',type:'iOS mobile app',team:'Team of 2',name:'Bakery Ordering App',desc:'Implemented the Firebase data layer and contributed to the admin and client views, with business rules and role-based pricing.',stack:['Swift','Firebase','MVVM'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/TrigoYMiel'}],thumb:'ios'},
      {num:'04',type:'BI Visualization',name:'Global Internet Access',desc:'Interactive dashboard with KPIs, a map, and trends in internet, mobile, and broadband from 1990 to 2016, filterable by country and year.',stack:['Tableau','Our World in Data'],links:[{label:'Tableau Public →',href:'https://public.tableau.com/app/profile/sara.essie.ascencio.ch.vez/viz/TheWorldGetsConnectedInternetAccessAroundtheWorld/OurWorldinData'}],thumb:'tv'},
      {num:'05',type:'Web development',team:'Team of 3',name:'Supermarket Product Management',desc:'Implemented the CRUD with real-time inventory, QR code scanning, and the base project architecture.',stack:['React','MongoDB','JavaScript'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/FreshMarketProyecto'}],thumb:'react'},
    ],
    contactLabel:'04 — Contact', contactTitle:'Ready for new challenges!',
    contactIntro: "I'm excited about the opportunity to learn, contribute my knowledge and grow professionally. I'm open to internship opportunities in data, software development and other areas of technology.",
    copyEmailLabel: 'Email · click to copy',
    copiedLabel: '✓ Copied!',
  },
  fr: {
    tabs:['Accueil','À propos','Compétences','Projets','Contact'],
    eyebrow:'Génie en Systèmes · El Salvador',
    status:'Disponible pour des stages',
    heroSub: "Sur le point d'obtenir mon diplôme en Génie en Systèmes Informatiques, avec un intérêt pour l'analyse de données et le développement logiciel. Je suis motivée à transformer les données en informations utiles et à explorer de nouvelles opportunités pour mettre en pratique mes connaissances, acquérir de l'expérience et continuer à grandir professionnellement.",
    seeProjects:'Voir les projets',
    aboutLabel:'01 — À propos', aboutTitle:'Des données qui racontent',
    revealLines:[
      "Je suis étudiante en Génie en Systèmes Informatiques avec un focus sur les données et la Business Intelligence, et je vais bientôt obtenir mon diplôme.",
      "J'adore transformer des données brutes en histoires claires.",
      "Je possède des certifications, badges et diplômes en SQL, Data Analytics et Azure DP-900.",
      "Je recherche un stage en données, développement ou autres domaines où je peux apporter de la valeur dès le premier jour."
    ],
    metaRows:[
      ['Disponibilité','Stage · plein temps · à partir de déc. 2026'],
      ['Université','Universidad Católica de El Salvador'],
      ['Focus','Business Intelligence · Analyse de données'],
      ['Langues','Espagnol (natif) · Anglais TOEFL ITP (B2+)'],
    ],
    kpis:[{val:'5',key:'Projets de données',sub:'SQL · Tableau · Power BI'},{val:'4',key:'Crédentials',sub:'Cisco · Microsoft · FEDISAL · CCSA'},{val:'B2+',key:'Anglais TOEFL ITP',sub:'Centro Cultural Salvadoreño'},{val:'Déc 2026',key:'Disponible à partir de',sub:'Stage BI / données'}],
    certsHead:'Certifications et crédentials',
    certs:[
      {name:'Data Analytics Fundamentals',org:'Cisco Networking Academy',type:'cisco'},
      {name:'Azure Data Fundamentals (DP-900)',org:'Microsoft',type:'azure'},
      {name:'Administration SQL Server',org:'FEDISAL · mai 2023',type:'sql'},
      {name:'TOEFL ITP',org:'CCSA · jan. 2022',type:'toefl'}
    ],
    skillsLabel:'02 — Compétences', skillsTitle:'Stack technique',
    skillsSub: "Technologies utilisées dans des projets ou en cours d'apprentissage.",
    skillCols:[
      {title:'Données & BI',items:[{name:'Power BI',type:'powerbi'},{name:'DAX',type:'dax'},{name:'Tableau',type:'tableau'},{name:'Excel',type:'excel'}]},
      {title:'Langages',items:[{name:'Python',type:'python'},{name:'SQL',type:'sql'},{name:'JavaScript',type:'javascript'},{name:'C#',type:'csharp'}]},
      {title:'Frameworks & bibliothèques',items:[{name:'React',type:'react'},{name:'.NET',type:'dotnet'},{name:'ASP.NET Core',type:'dotnet'},{name:'Bootstrap',type:'bootstrap'}]},
      {title:'Bases de données',items:[{name:'SQL Server',type:'sqlserver'},{name:'MySQL',type:'mysql'},{name:'MongoDB',type:'mongodb'},{name:'Firebase',type:'firebase'}]},
      {title:'Design & collaboration',items:[{name:'Figma',type:'figma'},{name:'Canva',type:'canva'},{name:'Loom',type:'loom'},{name:'LucidChart',type:'lucid'}]},
    ],
    projLabel:'03 — Projets', projTitle:'De la question au produit',
    projects:[
      {num:'01',type:'Analyse de données',name:'Dashboard de désabonnement',desc:'Modèle en étoile de 5 tables et 12 mesures DAX sur 7 043 clients. Les contrats mensuels et la fibre optique ont le plus fort churn.',stack:['Power BI','DAX','Power Query'],links:[],thumb:'churn',stats:[{v:'7 043',k:'clients'},{v:'5',k:'tables'},{v:'12',k:'mesures DAX'},{v:'3',k:'pages'}]},
      {num:'02',type:'Développement web',team:'Équipe de 3',name:'Système de réservation de cinéma',desc:"J'ai développé le module employé : réservations avec plan de salle interactif, billets PDF avec QR et tableau de statistiques.",stack:['ASP.NET Core','SQL Server','Bootstrap'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/Cinemax'}],thumb:'cine',stats:[{v:'PDF + QR',k:'billets'},{v:'Dashboard',k:'de statistiques'}]},
      {num:'03',type:'App mobile iOS',team:'Équipe de 2',name:'App de commandes pour boulangerie',desc:"J'ai implémenté la couche de données Firebase et participé aux vues admin et client, avec règles métier et prix par rôle.",stack:['Swift','Firebase','MVVM'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/TrigoYMiel'}],thumb:'ios'},
      {num:'04',type:'Visualisation BI',name:"Accès à internet dans le monde",desc:"Dashboard interactif avec KPIs, carte et tendances d'internet, mobile et haut débit entre 1990 et 2016, filtrable par pays et année.",stack:['Tableau','Our World in Data'],links:[{label:'Tableau Public →',href:'https://public.tableau.com/app/profile/sara.essie.ascencio.ch.vez/viz/TheWorldGetsConnectedInternetAccessAroundtheWorld/OurWorldinData'}],thumb:'tv'},
      {num:'05',type:'Développement web',team:'Équipe de 3',name:'Gestion de produits de supermarché',desc:"J'ai implémenté le CRUD avec inventaire en temps réel, la lecture de codes QR et l'architecture de base du projet.",stack:['React','MongoDB','JavaScript'],links:[{label:'GitHub →',href:'https://github.com/saraascencio/FreshMarketProyecto'}],thumb:'react'},
    ],
    contactLabel:'04 — Contact', contactTitle:'Prête pour de nouveaux défis !',
    contactIntro: "Je suis enthousiaste à l'idée d'apprendre, d'apporter mes connaissances et de grandir professionnellement. Je suis ouverte à des stages en données, développement logiciel et autres domaines de la technologie.",
    copyEmailLabel: "Email · cliquer pour copier",
    copiedLabel: '✓ Copié !',
  },
};

/* ── Cloudinary ─────────────────────────────────────── */
const CLD = 'https://res.cloudinary.com/dnf3hsop9';
const img = p => `${CLD}/image/upload/f_auto,q_auto/${p}`;
const vid = p => `${CLD}/video/upload/f_auto,q_auto/${p}`;

/* ── Galería por proyecto ── */
const GALLERY = [
  [ // 01 Churn
    {type:'image', src:img('v1794808641/Churn-Fallback_caoplp.png'),
      caption:{es:'Dashboard · vista general', en:'Dashboard · overview', fr:"Dashboard · vue d'ensemble"}},
    {type:'video', src:vid('v1794808645/Demo-Churn_tgttva.mp4'),
      caption:{es:'Demo del dashboard', en:'Dashboard demo', fr:'Démo du dashboard'}},
  ],
  [ // 02 Cinemax
    {type:'image', src:img('v1794808653/Login-Cinemax_yyvqj2.png'),
      caption:{es:'Inicio de sesión', en:'Login', fr:'Connexion'}},
    {type:'video', src:vid('v1794808667/Demo-Cinemax_pispnt.mp4'),
      caption:{es:'Demo del módulo de empleado', en:'Employee module demo', fr:'Démo du module employé'}},
  ],
  [ // 03 Trigo y Miel
    {type:'image', fit:'contain', src:img('v1794808671/login-Photoroom_mq8ol4.png'),
      caption:{es:'Inicio de sesión', en:'Login', fr:'Connexion'}},
    {type:'image', fit:'contain', src:img('v1794808690/catalogominorista-Photoroom_wy1imy.png'),
      caption:{es:'Catálogo (cliente minorista)', en:'Catalog (retail customer)', fr:'Catalogue (client détaillant)'}},
    {type:'image', fit:'contain', src:img('v1794808690/filtrochipsminorista-Photoroom_u0ayy0.png'),
      caption:{es:'Filtros por categoría', en:'Category filters', fr:'Filtres par catégorie'}},
    {type:'image', fit:'contain', src:img('v1794808690/agregarproductominorista2-Photoroom_peonek.png'),
      caption:{es:'Agregar producto', en:'Add product', fr:'Ajouter un produit'}},
  ],
  [ // 04 Tableau
    {type:'image', src:img('v1794808701/Tableau-TheWorldGetsConnected_zny8oo.png'),
      caption:{es:'Dashboard completo', en:'Full dashboard', fr:'Dashboard complet'}},
    {type:'video', src:vid('v1794808704/Tableau-Demo-TheWorldGetsConnected_rsvdze.mp4'),
      caption:{es:'Demo interactiva', en:'Interactive demo', fr:'Démo interactive'}},
  ],
  [ // 05 FreshMarket
    {type:'image', src:img('v1794808626/FreshMarket_Home_am2fmy.png'),
      caption:{es:'Pantalla de inicio', en:'Home screen', fr:"Écran d'accueil"}},
    {type:'image', src:img('v1794808626/FreshMarket_Add_hifzty.png'),
      caption:{es:'Agregar producto', en:'Add product', fr:'Ajouter un produit'}},
    {type:'video', src:vid('v1794808627/Demo_-_FreshMarket_qseuim.mp4'),
      caption:{es:'Demo del sistema', en:'System demo', fr:'Démo du système'}},
  ],
];

const MODAL_T = {
  es:{did:'Lo que hice', soon:'Imágenes y demo próximamente', close:'Cerrar', more:'Ver detalle', featured:'Proyecto destacado'},
  en:{did:'What I did', soon:'Images and demo coming soon', close:'Close', more:'View details', featured:'Featured project'},
  fr:{did:"Ce que j'ai fait", soon:'Images et démo bientôt', close:'Fermer', more:'Voir le détail', featured:'Projet phare'},
};

const BULLETS = {
  es: [
    ['Diseñé un modelo relacional tipo estrella uniendo 5 tablas sobre 7,043 clientes de Kaggle, con limpieza y transformación en Power Query.',
     'Construí 12 medidas DAX para analizar los factores del abandono: los contratos mes a mes y la fibra óptica tienen las mayores tasas de churn.',
     'Desarrollé un dashboard de 3 páginas con segmentadores sincronizados, mapa geográfico y paleta de marca, con recomendaciones de retención.'],
    ['Desarrollé el módulo de empleado, incluyendo modelos de datos y configuración del login.',
     'Flujo de reservas (crear, editar, confirmar) con mapa de asientos que distingue disponible, ocupado y seleccionado, y botón para limpiar selección.',
     'Generación de boletos en PDF con código QR y búsqueda por QR.',
     'Dashboard de estadísticas, monitoreo de ocupación por función y película, historial paginado, Mi Perfil y menú responsive.'],
    ['Implementé la capa de datos (repositorios, data sources y mappers) e integré Firebase: Auth, Firestore y Storage.',
     'Participé en el panel de administración (Catálogo, Pedidos, Inventario, Incidencias y Reportes) e integré Cloudinary para las imágenes.',
     'Participé en las vistas de cliente: catálogo, carrito, pedidos en curso, mayoreo y soporte.',
     'Implementé reglas de negocio: bloqueo de pedidos fuera de horario, máximo 3 pedidos por día y un solo pedido en curso, con validaciones de stock y rango por tipo de cliente.',
     'Implementé la gestión de promociones (crear, editar, desactivar) con badges para mayoristas y la sección Mi Perfil.'],
    ['Diseñé un dashboard con KPIs de usuarios de internet, suscripciones móviles y banda ancha por cada 100 personas.',
     'Incluí mapa de penetración por país y gráficos de línea, área y barras para comparar la evolución de 1990 a 2016.',
     'Agregué filtros por país y año. Datos de Our World in Data vía Kaggle.'],
    ['Implementé el CRUD de productos con actualización de inventario en tiempo real.',
     'Desarrollé la lectura de códigos QR para búsqueda y registro rápido, reduciendo la entrada manual de datos.',
     'Estructuré la arquitectura e inicialicé los archivos del proyecto para facilitar su crecimiento.'],
  ],
  en: [
    ['Designed a star-schema relational model joining 5 tables over 7,043 Kaggle customers, with cleaning and transformation in Power Query.',
     'Built 12 DAX measures to analyze churn drivers: month-to-month contracts and fiber optic show the highest churn rates.',
     'Developed a 3-page dashboard with synced slicers, a geographic map and a custom brand palette, with retention recommendations.'],
    ['Developed the employee module, including data models and login setup.',
     'Reservation flow (create, edit, confirm) with a seat map showing available, occupied and selected seats, plus a clear-selection button.',
     'PDF ticket generation with QR codes and QR search.',
     'Statistics dashboard, room occupancy monitoring per showtime and movie, paginated history, My Profile and a responsive menu.'],
    ['Implemented the data layer (repositories, data sources, mappers) and integrated Firebase: Auth, Firestore and Storage.',
     'Contributed to the admin panel (Catalog, Orders, Inventory, Incidences and Reports) and integrated Cloudinary for images.',
     'Contributed to the client views: catalog, cart, active orders, wholesale and support.',
     'Implemented business rules: no orders after closing time, max 3 orders per day and one active order at a time, with stock and range validations per customer type.',
     'Implemented promotion management (create, edit, deactivate) with wholesale badges and a My Profile section.'],
    ['Designed a dashboard with KPIs for internet users, mobile and broadband subscriptions per 100 people.',
     'Included a country-level penetration map and line, area and bar charts to compare growth from 1990 to 2016.',
     'Added country and year filters. Data from Our World in Data via Kaggle.'],
    ['Implemented the product CRUD with real-time inventory updates.',
     'Built QR code scanning for fast product search and registration, reducing manual data entry.',
     'Structured the architecture and initialized the project files to ease future growth.'],
  ],
  fr: [
    ["Conçu un modèle relationnel en étoile reliant 5 tables sur 7 043 clients Kaggle, avec nettoyage et transformation dans Power Query.",
     "Créé 12 mesures DAX pour analyser les facteurs de désabonnement : les contrats mensuels et la fibre optique ont les taux de churn les plus élevés.",
     "Développé un dashboard de 3 pages avec segments synchronisés, carte géographique et palette personnalisée, avec des recommandations de rétention."],
    ["Développé le module employé, y compris les modèles de données et la configuration du login.",
     "Flux de réservation (créer, modifier, confirmer) avec plan de salle distinguant places libres, occupées et sélectionnées, et bouton pour effacer la sélection.",
     "Génération de billets PDF avec code QR et recherche par QR.",
     "Tableau de statistiques, suivi de l'occupation par séance et film, historique paginé, Mon Profil et menu responsive."],
    ["Implémenté la couche de données (repositories, data sources, mappers) et intégré Firebase : Auth, Firestore et Storage.",
     "Participé au panneau d'administration (Catalogue, Commandes, Inventaire, Incidents et Rapports) et intégré Cloudinary pour les images.",
     "Participé aux vues client : catalogue, panier, commandes en cours, gros et support.",
     "Implémenté les règles métier : pas de commande hors horaires, 3 commandes maximum par jour et une seule commande en cours, avec validations de stock et de quantités selon le type de client.",
     "Implémenté la gestion des promotions (créer, modifier, désactiver) avec badges grossistes et la section Mon Profil."],
    ["Conçu un dashboard avec des KPIs sur les utilisateurs d'internet, le mobile et le haut débit pour 100 habitants.",
     "Inclus une carte de pénétration par pays et des graphiques en courbes, aires et barres pour comparer l'évolution de 1990 à 2016.",
     "Ajouté des filtres par pays et année. Données d'Our World in Data via Kaggle."],
    ["Implémenté le CRUD de produits avec mise à jour de l'inventaire en temps réel.",
     "Développé la lecture de codes QR pour la recherche et l'enregistrement rapides, réduisant la saisie manuelle.",
     "Structuré l'architecture et initialisé les fichiers du projet pour faciliter son évolution."],
  ],
};

/* ── SVG Logos ────────────────────────────────────── */
const Logo = ({ type }) => {
  const logos = {
    google: <svg viewBox="0 0 24 24" width="24" height="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
    cisco: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#E8F0FA"/><rect x="7" y="17" width="2" height="6" fill="#1BA0D7"/><rect x="11" y="14" width="2" height="9" fill="#1BA0D7"/><rect x="15" y="11" width="2" height="12" fill="#1BA0D7"/><rect x="19" y="14" width="2" height="9" fill="#1BA0D7"/><rect x="23" y="17" width="2" height="6" fill="#1BA0D7"/><rect x="7" y="9" width="2" height="5" fill="#1BA0D7" opacity="0.5"/><rect x="11" y="7" width="2" height="5" fill="#1BA0D7" opacity="0.5"/><rect x="15" y="5" width="2" height="4" fill="#1BA0D7" opacity="0.5"/><rect x="19" y="7" width="2" height="5" fill="#1BA0D7" opacity="0.5"/><rect x="23" y="9" width="2" height="5" fill="#1BA0D7" opacity="0.5"/></svg>,
    sql: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEF3FB"/><text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontSize="10" fontWeight="700" fill="#185FA5">SQL</text></svg>,
    tableau: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FDF1EB"/><rect x="14" y="4" width="4" height="24" rx="2" fill="#E87E3E"/><rect x="4" y="14" width="24" height="4" rx="2" fill="#E87E3E" opacity="0.5"/></svg>,
    powerbi: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FFF4E0"/><rect x="7" y="20" width="5" height="7" rx="1.5" fill="#F2C811"/><rect x="14" y="14" width="5" height="13" rx="1.5" fill="#F2C811" opacity="0.7"/><rect x="21" y="8" width="5" height="19" rx="1.5" fill="#F2C811" opacity="0.4"/></svg>,
    dax: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FFF8E1"/><text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontSize="10" fontWeight="800" fill="#F2A900">DAX</text></svg>,
    excel: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EDFAF2"/><text x="16" y="22" textAnchor="middle" fontFamily="Arial" fontSize="15" fontWeight="800" fill="#217346">X</text></svg>,
    python: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEF7EE"/><path d="M16 5c-4.4 0-5.2 2-5.2 2v2.2H16V10H9.5S7 10 7 15s2.5 5 2.5 5H11v-2.5S11 15 14 15h4s3 .1 3-2.5V9S20.5 5 16 5z" fill="#3776AB"/><path d="M16 27c4.4 0 5.2-2 5.2-2v-2.2H16V22h6.5S25 22 25 17s-2.5-5-2.5-5H21v2.5S21 17 18 17h-4s-3-.1-3 2.5V24S11.5 27 16 27z" fill="#FFD43B"/><circle cx="13.5" cy="8" r="1.2" fill="white"/><circle cx="18.5" cy="24" r="1.2" fill="#3776AB"/></svg>,
    javascript: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="16" y="22" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="900" fill="#222">JS</text></svg>,
    csharp: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#F3EEFA"/><text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="700" fill="#68217A">C#</text></svg>,
    react: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#E6F8FD"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="1.8" fill="#61DAFB"/></svg>,
    dotnet: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#F3EEFA"/><text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontSize="9" fontWeight="700" fill="#512BD4">.NET</text></svg>,
    bootstrap: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#F3EEFA"/><path d="M11 8h7.2c2.9 0 4 1.6 4 3.4 0 1.5-.8 2.5-2 3 1.5.5 2.5 1.8 2.5 3.5 0 2.2-1.6 4.1-4.6 4.1H11V8zm3 3v3h4c1 0 1.5-.5 1.5-1.5S19 11 18 11h-4zm0 6v3.5h4.2c1.1 0 1.6-.7 1.6-1.75s-.6-1.75-1.6-1.75H14z" fill="#7952B3"/></svg>,
    pandas: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FBF0F5"/><rect x="8" y="5" width="5" height="22" rx="2.5" fill="#130754"/><rect x="19" y="5" width="5" height="22" rx="2.5" fill="#E70488"/><rect x="8" y="12" width="16" height="8" rx="1" fill="#130754" opacity="0.2"/></svg>,
    numpy: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEF3FB"/><path d="M6 17l5-9 5 9-5 9z" fill="#4DABCF" opacity="0.8"/><path d="M16 17l5-9 5 9-5 9z" fill="#013243" opacity="0.7"/></svg>,
    jupyter: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FFF4E0"/><circle cx="16" cy="16" r="8" fill="none" stroke="#F37726" strokeWidth="2"/><circle cx="16" cy="8" r="2.2" fill="#F37726"/><circle cx="23" cy="20" r="2.2" fill="#929292"/><circle cx="9" cy="20" r="2.2" fill="#929292"/></svg>,
    postgres: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEF3FB"/><ellipse cx="16" cy="13" rx="8" ry="6" fill="none" stroke="#336791" strokeWidth="1.8"/><path d="M8 13v6c0 3.3 3.6 6 8 6s8-2.7 8-6v-6" stroke="#336791" strokeWidth="1.8" fill="none"/><path d="M8 17c0 3.3 3.6 6 8 6s8-2.7 8-6" stroke="#336791" strokeWidth="1.2" strokeDasharray="3 2" fill="none"/><path d="M21 9c1.8 0 3.5 1.2 3.5 3.5" stroke="#336791" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>,
    supabase: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EDFAF2"/><path d="M19 5l-10 15h10V27l10-15H19V5z" fill="#3ECF8E"/></svg>,
    mysql: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEF3FB"/><path d="M5 21c5-10 12-12 22-9" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M23 10c0 0 2 2 2 4" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" fill="none"/><circle cx="25" cy="10" r="2" fill="#F37726"/></svg>,
    sqlserver: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FBF0F0"/><ellipse cx="16" cy="12" rx="9" ry="5" fill="none" stroke="#CC2927" strokeWidth="1.8"/><path d="M7 12v8c0 2.8 4 5 9 5s9-2.2 9-5v-8" stroke="#CC2927" strokeWidth="1.8" fill="none"/><path d="M7 16c0 2.8 4 5 9 5s9-2.2 9-5" stroke="#CC2927" strokeWidth="1.4" strokeDasharray="3 2" fill="none"/></svg>,
    mongodb: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EDFAF2"/><path d="M16 4c-3 4-5 8-5 12 0 4 2 8 5 12 3-4 5-8 5-12 0-4-2-8-5-12z" fill="#13AA52"/><path d="M16 6v24" stroke="#00684A" strokeWidth="1" opacity="0.6"/></svg>,
    firebase: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FFF4E0"/><path d="M6 24l4-17 5 5 3-8 8 20H6z" fill="#FFCA28"/><path d="M10 7l5 5-3 8z" fill="#FFA000" opacity="0.75"/></svg>,
    azure: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEF3FB"/><path d="M18 6l-8 14h5l-2 6 11-14h-6l2-6z" fill="#0078D4"/><path d="M14 20l-4 6h10z" fill="#0078D4" opacity="0.6"/></svg>,
    figma: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#F5F3FF"/><circle cx="13" cy="9" r="3.5" fill="#F24E1E"/><circle cx="13" cy="16" r="3.5" fill="#A259FF"/><circle cx="13" cy="23" r="3.5" fill="#0ACF83"/><circle cx="20" cy="9" r="3.5" fill="#FF7262"/><circle cx="20" cy="16" r="3.5" fill="#1ABCFE"/></svg>,
    canva: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#E6F9FB"/><circle cx="16" cy="16" r="9" fill="#00C4CC"/><text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="800" fill="white">C</text></svg>,
    loom: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#EEEEFF"/><circle cx="16" cy="16" r="9" fill="#625DF5"/><circle cx="16" cy="16" r="4" fill="white"/><circle cx="16" cy="16" r="1.5" fill="#625DF5"/></svg>,
    lucid: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="6" fill="#FFECE7"/><rect x="10" y="8" width="12" height="16" rx="2" fill="none" stroke="#F24726" strokeWidth="1.8"/><path d="M13 13h6M13 17h6M13 21h4" stroke="#F24726" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    toefl: <svg viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="4" fill="#1A4480"/><text x="12" y="16" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="white">TOEFL</text></svg>,
  };
  return logos[type] || null;
};

/* ── Hero Canvas (persistente entre pestañas) ───────── */
function HeroCanvas({ dark }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const dotsRef = useRef([]);
  const barsRef = useRef([]);
  const sizeRef = useRef({ W: 0, H: 0 });
  const rafRef = useRef(null);

  const init = useCallback((W, H) => {
    if (W <= 0 || H <= 0) return;
    const COLORS = dark
      ? ['#7C6FF0','#A78BFA','#5B4FCF','#C4B9F8','#4C1D95']
      : ['#5B4FCF','#8B7EE8','#C4B9F8','#A78BFA','#7C3AED'];
    const N = 80;
    dotsRef.current = Array.from({ length: N }, () => {
      const x = Math.random() * W;
      const y = Math.random() * H;
      return { x, y, ox: x, oy: y, vx: (Math.random()-0.5)*0.15, vy: (Math.random()-0.5)*0.15, r: Math.random()*2.2+0.8, color: COLORS[Math.floor(Math.random()*COLORS.length)], alpha: Math.random()*0.45+0.15 };
    });
    barsRef.current = [.10,.18,.26,.34,.42,.50,.58,.66,.74,.82,.90].map((x,i) => ({
      x: x * W,
      h: [0.22,0.40,0.30,0.58,0.43,0.70,0.52,0.80,0.62,0.88,0.72][i] * H * 0.38
    }));
  }, [dark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setup = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w <= 0 || h <= 0) return false;
      canvas.width = w;
      canvas.height = h;
      sizeRef.current = { W: w, H: h };
      init(w, h);
      return true;
    };

    setup();

    const draw = () => {
      if (sizeRef.current.W === 0 || sizeRef.current.H === 0 || dotsRef.current.length === 0) {
        setup();
      }

      const { W, H } = sizeRef.current;
      if (W > 0 && H > 0 && dotsRef.current.length > 0) {
        ctx.clearRect(0, 0, W, H);
        barsRef.current.forEach(b => {
          ctx.fillStyle = dark ? 'rgba(91,79,207,0.06)' : 'rgba(91,79,207,0.04)';
          ctx.beginPath();
          ctx.roundRect(b.x - 12, H - b.h - 10, 24, b.h, 3);
          ctx.fill();
        });
        ctx.beginPath();
        barsRef.current.forEach((b, i) => i === 0 ? ctx.moveTo(b.x, H-b.h-10) : ctx.lineTo(b.x, H-b.h-10));
        ctx.strokeStyle = dark ? 'rgba(139,126,232,0.18)' : 'rgba(91,79,207,0.12)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const mx = mouseRef.current.x, my = mouseRef.current.y;
        const dots = dotsRef.current;

        for (let i = 0; i < dots.length; i++) {
          for (let j = i+1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
            const d = Math.sqrt(dx*dx+dy*dy);
            if (d < 85) {
              ctx.beginPath();
              ctx.moveTo(dots[i].x, dots[i].y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.strokeStyle = `rgba(139,126,232,${0.12*(1-d/85)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        dots.forEach(d => {
          const mdx = d.x - mx, mdy = d.y - my;
          const md = Math.sqrt(mdx*mdx + mdy*mdy);
          const R = 130;
          if (md < R && md > 0) {
            const f = (R - md) / R;
            d.x += (mdx/md) * f * 4;
            d.y += (mdy/md) * f * 4;
          } else {
            d.x += (d.ox - d.x) * 0.04;
            d.y += (d.oy - d.y) * 0.04;
          }
          d.ox += d.vx; d.oy += d.vy;
          if (d.ox < 0 || d.ox > W) d.vx *= -1;
          if (d.oy < 0 || d.oy > H) d.vy *= -1;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
          ctx.globalAlpha = d.alpha;
          ctx.fillStyle = d.color;
          ctx.fill();
          ctx.globalAlpha = 1;
        });
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) {
        const w = Math.round(width);
        const h = Math.round(height);
        if (w !== sizeRef.current.W || h !== sizeRef.current.H) {
          canvas.width = w;
          canvas.height = h;
          sizeRef.current = { W: w, H: h };
          init(w, h);
        }
      }
    });
    ro.observe(canvas);

    const hero = canvas.parentElement;
    const onMove = e => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = { x: -999, y: -999 }; };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, [dark, init]);

  return <canvas ref={canvasRef} className="hero-canvas" style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0}}/>;
}

/* ── Reveal lines ─────────────────────────────────── */
function RevealLines({ lines }) {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          refs.current.forEach((el, i) => {
            if (!el) return;
            setTimeout(() => { el.classList.add('vis'); el.classList.remove('dim'); }, i * 110);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [lines]);

  return (
    <div>
      {lines.map((line, i) => (
        <div key={i} className={`reveal-line${i > 0 ? ' dim' : ''}`} ref={el => refs.current[i] = el}>
          {line}
        </div>
      ))}
    </div>
  );
}

/* ── Video con autoplay + loop ──────────────────────── */
const prefersReduced = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function AutoVideo({ src, className, controls = false }) {
  const ref = useRef(null);
  const reduce = prefersReduced();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    if (!reduce) {
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [src, reduce]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      muted
      loop
      playsInline
      autoPlay={!reduce}
      controls={controls || reduce}
      preload="auto"
    />
  );
}

/* ── Project Card ─────────────────────────────────── */
function ProjCard({ proj, gallery, moreLabel, featured = false, reverse = false, featuredLabel = '', onOpen }) {
  const cardRef = useRef(null);
  const onMove = e => {
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `translateY(${featured ? -4 : -8}px) rotateY(${x*(featured ? 3 : 10)}deg) rotateX(${-y*(featured ? 2 : 8)}deg)`;
    cardRef.current.style.transition = 'transform 0.1s ease, border-color 0.2s, box-shadow 0.3s';
  };
  const onLeave = () => {
    cardRef.current.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
    cardRef.current.style.transition = 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s, box-shadow 0.35s';
  };

  const thumbIcons = {
    churn: <svg viewBox="0 0 28 28" width="28" height="28"><rect x="4" y="16" width="5" height="9" rx="2" fill="#F2C811"/><rect x="11.5" y="10" width="5" height="15" rx="2" fill="#F2C811" opacity="0.7"/><rect x="19" y="4" width="5" height="21" rx="2" fill="#F2C811" opacity="0.4"/></svg>,
    cine: <svg viewBox="0 0 28 28" fill="none" width="28" height="28"><rect x="4" y="6" width="20" height="16" rx="2" stroke="#7C6FF0" strokeWidth="1.6"/><path d="M4 11h20M9 6v5M14 6v5M19 6v5" stroke="#7C6FF0" strokeWidth="1.4"/><path d="M12 15l5 3-5 3z" fill="#7C6FF0"/></svg>,
    ios: <svg viewBox="0 0 28 28" fill="none" width="28" height="28"><rect x="8" y="3" width="12" height="22" rx="3" stroke="#E87E3E" strokeWidth="1.6"/><circle cx="14" cy="21.5" r="1" fill="#E87E3E"/><path d="M11 8h6" stroke="#E87E3E" strokeWidth="1.4" strokeLinecap="round"/></svg>,
    tv: <svg viewBox="0 0 28 28" fill="none" width="28" height="28"><rect x="11" y="3" width="5" height="22" rx="2.5" fill="#E87E3E"/><rect x="4" y="10" width="5" height="15" rx="2.5" fill="#E87E3E" opacity="0.5"/><rect x="19" y="6" width="5" height="19" rx="2.5" fill="#E87E3E" opacity="0.7"/></svg>,
    react: <svg viewBox="0 0 28 28" fill="none" width="28" height="28"><ellipse cx="14" cy="14" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="14" cy="14" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 14 14)"/><ellipse cx="14" cy="14" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 14 14)"/><circle cx="14" cy="14" r="1.8" fill="#61DAFB"/></svg>,
  };
  const thumbBg = { churn:'pt-churn', cine:'pt-cine', ios:'pt-ios', tv:'pt-tv', react:'pt-react' };

  const cover = featured
    ? (gallery.find(g => g.src && g.type === 'video') || gallery.find(g => g.src))
    : gallery.find(g => g.src);
  const hasMedia = !!cover;

  return (
    <div
      className={`proj-card${featured ? ' featured' : ''}${featured && reverse ? ' reverse' : ''}`}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter') onOpen(); }}
    >
      <div className={`proj-thumb ${thumbBg[proj.thumb]}${hasMedia ? ' has-media' : ''}`}>
        <span className="proj-num">{proj.num}</span>
        {hasMedia ? (
          cover.type === 'video'
            ? <AutoVideo className="proj-media" src={cover.src} />
            : <img
                className={`proj-media${cover.fit === 'contain' ? ' contain' : ''}`}
                src={cover.src}
                alt={proj.name}
                loading="lazy"
              />
        ) : (
          <div className="proj-icon-wrap">{thumbIcons[proj.thumb]}</div>
        )}
      </div>
      <div className="proj-body">
        {featured && <div className="proj-featured-tag">★ {featuredLabel}</div>}
        <div className="proj-type">
          {proj.type}
          {proj.team && <span className="proj-team">{proj.team}</span>}
        </div>
        <div className="proj-name">{proj.name}</div>
        <div className="proj-desc">{proj.desc}</div>
        {featured && proj.stats && (
          <div className="proj-stats">
            {proj.stats.map(st => (
              <div key={st.k} className="proj-stat"><b>{st.v}</b><span>{st.k}</span></div>
            ))}
          </div>
        )}
        <div className="proj-stack">{proj.stack.map(s => <span key={s} className="stag">{s}</span>)}</div>
        <div className="proj-more">{moreLabel} →</div>
        <div className="proj-links">
          {proj.links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="plink"
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Project Modal ────────────────────────────────── */
function ProjModal({ proj, bullets, gallery, labels, lang, onClose }) {
  const items = gallery.filter(g => g.src);
  const [i, setI] = useState(0);
  const capOf = g => g?.caption?.[lang] || g?.caption?.es || '';

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setI(n => Math.min(n + 1, items.length - 1));
      if (e.key === 'ArrowLeft') setI(n => Math.max(n - 1, 0));
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [items.length, onClose]);

  const cur = items[i];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={proj.name}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={labels.close}>×</button>

        <div className="modal-media">
          {cur
            ? (cur.type === 'video'
                ? <AutoVideo key={cur.src} src={cur.src} controls />
                : <img key={cur.src} src={cur.src} alt={capOf(cur) || proj.name} />)
            : <div className="modal-empty">{labels.soon}</div>}
        </div>

        {items.length > 1 && (
          <div className="modal-thumbs">
            {items.map((g, n) => (
              <button
                key={g.src}
                className={`modal-thumb${n === i ? ' on' : ''}`}
                onClick={() => setI(n)}
                aria-label={capOf(g)}
              >
                {g.type === 'video'
                  ? <span className="play">▶</span>
                  : <img src={g.src} alt="" loading="lazy" />}
              </button>
            ))}
          </div>
        )}
        {cur && capOf(cur) && <div className="modal-caption">{capOf(cur)}</div>}

        <div className="modal-body">
          <div className="proj-type">
            {proj.type}
            {proj.team && <span className="proj-team">{proj.team}</span>}
          </div>
          <div className="proj-name">{proj.name}</div>
          <div className="proj-desc">{proj.desc}</div>

          <div className="modal-h">{labels.did}</div>
          <ul className="modal-list">
            {bullets.map((b, n) => <li key={n}>{b}</li>)}
          </ul>

          <div className="proj-stack">{proj.stack.map(s => <span key={s} className="stag">{s}</span>)}</div>
          <div className="proj-links">
            {proj.links.map(l => (
              <a key={l.label} href={l.href} className="plink" target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main App ─────────────────────────────────────── */
export default function App() {
  const [tab, setTab] = useState(0);
  const [lang, setLang] = useState('es');
  const [dark, setDark] = useState(false);
  const [openProj, setOpenProj] = useState(null);
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);
  const closeProj = useCallback(() => setOpenProj(null), []);
  const langCycle = ['es','en','fr'];
  const t = T[lang];
  const allChips = t.skillCols.flatMap(col => col.items);
  const emailOculto = 'saraascencio16' + '@' + 'gmail.com';

  useEffect(() => {
    document.title = 'Sara Ascencio | Portafolio de Ingeniería en Sistemas Informáticos';
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => () => clearTimeout(copyTimerRef.current), []);

  const cycleLang = () => setLang(l => langCycle[(langCycle.indexOf(l)+1) % 3]);

  const handleCopyEmail = useCallback(async (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    
   
    const email = 'saraascencio16' + '@' + 'gmail.com';
    
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="folder-nav">
        <div className="folder-nav-inner">
          <div className="folder-top-row">
            <div className="folder-logo">Sara Ascencio<span>.</span></div>
            <button className="lang-btn" onClick={cycleLang}>
              {lang.toUpperCase()} ▾
            </button>
            <button
              className="theme-btn"
              onClick={() => setDark(d => !d)}
              title="Toggle theme"
            >
              {dark ? '○' : '◐'}
            </button>
          </div>
          <div className="folder-tabs-row">
            {t.tabs.map((name, i) => (
              <button
                key={i}
                className={`folder-tab${tab === i ? ' active' : ''}`}
                onClick={() => setTab(i)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className={`panel${tab === 0 ? ' active' : ''}`} id="panel-hero">
        <HeroCanvas dark={dark} />
        <div style={{position:'absolute',width:440,height:440,borderRadius:'50%',background:'#EEE9FF',opacity:0.55,right:-80,top:-100,filter:'blur(72px)',pointerEvents:'none',zIndex:0}}/>
        <div style={{position:'absolute',width:200,height:200,borderRadius:'50%',background:'#DDD6FE',opacity:0.35,left:'32%',bottom:-60,filter:'blur(50px)',pointerEvents:'none',zIndex:0}}/>
        <div className="hero-layout">
          <div className="hero-text">
            <div className="hero-eyebrow">{t.eyebrow}</div>
            <div className="hero-status">
              <span className="hero-status-dot"/>
              {t.status}
            </div>
            <h1 className="hero-name">Sara<br/><em>Ascencio</em></h1>
            <p className="hero-role">{t.heroSub}</p>
            <div className="hero-actions">
              <button className="btn-solid" onClick={() => setTab(3)}>
                {t.seeProjects} →
              </button>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-bg"/>
            <div className="hero-photo-placeholder">
              <img src='/pictures/perfilsa.jpeg'
              alt="Sara Ascencio"
              className="hero-photo-img"/>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className={`panel${tab === 1 ? ' active' : ''}`} id="panel-about">
        <div className="about-wrap">
          <div className="sec-label">{t.aboutLabel}</div>
          <h2 className="sec-title">{t.aboutTitle}</h2>
          <div className="about-grid">
            <div>
              <RevealLines lines={t.revealLines} key={lang + tab} />
            </div>
            <div>
              {t.metaRows.map(([k,v]) => (
                <div key={k} className="about-meta-row">
                  <div className="meta-key">{k}</div>
                  <div className="meta-val">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-extra">
          <div className="kpi-grid">
            {t.kpis.map(k => (
              <div key={k.key} className="kpi-card">
                <span className="kpi-val">{k.val}</span>
                <span className="kpi-key">{k.key}</span>
                <span className="kpi-sub">{k.sub}</span>
              </div>
            ))}
          </div>

          <div className="cert-section">
            <div className="sec-label">{t.certsHead}</div>
            <div className="cert-grid">
              {t.certs.map((c, i) => (
                <div key={c.name} className="cert-card" style={{'--i': i}}>
                  <div className="cert-logo"><Logo type={c.type}/></div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-org">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section className={`panel${tab === 2 ? ' active' : ''}`} id="panel-skills">
        <div className="skills-wrap">
          <div className="sec-label">{t.skillsLabel}</div>
          <h2 className="sec-title">{t.skillsTitle}</h2>
          <p className="skills-sub">{t.skillsSub}</p>
          <div className="skill-grid">
            {t.skillCols.map(col => (
              <div key={col.title} className="skill-col">
                <div className="skill-col-title">{col.title}</div>
                {col.items.map(item => (
                  <div key={item.name} className="skill-row">
                    <div className="skill-logo-box"><Logo type={item.type}/></div>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Marquee de tecnologías */}
          <div className="skill-marquee">
            <div className="skill-marquee-track">
              {allChips.map((chip, i) => (
                <span key={`a-${chip.name}-${i}`} className="skill-chip">
                  <Logo type={chip.type}/> {chip.name}
                </span>
              ))}
              {allChips.map((chip, i) => (
                <span key={`b-${chip.name}-${i}`} className="skill-chip dup" aria-hidden="true">
                  <Logo type={chip.type}/> {chip.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section className={`panel${tab === 3 ? ' active' : ''}`} id="panel-projects">
        <div className="proj-wrap">
          <div className="sec-label">{t.projLabel}</div>
          <h2 className="sec-title">{t.projTitle}</h2>
          <div className="proj-grid">
            {t.projects.map((p, i) => (
              <ProjCard
                key={p.num}
                proj={p}
                gallery={GALLERY[i] || []}
                moreLabel={MODAL_T[lang].more}
                featured={i < 2}
                reverse={i === 1}
                featuredLabel={MODAL_T[lang].featured}
                onOpen={() => setOpenProj(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section className={`panel${tab === 4 ? ' active' : ''}`} id="panel-contact">
        <div className="contact-wrap">
          <div className="sec-label">{t.contactLabel}</div>
          <h2 className="sec-title">{t.contactTitle}</h2>
          <p className="contact-intro">{t.contactIntro}</p>
          <div className="clinks clinks-solo">
            <a className="clink-row" href="https://github.com/saraascencio" target="_blank" rel="noreferrer">
              <div className="clink-icon ci-gh">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.13 20.65 22 16.8 22 12.26 22 6.58 17.52 2 12 2z"/></svg>
              </div>
              <div>
                <div className="clink-label">GitHub</div>
                <div className="clink-val">github.com/saraascencio</div>
              </div>
            </a>
            <a className="clink-row" href="https://www.linkedin.com/in/sara-ascencio" target="_blank" rel="noreferrer">
              <div className="clink-icon ci-li">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <div className="clink-label">LinkedIn</div>
                <div className="clink-val">linkedin.com/in/sara-ascencio</div>
              </div>
            </a>
            <div
              className="clink-row clink-copy"
              onClick={handleCopyEmail}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(e); }}
            >
              <div className="clink-icon ci-em">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div className="clink-label">{copied ? t.copiedLabel : t.copyEmailLabel}</div>
                <div className="clink-val">{emailOculto}</div> 
              </div>
              <button
                className="copy-btn"
                onClick={handleCopyEmail}
                aria-label="Copiar correo"
                type="button"
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {openProj !== null && (
        <ProjModal
          key={openProj}
          proj={t.projects[openProj]}
          bullets={BULLETS[lang]?.[openProj] || BULLETS.en[openProj]}
          gallery={GALLERY[openProj] || []}
          labels={MODAL_T[lang]}
          lang={lang}
          onClose={closeProj}
        />
      )}
    </>
  );
}