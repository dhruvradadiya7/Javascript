'use strict';
const countriesContainer = document.querySelector('.countries');
fetch("https://restcountries.eu/rest/v2/all")
.then(function(res){
    //console.log(res.json());
    return res.json();
})
.then(function(data){
    data.forEach(element => {
        console.log(element.name);
        const html=
        `<article class="country">
        <img class="country__img" src="${element.flag}" />
        <div class="country__data">
        <h3 class="country__name">${element.name}</h3>
        <h4 class="country__region">${element.region}</h4>
        <p class="country__row"><span></span>👨‍👩‍👦‍👦 ${element.population}</p>
        <p class="country__row"><span></span>${element.languages[0].name}</p>
        <p class="country__row"><span></span>${element.currencies[0].name}</p>
        </div>
        </article>`;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
        });
});

