module.exports = {
  title: 'dyggod\'s blog',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: nav(),
    sidebar: {
      '/develop-record/': sidebarRecord(),
      '/guide/': sidebarGuide(),
      '/components/': sidebarComponent(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ],
    editLink: {
      pattern: 'https://github.com/dyggod/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Dyggod'
    }
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}

function nav() {
  return [
    { text: '开发记录', link: '/develop-record/', activeMatch: '/develop-record/' },
    {
      text: '知识指南',
      link: '/guide/',
      activeMatch: '/guide/',
    },
    {
      text: '组件',
      link: '/components/introduction',
      activeMatch: '/components/',
    },
  ];
}

function sidebarRecord() {
  return [
    {
      text: '前端',
      items: [
        {
          text: 'npm',
          link: '/develop-record/frontend/npm',
        }
      ]
    },
    {
      text: '服务端',
      items: [
        {
          text: 'ubuntu 常用环境搭建',
          link: '/develop-record/server/ubuntu-env',
        }
      ]
    },
    {
      text: '数据库',
      items: [
        { text: 'mongodb', link: '/develop-record/db/mongodb' },
      ]
    },
    {
      text: '扩展',
      collapsible: true,
      items: [
        {
          text: '辅助网站',
          link: '/develop-record/extend/website',
        },
        {
          text: '知识库',
          link: '/develop-record/extend/knowledge',
        },
        {
          text: 'good repo',
          link: '/develop-record/extend/good-repo',
        },
        {
          text: 'good blog',
          link: '/develop-record/extend/good-blog',
        },
        {
          text: 'python',
          link: '/develop-record/extend/python'
        }
      ],
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '前端',
      items: [
        { text: '前端发展路线', link: '/guide/frontend/index' },
        { text: 'git', link: '/guide/git-github/index' },
      ]
    },
  ];
}

function sidebarComponent() {
  return [
    {
      text: '组件',
      items: [
        { text: '组件', link: '/components/introduction' },
      ],
    },
  ];
}
