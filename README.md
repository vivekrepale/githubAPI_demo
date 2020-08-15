# githubAPI_demo

## Project description - Github Demo App.

This app simply fetches all users who have forked REACT's repository from Github API and displays users list as card layout. Sole purpose of this project is to showcase my skills.

## Live link

[https://github-api-demo-app.netlify.app](https://github-api-demo-app.netlify.app)

## Feautures

```
1. Modularized code.
2. Super organized CSS.
3. Fully responsive UI accross all screen sizes.
4. Modern animation on scroll when card mounts.
5. Pagination.
6. API tokens are protected using environment variables.
7. Webpack build process which makes deployment accross all platforms very easy.
8. Site is freely hosted on Netlify.

```

## Usage

```
1. Landing page contains Header, Card Layout, Footer.
2. Header is title of the project.
3. Card layout displays each user who forked reacts repo from github along with his/her avatar, username, forkId and a Follow button.
4. Footer contains pagination links. By default only 30 cards are displayed at a timeand then you can navigate next cards using these links in footer.
5. Header and footer have fixed position.
6. When you click on Follow button, by using token saved in config file that user is followed by authenticated user.
```

## Issues

```
1. Scroll animation behaves unexpectedly sometimes while scrolling slowing, cards start to flicker untill you scroll back or forward.
```

## Steps to reproduce locally

```
1. Run "git clone https://github.com/vivekrepale/githubAPI_demo.git"
2. Run "npm install"
3. Create .env file in root and add your Personal Access Token, generated from Github.
4. Run "npm run dev"
```

## Technologies used

```
react
axios
react-spring
react-waypoint
webpack
sass/scss
dotenv
```
