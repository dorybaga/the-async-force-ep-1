/*jshint esversion: 6 */
// console.log("yo");

(function(){

function getName(){
  var response = JSON.parse(this.responseText);
  var name = document.getElementById("person4Name");
  var nameBox = document.createElement("div");
  // console.log(response);
  nameBox.innerHTML = response.name;
  name.appendChild(nameBox);
}

function getFour(id){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', getName);
  oReq.open('GET', `http://www.swapi.co/api/people/4`);
  oReq.send();
}

function getWorld(){
  var response = JSON.parse(this.responseText);
  var worldBox = document.createElement("div");
  worldBox.innerHTML = response.name;

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

// function reqListener(){
//   var res = JSON.parse(this.responseText);
//   var pRes = JSON.parse(this.responseText);

//   for (var i =0; i < res.results.length; i++){
//     // console.log(res.results[i]);

//     // for film titles...
//     var filmName = document.createElement("li");
//     filmName.innerHTML = res.results[i].title;
//     titleBox.appendChild(filmName);

//     // for planet names...
//     for (var p = 0; p < pRes.results[i].planets.length; p++){
//       getPlanet(res.results[i].planets[p], function(name){
//         // console.log("planet name is " + name);

//         var planetBox = document.createElement("li");
//         filmName.appendChild(planetBox);
//         var planetName = document.createElement("li");
//         planetName.innerHTML = name;
//         planetBox.appendChild(planetName);
//       });
//     }
//   }
// }

// var titleBox = document.getElementById("filmList");

// var oReq = new XMLHttpRequest();
//   oReq.addEventListener('load', reqListener);
//   oReq.open('GET', `http://www.swapi.co/api/films`);
//   oReq.send();

// function getPlanet(url, callback){
//   var pReq = new XMLHttpRequest();
//   pReq.addEventListener('load', function(){
//     callback(JSON.parse(this.responseText).name);
//   });
//   pReq.open('GET', url);
//   pReq.send();
// }


getFour(4);
getFourteen(14);

})();