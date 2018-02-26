const mongoose = require("mongoose");
const Thread = require("../models/thread.model");
const dbName = "forum-development";


mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
 {
   title:"Amini amino" ,
   content: "Nose si tengo que lavarlo mas o fue por tirarme a una cabra",
   date: new Date()
 },
 {
    title:"Os parece bien cagar en el pecho?" ,
    content: "El otro dia le queria dar una sorpresa a un colega y le cague en el pecho,se enfado muchisimo y nose por que.",
    date: new Date()
  },
  {
    title:"Me duele la pachocha" ,
    content: "Fui andar en bici y despues de 34h me duele la pachocha nose porque,es normal?", 
    date: new Date()
  }
];

Thread.collection.drop()

Thread.create(threads, (err) => {
 if (err) {
   throw err;
 }
 console.log(`Created ${threads.length}`);
});