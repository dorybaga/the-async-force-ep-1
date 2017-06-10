/*jshint esversion: 6 */
// console.log("yo");

(function(){

function findFour(id){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', getName);
  oReq.open('GET', `http://www.swapi.co/api/people/4`);
  oReq.send();
}

function getName(){
  var response = JSON.parse(this.responseText);
  var name = document.getElementById("person4Name");
  var nameBox = document.createElement("div");
  // console.log(response);
  nameBox.innerHTML = response.name;
  name.appendChild(nameBox);
}

function findWorld(){
  var response = JSON.parse(this.responseText);
  var worldName = document.getElementById("person4HomeWorld");
  var worldBox = document.createElement("div");
  worldBox.innerHTML = response.name;
  worldName.appendChild(worldBox);
}

function getWorldName(id){
  var wReq = new XMLHttpRequest();
  wReq.addEventListener('load', findWorld);
  wReq.open('GET', `http://www.swapi.co/api/planets/1`);
  wReq.send();
}

function getName14(){
  var response = JSON.parse(this.responseText);
  var name = document.getElementById("person14Name");
  var nameBox = document.createElement("div");
  // console.log(response);
  nameBox.innerHTML = response.name;
  name.appendChild(nameBox);
}

function getFourteen(){
  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener('load', getName14);
  oReq2.open('GET', `http://www.swapi.co/api/people/14`);
  oReq2.send();
}

function nameSpecies(){
  var response = JSON.parse(this.responseText);
  var name = document.getElementById("person14Species");
  var nameBox = document.createElement("div");
  nameBox.innerHTML = response.name;
  name.appendChild(nameBox);
}


function findSpecies(){
  var sReq = new XMLHttpRequest();
  sReq.addEventListener('load', nameSpecies);
  sReq.open('GET', `http://www.swapi.co/api/species/1/`);
  sReq.send();
}


function reqListener(){
  var res = JSON.parse(this.responseText);
  var pRes = JSON.parse(this.responseText);

  for (var i =0; i < res.results.length; i++){
    // console.log(res.results[i]);

    // for film titles...
    var titleBox = document.getElementById("filmList");
    var filmName = document.createElement("h2");
    filmName.className = filmName;
    filmName.innerHTML = res.results[i].title;
    titleBox.appendChild(filmName);

    // for planet names...
    for (var p = 0; p < pRes.results[i].planets.length; p++){
      getPlanet(filmName, res.results[i].planets[p], function(domEl, name){
        // console.log("planet name is " + name);
        // console.log("callback", domEl);
        var planetBox = document.createElement("div");
        domEl.appendChild(planetBox);
        var planetName = document.createElement("ul");
        planetName.innerHTML = name;
        planetBox.appendChild(planetName);
      });
    }
  }
}


var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', `http://www.swapi.co/api/films`);
  oReq.send();

function getPlanet(domEl, url, callback){
  var pReq = new XMLHttpRequest();
  // console.log("in getPlanet", domEl);
  pReq.addEventListener('load', function(){
    callback(domEl, JSON.parse(this.responseText).name);
  });
  pReq.open('GET', url);
  pReq.send();
}


findFour(4);
getWorldName(4);
getFourteen(14);
findSpecies(14);

})();