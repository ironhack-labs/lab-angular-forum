const mongoose = require("mongoose");
const Thread = require("../models/thread.model");
const Reply = require("../models/reply.model");
const User = require("../models/user.model");
const dbName = 'forum-development';

mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
  {
    title: "holi",
    content:'holi holi holi',
    date:new Date(),
  }
];

Thread.collection.drop

Thread.create(threads, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${threads.length}, threads`);
});
