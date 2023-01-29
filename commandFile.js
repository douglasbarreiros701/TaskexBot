const fs = require('node:fs');
const path = require('node:path');
const bot = require('./client');

const { Collection } = require('discord.js');

bot.commands = new Collection();

const commandFile = fs
   .readdirSync(path.join(__dirname, './src/commands/'))
   .filter(filename => filename.endsWith('.js'));

console.log(commandFile);

for (const file of commandFile) {
   const filePath = path.join(__dirname, 'src', 'commands', file);
   const command = require(filePath);

   if ('data' in command && 'execute' in command) {
      bot.commands.set(command.data.name, command);
   } else {
      console.log(
         `[ATENÇÃO] O comando em ${filePath} está faltando uma "data" obrigatória ou a propriedade "execute".`
      );
   }
}

module.exports = bot.commands;
