const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);

    console.log('BD online');
  } catch (error) {
    console.log(error);
    //throw new Error('Error a la hora de iniciar la base de datos');
  }
};

module.exports = {
  dbConnection,
};
