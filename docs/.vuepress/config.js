module.exports = {
    title: "VuePress template", 
    description: "A JAMstack website template for Netlify with the default VuePress theme and Netlify CMS config.",
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