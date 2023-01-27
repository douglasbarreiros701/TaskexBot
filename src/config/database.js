const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    console.log('Tentando conectar no banco de dados');
    mongoose
      .connect(process.env.DATABASE_URL, {})
      .then(() => {
        console.log('Conectado com o servidor');
        this.connection = mongoose.connection;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

module.exports = new Database();

// TaskexBot701
