const mongoose = require("mongoose");
const configDB = require("./configDB.json");

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    const mongo_url = configDB.MONGODB_CLOUD
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

module.exports = new Database();

// TaskexBot701
