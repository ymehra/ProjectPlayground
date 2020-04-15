const validator = require('validator')
const note = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

//customize yargs
yargs.version('1.1.0')

// add, remove, read, list

//create add command

yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'Note Body',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      note.addNote(argv.title, argv.body)
      
   }
})

yargs.command({
   command: 'remove',
   describe: 'remove a note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      note.removeNote(argv.title)
   }
})


yargs.command({
   command: 'read',
   describe: 'Read a note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      note.readNote(argv.title)
      
   }
})


yargs.command({
   command: 'list',
   describe: 'list all note',
   handler() {
      note.listNotes()
   }
})

yargs.parse()
