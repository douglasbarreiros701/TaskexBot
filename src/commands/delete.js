const TodoRepository = require('../repositories/TodoRepository');

const execute = async (bot, msg, args) => {
  this.sintaxErrorMessage = `Parece que a sintaxe do comando está incorreta.
    Para escrever algum comando, utilize a sintaxe: !<commandName> [{<argument>}]`;

  if (!args) {
    return msg.reply(this.sintaxErrorMessage);
  }

  if (!args.every(arg => /^[\w]+\=[\W\w]+$/.test(arg)))
    return msg.reply(this.sintaxErrorMessage);

  const argsSplited = args.map(arg => arg.split('='));

  if (argsSplited[0][0] !== 'idDeleteTask') {
    return msg.reply('A propriedade idDeleteTask não foi informada');
  }

  const idDeleteTask = argsSplited[0][1];

  const result = await TodoRepository.delete(idDeleteTask);
  console.log(result);

  if (!!result) {
    return msg.reply(`
      Tarefa deletada com sucesso! 😁
      Título: ${result.title}
      Autor: ${result.author.nickname}
      Data de expiração: ${result.dateExpiration}`);
  } else {
    return msg.reply(`
      O id especificado não existe no banco de dados
    `);
  }
};

module.exports = {
  name: 'delete',
  delete: 'delete',
  help: 'descrição do help',
  execute,
};
