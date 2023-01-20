const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose")
 const commandFile = require("./routes")


const Database = require("./src/config/database");
db = new Database;
mongoose.set("strictQuery", true);
db.connect();

const bot = new Discord.Client({
  intents: [8],
});


bot.login(config.BOT_TOKEN);


const prefix = "!";

// pasta commands
// const commandFile = fs
//   .readdirSync(path.join(__dirname, "./src/commands/"))
//   .filter((filename) => filename.endsWith(".js"));

// console.log(commandFile);

// for (var filename of commandFile) {
//   const command = require(`./src/commands/${filename}`);
//   bot.commands.set(command.name, command);
// }


// configBot.bot(bot)
/******************************************************************* */

bot.on("message", function (msg) {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  const args = msg.content.split(" ").slice(1);

  const command = msg.content.split(" ").slice(0,1).shift().replace(prefix, "")

  console.log(command)
  const date = new Date()
  console.log(date.toLocaleDateString())
  try {
    bot.commands.get(command).execute(bot, msg, args);
  } catch (err) {
    console.error(err);
    return msg.reply("Ops! Ainda não conheço esse comando");
  }
});

/******************************************************************* */

bot.on("ready", () => {
  console.log(`Estou conectado como ${bot.user.username}`);
});

module.exports = bot.commands