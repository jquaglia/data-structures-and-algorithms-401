'use strict';

const hash = require('../hashtable/hashtable.js');

const p1 = 'Once upon a time, there was a brave princess who...';
const p2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const p3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

let repeatedWord = (paragraph) => {
  const table = new hash.HashTable(1024);
  const matches = paragraph.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g);

  for (const match in matches) {
    let keyValue = matches[match].toLowerCase();

    if (table.contains(keyValue)) {
      return table.get(keyValue);
    }

    table.add(keyValue, keyValue);
  }
};

// console.log(repeatedWord(p3));
module.exports = repeatedWord;
