const axios = require("axios");

// api
const apiAllCases = () => axios.get("https://disease.sh/v2/all");
const apiAllCountries = () => axios.get("https://disease.sh/v2/countries");
// const apiUSA = () => axios.get("https://corona.lmao.ninja/states");

const allCasesDom = document.getElementById("allCasesId");
const allThs = document.querySelectorAll("th");
const allTab = document.querySelectorAll(".tablinks");
const USAdom = document.getElementById("USA");

const continentDomList = {
  "Asia": document.getElementById("asia"),
  "North America": document.getElementById("nAmerica"),
  "Europe": document.getElementById("europe"),
  "Oceania": document.getElementById("oceania"),
  "Africa": document.getElementById("africa"),
  "South America": document.getElementById("sAmerica"),
};
let continentList = {
  "Asia": [],
  "North America": [],
  "Europe": [],
  "Oceania": [],
  "Africa": [],
  "South America": []
};

let USA = [];

import countryJSON from "../country.json";

window.addEventListener("DOMContentLoaded", () => {
  getAllCases();
  getAllCountries();
  listenerTh();
  listenerTab();
});

function getAllCases() {
  showLoading("allCasesLoading");
  apiAllCases()
    .then(function(response) {
      buildTotalCases(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(() => {
      completeLoading("allCasesLoading");
    });
}

function getAllCountries() {
  showAllSectionLoading("sectionLoading");
  apiAllCountries()
    .then(function(response) {
      buildAllCountries(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(() => {
      completeAllSectionLoading("sectionLoading");
    });
}

function getUSA() {
  apiUSA()
  .then(function(response) {
    console.log(response.data)
    USA = response.data;
    pushUSAdetail(USA, USAdom)
  })
  .catch(function(error) {
    console.log(error);
  })
  .then(() => {
    // completeAllSectionLoading("sectionLoading");
  });
}

function listenerTh() {
  Array.from(allThs).forEach(link => {
    link.addEventListener("click", function() {
      let getContinent = this.parentNode.getAttribute("data-continent");
      let getValue = this.getAttribute("data-value");
      sortTable(getContinent, getValue);
    });
  });
}

function listenerTab(){
  Array.from(allTab).forEach(link => {
    link.addEventListener("click", function() {
      let getValue = this.getAttribute("data-value");
      if(getValue === 'USA'){
        getUSA()
      }
    });
  });
}

/* BUILD START */
function buildTotalCases(data) {
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
    buildContinentData()
    countryJSON.forEach(y => {
      if (x.country === y.country) {
        buildContinentData(x, y.continent);
      }
    });
  });

  buildView();
}


function buildContinentData(data, continent) {
  if (continentList[continent]) {
    continentList[continent].push(data);
  }
}

function buildView(continent) {
  if (continent) {
    // build sp continent
    let getSpDom = continentDomList[continent];
    getSpDom.innerHTML = "";
    let getSpArray = continentList[continent];
    pushDetail(getSpArray, getSpDom);
  } else {
    // build all continent
    for (let prop in continentList) {
      let getDom = continentDomList[prop];
      pushDetail(continentList[prop], getDom);
    }
  }
}

function pushDetail(array, dom) {
  array.forEach(item => {
    if (dom) {
      dom.innerHTML += `
                <tr>
                    <th scope="col">${item.country}</th>
                    <th scope="col">${item.cases}</th>
                    <th scope="col">${item.deaths}</th>
                    <th scope="col">${item.todayCases}</th>
                    <th scope="col">${item.recovered}</th>
                </tr>
                `;
    }
  });
}

function pushUSAdetail(array, dom) {
  array.forEach(item => {
    if (dom) {
      dom.innerHTML += `
                <tr>
                    <th scope="col">${item.state}</th>
                    <th scope="col">${item.cases}</th>
                    <th scope="col">${item.deaths}</th>
                    <th scope="col">${item.todayCases}</th>
                    <th scope="col">${item.todayDeaths}</th>
                    <th scope="col">${item.recovered}</th>
                </tr>
                `;
    }
  });
}
/* BUILD END */

/* SORT START */
function sortTable(continent, type) {
  let getSpArray = continentList[continent];
  getSpArray.sort(compareValues(type));
  buildView(continent);
}

let orderDesc = true;
function compareValues(key) {
  orderDesc = !orderDesc;
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return orderDesc ? comparison * -1 : comparison;
  };
}
/* SORT END */

/* LOADING START */
function showLoading(type) {
  document.getElementById(type).style.visibility = "visible";
}
function completeLoading(type) {
  document.getElementById(type).style.visibility = "hidden";
}

function showAllSectionLoading(type) {
  let elList = document.querySelectorAll("." + type);
  elList.forEach(el => (el.style.visibility = "visible"));
}
function completeAllSectionLoading(type) {
  let elList = document.querySelectorAll("." + type);
  elList.forEach(el => (el.style.visibility = "hidden"));
}
/* LOADING END */
