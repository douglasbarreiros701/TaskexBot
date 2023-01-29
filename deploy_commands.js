const { REST } = require('@discordjs/rest');
const fs = require('node:fs');
const path = require('node:path');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();

let commands = [];

const commandFile = fs
   .readdirSync(path.join(__dirname, './src/commands/'))
   .filter(filename => filename.endsWith('.js'));

console.log(commandFile);

for (const file of commandFile) {
   const filePath = path.join(__dirname, 'src', 'commands', file);
   const command = require(filePath);

   if ('data' in command && 'execute' in command) {
      commands.push(command.data.toJSON());
   } else {
      console.log(
         `[ATENÇÃO] O comando em ${filePath} está faltando uma "data" obrigatória ou a propriedade "execute".`
      );
   }
}

const rest = new REST({ version: '10' }).setToken(
   process.env.DISCORD_BOT_TOKEN
);

(async () => {
   try {
      console.log('Started refreshing application (/) commands.');
      console.log(commands);
      const data = await rest.put(
         Routes.applicationCommands(process.env.CLIENT_ID),
         {
            body: commands,
         }
      );

      console.log(`Successfully reloaded application ${data.length} commands.`);
   } catch (error) {
      console.error(error);
   }
})();
