export const site = {
  name: 'Тони Лесов',
  title: 'Фрийланс уеб разработчик и Shopify специалист',
  description:
    'Изработка на модерни уебсайтове, Shopify магазини, редизайн и SEO оптимизация за български фирми и предприемачи.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  contact: {
    phoneLabel: '0898240305',
    phone: '0898240305',
    email: 'tonylsv99@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/tony-lesov-48286b293',
    github: 'https://github.com/tonyy-l'
  },
  navigation: [
    { label: 'Услуги', section: 'uslugi' },
    { label: 'Портфолио', section: 'portfolio' },
    { label: 'За мен', section: 'za-men' },
    { label: 'Контакти', section: 'kontakti' },
    { label: 'Отзиви', section: 'otzivi' }
  ],
  hero: {
    eyebrow: 'Уеб разработка',
    title: 'Уебсайтове, изградени с грижа за детайла и резултата.',
    subtitle:
      'Разработвам сайтове за фирми, специалисти и ресторанти - с модерни технологии, бърза работа и дизайн, който печели доверие.',
    primaryCta: 'Поискай оферта',
    secondaryCta: 'Виж проектите'
  },
  ctaBand: {
    title: 'Нуждаеш се от сайт, който носи реални запитвания?',
    text:
      'Изпрати кратко описание на проекта и ще върна ясна оферта, срок и конкретен план за изпълнение.',
    button: 'Свържи се с мен'
  },
  about: {
    eyebrow: 'За мен',
    title: 'Фокусиран върху дизайн, скорост и резултати',
    description:
      'Работя с фокус върху ясно позициониране, техническа стабилност и удобство за потребителя. Подхождам като партньор, а не просто като изпълнител.',
    experience: [
      'Опит с корпоративни сайтове, лендинги и Shopify проекти',
      'Изграждане на структури за по-добро SEO и повече запитвания',
      'Редизайн на съществуващи уебсайтове с фокус върху конверсия'
    ],
    skills: ['UI/UX ориентиран подход', 'Shopify настройка и оптимизация', 'Next.js разработки', 'SEO и performance'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify', 'SEO', 'Responsive design']
  },
  form: {
    eyebrow: 'Контакти',
    title: 'Разкажи ми за проекта си',
    description:
      'Попълни формата и ще получиш отговор с първоначална насока и следваща стъпка.',
    fields: {
      name: 'Име',
      company: 'Фирма',
      phone: 'Телефон',
      email: 'Имейл',
      projectType: 'Тип проект',
      budget: 'Бюджет',
      message: 'Съобщение'
    },
    placeholders: {
      name: 'Например: Иван Петров',
      company: 'Име на фирмата',
      phone: '0898240305',
      email: 'Добави имейл адреса си',
      message: 'Опиши целта, сроковете и какво искаш да постигнеш.'
    },
    projectTypes: [
      'Лендинг страница',
      'Фирмен уебсайт',
      'Shopify магазин',
      'Редизайн',
      'Поддръжка',
      'SEO оптимизация'
    ],
    budgets: ['Под 2000 лв.', '2000 - 5000 лв.', '5000 - 10 000 лв.', '10 000+ лв.'],
    submitLabel: 'Изпрати запитване',
    successMessage: 'Запитването е подготвено.',
    errorMessage: 'Моля, попълни всички задължителни полета коректно.'
  },
  footer: {
    copyright: '© 2026 Тони Лесов. Всички права запазени.'
  }
} as const;
