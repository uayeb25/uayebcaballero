import type  { SocialProps, CardIndexProps, ItemProps, Skills, WorkExperienceItem } from '../../interfaces/Interface';


/** USED ON INDEX  */

export const socials: SocialProps[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uayebcaballero/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/uayeb25',
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@uayebcaballero9411',
      icon: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
    }
];

export const cards: CardIndexProps[] = [
    {
      title: 'Sobre Mí',
      title_en: 'About Me',
      description: `🌐 Profesional de TI hondureño con más de <span class="font-semibold text-orange-600">15 años de experiencia</span> alineando las tecnologías de la información con los objetivos estratégicos de las organizaciones. Especializado en <span class="font-semibold text-orange-600">EdTech</span>, implementando soluciones de software educativo que se adaptan óptimamente a las necesidades del negocio, contribuyendo al crecimiento 📈 y eficiencia empresarial ⚙️.`,
      description_en: `🌐 Honduran IT professional with over <span class="font-semibold text-orange-600">15 years of experience</span> aligning information technology with organizations' strategic objectives. Specializing in <span class="font-semibold text-orange-600">EdTech</span>, implementing educational software solutions that optimally fit business needs, contributing to growth 📈 and operational efficiency ⚙️.`
    },
    {
      title: 'Trayectoria Profesional',
      title_en: 'Professional Journey',
      description: `Desde <span class="font-semibold text-orange-600">desarrollador web</span> 💻 hasta <span class="font-semibold text-orange-600">gerente de equipos de ciencia de datos</span> 📊, mi enfoque ha sido mejorar la <span class="font-semibold text-orange-600">gobernanza de datos</span> 🔐. Esto incluye desde la recolección de datos 📥 hasta el análisis 🔎 y la compartición de métricas relevantes para el negocio 📊.`,
      description_en: `From <span class="font-semibold text-orange-600">web developer</span> 💻 to <span class="font-semibold text-orange-600">manager of data science teams</span> 📊, my focus has been on improving <span class="font-semibold text-orange-600">data governance</span> 🔐. This includes everything from data collection 📥 to analysis 🔎 and sharing business-relevant metrics 📊.`
    },
    {
      title: 'Entusiasta del Café',
      title_en: 'Coffee Enthusiast',
      description: `☕ Apasionado del café, sueño con participar en campeonatos 🏆 para mostrar los <span class="font-semibold text-orange-600">granos de especialidad</span> 🌱 de Honduras 🇭🇳. Me encanta experimentar con diferentes métodos de preparación 🧪 y compartir deliciosas tazas de café con mis seres queridos ❤️.`,
      description_en: `☕ Passionate about coffee, I dream of participating in championships 🏆 to showcase the <span class="font-semibold text-orange-600">specialty beans</span> 🌱 from Honduras 🇭🇳. I love experimenting with different brewing methods 🧪 and sharing delicious cups of coffee with loved ones ❤️.`
    }
]

export const skills: Skills = {
    Frontend: [
        { name: "JavaScript", level: 60 },
        { name: "TailwindCSS", level: 60 },
        { name: "React", level: 60 },
        { name: "Astro.js", level: 50 },
        { name: "Next.js", level: 50 },
    ],
    Backend: [
        { name: "Python", level: 70 },
        { name: "C#", level: 70 },
        { name: "FastAPI", level: 80 },
        { name: "SimPy", level: 75 },
        { name: "Azure Functions", level: 80 },
        { name: "Logic Apps", level: 80 },
        { name: "Azure Platform", level: 70 },
    ],
    "Data Engineering": [
        { name: "SQL", level: 85 },
        { name: "Data Factory", level: 80 },
        { name: "Databricks", level: 80 },
        { name: "Synapse", level: 60 },
        { name: "SSIS", level: 70 },
        { name: "Pandas", level: 80 },
        { name: "PySpark", level: 80 },
        { name: "DBT", level: 50 },
    ],
    "AI & ML": [
        { name: "EDA", level: 70 },
        { name: "Supervised ML", level: 70 },
        { name: "Unsupervised ML", level: 70 },
        { name: "Time Series", level: 70 },
        { name: "NLP", level: 60 },
        { name: "GenAI", level: 70 },
        { name: "RAG", level: 50 },
    ],
    Databases: [
      { name: "Vector Databases", level: 50 },
      { name: "MSSQL", level: 70 },
      { name: "Azure SQL", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "Azure Queue Storage", level: 80 },
      { name: "Service Bus", level: 80 },
      { name: "Data Lake", level: 80 },
      { name: "Lake House", level: 80 },
      { name: "Data Warehouse", level: 80 },
    ],
    DevOps: [
        { name: "Azure DevOps", level: 50 },
        { name: "Docker", level: 60 },
        { name: "Kubernetes", level: 50 },
        { name: "Terraform", level: 60 },
    ],
}



