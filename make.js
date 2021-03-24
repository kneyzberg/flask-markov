const TextGenerator = require("./textGenerator");
const { MarkovMachine } = require("./markov");

const textGenerator = new TextGenerator(MarkovMachine);

textGenerator.read(process.argv[2], process.argv[3]);