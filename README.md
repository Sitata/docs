# Website

This project is for our documentation for third parties to use our API and widgets.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npx docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Use the following to deploy:

```
wrangler publish
```
Reference: [https://developers.cloudflare.com/workers/platform/sites](https://developers.cloudflare.com/workers/platform/sites)


If we switch to github, the following instructions would apply.

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Import from Postman

We were able to generate most of the API pages through a conversion process with Postman. We used an online service to convert the Postman Collection to OpenAPI format and then converted the file once more using [Redocusaurus](https://github.com/rohit-gohri/redocusaurus)