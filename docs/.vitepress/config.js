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
      { icon: 'github', link: 'https://github.com/dyggod' },
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
      text: 'DG-UI组件库',
      link: 'https://dyggod.github.io/dg-design-vue/',
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
        },
        {
          text: 'utils',
          link: '/develop-record/frontend/utils',
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
      text: "记录",
      items: [
        {
          text: '分布式介绍', link: '/develop-record/db/distributed#什么是分布式数据库'
        },
        {
          text: '负载均衡', link: '/develop-record/db/distributed#什么是负载均衡'
        },
        {
          text: 'NTP及时间同步', link: '/develop-record/db/distributed#什么是ntp？同步'
        }
      ],
    },
    {
      text: '开发工具',
      collapsible: true,
      items: [
        {
          text: 'vscode',
          link: '/develop-record/tools/vscode/index',
        }
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
    {
      text: 'python',
      items: [
        { text: 'py学习记录', link: '/guide/python/pip' },
      ]
    },
    {
      text: 'Rust',
      items: [
        { text: 'Rust学习记录', link: '/guide/rust/index' },
      ]
    },
    {
      text: 'Linux',
      items: [
        { text: 'Linux学习记录', link: '/guide/linux/index' },
      ]
    },
    {
      text: '人工智能/机器学习',
      items: [
        { text: '环境准备与知识了解', link: '/guide/ai/index' },
        { text: '卷积神经网络', link: '/guide/ai/cnn' },
      ]
    }
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
