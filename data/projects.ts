import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'bagerni-uslugi',
    name: 'Багерни услуги',
    category: 'Фирмен уебсайт',
    description:
      'Представителен сайт за багерни услуги с ясно подредени услуги, контакт и призив към действие за бързо запитване.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    link: 'https://tenev-invest-group.bg',
    image: '/images/projects/logotransperant.png',
    client: 'Фирма за багерни услуги и изкопни дейности',
    goal: 'По-ясно онлайн представяне и повече запитвания от частни и корпоративни клиенти.',
    challenges: ['Нужда от силно първо впечатление', 'Ясно представяне на услугите', 'Мобилна четимост и бързо зареждане'],
    solution:
      'Изградих структура с директни CTA бутони, кратки текстове за услугите и подредена секция за доверие и контакт.',
    gallery: ['/images/projects/Image1Bagger.png', '/images/projects/Image2Bagger.png', '/images/projects/Image3Bagger.png'],
    result: 'Сайтът представя услугите професионално и улеснява клиентите да поискат оферта.'
  },
  {
    slug: 'detski-obrazovatelni-igrachki',
    name: 'Детски образователни играчки и книжки',
    category: 'Shopify магазин',
    description:
      'Shopify магазин за детски образователни играчки и книжки с фокус върху лесно пазаруване, ясни колекции и мобилни продажби.',
    technologies: ['Shopify', 'Liquid', 'SEO', 'Responsive design'],
    link: 'https://kidsprouts.store/',
    image: '/images/projects/KidSproutsLogo.png',
    client: 'Онлайн магазин за детски образователни играчки и книжки',
    goal: 'Повече продажби, по-добра навигация и по-ясно представяне на продуктите.',
    challenges: ['Разпръснат каталог', 'Сложен checkout', 'Нужда от по-ясни продуктови страници'],
    solution:
      'Подредих началната страница, колекциите и продуктовите блокове така, че да водят потребителя към покупка.',
    gallery: ['/images/projects/gallery-1.svg', '/images/projects/gallery-2.svg', '/images/projects/gallery-3.svg'],
    result: 'Магазинът е по-лесен за навигация и по-убедителен на мобилни устройства.'
  },
  {
    slug: 'chitalishte-probuda-1990',
    name: 'Читалище „Пробуда - 1990 г.“',
    category: 'Институционален сайт',
    description:
      'Сайт на читалище с цел да представя дейността, инициативите и събитията по ясен и достъпен начин.',
    technologies: ['Next.js', 'TypeScript', 'Accessibility', 'SEO'],
    link: 'https://chitalishteprobuda.com/',
    image: '/images/projects/logo.png',
    client: 'Читалище „Пробуда - 1990 г.“',
    goal: 'По-добра публична видимост, модерно представяне и по-лесен достъп до информация за събития и дейности.',
    challenges: ['Нужда от по-ясна структура', 'Достъпност за различни възрастови групи', 'Представяне на културни инициативи'],
    solution:
      'Създадох подредена информационна архитектура с ясни секции за дейности, събития, история и контакт.',
    gallery: ['/images/projects/Image1Bagger.png', '/images/projects/gallery-2.svg', '/images/projects/gallery-3.svg'],
    result: 'Сайтът представя читалището по съвременен и уважителен начин и улеснява посетителите.'
  }
];
