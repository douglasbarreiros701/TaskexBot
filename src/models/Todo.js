const mongoose = require('mongoose');
const dateOnly = require('mongoose-dateonly')(mongoose);

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: String,
  author: {
    _id: {
      type: String,
      required: true,
    },
    nickname: String,
  },
  createdAt: {
    type: Date,
    default: () => {
      new Date();
    },
  },
  dateExpiration: {
    type: dateOnly,
    required: true,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
