// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

// The includes() method is case sensitive.

// Syntax:
// array.includes(element, start) 
//element:Required. The value to search for.
// star: Optional. Start position. Default is 0.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);