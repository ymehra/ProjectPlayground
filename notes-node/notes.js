const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
   const notes = loadNotes()
   const duplicateNote = notes.find((note) => note.title === title)


   if (!duplicateNote) {
      notes.push({
         title: title,
         body: body
      })
      saveNotes(notes)
      console.log('Note Added')
   } else {
      console.log(chalk.red.inverse('Note title taken!'));
   }
}


const removeNote = (title) => {
   console.log('Removing note: ' + title)
   const notes = loadNotes()
   const remainingNotes = notes.filter((note) => note.title !== title)
   
   if (notes.length > remainingNotes.length) {
      console.log(chalk.green.inverse('Note removed.'))
      saveNotes(remainingNotes)
   } else {
      console.log(chalk.red.inverse('No note found.'))
   }
}

const listNotes = () => {
   console.log(chalk.inverse('Your Notes'))

   const notes = loadNotes()
   notes.forEach((note) => {
      console.log(note.title)
   })
}

const readNote= (title) => {

   const notes = loadNotes()  
   const note = notes.find((note) => note.title === title)
   
   if(note) {
      console.log(chalk.inverse(note.title))
      console.log(note.body)
   } else {
      console.log(chalk.red.inverse('No Note ' + title + ' found.'))
   }
}

const loadNotes = () => {
   try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJson = dataBuffer.toString()
      return JSON.parse(dataJson)
   } catch (e) {
      return []
   }
}

const saveNotes = (notes) => {
   try {
      const dataJSON = JSON.stringify(notes)
      fs.writeFileSync('notes.json', dataJSON)
   } catch(e) {

   }
}


module.exports = {
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes,
   readNote: readNote
}