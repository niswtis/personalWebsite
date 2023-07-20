import "../components/pw-icon";

class ViewFooter extends HTMLElement {
  static get is() {
    return "pw-view-footer";
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex: 1 1 auto;
          margin-top: 4vw;
          align-items: center;
          flex-direction: column;
          background-color: var(--pw-background-dark);
          transition: background-color 1s ease;
        }

        :host .container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 3%;
          width: 100%;
          border-top: solid 4px var(--pw-separator);
          transition: border-top 1s ease;
        }
        
        :host .container label {
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Roboto', sans-serif;
          font-size: 21px;
          margin-top: 3%;
          margin-bottom: 3%;
        }

        :host .container .vl {
          border-left: 6px solid var(--pw-separator);
          transition: border-left 1s ease;
          border-radius: 3px;
          height: 60px;
          margin-left: 4%;
        }
        
        :host pw-icon {
          width: 24px; 
          height: 24px;
          margin-left: 4%;
          transform: scale(1.5);
        }

        .cvBtn {
          margin-right: 7%;
        }
      
        @media only screen and (max-width: 600px) {
          :host .container {
            width: 100%;
            justify-content: unset;
          }

          :host .container label {
            font-size: 15px;
            margin-left: 3%;
          }

          :host .cvBtn {
            margin-right: 0;
          }

          :host pw-icon {
            margin-left: 6%;
          }
        }
      </style> 
  
      <div class="container">
        <label>Copyright © 2023 Aristides Nisotakis </label>
        <div class="vl"></div>
        <pw-icon name = "git2" onclick="window.open('https://github.com/niswtis','_newtab');" title="Github"></pw-icon>
        <pw-icon name = "linkedin" onclick="window.open('https://www.linkedin.com/in/aristides-nisotakis-8121901ab','_newtab');" title="LinkedIn"></pw-icon>
        <pw-icon name = "gmail" onclick="window.open('mailto:niswtis@gmail.com','_newtab');" title="Email"></pw-icon>
        <pw-icon name = "cv" class='cvBtn' title="CV"></pw-icon>
      </div>
        
      `;
    const cvBtn = this.shadowRoot.querySelector(".cvBtn");
    cvBtn.addEventListener("click", this.downloadCV);
  }

  downloadCV() {
    var link = document.createElement("a");
    const filePath = "./src/assets/files/resume.pdf";
    link.href = filePath;
    link.download = "resume.pdf";
    link.click();
  }
}

customElements.define(ViewFooter.is, ViewFooter);
export default ViewFooter.is;
