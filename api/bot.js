import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Привіт! Натисни Menu', {
    reply_markup: {
      keyboard: [[{ text: 'Menu', web_app: { url: 'https://giftify-ua1.vercel.app' } }]],
      resize_keyboard: true
    }
  });
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body);
    res.status(200).end();
  } else {
    res.status(200).json({ message: 'Giftify UA Bot is running!' });
  }
}

export const config = {
  api: { bodyParser: false }
};
