module.exports = {
    title: '黄俊彦のBLOG',
    description: 'Stay hungry, Stay foolish',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }]
    ],
    dest: './dist',
    base: '/Blog/',
    themeConfig: {
        sidebar: false,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '博文',
                items: [
                    { text: 'JS', link: '/JS/' },
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'HTTP', link: '/HTTP/' }
                ]
            },
            {
                text: '其他',
                items: [
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
                    { title: "AJAX初步认知", path: '/JS/AJAXFirstLearn' },
                    { title: "浏览器同源策略：手动实现CORS、JSONP跨域", path: '/JS/浏览器同源策略：手动实现CORS、JSONP跨域' },
                    { title: "var和let const的区别", path: '/JS/var和let const的区别' },
                ]
            },
            {
                title: 'CSS',
                path: '/CSS/初探CSS动画',
                collapsable: true,
                children: [
                    { title: "初探CSS动画", path: '/CSS/初探CSS动画' },
                ]
            },
            {
                title: 'HTTP',
                path: '/HTTP/',
                collapsable: true,
                children: [
                    { title: "HTTP初步认知", path: '/HTTP/HTTP初步认知' },
                ]
            }
        ]
    }

}

