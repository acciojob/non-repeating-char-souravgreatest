function firstNonRepeatedChar(str) {
  let arr = new Array(26).fill(0); // Initialize the array with 0s

  // Count occurrences of each character
  for (let char of str) {
    arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Find the first non-repeated character
  for (let char of str) {
    if (arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
      return char;
    }
  }

  return null;
}
  
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
