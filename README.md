[![Netlify Status](https://api.netlify.com/api/v1/badges/6adff723-8d84-47f5-89cf-85f1c6711af0/deploy-status)](https://app.netlify.com/sites/vuepress-template/deploys)

# VuePress with Netlify CMS
A website starter template with the default VuePress theme and Netlify CMS config

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
