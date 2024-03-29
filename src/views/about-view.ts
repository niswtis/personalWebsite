class ViewAbout extends HTMLElement {
  static get is () {
    return 'pw-view-about'
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
          margin-top: 10%;
          align-items: center;
          flex-direction: column;
          background-color: var(--pw-background-light);
          transition: background-color 1s ease;
          transform: skewY(3deg);
        }

        :host .headerContainer{
          flex-direction: row;
          width: 85%;
          justify-content: center;
          align-items: center;    
          margin-top: 3%; 
        }

        :host .headerContainer h2 {
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Archivo', sans-serif;
          transform: skewY(-3deg);
          margin: 0;
          font-size: 30px;
          width: fit-content;
          padding-right: 3px;
        }

        :host .container {
          display: flex;
          flex-direction: row;
          width: 85%;
          justify-content: center;
          align-items: center;
          transform: skewY(-3deg);
          margin-bottom: 8%;
        }

        :host img{
          width: 40%;
        }

        :host .aboutMeText {
          color: var(--pw-text-light);
          transition: color 1s ease;
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          margin-right: 10%;
          width: 50%;
        }

        @media only screen and (max-width: 600px) {
          :host .headerContainer h2 {
            font-size: 25px;            
          }

          :host .container {
            flex-direction: column;
            width: 100%;
          }

          :host .headerContainer{
            width: 90%;
          }

          :host .aboutMeText {
            margin: 0% 5% 0% 5%;
            width: 90%;
          }

          :host img{
            width: 50%;
            margin-top: 5%;
          }
        }
    </style> 

    <div class="headerContainer">
      <h2>About</h2>
    </div>
    <div class="container">
        <div class="aboutMeText">
            My name is Aristides Nisotakis but my friends call me Aris. I am from Heraklion, Crete, Greece. Having lived and studied in Heraklion I have learned to love my city and all it’s beauties while staying fascinated when exploring new places. In my free time I love to create stuff digitally such as taking photos and editing them, or developing web applications such as this one. Motivated by progressiveness and fueled by good music. 
            <br><br>
            My journey in Web Development started from University when I took some courses in Web Programming and UI/UX design. Throughout those courses I have developed  front ends for an e-commerce and a video conference website (UI/UX) as well as a fully functional while quite basic social network website. My interest though was peaked when I landed a position for a company based in the Netherlands as a part of my Erasmus+ Internship. Throughout that experience I learned a lot of the fundamentals of the Web Development Stack in conjunction with working as a part of the team and by the end of it the journey for career in Web Development has begun.        
        </div>  
        <img src="./src/assets/pictures/profile2.png"></img>
    </div>
      
    `
  }
}

customElements.define(ViewAbout.is, ViewAbout)
export default ViewAbout.is