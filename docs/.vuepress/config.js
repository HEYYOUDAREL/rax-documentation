const { description } = require('../../package')

module.exports = {
  dest: '../../public',
  title: 'RAXWireless CRM',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    search: false,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchPlaceholder: 'Search a topic...',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Contact',
        link: '/contact/'
      },
      {
        text: 'About Me',
        link: 'https://heyyoudarel.github.io/rivas-portfolio/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'overview',
            'registration',
            'support',
          ]
        }
      ],
      '/contact/': [
        {
          title: 'Contact',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],

  configureWebpack: {
    optimization: {
      minimize: false
    }
  }

}
