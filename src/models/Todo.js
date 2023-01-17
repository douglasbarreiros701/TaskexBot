const mongoose = require("mongoose")
const dateOnly = require("mongoose-dateonly")(mongoose)

const TodoSchema = new mongoose.Schema({
    name: String,
    discription: String,
    createdAt: { type: Date, 
                 default: ()=>{date.now}},

    date: { type: dateOnly,
            required:true,
          },
})

module.exports = mongoose.model("Todo", TodoSchema)
