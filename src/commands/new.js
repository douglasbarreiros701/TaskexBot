const discord = require("discord.js")
const Todo = require("../models/Todo")

const execute = (bot, msg, args) => {
  return msg.reply("Adicionou nova anotação")
};

module.exports = { 
  name:"new"
  ,execute
      
  // name: "new",
  //     description: "Armazenar tarefa",
  //     type: "CHAT_IMPUT",
  //     options: [
  //       {
  //         name: "novaTarefa",
  //         type: String,
  //         description: "Salvar tarefa",
  //         require: true,
  //       }
  //     ],

  //     run: async (bot, msg, args) => {
  //       const novatarefa = args.options.getString("novaTarefa")
        
  //       await Todo.create({
  //         name: novatarefa,
  //       })

  //       await args.reply(`${novatarefa} registrado com sucesso`)
  //     }, execute
      
 }
    

