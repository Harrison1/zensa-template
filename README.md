#Zensa Template

I used [create-react-app](https://github.com/facebookincubator/create-react-app) to spin up the react app.

I installed the instagram embed component 

```
npm i -S react-instagram-embed
```

I copied over all their css.

And then after that all I do is updated the Blog.js file. I'll use the dev server to test the project locally using `npm start`.

When I do the final build to push to the staging server, I adjust the homepage value in the package.json file and run `npm run build` and push the build folder.
