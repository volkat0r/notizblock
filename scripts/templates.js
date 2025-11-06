// Templates
function getNoteTemplate(indexNote){
    return `
    <div class="notePanel">
        <h3>${allNotes.notesTitles[indexNote]}</h3>
        <span class="note">${allNotes.notes[indexNote]}</span>
        <div class="interaction">
            <button class="trash" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">X</button>
            <button class="archiv" onclick="moveNote(${indexNote}, 'notes', 'archivNotes')">A</button>
        </div>
    </div>`
}

function getArchivNoteTemplate(indexArchivNote){
    return `
    <div class="notePanel archiv">
        <h3>${allNotes.archivNotesTitles[indexArchivNote]}</h3>
        <span class="note">${allNotes.archivNotes[indexArchivNote]}</span> 
        <div class="interaction">
            <button class="restore" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')"><</button>
            <button class="trash" onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')">X</button>
        </div>
    </div>`
}

function getTrashNoteTemplate(indexTrashNote){
    return `
    <div class="notePanel trash">
        <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
        <span class="note">${allNotes.trashNotes[indexTrashNote]}</span> 
        <div class="interaction">
            <button class="archiv" onclick="moveNote(${indexTrashNote}, 'trashNotes', 'archivNotes')">A</button>
            <button class="restore" onclick="restoreNote(${indexTrashNote})"><</button>
            <button class="delete" onclick="deleteNote(${indexTrashNote})">X</button>
        </div>
    </div>`
}