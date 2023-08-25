// Good Luck 💪🏾
function plusHashCount(str) {
    // initialize a counter variable
    let count = 0;
    // loop through the string
    for (let i = 0; i < str.length; i++) {
      // check if the current character is a hash or a plus
      if (str[i] === "#" || str[i] === "+") {
        // increment the counter
        count++;
      }
    }
    // return the counter
    return count;
  }
console.log(plusHashCount("###+"))  
console.log(plusHashCount("##+++#"))
console.log(plusHashCount("#+++#+#++#"))
console.log(plusHashCount(""))
