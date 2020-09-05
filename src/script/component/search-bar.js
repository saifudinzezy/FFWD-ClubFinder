class SearchBar extends HTMLElement {
    constructor() {
        super();
        //menerpkan shadow dom
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

    //fuungsi setter untuk button search
    //fungsi event agar dapat mudah diterapkan dari luar class SearchBar
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    //fungsi getter yang mengembalikan nilai value dari elemen <input>
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    //dijadikan nilai pada this.innerHTML
    //render element html
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                    max-width: 800px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16 px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    top: 10px;
                    background-color: white;
                }

                .search-container > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid cornflowerblue;
                    font-weight: bold;
                }

                .search-container > input: focus {
                    outline: 0;
                    border-bottom: 2px solid cornflowerblue;
                }

                .search-container > input: focus::placeholder {
                    font-weight: bold;
                }

                .search-container > input::placeholder {
                    color: cornflowerblue;
                    font-weight: normal;
                }

                .search-container > button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: cornflowerblue;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }

            @media screen and(max-width: 550px) {
                .search-container {
                        flex-direction: column;
                        position: static;
                    }

                    .search-container > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .search-container > button {
                        width: 100%;
                    }
            }
        </style>
        
       <div id="search-container" class="search-container">
           <input placeholder="Search football club" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        //terapkan this._clickEvent sebagai event pada element <button> 
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
//definisikan custom element yang kita buat agar dapat digunakan pada DOM
customElements.define("search-bar", SearchBar);