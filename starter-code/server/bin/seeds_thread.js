const mongoose = require('mongoose');
const Thread = require('../models/thread.model');

const dbName = 'forum-development'
mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
  {
    title: 'Chiquito Ipsum',
    content: 'Lorem fistrum ahorarr ahorarr tiene musho peligro quietooor a peich. Qué dise usteer torpedo a gramenawer apetecan a gramenawer mamaar amatomaa diodeno. Hasta luego Lucas no puedor al ataquerl fistro hasta luego Lucas a wan se calle ustée no puedor. Llevame al sircoo de la pradera pecador pupita de la pradera. Ese hombree qué dise usteer tiene musho peligro apetecan me cago en tus muelas jarl. Fistro no te digo trigo por no llamarte Rodrigor quietooor mamaar ese hombree la caidita a gramenawer benemeritaar va usté muy cargadoo.',
    date: new Date(),
  },
  {
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat leo ligula. Aenean sit amet hendrerit dolor, vitae congue lectus. Curabitur et commodo libero. Integer sit amet fermentum tellus. Vestibulum at interdum odio, sed bibendum magna. Sed eu risus tincidunt, rutrum mauris eu, aliquet dui. Aliquam sapien augue, sagittis id neque vehicula, facilisis lacinia orci. Proin odio purus, feugiat vitae nunc efficitur, hendrerit pretium urna. Donec dictum libero id risus varius, non pharetra dolor gravida. Cras sed neque ex. Nunc eu placerat eros, non malesuada turpis. Integer imperdiet felis nec gravida interdum. Sed quis scelerisque nibh, pulvinar feugiat nisl. Praesent ultrices, tellus id euismod gravida, nisi nulla pellentesque dui, in scelerisque eros ex sed est.',
    date: new Date(),
  }
]

Thread.create( threads)
  .then(() => { console.log('Created threads'); mongoose.disconnect() })
  .catch( err => { throw(err) });