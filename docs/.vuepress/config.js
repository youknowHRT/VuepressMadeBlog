module.exports = {
    title: '黄俊彦のBLOG',
    description: 'Stay hungry, Stay foolish',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }]
    ],
    dest: '/dist/',
    themeConfig: {
        sidebar: false,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '博文',
                items: [
                    { text: 'JS', link: '/JS/' },
                    { text: 'CSS', link: '/CSS/' }
                ]
            },
            {
                text: '其他',
                items: [
                    { text: '掘金', link: '/' },
                    { text: 'GitHub', link: '/' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'JavaScript',
                path: '/JS/',
                collapsable: true,
                children: [
                    { title: "关于this的指向", path: '/JS/pointerOfThis' },
                    { title: "js2", path: '/JS/js2' }
                ]
            },
            {
                title: 'CSS',
                path: '/CSS/',
                collapsable: true,
                children: [
                    { title: "css1", path: '/CSS/css1' },
                    { title: "css2", path: '/CSS/css2' }
                ]
            }
        ]
    }

}

