import 'dotenv/config';

import { Telegraf } from 'telegraf';

import start from './commands/start';
import whoami from './commands/whoami';
import website from './commands/website';

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
