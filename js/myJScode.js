const showMoreBtn = document.querySelector('.show-more-btn');
const moreInfo = document.querySelector('.more-info');
var swapBtn = document.getElementById("swap");

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

const currency = {
    USD: {Buy: usdB, Sell: usdS },
    EUR: {Buy: eurB, Sell: eurS },
    RUB: {Buy: rubB, Sell: rubS },
    GBP: {Buy: gbpB, Sell: gbpS }, 
};


const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const currencyTransaction = document.getElementById('currencyTransaction');

const rateEl = document.getElementById('rate');

class ConstObject {
  currentSelect;
  otherSelect;
  transactionSelect;
  input;
  currency;

  constructor(currentSelect, otherSelect,
              transactionSelect, input,
              currency) {
      this.currentSelect = currentSelect;
      this.otherSelect = otherSelect;
      this.transactionSelect = transactionSelect;
      this.input = input;
      this.currency = currency
      
  }
};

var constObject = new ConstObject(
currencyEl_two,
currencyEl_one,
currencyTransaction,
amountEl_one,
currency);



function swapCurrencies(event){
  var i1 = event.currentTarget.currencyOne.innerHTML;
  var i2 = event.currentTarget.currencyTwo.innerHTML;

  event.currentTarget.currencyOne.innerHTML = i2;
  event.currentTarget.currencyTwo.innerHTML = i1;

  calculate(event);
}

function getExchangeRate(exRateObject, buyCurrency, sellCurrency){
  if(buyCurrency == sellCurrency){
    return 1;
  }

  if(buyCurrency != 'GEL' & sellCurrency != 'GEL'){
    var sell = exRateObject[sellCurrency].Sell; // продаем рубль за лари (0.035)
    var buy = exRateObject[buyCurrency].Buy; // покупаем евро за лари (2.68)
    
    var rate = sell/buy; // 1 рубль  = 0.013 евро

    return rate;
  }

  return sellCurrency == 'GEL'
    ? 1 / (exRateObject[buyCurrency].Buy)
    : parseFloat(exRateObject[sellCurrency].Sell);

};


function process(
  exRateObject,
  sellCurrency,
  buyCurrency,
  input,
  transactionType) {

  var exRate = getExchangeRate(exRateObject, sellCurrency, buyCurrency);

  amountEl_two.value = transactionType == 'Sell'
    ? (input.value * (1/exRate).toFixed(3)).toFixed(2)
    : (input.value * exRate.toFixed(3)).toFixed(2);

  rateEl.innerText = transactionType == 'Sell' 
    ? `1 ${sellCurrency} = ${(1/exRate).toFixed(3)} ${buyCurrency}`
    : `1 ${buyCurrency} = ${exRate.toFixed(3)} ${sellCurrency}`

}

function calculate(event) {
  var constObject = event.currentTarget.constObject;
  
  var sellCurrency = constObject.transactionSelect.value == 'Sell'
  ? constObject.currentSelect.value 
  : constObject.otherSelect.value;
  
  var buyCurrency = constObject.transactionSelect.value == 'Sell'
  ? constObject.otherSelect.value 
  : constObject.currentSelect.value;
  
   process(
     constObject.currency,
     buyCurrency,
     sellCurrency,
     constObject.input,
     constObject.transactionSelect.value)
};

currencyEl_one.constObject = constObject;
currencyEl_two.constObject = constObject;
amountEl_one.constObject = constObject;
amountEl_two.constObject = constObject;
swapBtn.constObject = constObject;

currencyTransaction.constObject = constObject;

swapBtn.currencyOne = currencyEl_one;
swapBtn.currencyTwo = currencyEl_two;
swapBtn.addEventListener('click', swapCurrencies);
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
currencyTransaction.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
addEventListener('load', calculate)

currencyEl_one.otherCurrency = currencyEl_two;
currencyEl_two.otherCurrency = currencyEl_one;

function hideCurrencyOption(event) 
{
  var otherCurrency = event.currentTarget.otherCurrency;
  var newOptionValue = event.target.value;
  
  $(event.currentTarget)
    .children("option[selected='selected']")
    .attr("selected", false);

  $(event.currentTarget)
    .children(`option[value=${newOptionValue}]`)
    .attr("selected", true);

  $(otherCurrency)
    .children("option[hidden='hidden']")
    .attr("hidden", false);

  $(otherCurrency)
    .children(`option[value=${newOptionValue}]`)
    .attr("hidden", true);
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


