const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ReplySchema = new Schema({
  _author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Reply = mongoose.model('Reply', ReplySchema);
module.exports = Reply;
