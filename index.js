require('dotenv').config();

const { Telegraf } = require('telegraf');

const start = require('./commands/start');
const whoami = require('./commands/whoami');
const website = require('./commands/website');

const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(token);

bot.start(start);

bot.command('whoami', whoami);
bot.command('website', website);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
