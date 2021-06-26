const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs')
const notes = require('./note')



yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            type: 'string',
            demandOption: true,
            describe:'title for the note'
        },
        body:{
            type:'string',
            demandOption: true,
            describe: 'body of the note'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder: {
        title:{
            demandOption: true,
            describe: 'title to delete the note',
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            demandOption : true,
            describe: "title to read a note",
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
