class ViewHome extends HTMLElement {
  static get is () {
    return 'pw-view-home'
  }

  constructor () {
    super()
    
    const shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = `
    <style>
        :host {
            display: flex;
            flex: 1 1 auto;
            margin-top: 4vw;
            align-items: center;
            flex-direction: column;
        }

        :host .container {
            display: flex;
            flex-direction: row;
            width: 85%;
            min-width: 790px;
            justify-content: center;
            margin-top: 10%;
            margin-bottom: 5%;
        }

        :host img{
            width: 350px;
            height: var(--width);
            border-radius: 50%; 
            box-shadow: 0px 0px 15px var(--pw-text-light);
        }

        :host .headers{
            display: flex;
            width: 41%;
            flex-direction: row;
            justify-content: start;
        }


        :host .headerContainer{
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            justify-content: center;
            margin-left: 16%;
        }

        :host .headerContainer #header1{
            color: var(--pw-text-light);
            font-family: 'Roboto', sans-serif;
            transition: color 1s ease;
            font-size: 40px;
        }

        :host .headerContainer #header2{
            color: var(--pw-text-light);
            font-family: 'Roboto', sans-serif;
            transition: color 1s ease;
            font-size: 30px;
        }

        hr{
            background: var(--pw-text-light);
            transition: background 1s ease;
            border: 0;
            width: 294px;
            height: 4px;
            border-radius: 4px;
            margin-left: 0;
        }
    </style> 

    <div class="container">
        <img src="./src/assets/pictures/profile1.jpg"></img>
        <div class="headers">
            <div class="headerContainer">
                <label id="header1"> Hi, I'm Aris </label>
                <hr>
                <label id="header2"> Web Developer </label>
            </div>
        </div>  
    </div>
      
    `
  }
}

customElements.define(ViewHome.is, ViewHome)
export default ViewHome.is