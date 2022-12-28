// import .env variables
require("dotenv").config();

module.exports = {
  port: 5000,
  mongo: {
    uri: "mongodb://localhost:27017/FP",
  },
};
// module.exports = {
//   port: process.env.PORT,
//   mongo: {
//     uri: process.env.MONGO_URI,
//   },
// };
