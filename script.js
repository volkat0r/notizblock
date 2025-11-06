/* Chapter 7 - Notizblock */

let allNotes = {
    'notesTitles': [],
    'notes': [],
    'trashNotesTitles': [],
    'trashNotes': [],
    'archivNotesTitles':[],
    'archivNotes':[],
}

function init(){
    getAllLocalStorage();
    renderAllNotes();
}

// Render Functions

// Render notes
function renderNotes(){
    const contentRef = document.getElementById("contentRef");
    contentRef.innerHTML = "";

    for(let indexNote = 0; indexNote < allNotes.notes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}
// Render ArchivNotes
function renderArchivNotes(){
    const contentArchivRef = document.getElementById("contentArchivRef");
    contentArchivRef.innerHTML = "";

    for(let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++){
        contentArchivRef.innerHTML +=  getArchivNoteTemplate(indexArchivNote);
    }
}
// Render TrashNotes
function renderTrashNotes(){
    const contentTrashRef = document.getElementById("contentTrashRef");
    contentTrashRef.innerHTML = "";

    for(let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++){
        contentTrashRef.innerHTML +=  getTrashNoteTemplate(indexTrashNote);
    }
}

function renderAllNotes(){
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}


// add Note
function addNote(){
    const noteTitleInputRef = document.getElementById("noteTitle_input");
    const noteTitleInput = noteTitleInputRef.value.trim();
    const noteInputRef = document.getElementById("note_input");
    const noteInput = noteInputRef.value.trim();

    if(noteTitleInput === "" || noteInput === "") return;

    allNotes.notesTitles.push(noteTitleInput);
    allNotes.notes.push(noteInput);

    setNoteLocalStorage();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";

    renderNotes();
}

/* multiple functions in one */
function moveNote(indexNote, startKey, destinationKey){
    const note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    const noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(noteTitle[0]);

    setNoteLocalStorage();
    setArchivNoteLocalStorage();
    setTrashNoteLocalStorage();

    renderNotes();
}
/* end multiple functions in one */

// restore note
function restoreNote(indexTrashNote){
    allNotes.notesTitles.push(allNotes.trashNotesTitles[[indexTrashNote]]);
    allNotes.notes.push(allNotes.trashNotes[indexTrashNote]);

    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotes.splice(indexTrashNote, 1);

    setNoteLocalStorage();
    setTrashNoteLocalStorage();

    renderNotes();
    renderTrashNotes();
}

// delete notes
function deleteNote(indexTrashNote){
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotes.splice(indexTrashNote, 1);

    setTrashNoteLocalStorage();

    renderTrashNotes();
}

// function to set localStorage for each new Item
function setNoteLocalStorage(){
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
}

function setArchivNoteLocalStorage(){
    localStorage.setItem("archivNotesTitles", JSON.stringify(allNotes.archivNotesTitles));
    localStorage.setItem("archivNotes", JSON.stringify(allNotes.archivNotes));
}

function setTrashNoteLocalStorage(){
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
}

// function to get localStorage for each new Item
function getNoteLocalStorage(){
    let storeNotesTitles = localStorage.getItem("notesTitles");
    let objNotesTitles = JSON.parse(storeNotesTitles);
    // Also possible in just one codeline
    // let storeNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));

    let storeNotes = localStorage.getItem("notes");
    let objStoreNotes = JSON.parse(storeNotes);

    if(objNotesTitles){
        allNotes.notesTitles = objNotesTitles;
    }
    if(objStoreNotes){
       allNotes.notes = objStoreNotes;
    }
}

function getArchivLocalStorage(){
    let storeArchivNotesTitles = localStorage.getItem("archivNotesTitles");
    let objStoreArchivNotesTitles = JSON.parse(storeArchivNotesTitles);
    let storeArchivNotes = localStorage.getItem("archivNotes");
    let objStoreArchivNotes = JSON.parse(storeArchivNotes);

    if(objStoreArchivNotesTitles){
        allNotes.archivNotesTitles = objStoreArchivNotesTitles;
    }
    if(objStoreArchivNotes){
       allNotes.archivNotes = objStoreArchivNotes;
    }
}

function getTrashNoteLocalStorage(){
    let storeTrashNotesTitles = localStorage.getItem("trashNotesTitles");
    let objStoreTrashNotesTitles = JSON.parse(storeTrashNotesTitles);

    let storeTrashNotes = localStorage.getItem("trashNotes");
    let objStoreTrashNotes = JSON.parse(storeTrashNotes);

    if(objStoreTrashNotesTitles){
        allNotes.trashNotesTitles = objStoreTrashNotesTitles;
    }
    if(objStoreTrashNotes){
        allNotes.trashNotes = objStoreTrashNotes;
    }
}

function getAllLocalStorage(){
    getNoteLocalStorage();
    getArchivLocalStorage();
    getTrashNoteLocalStorage();
}