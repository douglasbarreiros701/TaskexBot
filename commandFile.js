const fs = require('fs');
const path = require('path');

const discord = require('discord.js');
const bot = require('./index');

bot.commands = new discord.Collection();

const commandFile = fs
  .readdirSync(path.join(__dirname, './src/commands/'))
  .filter((filename) => filename.endsWith('.js'));

console.log(commandFile);

for (const filename of commandFile) {
  const command = require(`./src/commands/${filename}`);
  bot.commands.set(command.name, command);
}

module.exports = bot.commands;
