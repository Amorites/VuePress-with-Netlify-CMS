module.exports = {
  title: "VuePress template",
  description:
    "A JAMstack website template with the default VuePress theme and Netlify CMS config.",
  //   base: "/VuePress-with-Netlify-CMS/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "GitHub",
        link: "https://github.com/p440davis/VuePress-with-Netlify-CMS",
      },
    ],
    sidebar: ["/_pages/guide"],
  },
};
