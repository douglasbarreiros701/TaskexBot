const todoModel = require('../models/Todo')

module.exports = new class TodoRepository {
    async create(data) {
        try{
            const newTask = await todoModel.create(data)
            return newTask
        } catch (err) {
            console.error('Não foi possível realizar a invocação no banco de dados.')
            console.error(err)
        }
    }

    async delete(idDeleteTask){
        try{
            const deleteTask = await todoModel.findByIdAndDelete(idDeleteTask)
            if(!idDeleteTask){
                throw new Error("Id não foi recebido")
            }
            return deleteTask
        }catch(err){
            console.error('Não foi possível deletar a task no banco de dados')
            console.error

        }
    }
}

//teste
