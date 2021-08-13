'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getCountryData = function(country)
{
let requestURL = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();
//console.log(request,this.responseText);
request.addEventListener('load', function()
{
const [data] = JSON.parse(this.responseText);
console.log(data);
// print the capital 
const html=
`
<article class="country">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span></span>👨‍👩‍👦‍👦 ${data.population}</p>
  <p class="country__row"><span></span>${data.languages[0].name}</p>
  <p class="country__row"><span></span>${data.currencies[0].name}</p>
</div>
</article>`;
countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;

});
}  ; 
getCountryData('Usa');
getCountryData('India');