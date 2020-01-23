---
title: Guide
permalink: '/:slug'
---

# How to use this template
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

Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.

Enter the name and full URL of your Netlify site and this authorization callback URL:

```
https://api.netlify.com/auth/done
```
You should now be able to visit the /admin page on your website and login with GitHub.
