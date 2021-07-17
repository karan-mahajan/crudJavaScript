"use strict";
let edit;

console.log('Welcome to Console');

const countryName = document.querySelector('.inputCountry');
const countryElement = document.querySelector('.countriesBody');
const editCountryName = document.querySelector('.editCountry');

const countries = ['India', 'USA', 'Pakistan', 'China'];

function addCountry() {
    if (countryName.value) {
        countries.push(countryName.value);
        countryName.value = '';
        showCountries();
    }
}

function editCountryToInput(val) {
    let editCon = countries[val];
    edit = val;
    editCountryName.value = editCon;
    document.querySelector('.editForm').style.display = 'block';
}

function editCountry() {
    countries[edit] = editCountryName.value;
    editCountryName.value = '';
    showCountries();
    document.querySelector('.editForm').style.display = 'none';
    console.log("Country Edited");
}

function deleteCountry(val) {
    countries.splice(val, 1);
    showCountries();
}

function showCountries() {
    var elem = '';
    if (countries.length > 0) {
        countries.forEach(function (val, iter) {
            elem += `<tr>
                    <td>${val}</td>
                    <td><button onclick="editCountryToInput(${iter})">Edit</button></td>
                    <td><button onclick="deleteCountry(${iter})">Delete</button></td>
                </tr>`;
        });
    }
    count(countries.length);
    return countryElement.innerHTML = elem;
}

function count(data) {
    const place = document.querySelector('.countryCount');
    if (data >= 1) {
        place.innerHTML = `${data} Countries`;
    } else {
        place.innerHTML = `0 Country`;
    }
}

showCountries();