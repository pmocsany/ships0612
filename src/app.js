//File: app.js
//Author: Mócsány Petra
//Copyright: 2023, Mócsány Petra
//Group: Szoft/I/E/2
//Date: 2023-06-12
//Github: https://github.com/pmocsany/
//Licenc: GNU GPL


const tbody = document.querySelector("#tbody");

var ships = [];
const host = 'http://localhost:3000/';

function getShips() {
    let endpoint = 'ships';
    let url = host + endpoint;

    fetch(url)
    .then(response => response.json())
    .then(result => { 
        console.log(result);
        ships = result;
        generateTbody();
    });

}

getShips();

function generateTbody() {
    ships.forEach((ship) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdLength = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdPerson = document.createElement('td');
        let tdTrailer = document.createElement('td');

        tdName.textContent = ship.name;
        tdLength.textContent = ship.length;
        tdPrice.textContent = ship.price;
        tdPerson.textContent = ship.person;
        tdTrailer.textContent = ship.trailer;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdLength);
        tr.append(tdPrice);        
        tr.append(tdPerson);
        tr.append(tdTrailer)
    });
}