const dictionary = {
    key: 'value',
    key2: [1, 2, 3],
}

// creating elements in a dictionary
dictionary['newKey'] = 'newValue';

// accessing elements in a dictionary
console.log(dictionary['newKey']); // newValue

// removing elements in a dictionary
delete dictionary['newKey'];

// checking if a key exists in a dictionary
console.log('newKey' in dictionary); // false