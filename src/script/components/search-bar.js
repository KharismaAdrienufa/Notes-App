class SearchBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  connectedCallback() {
    const searchForm = this._shadowRoot.querySelector("#searchForm");
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const searchInput = this._shadowRoot.querySelector("input");
    searchInput.addEventListener("input", (event) => {
      this.dispatchEvent(
        new CustomEvent("search", {
          detail: {
            query: event.target.value,
          },
          bubbles: true,
        }),
      );
    });
  }

  _updateStyle() {
    this._style.textContent = `
        .search-form {
            display: flex;
            flex-direction: row;
        }

        .form-group {
            position: relative;
        }
        
        input {
            width: 150px;
            height: 25px;
            padding: 15px;
            border-radius: 20px;
            border-style: none;
            background-color: var(--blue-color);
            color: white;
        }

        ::placeholder {
            font-family: var(--primary-font);
            color: white;
        }

        .semi-hidden {
            font-size: 1px;
            color: black;
        }

        button {
            background: none;
            border: none;
            color: white;
            position: absolute;
            right: 5px;
        }

        .search-icon {
            font-family: 'Material Symbols Outlined';
            font-size: 20px;
        }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <div class="search-bar">
                <form id="searchForm" class="search-form">
                    <div class="form-group">
                        <label for="title" class="semi-hidden">Title</label>
                        <input id="title" name="title" type="search" placeholder="Search"/>
                        <button>
                            <span class="search-icon">search</span>
                        </button>
                    </div>

                </form>
            </div>
        `;
  }
}

customElements.define("search-bar", SearchBar);
