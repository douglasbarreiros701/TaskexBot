const discord = require("discord.js")
const Todo = require("../models/Todo")

const execute = (bot, msg, args) => {

  const title = args[0]
  console.log(title)
  
  const discription = args[1]
  console.log(discription)

  return msg.reply("Funcionando");
  
};

module.exports = {
  name: "new",
  new: "new",
  execute,
};


    

