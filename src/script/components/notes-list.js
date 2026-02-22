class NotesList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
        .notes-list{
            height: 250px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            overflow-y: auto;
            gap: 10px;
        }
            
        .notes-list::-webkit-scrollbar {
            display: none;
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
            <div class="notes-list">
                <slot></slot>
            </div>
        `;
  }
}

customElements.define("notes-list", NotesList);
