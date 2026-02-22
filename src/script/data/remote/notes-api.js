import Swal from "sweetalert2";

const BASE_URL = "https://notes-api.dicoding.dev/v2";

class NotesApi {
  static async getActiveNotes() {
    const response = await fetch(`${BASE_URL}/notes`);

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("something went wrong");
    }

    const responseJSON = await response.json();
    console.log(responseJSON.message);

    const { data: notes } = responseJSON;
    return notes;
  }

  static async getArchivedNotes() {
    const response = await fetch(`${BASE_URL}/notes/archived`);

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("something went wrong");
    }

    const responseJSON = await response.json();
    console.log(responseJSON.message);

    const { data: notes } = responseJSON;
    return notes;
  }

  static async createNote(note) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    };

    const response = await fetch(`${BASE_URL}/notes`, options);

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("something went wrong");
    }

    const responseJSON = await response.json();
    console.log(responseJSON.message);

    const { data: notes } = responseJSON;
    return notes;
  }

  static async archiveNote(noteId) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `${BASE_URL}/notes/${noteId}/archive`,
      options,
    );

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("something went wrong");
    }

    const responseJSON = await response.json();
    console.log(responseJSON.message);

    const { data: notes } = responseJSON;
    return notes;
  }

  static async unarchiveNote(noteId) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `${BASE_URL}/notes/${noteId}/unarchive`,
      options,
    );

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("something went wrong");
    }

    const responseJSON = await response.json();
    console.log(responseJSON.message);

    const { data: notes } = responseJSON;
    return notes;
  }

  static async deleteNote(noteId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${BASE_URL}/notes/${noteId}`, options);

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("something went wrong");
    }

    const responseJSON = await response.json();
    console.log(responseJSON.message);

    const { data: notes } = responseJSON;
    return notes;
  }
}

export default NotesApi;
