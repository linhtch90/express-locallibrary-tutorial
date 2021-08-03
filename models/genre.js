var mongoose = require("mongoose");

var GenreSchema = new mongoose.Schema({
  name: { type: String, minLength: 3, maxLength: 100 },
});

GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);
