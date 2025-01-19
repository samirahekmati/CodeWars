//find the word by index

const str = 'The quick brown fox jumps over the lazy dog.';
//split(" ") converts str to array, replaces space with comma
const word = str.split(" ")
// console.log(word);
// console.log(word[3]);

function findTheWord (sentence, i){
    const array = sentence.split(" ");
    console.log("array-->",array)
    console.log(`word at index ${i} -->`,array[i])
}

findTheWord('The quick brown fox jumps over the lazy dog.', 3)


