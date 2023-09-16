class Registrasi {
    constructor(nama, umur, uang_sangu, rata_uang, rata_umur) {
        this.nama = nama;
        this.umur = umur;
        this.uang_sangu = uang_sangu;
        this.rata_uang = rata_uang;
        this.rata_umur = rata_umur;

    }

}

const listPendaftar = [
    new Data("Jessica", "24 Tahun", "1 juta", "750 rb", 24),
    new Data("Yoona", "20 Tahun", "500 rb", "500 rb", 21),
    new Data("Taeyoon", "22 Tahun", "750 rb", "750 rb", 22),
]

window.addEventListener("load", (event) => {

const namaInput = document.getElementById("input-nama")
const umurInput = document.getElementById("input-umur")
const uang_sanguInput = document.getElementById("input-uang-sangu")
const rata_uangInput = document.getElementById("input-rata-uang")
const rata_umurInput = document.getElementById("input-rata-umur")

const submitButton = document.getElementById("submit-button")

const tableBody = document.getElementById("table-body")

renderData(tableBody)

submitButton.addEventListener("click", (e) => {

const newData = new Data(namaInput.value, umurInput.value, uang_sanguInput.value, rata_uangInput.value, rata_umurInput.value);
listPendaftar.push(newData);

renderData(tableBody)
})

})

const renderData = (tableBody) => {
    tableBody.innerHTML = ""

    for(let i = 0; i < listPendaftar.length; i++) {
        let row = tableBody.insertRow(i);

        let currentlist = listPendaftar[i];

        // td number
        let numberCell = row.insertCell(0)

        // td nama 
        let namaCell = row.insertCell(1)

        // td umur
        let umurCell = row.insertCell(2)

        // td uang sangu
        let uang_sanguCell = row.insertCell(3)

        //td rata uang
        let rata_uangCell = row.insertCell(4)

        // td rata umur
        let rata_umurCell = row.insertCell(5)

        numberCell.innerHTML = i + 1;
        namaCell.innerHTML = currentlist.nama;
        umurCell.innerHTML = currentlist.umur;
        uang_sanguCell = currentlist.uang_sangu;
        rata_uangCell = currentlist.rata_uang;
        rata_umurCell = currentlist.rata_umur;


        
    }
}

