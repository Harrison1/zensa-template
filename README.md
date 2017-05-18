# Zensa Template

I used [create-react-app](https://github.com/facebookincubator/create-react-app) to create the react app.

I installed the instagram embed component and their preffered document meta module

```
npm i -S react-instagram-embed react-document-meta
```

I copied over all their css.

And then after that all I do is update the Blog.js file. I'll use the dev server to test the project locally using `npm start`.

Typically we don't add any classes or styles. We just add in the header image, the title, and then just reuse the portions outlined the `master template`. Writers shouldn't be adding anything new, they should only be resuing what's already there.

When I do the final build to push to the staging server, I adjust the homepage value in the package.json file and run `npm run build` and push the build folder.
