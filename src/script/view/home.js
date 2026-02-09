import Notes from "../data/notes.js";
import Utils from "../utils.js";

const home = () => {
    const notesListElement = document.querySelector('notes-list');
    const searchBarElement = document.querySelector('search-bar');
    const createNoteElement = document.querySelector('create-note');

    const renderNotes = (notes) => {
        Utils.emptyElement(notesListElement);

        const notesItemElements = notes.map((note) => {
            const noteItemElement = document.createElement('note-item');
            noteItemElement.note = note;

            return noteItemElement;
        });

        notesListElement.append(...notesItemElements);
    };

    const renderAllNotes = () => {
        const notes = Notes.getAll();
        renderNotes(notes);
    }
    
    const onSearchHandler = (event) => {
        event.preventDefault();
        
        const { query } = event.detail;
        
        if (!query.trim()) {
            renderAllNotes();
            return;
        }

        const result = Notes.searchNotes(query);
        renderNotes(result);
    }
    
    searchBarElement.addEventListener('search', onSearchHandler);
    
    const createNoteHandler = (event) => {
        event.preventDefault();
        
        const { noteTitle, noteBody } = event.detail;
        
        const note = {
            id: Utils.generateId(),
            title: noteTitle,
            body: noteBody,
            createdAt: Utils.generateDate(),
            archived: false
        };
        
        Notes.addNotes(note);
        renderAllNotes();
    }

    createNoteElement.addEventListener('submit-note', createNoteHandler);

    renderAllNotes();
}

export default home;