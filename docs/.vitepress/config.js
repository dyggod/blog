module.exports = {
  title: 'dyggod\'s blog',
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A'},
          { text: 'Item B'},
          { text: 'Item C'}
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: '前端',
        items: [
          { text: '前端发展路线', link: '/frontend/index' },
        ]
      },
      {
        text: '服务端',
        items: [
          {
            text: 'ubuntu 常用环境搭建',
            link: '/server/ubuntu-env',
          }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'mongodb', link: '/db/mongodb' },
        ]
      },
      {
        text: '扩展',
        items: [
          {
            text: '辅助网站',
            link: '/extend/website',
          },
          {
            // 知识库
            text: '知识库',
            link: '/extend/knowledge',
          },
          {
            text: 'good repo',
            link: '/extend/good-repo',
          },
          {
            text: 'good blog',
            link: '/extend/good-blog',
          },
          {
            text: 'python',
            link: '/extend/python'
          }
        ],
      }
    ],
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
