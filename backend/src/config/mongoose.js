const mongoose = require("mongoose");
const { mongo } = require("./vars");
const { MONGO_URLs } = require("./vars");
/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose
    .connect(
      "mongodb://ahmad:9HuwXD6V6fDgbCMa@ac-zrx1llj-shard-00-00.hs0ys0f.mongodb.net:27017,ac-zrx1llj-shard-00-01.hs0ys0f.mongodb.net:27017,ac-zrx1llj-shard-00-02.hs0ys0f.mongodb.net:27017/Shopit?ssl=true&replicaSet=atlas-be17az-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        keepAlive: 1,
      }
    )
    .catch((err) => {
      console.log(err);
    });
  return mongoose.connection;
};
