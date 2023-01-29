const { Events } = require('discord.js');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const bot = require('./client');
const commandFile = require('./commandFile');

require('dotenv').config();

//Environment variables verification
if (!process.env.DATABASE_URL || !process.env.DISCORD_BOT_TOKEN)
   throw new Error(
      'A variável de ambiente DATABASE_URL ou DISCORD_BOT_TOKEN é indefinida.'
   );

const db = require('./src/config/database');
db.connect();

bot.login(process.env.DISCORD_BOT_TOKEN);

bot.on(Events.InteractionCreate, async interaction => {
   if (!interaction.isChatInputCommand()) return;
   const command = interaction.client.commands.get(interaction.commandName);
   console.log(command);

   if (!command) {
      console.error(`No command matching ${interaction.commandName}`);
   }

   try {
      await command.execute(interaction);
   } catch (error) {
      console.error(error);
      return await interaction.reply(
         'Erro não foi possível executar o comando'
      );
   }
});

bot.on('ready', () => {
   console.log(`Estou conectado como ${bot.user.username}`);
});

module.exports = { bot };
