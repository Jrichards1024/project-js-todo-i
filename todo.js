/*
What types of objects do you need?

List out nouns and verbs involved in creating TODO lists.
Decide which nouns and verbs you want/need to model.
The nouns will be your objects and the values the functions.

Write simple functions that work on a few number of well-defined objects.

Keep the responsibilities separated as best you can:

1. Representing a real-life todo list as in-memory objects
2. Manipulating those in-memory objects
3. Reading and writing from the todos.txt file
4. Displaying information to the user
5. Rather user input and taking the appropriate actions
*/

let fs = require('fs');
let process = require('process')
let file = process.argv[2]

function printList(file) {
  let text = fs.readFileSync(file, 'utf-8').split("\n")
  for (let i = 1; i < text.length - 1; i++ ) {
    console.log(`${i}. ${text[i]}`)
  }

}

printList(file)
