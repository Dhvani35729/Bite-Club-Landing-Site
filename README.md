# trophyrestaurants

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=5c3ffc1e19873c0015d63b60

SESSION_SECRET=trofi-dev
TURBO_CDN=https://cdn.turbo360-vertex.com
TURBO_ENV=dev
TURBO_APP_ID=5c3ffc1e19873c0015d63b60

```

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```
