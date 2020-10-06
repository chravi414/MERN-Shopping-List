const mongooose = require("mongoose");
const Schema = mongooose.Schema;

// Create Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ItemModel = mongooose.model("item", ItemSchema);

module.exports = ItemModel;
