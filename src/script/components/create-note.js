class CreateNote extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    _formSubmitHandler = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');

        this._formSubmitHandler = this._onFormSubmit.bind(this);

        this.render();
    }

    connectedCallback() {
        const createNoteForm = this._shadowRoot.querySelector('#createNote');
        createNoteForm.addEventListener('submit', this._formSubmitHandler);
        this._onInputTitle();
    }

    disconnectedCallback() {
        const createNoteForm = this._shadowRoot.querySelector('#createNote');
        createNoteForm.removeEventListener('submit', this._formSubmitHandler)
    }

    _onInputTitle(event) {
        const noteTitle = this._shadowRoot.querySelector('#noteTitle');
        const validMessage = this._shadowRoot.querySelector('#validMessage');

        const customValidationHandler = (event) => {
            event.target.setCustomValidity('');

            if (event.target.validity.patternMismatch) {
                event.target.setCustomValidity('it can\'t start with symbol, contain whitespace or special character');
                validMessage.textContent = 'it can\'t start with symbol, contain whitespace or special character';
            } else {
                validMessage.textContent = '';
            }
        }

        noteTitle.addEventListener('input', customValidationHandler);
        noteTitle.addEventListener('blur', customValidationHandler);
    }

    _onFormSubmit(event) {
        event.preventDefault();

        const noteTitle = this._shadowRoot.querySelector('#noteTitle').value;
        const noteBody = this._shadowRoot.querySelector('#noteBody').value;

        if(!noteTitle || !noteBody) return;

        this.dispatchEvent(
            new CustomEvent('submit-note', {
                detail: { noteTitle, noteBody },
                bubbles: true,
                composed: true
            })
        );
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
                        <input id="noteTitle" name="noteTitle" placeholder="Title" pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"/>
                        <p id="validMessage" class="valid-message"></p>
                        
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