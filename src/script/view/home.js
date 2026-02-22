import Notes from "../data/local/notes.js";
import NotesApi from "../data/remote/notes-api.js";
import Utils from "../utils.js";
import Swal from "sweetalert2";

const home = () => {
  const activeNotesList = document
    .getElementById("activeNotes")
    .querySelector("notes-list");

  const archivedNotesList = document
    .getElementById("archivedNotes")
    .querySelector("notes-list");

  const createNoteElement = document.querySelector("create-note");
  const searchBarElement = document.querySelector("search-bar");
  const overlayLoading = document.querySelector(".overlay");

  const renderActiveNotes = async (notesData = null) => {
    const loading = document.querySelector("#activeNotes loading-indicator");
    Utils.showElement(loading);

    try {
      Utils.emptyElement(activeNotesList);

      const notes = notesData ?? (await NotesApi.getActiveNotes());

      const notesItemElements = notes.map((note) => {
        const noteItemElement = document.createElement("note-item");
        noteItemElement.note = note;

        return noteItemElement;
      });

      activeNotesList.append(...notesItemElements);

      if (notes.length <= 0) {
        activeNotesList.innerHTML = "<p>Notes not found</p>";
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: "Something went wrong!",
        theme: "dark",
      });
    } finally {
      Utils.hideElement(loading);
    }
  };

  const renderArchivedNotes = async (notesData = null) => {
    const loading = document.querySelector("#archivedNotes loading-indicator");
    Utils.showElement(loading);

    try {
      Utils.emptyElement(archivedNotesList);

      const notes = notesData ?? (await NotesApi.getArchivedNotes());

      const notesItemElements = notes.map((note) => {
        const noteItemElement = document.createElement("note-item");
        noteItemElement.note = note;

        return noteItemElement;
      });

      archivedNotesList.append(...notesItemElements);

      if (notes.length <= 0) {
        archivedNotesList.innerHTML = "<p>Notes not found</p>";
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: "Something went wrong!",
        theme: "dark",
      });
    } finally {
      Utils.hideElement(loading);
    }
  };

  const createNoteHandler = async (event) => {
    event.preventDefault();

    const { noteTitle, noteBody } = event.detail;
    const note = {
      title: noteTitle,
      body: noteBody,
    };

    try {
      Utils.showElement(overlayLoading);
      await NotesApi.createNote(note);
      event.target.resetForm();

      Swal.fire({
        icon: "success",
        text: "Successfully creating note",
        theme: "dark",
      });

      await renderActiveNotes();
      await renderArchivedNotes();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: "Failed creating note",
        theme: "dark",
      });
    } finally {
      Utils.hideElement(overlayLoading);
    }
  };

  createNoteElement.addEventListener("submit-note", createNoteHandler);

  const archiveNoteHandler = async (event) => {
    const { id } = event.detail;

    try {
      Utils.showElement(overlayLoading);
      await NotesApi.archiveNote(id);
      Swal.fire({
        icon: "success",
        text: "Successfully archiving note",
        theme: "dark",
      });

      await renderActiveNotes();
      await renderArchivedNotes();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: "Failed to archiving note!",
        theme: "dark",
      });
    } finally {
      Utils.hideElement(overlayLoading);
    }
  };

  document.addEventListener("archive-note", archiveNoteHandler);

  const unarchiveNoteHandler = async (event) => {
    const { id } = event.detail;
    try {
      Utils.showElement(overlayLoading);
      await NotesApi.unarchiveNote(id);
      Swal.fire({
        icon: "success",
        text: "Successfully unarchiving note",
        theme: "dark",
      });

      await renderActiveNotes();
      await renderArchivedNotes();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        text: "Failed to unarchiving note!",
        theme: "dark",
      });
    } finally {
      Utils.hideElement(overlayLoading);
    }
  };

  document.addEventListener("unarchive-note", unarchiveNoteHandler);

  const deleteNoteHandler = async (event) => {
    const { id } = event.detail;

    try {
      Utils.showElement(overlayLoading);
      await NotesApi.deleteNote(id);
      Swal.fire({
        icon: "success",
        text: "Successfully deleting note",
        theme: "dark",
      });

      await renderActiveNotes();
      await renderArchivedNotes();
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Failed deleting note!",
        theme: "dark",
      });
      console.error(error);
    } finally {
      Utils.hideElement(overlayLoading);
    }
  };

  document.addEventListener("delete-note", deleteNoteHandler);

  async function onSearchHandler(event) {
    event.preventDefault();

    const { query } = event.detail;

    if (!query.trim()) {
      renderActiveNotes();
      renderArchivedNotes();
      return;
    }

    const result = await Notes.searchNotes(query);

    const activeResult = result.filter((notes) => !notes.archived);
    const archivedResult = result.filter((notes) => notes.archived);

    renderActiveNotes(activeResult);
    renderArchivedNotes(archivedResult);
  }

  searchBarElement.addEventListener("search", onSearchHandler);

  renderActiveNotes();
  renderArchivedNotes();
};

export default home;
