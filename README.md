# cv

Hi! [Here's my CV](https://mmarochov.github.io/cv/), I made it with Svelte :)

## Deployment with GitHub pages

- make `gh-pages` branch
- make [`gh-pages.js`](https://www.devsamples.com/javascript/svelte/deploy-svelte-app-gh-pages) file in root of project
- remove build folder from gitignore on gh-pages branch
- `npm run build`
- git add, commit, and push
- `node ./gh-pages.js`