/** NAVBAR */

export const navItems: ItemProps[] = [
    { titleEs: 'Sobre Mí', titleEn: 'About Me', href: '/' },
    {
      titleEs: 'Proyectos', 
      titleEn: 'Projects',
      href: '/projects',
      subitems: [
        { titleEs: 'ML', titleEn: 'ML', href: '/projects/machine-learning' },
        { titleEs: 'Integración de Apps RAG', titleEn: 'RAG Apps Integration', href: '/projects/rag' },
        { titleEs: 'Infraestructura Azure', titleEn: 'Azure Infrastructure', href: '/projects/azure' },
        { titleEs: 'Ingeniería de Datos', titleEn: 'Data Engineering', href: '/projects/data-engineering' },
        { titleEs: 'Productos Digitales', titleEn: 'Digital Products', href: '/projects/digital-products' },
        { titleEs: 'LMS y SIS', titleEn: 'LMS and SIS', href: '/projects/lms-sis' },
      ]
    },
    { titleEs: 'Experiencia Laboral', titleEn: 'Work Experience', href: '/workexperience' },
];

/** WORK EXPERIENCE */

export const experiences: WorkExperienceItem[] = [
  {
    title: "Lider Técnico de BI",
    titleEN: "BI Team Lead",
    company: "Edusoft",
    period: "2023 - Presente",
    description: [
      "Gestionar las cargas de trabajo y los recursos del equipo de BI.",
      "Cooperar en la implementación de la lakehouse.",
      "Analizar e implementar la gobernanza de datos.",
      "Desarrollar y mantener los pipelines de datos.",
      "Analizar diferentes soluciones basadas en datos para entender los estilos de aprendizaje de los estudiantes.",
    ],
    descriptionEN: [
      "Manage workloads and resources for the BI team.",
      "Cooparete implementing the lakehouse.",
      "Analyse and implement the data governance.",
      "Develop and maintain the data pipelines.",
      "Analyze different data-driven solutions to understand student learning styles.",
    ],
    technologies: ["Python", "Azure", "Databricks", "DataLake", "PySpark", "LlamaIndex"],
  },{
    title: "Arquitecto de datos",
    titleEN: "Data Architect",
    company: "Analytikus",
    period: "2021 - 2023",
    description: [
      "Diseñar y mantener la arquitectura de datos en Azure.",
      "Implementar Modelos estadisticos para predecir deserción estudiantil.",
      "Implementar Modelos estadisticos para priorizar potenciales estudiantes a matricular.",
      "Emplementar Bot para atender a los estudiantes mediante el uso de ChatGPT dentro Microsoft Teams.",
    ],
    descriptionEN: [
      "Design and maintain the data architecture in Azure.",
      "Implement statistical models to predict student dropout.",
      "Implement statistical models to prioritize potential students to enroll.",
      "Implement Bot to assist students using ChatGPT within Microsoft Teams.",
    ],
    technologies: ["Python", "Azure", "Databricks", "DataLake", "PySpark", "Synapse", "BotFramework", "MongoBD"],
  }
];