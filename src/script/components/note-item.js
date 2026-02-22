class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._archiveHandler = this._archiveHandler.bind(this);
    this._unarchiveHandler = this._unarchiveHandler.bind(this);
    this._deleteHandler = this._deleteHandler.bind(this);
  }

  connectedCallback() {
    const archiveButton = this._shadowRoot.querySelector("#archiveButton");

    if (this._note.archived) {
      archiveButton.addEventListener("click", this._unarchiveHandler);
    } else {
      archiveButton.addEventListener("click", this._archiveHandler);
    }

    const deleteButton = this._shadowRoot.querySelector("#deleteButton");
    deleteButton.addEventListener("click", this._deleteHandler);
  }

  disconnectedCallback() {
    const archiveButton = this._shadowRoot.querySelector("#archiveButton");

    if (this._note.archived) {
      archiveButton.removeEventListener("click", this._unarchiveHandler);
    } else {
      archiveButton.removeEventListener("click", this._archiveHandler);
    }

    const deleteButton = this._shadowRoot.querySelector("#deleteButton");
    deleteButton.removeEventListener("click", this._deleteHandler);
  }

  _archiveHandler() {
    this.dispatchEvent(
      new CustomEvent("archive-note", {
        detail: { id: this.note.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  _unarchiveHandler() {
    this.dispatchEvent(
      new CustomEvent("unarchive-note", {
        detail: { id: this.note.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  _deleteHandler() {
    this.dispatchEvent(
      new CustomEvent("delete-note", {
        detail: { id: this.note.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
        .card {
            background-color: var(--yellow-color);
            color: black;
            width: 150px;
            padding: 20px;
            border-radius: 15px;
            font-size: small;
            position: relative;
        }

        .card-button {
            display: flex;
            flex-direction: row;
            position: absolute;
            right: 5px;
            bottom: 5px;
        }
            
        button {                
            background: none;
            border: none;
        }

        .archive-icon, .delete-icon {
            font-family: 'Material Symbols Outlined';
            font-size: 20px;
            font-weight: 20px;
        }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <div class="card" data-note-id=${this._note.id}>
                <h4>${this._note.title}</h4>
                <p>${this._note.createdAt}</p>
                <p>${this._note.body}</p>
                <div class="card-button">
                    <button id="archiveButton">
                        <span class="archive-icon">archive</span>
                    </button>
                    <button id="deleteButton">
                        <span class="delete-icon">delete</span>
                    </button>
                </div>
            </div>
        `;
  }
}

customElements.define("note-item", NoteItem);
