import NotesAPI from "./js/NotesApi";


NotesAPI.saveNotes({
    title: "New Note!",
    body: "I am a new note!"
})



console.log(NotesAPI.getAllNotes())
console.log("Hello");