import NotesView from "./NotesView.js";
import NotesApi from "./NotesApi.js"

const app = document.getElementById("app");

const view = new NotesView(app, {
    onNoteAdd(noteId, noteTitle, noteBody) {
        const newNote = NotesApi.saveNote({
            title: noteTitle,
            body: noteBody
        });
    },

    onNoteEdit(newTitle, newBody){
        console.log(newTitle, newBody);
    }
});



view.updateNoteList(NotesApi.getAllNotes())

// TODO: Remove later
// notes.forEach(note => {
//     NotesApi.deleteNote(note.id);
// });