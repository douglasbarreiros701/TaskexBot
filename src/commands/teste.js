const { SlashCommandBuilder } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('teste')
      .setDescription('executa um teste simples'),

   async execute(interaction) {
      await interaction.reply('Teste feito com sucesso');
   },
};
