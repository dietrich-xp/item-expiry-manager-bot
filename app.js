require("dotenv").config();
const config = require("config");
const telegraf = require("telegraf");

const bot = new telegraf(config.get('Bot.token'));

bot.on("message", (ctx) => {
  ctx.reply(ctx.message.text);
});

bot.launch();
