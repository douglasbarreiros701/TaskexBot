const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose")
const db = require("./src/config/database")



mongoose.set("strictQuery", true);
db.connect();

const bot = new Discord.Client({
  intents: [8],
});

bot.login(config.BOT_TOKEN);

const prefix = "!";

bot.on("message", function (msg) {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  const args = msg.content.split(" ").slice(1);

  const command = msg.content.split(" ").slice(0,1).shift().replace(prefix, "")

  console.log(command)

  const date = new Date()
  console.log(date.toLocaleDateString())

  const commands = require("./commandFile")
  
  try {
    
   const commandName = commands.get(command)
   commandName.execute(bot, msg, args)
    
  } catch (err) {
    console.error(err);
    return msg.reply("Ops! Ainda não conheço esse comando");
  }
})


bot.on("ready", () => {
  console.log(`Estou conectado como ${bot.user.username}`);
});

module.exports = {bot}