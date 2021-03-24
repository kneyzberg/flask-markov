const { MarkovMachine} = require("./markov");

describe("MarkovMachine", function () {
  // will hold the cart for the tests
  let cart;

  // beforeAll(function () {
  //   // create instance
  //   let m = new MarkovMachine('the cat in the hat')
  // });

  test("returns a string", function () {
    let m = new MarkovMachine('the cat in the hat')

    expect(typeof m.getText()).toEqual('string');
  });

  test("returns one of the words instantiated with", function () {
    let m = new MarkovMachine('the cat in the hat')

    expect(m.getText()).toContain('hat');
  });
});