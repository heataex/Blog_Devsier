import type { ThemeConfig } from './types/theme-config.d.ts';

// 1. Import file tiếng Việt vừa tạo
import viStrings from './src/i18n/vi.json' with { type: 'json' };
import enStrings from './src/i18n/en.json' with { type: 'json' };
import deStrings from './src/i18n/de.json' with { type: 'json' };
import frStrings from './src/i18n/fr.json' with { type: 'json' };
import esStrings from './src/i18n/es.json' with { type: 'json' };

export const themeConfig: ThemeConfig = {
  site: import.meta.env?.SITE_OVERRIDE || 'https://devsier.com', // Thay domain blog của bạn
  primaryColor: '#f26430', 
  themeColor: '#50168a',
  generateWebmanifest: true,
  
  // 2. Tên thương hiệu blog
  name: 'Devsier Blog',
  shortName: 'Devsier',
  darkMode: true,
  robots: import.meta.env?.ROBOTS || 'index, follow',
  xHandle: 'devsier',

  // 3. Thông tin Tác giả & Nhà xuất bản
  author: {
    type: 'Person',
    name: 'Nguyễn Đình Huy', // Tên của bạn
    url: 'https://devsier.com/about', 
    image: '',
  },
  publisher: {
    type: 'Organization',
    name: 'Devsier Inc.',
    url: 'https://devsier.com',
    image: '',
  },

  // 4. Cấu hình Ngôn ngữ (Chuyển tiếng Việt thành mặc định)
  i18n: {
    defaultLocale: 'vi', // Đổi ngôn ngữ mặc định thành 'vi'
    locales: ['vi', 'en', 'de', 'fr', 'es'],
    languages: {
      vi: 'Tiếng Việt',
      en: 'English',
      de: 'Deutsch',
      fr: 'Français',
      es: 'Español',
    },
    languageModules: {
      vi: viStrings,
      en: enStrings,
      de: deStrings,
      fr: frStrings,
      es: esStrings,
    },
    translatedStructuredData: {
      vi: {
        author: {
          name: 'Nguyễn Đình Huy',
          url: 'https://devsier.com/about',
        },
        publisher: {
          name: 'Devsier Inc.',
          url: 'https://devsier.com',
        },
      },
    },
  },

  expressiveCodeThemes: {
    light: 'min-light',
    dark: 'min-dark',
  },

  // 5. Cấu hình bài viết
  articles: {
    imageFallback: true,
    gridView: true,
    textOverImage: false,
    categories: true, 
    tags: true, 
    entriesPerPage: 6, // Số bài viết hiển thị trên 1 trang
    tocMaxDepth: 3,
    defaults: {
      author: {
        name: 'Nguyễn Đình Huy',
        url: 'https://devsier.com/about',
      },
    },
    social: {
      xHandle: 'devsier',
      buttons: {
        email: true,
        facebook: true,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: false,
        telegram: true,
        x: true,
        whatsapp: false,
      },
      buttonsSmallScreen: {
        email: true,
        facebook: true,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: false,
        telegram: true,
        x: true,
        whatsapp: false,
      },
    },
  },

  promotions: {
    newsletterSignup: 'footer',
    footerBanner: true,
    navAd: false,
    topBanner: false,
    heroChip: true,
  },

  onDemandRenderedCollections: ['integration_options'],

  dynamicEvents: {
    pullFromAddToCalendarPro: false,
    filterBy: {
      from: '',
      to: '',
      group: '',
    },
  },

  // 6. Mô tả dành cho AI / SEO
  llms: {
    autoGeneration: true,
    intro: 'Devsier Blog là nơi chia sẻ kiến thức về lập trình, phát triển web và công nghệ.',
    excludePagesPattern: ['/integration/**'],
    includePages: [],
    addArticles: 'selected',
    addEvents: 'all',
    addFAQ: 'all',
  },

  askAiTrigger: 'Tôi muốn tìm hiểu thêm thông tin về Devsier Blog.',
};