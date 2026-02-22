import NotesApi from "../remote/notes-api.js";
let notesData = [];
let isFetched = false;

async function fetchNotes() {
  const activeNotes = await NotesApi.getActiveNotes();
  const archivedNotes = await NotesApi.getArchivedNotes();
  notesData = [...activeNotes, ...archivedNotes];
  isFetched = true;

  return notesData;
}

class Notes {
  static async searchNotes(query) {
    const notes = await fetchNotes();
    return notes.filter((note) => {
      const loweredCaseNoteTitle = (note.title || "-").toLowerCase();
      const jammedNoteTitle = loweredCaseNoteTitle.replace(/\s/g, "");

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, "");

      return jammedNoteTitle.indexOf(jammedQuery) !== -1;
    });
  }

  static async refresh() {
    isFetched = false;
    return fetchNotes();
  }
}

export default Notes;
