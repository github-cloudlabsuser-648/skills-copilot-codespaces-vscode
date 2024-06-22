function reverseSentence(sentence) {
    // Reverse the sentence
    let reversedSentence = sentence.split('').reverse().join('');

    // Capitalize the first letter
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

const inputSentence = "Hello, world!";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

  const names = data.flatMap(arr => arr.map(obj => obj.name)); 
  
  console.log(names);

