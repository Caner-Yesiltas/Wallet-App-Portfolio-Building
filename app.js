//?Selectors

//* ekle formu

const ekleBtn = document.querySelector("#ekle-btn");
const gelirInput = document.querySelector("#gelir-input");
const ekleFormu = document.querySelector("#ekle-formu");

//*sonuç tablosu

const gelirinizTable = document.getElementById("geliriniz");
const giderinizTable = document.getElementById("gideriniz");
const kalanTable = document.getElementById("kalan");

//?variables
let gelirler = Number(localStorage.getItem("gelirler")) || 0;
let harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []



//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");


harcamaFormu.addEventListener('submit',(e) =>{
    e.preventDefault() // hemen datebase gitme reloadu engellemek icin yaptik


const yeniHarcama={
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    aciklama: harcamaAlaniInput.value,
    id:new Date().getTime()
};


harcamaListesi.push(yeniHarcama);


} )
