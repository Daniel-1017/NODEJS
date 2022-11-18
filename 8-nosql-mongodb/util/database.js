const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://first_user:1234@cluster0.j4grqal.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
