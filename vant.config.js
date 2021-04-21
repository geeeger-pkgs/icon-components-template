const list = require('./assets/img-navigator.json')

module.exports = {
    name: 'colorful-icon-components',
    build: {
        srcDir: 'src',
        site: {
            publicPath: '/'
        }
    },
    site: {
        title: 'colorful-icon-components',
        nav: [
            {
                title: '开发指南',
                items: [
                    {
                        path: 'home',
                        title: '介绍'
                    },
                    {
                        path: 'quickstart',
                        title: '快速上手'
                    },
                    {
                        path: 'development',
                        title: '开发组件'
                    }
                ]
            },
            {
                title: '基础组件',
                items: [
                    {
                        path: 'colorful-icon',
                        title: 'ColorfulIcon 彩色图标'
                    },
                    ...list
                ]
            }
        ]
    }
};
