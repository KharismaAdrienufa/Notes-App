import Notes from "../data/notes.js";
import Utils from "../utils.js";

const home = () => {
    const notesListElement = document.querySelector('notes-list');
    const searchBarElement = document.querySelector('search-bar');

    const displayNotes = (notes) => {
        Utils.emptyElement(notesListElement);

        const notesItemElements = notes.map((note) => {
            const noteItemElement = document.createElement('note-item');
            noteItemElement.note = note;

            return noteItemElement;
        });

        notesListElement.append(...notesItemElements);
    };

    const renderNotes = () => {
        const notes = Notes.getAll();
        displayNotes(notes);
    }
    
    const onSearchHandler = (event) => {
        event.preventDefault();
        
        const { query } = event.detail;
        
        if (!query.trim()) {
            renderNotes();
            return;
        }

        const result = Notes.searchNotes(query);
        displayNotes(result);
    }
    
    searchBarElement.addEventListener('search', onSearchHandler);
    
    renderNotes();
}

export default home;