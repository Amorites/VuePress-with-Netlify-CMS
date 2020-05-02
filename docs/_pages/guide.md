---
title: Guide
description: How to use this template to create your new VuePress site, deploy
  it to Netlify and connect up your CMS.
permalink: /:slug
---
# How to use this template

## Deploy to Netlify

The best way to start is to hit this button:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/petedavisdev/VuePress-with-Netlify-CMS&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

This will give you a GitHub repo and a website hosted by Netlify on a random URL. You can add your own domain name later in your "Domain settings" on Netlify.

Alternatively, you can just start with a Git repo and deploy later. Visit the [GitHub repo](https://github.com/petedavisdev/VuePress-with-Netlify-CMS) and click the "Use this template" button.

## Setup Netlify CMS

Edit the `backend` config in `.vuepress/public/admin/config.yml` to point at your repo and deploy the change.

```
backend:
  name: github
  repo: username/repo
```

## Login with GitHub OAuth

You can use [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) to authenticate CMS users, but to start off, it's simplest to give yourself access with GitHub OAuth.

1. Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.
2. Enter the name and full URL of your Netlify site and this authorization callback URL:

```
https://api.netlify.com/auth/done
```

3. Click Register application to get your Client ID and Client Secret. You will need these in a moment.
4. In your site Settings, open 'Access control'. Under OAuth, click 'Install provider' and copy in the Client ID and Secret from [GitHub](https://github.com/settings/developers).

You should now be able to visit the /admin page on your website and login with GitHub.

## Install and develop on your computer

You will need [Node](https://nodejs.org/) installed on your computer. Run these commands inside your repo to install vuepress and start a live-reloading development server:

```sh
npm i
npm run dev
```

### Build and deploy

```sh
npm run build
```

After build the folder to deploy is `docs/.vuepress/dist`

## Read the docs

[Official VuePress guide](https://vuepress.vuejs.org/guide/)

[VuePress default theme config](https://vuepress.vuejs.org/theme/default-theme-config.html)

[Netlify CMS docs](https://www.netlifycms.org/docs/intro/)

## Contribute

This template is default VuePress - so please give your [skills](https://github.com/vuejs/vuepress) or [money](https://opencollective.com/vuepress) to the [VuePress team](https://github.com/vuejs/vuepress).

## Author

Pete Davis

- Website: [petedavis.dev](https://petedavis.dev)
- Github: [@petedavisdev](https://github.com/petedavisdev)
- Twitter: [@petedavisdev](https://twitter.com/petedavisdev)