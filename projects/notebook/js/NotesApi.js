export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")

        //sort notes by update timestamp
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        })
    }


    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        
        // Edit/Update
        if (existing) {
            console.log("found exisitng note");
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
        }

        notes.push(noteToSave);
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
        return noteToSave;
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id)
        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes))
    }

}

