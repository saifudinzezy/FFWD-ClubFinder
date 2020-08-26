class SearchBar extends HTMLElement {
    //akan terpanggil ketika element telah diterapkan pada DOM
    //Jika kita ingin element ini ketika diterapkan langsung melakukan
    //rendering maka kita dapat memanggil fungsi this.render()
    connectedCallback() {
        this.render();
    }

    //fuungsi setter untuk button search
    //fungsi event agar dapat mudah diterapkan dari luar class SearchBar
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    //fungsi getter yang mengembalikan nilai value dari elemen <input>
    get value() {
        return this.querySelector("#searchElement").value;
    }

    //dijadikan nilai pada this.innerHTML
    //render element html
    render() {
        this.innerHTML = `
       <div id="search-container" class="search-container">
           <input placeholder="Search football club" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        //terapkan this._clickEvent sebagai event pada element <button> 
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
//definisikan custom element yang kita buat agar dapat digunakan pada DOM
customElements.define("search-bar", SearchBar);