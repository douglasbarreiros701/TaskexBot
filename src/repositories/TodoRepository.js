const todoModel = require('../models/Todo');

module.exports = new (class TodoRepository {
  async create(data) {
    try {
      const newTask = await todoModel.create(data);
      return newTask;
    } catch (err) {
      console.error('Não foi possível realizar a invocação no banco de dados.');
      console.error(err);
    }
  }
})();
