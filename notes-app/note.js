const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes();
    let  duplicateNotes = getDuplicates(title, notes);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse('Note Added!'));
    }
    else{
        console.log(chalk.red.inverse('Duplicatet note found!'));
    }
}

const getDuplicates = (title, notes) => notes.filter((note) => note.title === title); 

const removeNote = (title) =>{
    let notes = loadNotes();

    let duplicateNotes = getDuplicates(title, notes);

    if (duplicateNotes.length === 0) {
        console.log(chalk.bgRed('No note with title \'' + title + '\' found'))
    }
    else{
        let newNotes = notes.filter((note) => note.title !== title);
        saveNotes(newNotes);
        console.log(chalk.black.bgGreen('Note removed successfully'));
    }
}
const listNotes = () =>{
    let notes = loadNotes();
    console.log(chalk.black.bgGreen("Your Notes"));
    notes.forEach(element => {
        console.log(element.title);
    });

}

const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const readNote = (title) =>{
    let notes = loadNotes();

    let note = notes.find((note)=> note.title === title);
    if (note === undefined) {
        console.log(chalk.red.inverse('No note found!!'));
    }else{
        console.log(chalk.green.inverse(note.title));
        console.log(note.body);
    }


}

const saveNotes = (notes) => {
    const noteString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteString);
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
