# Item-Expiry Manager Bot

[![Bintray](https://img.shields.io/static/v1?label=visit&message=telegram%20bot&color=blue&logo=telegram)](https://telegram.dog/ItemExpiryBot)

A telegram bot to manage your items (foods, cosmetics, etc.) healthiness and get early notification on expiring items.

Built upon by: Telegraf(nodejs)

### How to setup the project:

#### 1. Get a copy of the project:
 > user@host: `git clone https://github.com/dietrich-xp/item-expiry-manager-bot.git`

or download it as zip and extract it

#### 2. Download dependencies (on the project directory)

 > user@host (item-expiry-manager-bot): `yarn`

or if you prefer to use npm,

 > user@host (item-expiry-manager-bot): `npm install`

#### 3. Setup configuration:
Copy `.sample-env` to `.env` and set the environment variables.

Configure `config/default.js` file to point to your database.

You can create `config/production.js` to override the default config.

#### 4. Run the project:

start the bot using `yarn` or `dev`.

##### For developement:
 > user@host (item-expiry-manager-bot): `yarn dev`

or using npm,
 > user@host (item-expiry-manager-bot): `npm run dev`

##### For production:
 > user@host (item-expiry-manager-bot): `yarn start`

or using npm,
 > user@host (item-expiry-manager-bot): `npm start`
