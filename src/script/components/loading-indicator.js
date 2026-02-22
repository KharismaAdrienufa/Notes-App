import { animate, stagger, splitText } from "animejs";

class LoadingIndicator extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _animation = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  connectedCallback() {
    const loadingText = this._shadowRoot.getElementById("loadingText");
    const { chars } = splitText(loadingText, { words: false, chars: true });

    this._animation = animate(chars, {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 500 },
        { to: 0, ease: "outBounce", duration: 1000, delay: 100 },
      ],

      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: stagger(50),
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }

  disconnectedCallback() {
    if (this._animation) {
      this._animation.pause();
      this._animation = null;
    }
  }

  _updateStyle() {
    this._style.textContent = `
          .loading-text {
                padding: 15px;
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
      <h3 id="loadingText" class="loading-text">Now Loading</h3>
        `;
  }
}

customElements.define("loading-indicator", LoadingIndicator);
