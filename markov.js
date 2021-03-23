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
    let wordChoice = this.words;
    let word = wordChoice[this.getRandom(wordChoice)];
    console.log(word, "firstword");
    let i = 0;

    while (i < 100 && this.chain.get(word) !== null){
      textArr.push(word);
      console.log(word, "word in loop");
      let index = this.getRandom(this.chain.get(word))
      let nextWord = this.chain.get(word)[index];
      word = nextWord;
      i++;
    }
    return textArr.join(" ");
  }

  getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
module.exports = {MarkovMachine};