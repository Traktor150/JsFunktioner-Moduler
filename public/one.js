'use strict';

var content = document.createElement('h2');
content.innerText = 'One';

document.getElementById('content').append(content);



var cars = [];
var unic = [];
var amount = [];

const myFunkrtion = () => {
    cars.push(document.getElementById('carModle').value);

    unic = [];
    amount = [];

    cars.forEach(car => {
        if (!unic.includes(car)) {
            var i = 0;
            cars.forEach(element => {
                if (element == car) {
                    i++;
                }
            });
            unic.push(car);
            amount.push(i);
        }
    });
}

document.getElementById('addData').addEventListener('click', myFunkrtion)
