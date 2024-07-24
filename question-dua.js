// create function createHashtag
function createHashtag(x) {
  //init variable
  let hashtag = "";
  // loop input value
  for (let i = 1; i <= x; i++) {
    // add space in top
    hashtag += " ".repeat(x - i);
    // loop add #
    for (let j = 1; j <= i; j++) {
      //push value # in variable hashtag
      hashtag += "#";
    }
    // add new line
    hashtag += "\n";
  }
  return hashtag;
}

//test case "node index.js"
console.log(createHashtag(5));
console.log(createHashtag(3));
