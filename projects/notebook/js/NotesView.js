export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML =
            `
        <div class="notes__sidebar">
            <button class="notes__add" type="button">Add Note</button>
            <div class="notes__list">
            </div>
        </div>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="New Note...">
            <textarea class="notes__body">Take note</textarea>
        </div>
        `;

        const btnAdd = document.querySelector(".notes__add");
        const inpNoteTitle = document.querySelector(".notes__title");
        const inpBody = document.querySelector(".notes__body");


        btnAdd.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpNoteTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpNoteTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            })
        });



        console.log(this._createListItemHTML(300, "Cup", "Cups are good", new Date()));
        // TODO: hide the note preview by default

    }

    // this method will dynamically generate menu list item
    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGHT = 60;

        return `
        <div class="notes__list-item" data-note-id="${id}">
            <div class="notes__small-title">${title}</div>
            <div class="notes__small-body">${body.substring(0, MAX_BODY_LENGHT)}
            ${body.length > MAX_BODY_LENGHT ? "..." : ""}</div>
            <div class="notes__small-updated">
                ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
            </div>
        </div>        
        `
    }


    updateNoteList(notes) {
        const noteListContainer = this.root.querySelector(".notes__list");

        //Empty list
        noteListContainer.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            noteListContainer.insertAdjacentHTML("beforeend", html);
        }


    }

}