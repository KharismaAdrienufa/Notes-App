class CreateNote extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');

        this.render();
    }

    _updateStyle() {
        this._style.textContent = `
        :host {
            font-family: var(--primary-font);
            color: white;
        }

        .form-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr, auto, 1fr;
            grid-template-areas:
            'title message'
            'body .'
            'button .'
            ;
            gap: 15px;
        }

        .semi-hidden {
            font-size: 1px;
            color: black;
        }

        input,
        textarea,
        p,
        button {
            font-family: inherit;
            color: inherit;
        }

        ::placeholder {
            color: inherit;
        }

        input,
        textarea {
            width: 250px;
            border: none;
            border-radius: 15px;
        }


        input {
            grid-area: title;
            background-color: var(--purple-color);
            padding: 15px;
        }

        textarea {
            grid-area: body;
            background-color: var(--pink-color);
            height: 200px;
            padding: 20px;
        }

        p {
            grid-area: message;
            font-size: 12px;
            align-self: end;
        }

        button {
            grid-area: button;
            border: none;
            width: 60px;
            background-color: var(--green-color);
            border-radius: 15px;
            padding: 5px;
            font-weight: bold;
            justify-self: end;
        }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    render() {
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class="create-note">
                <form id="createNote" class="create-note">
                    <div class="form-group">
                        <label for="noteTitle" class="semi-hidden">Note Title</label>
                        <input id="noteTitle" name="noteTitle" placeholder="Title"/>
                        <p id="validationMessage" class="validation-message">pesan</p>
                        
                        <label for="noteBody" class="semi-hidden">Note Body</label>
                        <textarea id="noteBody" name="noteBody" placeholder="Body"></textarea>

                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        `;
    }
}

customElements.define('create-note', CreateNote);