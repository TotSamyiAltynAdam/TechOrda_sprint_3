// Курс валют: 
// Покупка 1 доллар = 429 тенге, продажа 1 доллар = 431 тенге
// Покупка 1 евро = 507 тенге, продажа 1 евро = 509 тенге

buy = {
    dollar : 429,
    euro : 507
};

cell = {
    dollar : 431,
    euro : 509
};


let selectedCurrency = document.getElementById('currency');
let from = document.getElementById('before');
let currency = document.getElementById('currency');

let kzt_output = document.getElementById('kzt_output');
let usd_output = document.getElementById('usd_output');
let eur_output = document.getElementById('eur_output');


function transferCurrency(){
    if(selectedCurrency.value==='KZT'){
        let kzt = from.value;
        kzt_output.innerHTML = '-';
        usd_output.innerHTML = (kzt/cell.dollar).toFixed(2);
        eur_output.innerHTML = (kzt/cell.euro).toFixed(2);
    }else if(selectedCurrency.value==='USD'){
        let usd = from.value;
        kzt_output.innerHTML = (usd*buy.dollar).toFixed(2);
        usd_output.innerHTML = '-';
        eur_output.innerHTML = (usd*buy.dollar/cell.euro).toFixed(2);
    }else if(selectedCurrency.value==='EUR'){
        let eur = from.value;
        kzt_output.innerHTML = (eur*buy.euro).toFixed(2);
        usd_output.innerHTML = (eur*buy.euro/cell.dollar).toFixed(2);
        eur_output.innerHTML = '-';
    }
}

currency.addEventListener('click', transferCurrency);