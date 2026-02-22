import "./search-bar.js";

class AppBar extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
            .app-bar {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-template-areas:
                'app-title .'
                'app-title title-desc'
                'search-bar title-desc'
                ;
            }

            .app-title {
                grid-area: app-title;
            }

            .title-desc {
                grid-area: title-desc;
            }

            search-bar {
                grid-area: search-bar;
            }
        `;
  }

  _emptyContent() {
    this.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
            <div class="app-bar">
                <h1 class="app-title">Notes</h1>
                <h3 class="title-desc">Write down your<br>thought</h3>
                <search-bar></search-bar> 
            </div>
        `;
  }
}

customElements.define("app-bar", AppBar);
