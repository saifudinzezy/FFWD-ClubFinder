//karena berkas main.js perlu kode pada berkas search-bar.js tereksekusi,
import '../component/search-bar.js';
//import data yang dibutuhkan disetiap file
import DataSource from '../data/data-source.js';

//arrow function () =>
const main = () => {
    //search-bar component
    const searchElement = document.querySelector("search-bar");
    //tidak membutuhkan deklarasi variabel buttonSearchElement
    //karena sekarang kita dapat mengakses button pada komponen pencarian melalui searchElement
    //const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    //ubah menajdi async await
    //memanggil fun async seperti sync
    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (error) {
            fallbackResult(error);
        }
    };

    //arrow function () =>
    const renderResult = results => {
        clubListElement.innerHTML = "";
        results.forEach(club => {
            //destructuring object
            const {
                name,
                fanArt,
                description
            } = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            //Template literals `value`
            clubElement.innerHTML = `
                <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>`;
            clubListElement.appendChild(clubElement);
        })
    };

    //arrow function () =>
    const fallbackResult = message => {
        clubListElement.innerHTML = "";
        //Template literals `value`
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    //tidak digunakan
    //buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};

//karena cuma satu maka export default
export default main;