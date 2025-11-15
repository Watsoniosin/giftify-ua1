// api/bot.js
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

// Команда /start
bot.start((ctx) => {
  ctx.reply('Привіт! Натисни Menu 👇', {
    reply_markup: {
      keyboard: [[{ text: 'Menu', web_app: { url: 'https://giftify-ua1.vercel.app' } }]],
      resize_keyboard: true
    }
  });
});

// Запуск
export default async function handler(req, res) {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(200).json({ message: 'Giftify UA Bot is running!' });
  }
}

// Для Vercel
export const config = {
  api: {
    bodyParser: false
  }
};
