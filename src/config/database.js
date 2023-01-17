const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    const mongo_url =
      "mongodb+srv://TasKexBot:QctYYHyVsjXlAsvu@cluster0.v8lk8co.mongodb.net/?retryWrites=true&w=majority";
    console.log("Tentando conectar no banco de dados");
    mongoose
      .connect(mongo_url, {
      })
      .then(() => {
        console.log("Conectado com o servidor");
        this.connection = mongoose.connection;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

module.exports = Database;

// QctYYHyVsjXlAsvu | senha do mongoDBCLoud
