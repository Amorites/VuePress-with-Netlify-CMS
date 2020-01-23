# VuePress with Netlify CMS
A website starter template with the default VuePress theme and Netlify CMS config

## Setup Netlify CMS
### Edit your admin config
Edit the `backend` config in `.vuepress/public/admin/config.yml` to point at your repo, e.g.

```
backend:
  name: github
  repo: username/repo
```

### Enable CMS login with GitHub OAuth

Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.

Enter the name and full URL of your Netlify site.\
   Authorization callback URL callback URL:

```
https://api.netlify.com/auth/done
```
You should now be able to visit the /admin page on your website and login with GitHub.

## Contribute
This template is default VuePress - so please give your [skills](https://github.com/vuejs/vuepress) or [money](https://opencollective.com/vuepress) to the [VuePress team](https://github.com/vuejs/vuepress).
