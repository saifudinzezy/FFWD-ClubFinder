class ClubItem extends HTMLElement {
    //Fungsi setter club berfungsi untuk menetapkan nilai club ke properti this._club
    //yang nantinya akan digunakan pada fungsi render untuk menampilkan 
    //data individual club hasil pencarian.
    set club(club) {
        this._club = club;
        this.render();
    }

    render() {
        this.innerHTML = `
           <img class="fan-art-club" src="${this._club.fanArt}" alt="Fan Art">
           <div class="club-info">
               <h2>${this._club.name}</h2>
               <p>${this._club.description}</p>
           </div>`;
    }
}

customElements.define("club-item", ClubItem);