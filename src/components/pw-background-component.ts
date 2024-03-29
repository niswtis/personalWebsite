class backgroundComponent extends HTMLElement {
  static get is() {
    return "pw-background-component";
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(
    attrName: string,
    oldValue: string,
    newValue: string
  ) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
      :host img{
        width: 210px;
        height: 210px;
        border-radius: 50%; 
        box-shadow: 0px 0px 15px var(--pw-text-light);
        background-color: var(--background-color);
        transition: border 1s ease, background-color 1s ease;
      }

      @media only screen and (max-width: 600px) {
        :host img {
          width: 160px;
          height: 160px;
        }
      }
      </style>
      <img src="${this.getAttribute("src")}"></img>
    `;
  }
}

customElements.define(backgroundComponent.is, backgroundComponent);
export default backgroundComponent.is;
