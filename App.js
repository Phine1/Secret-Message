

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you','get', 
'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what',
 'you', 'can', 'figure', 'out.','-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

 // Removing the last string of the array

secretMessage.pop();

// Logging the length of the array

console.log(secretMessage.length);

// Adding two words to the end of the array

secretMessage.push('to','Program');

// Changing the string 'easily' to 'right'
console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';

//Removing the first string of the array

secretMessage.shift();

// Adding the string 'Programming' to the beginning of the array


secretMessage.unshift('Programming');

// Replacing a range of strings with the string 'know'
secretMessage.splice(6,5,'know,');

// Adding the text ' This is the Secrete Message I have for all of you' to the existing arry
console.log(secretMessage.join('This is the Secrete Message I have for all of you'))
