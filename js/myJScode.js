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


//втыкаем в каждый селект ссылку на другой
currencyEl_one.otherCurrency = currencyEl_two;
currencyEl_two.otherCurrency = currencyEl_one;

//делаем коллбэк функцию принимающую инфу о событии
function hideCurrencyOption(event) 
{
  
  var otherCurrency = event.currentTarget.otherCurrency;
  
  // берем из ивента новое значение текущего селекта
  var newOptionValue = $(event.currentTarget)
     .children("option[selected]").val();


  // hidden элемент в другом селекте делаем видимым  
  $(otherCurrency)
    .children("option[hidden]")
    .attr("hidden", false);


  // элемент, который мы получили из события в текущем селекте 
  // делаем невидимым в другом селекте
  $(otherCurrency)
    .children(`option[value=${newOptionValue}]`)
    .attr("hidden", true)
}

// добавляем прослушивание
currencyEl_one.addEventListener('change', hideCurrencyOption);
currencyEl_two.addEventListener('change', hideCurrencyOption);


const translations = {
  en: {
    currency: 'Currency',
    calc: 'Calculator',
    info: 'Information',
    map: 'Map',
    buy: 'Buy',
    sale: 'Sale',
    converter:'Currency Converter',
    live:'Live Exchange Rates',
    choose:'Choose the currency and the amounts to get the exchange rate',
  },
  ru: {
    currency: 'Курс',
    calc: 'Калькулятор',
    info: 'Информация',
    map: 'Карта',
    buy: 'Купля',
    sale: 'Продажа',
    converter:'Конвертер валют',
    live:'Текущие обменные курсы',
    choose:'Выберите валюту и суммы, чтобы узнать обменный курс',
  },
  ge: {
    currency: 'კარგად',
    calc: 'კალკულატორი',
    info: 'ინფორმაცია',
    map: 'რუკა',
    buy: 'ყიდვა',
    sale: 'გაყიდვა',
    converter:'კონვერტორი ვალუტები',
    live:'მიმდინარე კურსები',
    choose:'ვალუტის კურსის გასარკვევად აირჩიეთ ვალუტა და თანხები',
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
const converterElement = document.querySelector('#converter');
const liveElement = document.querySelector('#live');
const chooseElement = document.querySelector('#choose');
const info2Element = document.querySelector('#info2');
// Добавляем обработчик событий на изменение значения в select
languageSelect.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
    
  currencyElement.textContent = translations[selectedLanguage].currency;
  calcElement.textContent = translations[selectedLanguage].calc;
  infoElement.textContent = translations[selectedLanguage].info;
  mapElement.textContent = translations[selectedLanguage].map;
  converterElement.textContent = translations[selectedLanguage].converter;
  liveElement.textContent = translations[selectedLanguage].live;
  chooseElement.textContent = translations[selectedLanguage].choose;
  info2Element.textContent = translations[selectedLanguage].info;
});
languageSelect.addEventListener('change', function() {
  const selectedLang = languageSelect.value;
  buyElement.forEach(element => {
    const originalText = element.innerText;
    element.innerText = translations[selectedLang].buy;
});
    saleElement.forEach(element => {
    const originalText = element.innerText;
    element.innerText = translations[selectedLang].sale;
  });
});


