const mongoose = require("mongoose")
const dateOnly = require("mongoose-dateonly")(mongoose)

const TodoSchema = new mongoose.Schema({
    title: String,
    discription: String,
    author: {
      _id: String,
      nickname: String,
    },
    createdAt: { type: Date, 
                 default: ()=>{date.now}},
    dateExpiration: { type: dateOnly,
            required:true,
          },
})

module.exports = mongoose.model("Todo", TodoSchema)
