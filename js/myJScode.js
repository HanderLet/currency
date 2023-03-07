const showMoreBtn = document.querySelector('.show-more-btn');
const moreInfo = document.querySelector('.more-info');

showMoreBtn.addEventListener('click', () => {
   moreInfo.style.display = 'block';
    showMoreBtn.style.display = 'none';
});

const usdB = document.getElementById('BUSD').textContent;
const eurB = document.getElementById('BEUR').textContent;
const rubB = document.getElementById('BRUB').textContent;
const gbpB = document.getElementById('BGBP').textContent;

const usdS = document.getElementById('SUSD').textContent;
const eurS = document.getElementById('SEUR').textContent;
const rubS = document.getElementById('SRUB').textContent;
const gbpS = document.getElementById('SGBP').textContent;

const currencyB ={
    USD: usdB,
    EUR: eurB,
    GEL: rubB,
    GBP: gbpB 
};

const currencyS ={
    USD: usdS,
    EUR: eurS,
    GEL: rubS,
    GBP: gbpS
};

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const currencyTransaction = document.getElementById('currencyTransaction');

const rateEl = document.getElementById('rate');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const currency_BS = currencyTransaction.value;
    
    if (currency_BS == "SELL"){
        if (currency_one == "USD"){
      rateEl.innerText = `1 ${currency_one} = ${currencyS.USD} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyS.USD).toFixed(2);
    }else if (currency_one == "EUR"){
        rateEl.innerText = `1 ${currency_one} = ${currencyS.EUR} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyS.EUR).toFixed(2);
    }else if (currency_one == "GEL"){
        rateEl.innerText = `1 ${currency_one} = ${currencyS.GEL} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyS.GEL).toFixed(2);
    }else{
        rateEl.innerText = `1 ${currency_one} = ${currencyS.GBP} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyS.GBP).toFixed(2);
    }
    }else{
        if (currency_one == "USD"){
      rateEl.innerText = `1 ${currency_one} = ${currencyB.USD} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyB.USD).toFixed(2);
    }else if (currency_one == "EUR"){
        rateEl.innerText = `1 ${currency_one} = ${currencyB.EUR} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyB.EUR).toFixed(2);
    }else if (currency_one == "GEL"){
        rateEl.innerText = `1 ${currency_one} = ${currencyB.GEL} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyB.GEL).toFixed(2);
    }else{
        rateEl.innerText = `1 ${currency_one} = ${currencyB.GBP} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * currencyB.GBP).toFixed(2);
    }
    }
    };

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


calculate()




const translations = {
  en: {
    currency: 'Currency',
    calc: 'Calculator',
    info: 'Information',
    map: 'Map',
    buy: 'Buy',
    sale: 'Sale',
  },
  ru: {
    currency: 'Курс',
    calc: 'Калькулятор',
    info: 'Информация',
    map: 'Карта',
    buy: 'Купля',
    sale: 'Продажа',
  },
  ge: {
    currency: 'კარგად',
    calc: 'კალკულატორი',
    info: 'ინფორმაცია',
    map: 'რუკა',
    buy: 'ყიდვა',
    sale: 'გაყიდვა',
  },
};

// Получаем элементы на странице
const languageSelect = document.querySelector('#language-select');
const currencyElement = document.querySelector('#currency');
const calcElement = document.querySelector('#calc');
const infoElement = document.querySelector('#info');
const mapElement = document.querySelector('#map');
const buyElement = document.querySelectorAll('.buy');
const saleElement = document.querySelectorAll('.sale');

// Добавляем обработчик событий на изменение значения в select
languageSelect.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
    
  currencyElement.textContent = translations[selectedLanguage].currency;
  calcElement.textContent = translations[selectedLanguage].calc;
  infoElement.textContent = translations[selectedLanguage].info;
  mapElement.textContent = translations[selectedLanguage].map;
});
languageSelect.addEventListener('change', function() {
  const selectedLang = languageSelect.value;
  buyElement.forEach(element => {
    const originalText = element.innerText;
    element.innerText = translations[selectedLang].buy;
  });
});
languageSelect.addEventListener('change', function() {
  const selectedLang = languageSelect.value;
  saleElement.forEach(element => {
    const originalText = element.innerText;
    element.innerText = translations[selectedLang].sale;
  });
});
  /*buyElement.textContent = translations[selectedLanguage].buy;
  saleElement.textContent = translations[selectedLanguage].sale;*/

