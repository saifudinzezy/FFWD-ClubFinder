class AppBar extends HTMLElement {

    constructor() {
        super();
        //menerapkan shadow dom
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    //akan terpanggil ketika element telah diterapkan pada DOM
    //Jika kita ingin element ini ketika diterapkan langsung melakukan
    //rendering maka kita dapat memanggil fungsi this.render()
    connectedCallback() {
        this.render();
    }

    //dijadikan nilai pada this.innerHTML
    //render element html

    // * menghilangkan seluruh margin dan padding standar
    // :host merupakan selector yang digunakan untuk menunjuk element :host yang menerapkan Shadow DOM
    // Pada host kita tidak dapat mengatur padding sehingga kita perlu memindahkannya pada elemen <h2>
    render() {
        this.shadowDOM.innerHTML = `
          <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: cornflowerblue;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }
       </style>
        <h2>Club Finder</h2>`;
    }

}
//definisikan custom element yang kita buat agar dapat digunakan pada DOM
customElements.define("app-bar", AppBar);