// import .env variables
require("dotenv").config();

module.exports = {
  port: 5000,
  MONGO_URL: "",

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
