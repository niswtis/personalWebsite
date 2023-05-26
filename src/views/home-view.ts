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
            margin-top: 1vw;
            align-items: center;
            flex-direction: column;
        }

        :host .container {
            display: flex;
            flex-direction: row;
            width: 85%;
            justify-content: center;
            margin-top: 10%;
            margin-bottom: 5%;
        }

        :host img{
            width: 50%;
            height: var(--width);
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
            height: 55px;
            position: relative;
            overflow: hidden;
            animation-name: header1;
            animation-duration: 1.5s;
            animation-iteration-count: 1;
            animation-direction: normal;  
        }

        :host .headerContainer #header2{
            color: var(--pw-text-light);
            font-family: 'Roboto', sans-serif;
            transition: color 1s ease;
            font-size: 30px;
            position: relative;
            overflow: hidden;
            line-height: 55px;
            animation-name: header2;
            animation-duration: 1.5s;
            animation-iteration-count: 1;
            animation-direction: normal;  
        }

        hr{
            background: var(--pw-text-light);
            transition: background 1s ease;
            border: 0;
            width: 70%;
            min-width: 230px;
            height: 4px;
            border-radius: 4px;
            margin: 0;
        }

        @keyframes header1 {
            from {
                height: 0px; 
            }
            to {
                height: 55px; 
            }
        }

        @keyframes header2 {
            from {
                line-height: 0px;
            }
            to {
                line-height: 55px; 
            }
        }

        @media only screen and (max-width: 600px) {
            :host .container {
              width: 100%;
              margin-top: 15%;              
            }
    
            :host img{
                width: 45%;
            }

            :host .headerContainer{
                margin-left: 8%;
            }
        }
    </style> 

    <div class="container">
        <img src="./src/assets/pictures/profile1.png"></img>
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