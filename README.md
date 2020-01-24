[![Netlify Status](https://api.netlify.com/api/v1/badges/6adff723-8d84-47f5-89cf-85f1c6711af0/deploy-status)](https://app.netlify.com/sites/vuepress-template/deploys)

# VuePress with Netlify CMS
A website starter template with the default VuePress theme and Netlify CMS config.

## Demo site
[vuepress-template.netlify.com](https://vuepress-template.netlify.com/)

## Features
### VuePress "best of both" static site generator
- Generates static html for every page so that your first page load is fast.
- Once loaded, the site runs as a Single Page App (SPA), making it super slick.
- Customise your site with Vue-powered theme development
- Use Vue components within your markdown content to enhance your content

### Default VuePress starter theme
- Navbar
- Homepage layout
- Page layout
- Sidebar with heading navigation
- [Inherit from this default theme](https://vuepress.vuejs.org/theme/inheritance.html) or [create your own from scratch](https://vuepress.vuejs.org/theme/writing-a-theme.html)

### Netlify's CMS integration
- User-friendly editor for your markdown files hosted at /admin on your website
- Git-powered editorial workflow manages content directly inside your repo
- Homepage fully configured with delete prevention
- Page collection configured so that you can start creating content straight away

## Get started
### Deploy to Netlify
The best way to start is to hit this button:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/p440davis/VuePress-with-Netlify-CMS&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

This is the fastest way to get your website going. You will initially be hosted on a random URL, but you can add your own domain name later in your "Domain settings" on Netlify.

### Using as a GitHub template
If you are not deploying to Netlify, click the "Use this template" button above to create your own repo from this template.

### Develop, build and deploy
Check the `package.json` file for the dev and build commands. Once built, deploy the `docs/.vuepress/dist` directory to your hosting provider.

## Setup Netlify CMS
### Edit your admin config
Edit the `backend` config in `.vuepress/public/admin/config.yml` to point at your repo.

```
backend:
  name: github
  repo: username/repo
```

### Enable CMS login with GitHub OAuth

You can use [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) to authenticate CMS users, but to start off, it's simplest to give yourself access with GitHub OAuth.

1. Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.
2. Enter the name and full URL of your Netlify site and this authorization callback URL:

```
https://api.netlify.com/auth/done
```
3. Click Register application to get your Client ID and Client Secret. You will need these in a moment.
4. In your site Settings, open 'Access control'. Under OAuth, click 'Install provider' and copy in the Client ID and Secret from [GitHub](https://github.com/settings/developers).

You should now be able to visit the /admin page on your website and login with GitHub.

## Contribute
This template is default VuePress - so please give your [skills](https://github.com/vuejs/vuepress) or [money](https://opencollective.com/vuepress) to the [VuePress team](https://github.com/vuejs/vuepress).
