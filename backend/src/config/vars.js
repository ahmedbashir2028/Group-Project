// import .env variables
require("dotenv").config();

module.exports = {
  port: 5000,
  MONGO_URL:
    "mongodb://ahmad:9HuwXD6V6fDgbCMa@ac-zrx1llj-shard-00-00.hs0ys0f.mongodb.net:27017,ac-zrx1llj-shard-00-01.hs0ys0f.mongodb.net:27017,ac-zrx1llj-shard-00-02.hs0ys0f.mongodb.net:27017/?ssl=true&replicaSet=atlas-be17az-shard-0&authSource=admin&retryWrites=true&w=majority",

  mongo: {
    // uri: "mongodb://localhost:27017/FP",
    // MONGO_URL:
    // "mongodb+srv://admin:WtlH6EXyUl5mYwDu@cluster0.hs0ys0f.mongodb.net/Shopit?retryWrites=true&w=majority",
  },
};
// module.exports = {
//   port: process.env.PORT,
//   mongo: {
//     uri: process.env.MONGO_URI,
//   },
// };
