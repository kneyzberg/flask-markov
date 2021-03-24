const fsP = require('fs').promises;
const axios = require('axios');

class TextGenerator {

  constructor(markovClass) {
    this.markov = markovClass
  }

  generateText(text) {
    let mm = new this.markov(text)
    console.log(mm.getText())
  }

  async readFile(path){
    let content
    try {
      content = await fsP.readFile(path, 'utf8')
    }
    catch(err) {
      console.log(`Error fetching ${url}: ${err}`);
      process.exit(1)
    }
    this.generateText(content)
  }

  async readURL(url) {
    let resp;
    try{
      resp = await axios({url});
    }
    catch(err) {
      console.log(`Error fetching ${url}: ${err}`);
      process.exit(1)
    }
    this.generateText(resp.data)
  }
  
  // interpret cmd line 
  async read(cmd, path) {
    if (cmd !== 'file' || cmd !== 'url') {
      console.log(`Command '${cmd}' not recognized. Select 'file' or 'url `);
    }

    cmd === 'file' ? await this.readFile(path) : await this.readURL(path);
  }
}

module.exports = TextGenerator