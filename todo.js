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
//let file = process.argv[2]
let Verdict = process.argv[2]
let Element = process.argv[3]


function printList(file) {
  let text = fs.readFileSync(file, 'utf-8').split("\n")
  initialFormatting(file, text)
  text = fs.readFileSync(file, 'utf-8').split("\n")
  if (Verdict ===  "add" || Verdict === "delete") {
      text = addOrDeleteFromList(text.slice(0, text.length - 1), file)
      formatText(text, file)
      return
    }
  for (let i = 0; i < text.length; i++ ) {
    if (Verdict === "complete") {
     markCompleteNext(text, file)
     return
  }
    else {
      console.log(text[i])}
}
}

function verify(line) {
if (line.includes("[")) {
      return true
    }
}

function initialFormatting(file, text) {
  if (verify(text[0])) {
    return
    }

  for (let i = 0; i < text.length - 1; i++ ) {
    if (i === 0) {
      fs.writeFileSync(file,`${i + 1}. [ ] ${text[i]}\n`,'utf8')
      }
    else {fs.appendFileSync(file,`${i + 1}. [ ] ${text[i]}\n`)}
  }
  }


function formatText(text, file) {
  if (Verdict === 'delete') {
    for (let i = 0; i < text.length; i++ ) {
        if (i === 0) {
          if (text[i].includes('[X]')) {
            fs.writeFileSync(file,`${i + 1}. [X] ${text[i].slice(7,text[i].length)}\n`,'utf8')
          }
          else {fs.writeFileSync(file,`${i + 1}. [ ] ${text[i].slice(7,text[i].length)}\n`,'utf8')}
          }
        else {
          if (text[i].includes('[X]')) {
            fs.appendFileSync(file,`${i + 1}. [X] ${text[i].slice(7,text[i].length)}\n`)

          }

          else{fs.appendFileSync(file,`${i + 1}. [ ] ${text[i].slice(7,text[i].length)}\n`)}
        }
  }
  }

  if (Verdict === 'add') {
  for (let i = 0; i < text.length; i++ ) {
      if (i === 0) {
        if (text[i].includes('[X]')) {
          fs.writeFileSync(file,`${i + 1}. [X]${text[i].slice(6,text[i].length)}\n`,'utf8')
        }
        else {fs.writeFileSync(file,`${i + 1}. [ ]${text[i].slice(6,text[i].length)}\n`,'utf8')}
        }
      else {
        if (!text[i].includes('[')) {

          fs.appendFileSync(file,`${i + 1}. [ ] ${text[i]}\n`)
          return

        }
        if (text[i].includes('[X]')) {
          fs.appendFileSync(file,`${i + 1}. [X] ${text[i].slice(7,text[i].length)}\n`)
        }

        else {fs.appendFileSync(file,`${i + 1}. [ ] ${text[i].slice(7,text[i].length)}\n`)}
      }
    }
  }
}


function markCompleteNext(text,file) {
  for (let i = 0; i < text.length; i++) {
    line = text[i]
    if (text[text.length - 1] === "") {
      if (i === text.length - 1) {
        return
      }
      }
      if (i + 1 === parseInt(Element)) {
        if (i === 0) {
          fs.writeFileSync(file,`${i + 1}. [X] ${line.slice(7,line.length)}`,'utf8')}
          else {
            fs.appendFileSync(file,`\n${i + 1}. [X] ${line.slice(7,line.length)}`)}
      }
        else {
          if (i === 0) {
            if (line.includes('[X]')) {
              fs.writeFileSync(file,`${i + 1}. [X] ${line.slice(7,line.length)}`,'utf8')
              }
            else {
              fs.writeFileSync(file,`${i + 1}. [ ] ${line.slice(7,line.length)}`,'utf8')
              }
          }
          else{
            if (line.includes('[X]')) {
              fs.appendFileSync(file,`\n${i + 1}. [X] ${line.slice(7,line.length)}`)
              }
            else {
              fs.appendFileSync(file,`\n${i + 1}. [ ] ${line.slice(7,line.length)}`)
            }
          }
        }
  }
}

function addOrDeleteFromList(text,file) {
  if (Verdict === "add") {
    text.push(Element)
    return text
  }
  else if (Verdict === "delete") {
    text.splice(Element - 1, 1)
    return text
  }
}




//printList(file)
//printList('./todos.txt')
printList('./test.txt');
