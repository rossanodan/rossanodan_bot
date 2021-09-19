import { Context } from 'telegraf';

const start = (context: Context) => context.reply('Hello there, welcome to rossanodan bot!\n\nList of available commands:\n/whoami');

export default start;
