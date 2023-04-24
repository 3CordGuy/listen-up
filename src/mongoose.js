const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose.connect(app.get("mongodb") || process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set("useCreateIndex", true);
  mongoose.Promise = global.Promise;

  app.set("mongooseClient", mongoose);
};
