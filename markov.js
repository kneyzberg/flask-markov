/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    console.log(words);
    // MORE CODE HERE
    this.words = words;
    this.chain = this.makeChains();

  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // MORE CODE HERE
    let wordMap = new Map();
    for(let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i+1] || null;
      if(wordMap.has(word)){
        wordMap.get(word).push(nextWord);
      } else {
        wordMap.set(word, [nextWord]);
      }
    }
    return wordMap;
  }


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
    let textArr = [];
    let wordChoice = Array.from(this.words);
    let word = this.getRandomElement(wordChoice)
    
    
    while (textArr.length < numWords && word !== null){
      textArr.push(word)

      let nextWord = this.getRandomElement(this.chain.get(word))
      //append to textarr the newly defined word
      word = nextWord

    }
    return textArr.join(" ");
  }
  
  getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
module.exports = {MarkovMachine};
// textArr.push(word);
// let wordList = this.getRandomElement((this.chain).get(word))
// // console.log('chainWord = ', this.chain.get(word));
// let nextWord = this.getRandomElement(wordList)
// console.log(wordChoice);

// word = nextWord;
// i++;