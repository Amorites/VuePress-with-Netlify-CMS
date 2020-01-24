module.exports = {
    title: "VuePress template", 
    description: "Netlify template",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/p440davis/VuePress-with-Netlify-CMS'}
        ],
        sidebar: [
          '/_pages/guide',
        ]
    }
}