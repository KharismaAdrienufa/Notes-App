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

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
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
            padding: 15px;
            border-radius: 15px;
            font-size: small;
        }

        .card-button {
            display: flex;
            flex-direction: row;
            gap: 5px;
        }

        .archive-icon, .delete-icon {
            font-family: 'Material Symbols Outlined';
        }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
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
                    <button>
                        <span class="archive-icon">archive</span>
                    </button>
                    <button>
                        <span class="delete-icon">delete</span>
                    </button>
                </div
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);