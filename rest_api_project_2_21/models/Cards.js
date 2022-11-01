const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  bizzName: {
    type: String,
    required: true,
    minlength: 2,
  },
  bizzAdress: {
    type: String,
    required: true,
    minlength: 6,
  },
  bizzDescription: {
    type: String,
    required: true,
    minilength: 6,
    maxlength: 1024,
  },
  bizzPhone: {
    type: String,
    minilength: 9,
    required: true,
    maxlength: 10,
  },
  bizzImage: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const Card = mongoose.model("cards", cardSchema);
module.exports = { Card };
