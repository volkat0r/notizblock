// Templates
function getNoteTemplate(indexNote){
    return `<div class="notePanel">
    <h3>${notesTitles[indexNote]}</h3>
    <span class="note">${notes[indexNote]}</span>
    <div class="interaction">
    <button onclick="moveToTrash(${indexNote})">X</button>
    </div>
    </div>`
}

function getTrashNoteTemplate(indexTrashNote){
    return `<div class="notePanel trash">
    <h3>${trashNotesTitles[indexTrashNote]}</h3>
    <span class="note">${trashNotes[indexTrashNote]}</span> 
    <div class="interaction">
    <button onclick="deleteNote(${indexTrashNote})">X</button>
    </div>
    </div>`
}