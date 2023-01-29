const TodoRepository = require('../repositories/TodoRepository');

const execute = async (bot, msg, args) => {
   this.sintaxErrorMessage = `Parece que a sintaxe do comando está incorreta. 😐
  Para escrever algum comando, utilize a sintaxe: !<commandName> [{<argument>}]`;

   if (!args) return msg.reply(this.sintaxErrorMessage);

   if (!args.every(arg => /^[\w]+\=[\W\w]+$/.test(arg)))
      return msg.reply(this.sintaxErrorMessage);

   const argsSplited = args.map(arg => arg.split('='));

   let data = {};
   for (const [key, value] of argsSplited) {
      const initialChar = value[0];
      data[key] = value.replace(/^\w/, initialChar.toUpperCase());
   }
   data = {
      ...data,
      author: {
         _id: msg.author.id,
         nickname: msg.author.username,
      },
   };
   console.log(data);

   const result = await TodoRepository.create(data);
   console.log(result);
   if (!!result)
      return msg.reply(`
  Tarefa criada com sucesso! 😁
  Título: ${result.title}
  Autor: ${result.author.nickname}
  Data de expiração: ${result.dateExpiration}`);
};

module.exports = {
   name: 'new',
   new: 'new',
   execute,
};
