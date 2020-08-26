class AppBar extends HTMLElement {

    //akan terpanggil ketika element telah diterapkan pada DOM
    //Jika kita ingin element ini ketika diterapkan langsung melakukan
    //rendering maka kita dapat memanggil fungsi this.render()
    connectedCallback() {
        this.render();
    }

    //dijadikan nilai pada this.innerHTML
    render() {
        this.innerHTML = `<h2>Club Finder</h2>`;
    }

}
//definisikan custom element yang kita buat agar dapat digunakan pada DOM
customElements.define("app-bar", AppBar);