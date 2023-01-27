const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

require('dotenv').config();

//Environment variables verification
if (!process.env.DATABASE_URL || !process.env.DISCORD_BOT_TOKEN)
  throw new Error(
    'A variável de ambiente DATABASE_URL ou DISCORD_BOT_TOKEN é indefinida.'
  );

const db = require('./src/config/database');
db.connect();

const discord = require('discord.js');
const bot = new discord.Client({
  intents: [8],
});

bot.login(process.env.DISCORD_BOT_TOKEN);

const prefix = '!';

bot.on('message', function (msg) {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  const commandName = msg.content.match(/(?<=^\!)\w+/);
  const args = msg.content.match(/(?<={)(?<key>\w+)=(?<value>(.(?<!}))+)/g);

  if (!commandName)
    return msg.reply(`Parece que a sintaxe do comando está incorreta. 😐
    Para escrever algum comando, utilize a sintaxe: !<commandName> [{<argument>}]`);
  console.log(commandName);
  console.log(args);

  const date = new Date();
  console.log(date.toLocaleDateString());

  const commands = require('./commandFile');

  try {
    const command = commands.get(commandName[0]);
    if (!command)
      return msg.reply('Ops! Eu ainda não conheço esse comando. 😕');
    command.execute(bot, msg, args);
  } catch (err) {
    console.error(err);
  }
});

bot.on('ready', () => {
  console.log(`Estou conectado como ${bot.user.username}`);
});

module.exports = { bot };
