const mongoose = require("mongoose")
mongoose.set("strictQuery", true);

require('dotenv').config()

//Environment variables verification
if(!process.env.DATABASE_URL || !process.env.DISCORD_BOT_TOKEN) 
  throw new Error('A variável de ambiente DATABASE_URL ou DISCORD_BOT_TOKEN é indefinida.')


const db = require("./src/config/database")
db.connect();

const discord = require("discord.js");
const bot = new discord.Client({
  intents: [8],
});


bot.login(process.env.DISCORD_BOT_TOKEN);

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