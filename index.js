const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*
function titleCasedDemo(tutorials) {
  return tutorials.map(function (phrase) {
    return (phrase.split(" ").map(function (word) {
      return word[0].toUpperCase() + word.slice(1, word.length);
    })).join(" ");
  })
}
*/
/*
const titleCasedDemo2 = tutorials.map((phrase) => {
  return (phrase.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
  })).join(" ");
})
*/

const titleCased = (array=tutorials) => {
  return array.map(function (phrase) {
    return (phrase.split(" ").map(function (word) {
      return word[0].toUpperCase() + word.slice(1, word.length);
    })).join(" ");
  })
}

/*
const practice = [1, 2, 3]
const practiceMap = practice.map((anything) =>{
  return anything*anything;
})

console.log(practiceMap)
/*

/*
function titleCasedDemo(array, cb) {
  return array.map(phraseShift);
}
function phraseShift(phrase) {
  //const changedPhrase =
  return (phrase.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
  })).join(" ");
  //return changedPhrase.join(" ");
}

console.log(titleCased(tutorials));
*/
