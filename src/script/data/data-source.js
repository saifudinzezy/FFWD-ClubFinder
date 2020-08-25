//import data yang dibutuhkan disetiap file
import clubs from './clubs.js';

//class javascript
class DataSource {
    //supaya bisa di akses lgsg dalam class
    static searchClub(keyword) {
        //arrow function () =>
        //create promise (resolve, reject)
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter((club) =>
                club.name.toUpperCase().includes(keyword.toUpperCase())
            );

            if (filteredClubs.length) {
                //jika berhasil dan ada kembalikan data
                resolve(filteredClubs);
            } else {
                //Template literals `value`
                //jika kosong
                reject(`${keyword} is not found"`);
            }
        });
    }
}

//karena cuma satu maka export default
export default DataSource;