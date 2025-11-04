/* Chapter 7 - Notizblock */

// Note-Titles
let notesTitles = [
];
// Notes
let notes = [
];

let trashNotesTitles = [];
let trashNotes = [];

// Render notes
function renderNotes(){
    const contentRef = document.getElementById("contentRef");
    contentRef.innerHTML = "";

    for(let indexNote = 0; indexNote < notes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}
// Render TrashNotes
function renderTrashNotes(){
    const contentTrashRef = document.getElementById("contentTrashRef");
    contentTrashRef.innerHTML = "";

    for(let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
        contentTrashRef.innerHTML +=  getTrashNoteTemplate(indexTrashNote);
    }
}

// add Note
function addNote(){
    const noteTitleInputRef = document.getElementById("noteTitle_input");
    const noteTitleInput = noteTitleInputRef.value;
    const noteInputRef = document.getElementById("note_input");
    const noteInput = noteInputRef.value;
    notesTitles.push(noteTitleInput);
    notes.push(noteInput);
    noteTitleInputRef.value = "";
    noteInputRef.value = "";
    renderNotes();
}

// move notes to trash
function moveToTrash(indexNote){
    const trashNoteTitle = notesTitles.splice(indexNote, 1);
    const trashNote = notes.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    trashNotes.push(trashNote[0]);
    renderNotes();
    renderTrashNotes();
}

// delete notes
function deleteNote(indexTrashNote){
    trashNotesTitles.splice(indexTrashNote, 1);
    trashNotes.splice(indexTrashNote, 1);

    renderTrashNotes();
}

// function to set localStorage for each new Item
function setNoteLocalStorage(){
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("notes", JSON.stringify(notes));
}

function setTrashNoteLocalStorage(){
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

// function to get localStorage for each new Item
function getNoteLocalStorage(){
    let storeNotesTitles = localStorage.getItem("notesTitles");
    let objNotesTitles = JSON.parse(storeNotesTitles);

    let storeNotes = localStorage.getItem("notes");
    let objStoreNotes = JSON.parse(storeNotes);

    if(notesTitles >= 0){
        notesTitles = objNotesTitles;
    }
    if(storeNotes >= 0){
        storeNotes = objStoreNotes;
    }

}

function getTrashNoteLocalStorage(){
    let storeTrashNotesTitles = localStorage.getItem("trashNotesTitles");
    let objStoreTrashNotesTitles = JSON.parse(storeTrashNotesTitles);

    let storeTrashNotes = localStorage.getItem("trashNotes");
    let objStoreTrashNotes = JSON.parse(storeTrashNotes);

    if(trashNotesTitles >= 0){
        trashNotesTitles = objStoreTrashNotesTitles;
    }
    if(trashNotes >= 0){
        trashNotes = objStoreTrashNotes;
    }

}