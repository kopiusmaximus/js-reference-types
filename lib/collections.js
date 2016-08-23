'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
// Define words as an array and split based on the regular expression
// for one or more blank spaces
let words = [];
words = paragraph.split(/\s+/);

// iterate over the 'words' array and build normalizedWords array by copying
// the words array and removing any non-word characters
let normalizedWords = [];
for (let i = 0; i < words.length; i++) {
  normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
}

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};
// iterate through normalizedWords array and store each value as a key
// in the uniqueWordsAsKeys Object. NOTE! You cannot have duplicate keys in
// any object. So each time this code attempts to duplicate a key/value pair,
// it's actually just reassigning that key a new value.

for (let i = 0; i < normalizedWords.length; i++){
  uniqueWordsAsKeys[normalizedWords[i]] = true;
}

console.log('uniqueWordsAsKeyswords is ', uniqueWordsAsKeys);

// The keys pulled out into a list
let uniqueWords = [];


// The words as keys and the values the count of each word
let wordFrequencies = {};

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
