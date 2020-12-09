# whatabyte-tutorial app

Source: https://auth0.com/blog/create-a-simple-and-secure-node-express-app/

## Setup

1. Clone this repo and enter the folder.
1. Copy `.env.example` to `.env` and populate with AUTH0 app settings. Enter a randomized 32 byte hexadecimal string for the `SESSION_SECRET`. (`openssl rand -hex 32` works nicely)
1. Install [browser-sync][1]: `npm i -g browser-sync`
1. Install libraries: `npm i`
1. Run the server in one terminal window: `npm run dev`
1. Run the browser-sync in another terminal window: `npm run ui`
1. Visit http://localhost:3000/

[1]: https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
