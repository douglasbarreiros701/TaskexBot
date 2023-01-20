const path = require("path")
const fs = require("fs")
const bot = require("./index")
const config = require("./config.json");
const Discord = require("discord.js")

bot.commands = new Discord.Collection();


const commandFile = fs
  .readdirSync(path.join(__dirname, "./src/commands/"))
  .filter((filename) => filename.endsWith(".js"));

console.log(commandFile);

for (var filename of commandFile) {
  const command = require(`./src/commands/${filename}`);
  bot.commands.set(command.name, command);
}

module.exports = {commandFile}