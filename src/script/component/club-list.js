//yang nanti akan dituliskan pada berkas club-item.js,
import './club-item.js';

class ClubList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    //Fungsi set clubs digunakan untuk menetapkan properti this._clubs pada class ini.
    //properti tersebut akan digunakan pada fungsi render dalam membuat custom element <club-item>
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        //iterasinya kita akan mendapatkan individual club dan pada saat itu juga kita buat custom element <club-item>
        //Pada tiap elemen <club-item> dibuat sebagai child dari element <club-list>
        this._clubs.forEach(club => {
            //club-item dari club-item.js
            const clubItemElement = document.createElement("club-item");
            //setter value club untuk child
            clubItemElement.club = club
                //tambahkan sbg item
            this.shadowDOM.appendChild(clubItemElement);
        })
    }

    //hasil pencarian mengalami kegagalan atau tidak ditemukkan
    renderError(message) {
        this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

//definisikan custom element yang kita buat agar dapat digunakan pada DOM
customElements.define("club-list", ClubList);