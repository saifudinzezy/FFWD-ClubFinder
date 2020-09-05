class ClubItem extends HTMLElement {
    constructor() {
        super();
        //menerapkan shadow dom
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    //Fungsi setter club berfungsi untuk menetapkan nilai club ke properti this._club
    //yang nantinya akan digunakan pada fungsi render untuk menampilkan 
    //data individual club hasil pencarian.
    set club(club) {
        this._club = club;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            club-item {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }

            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }

            .fan-art-club {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
            }

            .club-info {
                padding: 24px;
            }

            .club-info > h2 {
                font-weight: lighter;
            }

            .club-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box; 
                -webkit-box-orient: vertical; 
                -webkit-line-clamp: 10;
                /* number of lines to show */
            }
        </style>

           <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
           <div class="club-info">
               <h2>${this._club.name}</h2>
               <p>${this._club.description}</p>
           </div>`;
    }
}

customElements.define("club-item", ClubItem);