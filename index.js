const axios = require("axios");

const apiAllCases = () => axios.get("https://corona.lmao.ninja/all");
const apiAllCountries = () => axios.get("https://corona.lmao.ninja/countries");

const allCasesDom = document.getElementById("allCasesId");
const allCountriesDom = document.getElementById("allCountriesId");

const asiaDom = document.getElementById("asia");

import countryJSON from "./country.json";

function getAllCases() {
  apiAllCases()
    .then(function(response) {
      buildAllCases(response.data);
      getAllCountries(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getAllCountries() {
  apiAllCountries()
    .then(function(response) {
      console.log(response.data);
      buildAllCountries(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(() => {
      completeLoading();
    });
}

function buildAllCases(data) {
  console.log(data);
  allCasesDom.innerHTML = `    
   <div class="row">
   <div class="total-wrap col-sm-4">
   <h2>Total Confirmed Cases</h2>
   <h2>${data.cases}</h2>
</div>
<div class="total-wrap col-sm-4">
   <h2>Total Deceased</h2>
   <h2>${data.deaths}</h2>
</div>
<div class="total-wrap col-sm-4">
   <h2>Total Recovered</h2>
   <h2>${data.recovered}</h2>
</div>
   </div>
`;
}

function buildAllCountries(data) {
  data.forEach(x => {
    countryJSON.forEach(y => {
      if (x.country === y.country) {
        buildByContinent(x, y.continent);
      }
    });
  });
}

function buildByContinent(data, continent) {
  switch (continent) {
    case "Asia":
      asiaDom.innerHTML += `
        <tr>
            <th scope="col">${data.country}</th>
            <th scope="col">${data.cases}</th>
            <th scope="col">${data.deaths}</th>
            <th scope="col">${data.todayCases}</th>
            <th scope="col">${data.todayDeaths}</th>
            <th scope="col">${data.recovered}</th>
        </tr>
      `;
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
    //   console.log("Sorry");
  }
}

function showLoading() {
  console.log("test");
  document.getElementById("loadingDiv").style.visibility = "visible";
}
function completeLoading() {
  document.getElementById("loadingDiv").style.visibility = "hidden";
}

window.addEventListener("DOMContentLoaded", () => {
  showLoading();
  getAllCases();
});
