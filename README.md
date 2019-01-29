# Compute Safely
With both governments and corporate entities trampling over the privacy rights of people throughout much of the world, choosing the right tools is now more important than ever.

### Run this locally
1. `$ git clone https://gitea.javi.pro/javi/computesafely.net.git`
2. `$ cd computesafely.net`
3. `$ npm install`
4. `$ npm run dev`
5. View the running app in your browser at `http://localhost:3000`

### Deploying
You can deploy this project yourself with ZEIT + Now by configuring `now.json` and running `$ now`. You should change the Google Analytics tag in `lib/gtag.js` and the Sentry DSN url in `pages/_app.js`.

Stay safe 👍
