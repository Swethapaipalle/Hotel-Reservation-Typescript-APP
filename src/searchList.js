"use strict";
exports.__esModule = true;
exports.searchList = void 0;
// import reservations from '../reservations.json';
var textfield_1 = require("@material/textfield");
var searchList = function (list, elementId) {
    var results = document.getElementById(elementId);
    var inputContainerDiv = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute('class', 'mdc-text-field mdc-text-field--filled');
    inputContainerDiv.appendChild(label);
    var span1 = document.createElement("span");
    span1.setAttribute('class', ' mdc-text-field__ripple');
    var span2 = document.createElement("span");
    span2.setAttribute('class', 'mdc-floating-label');
    span2.setAttribute('id', 'my-label-id');
    span2.innerHTML = 'Search';
    var input = document.createElement("input");
    input.setAttribute('class', 'mdc-text-field__input');
    input.setAttribute('id', 'searchInput');
    var span3 = document.createElement("span");
    span3.setAttribute('class', 'mdc-line-ripple');
    label.appendChild(span1);
    label.appendChild(span2);
    label.appendChild(input);
    label.appendChild(span3);
    results.appendChild(inputContainerDiv);
    var inputFeild = new textfield_1.MDCTextField(document.querySelector('.mdc-text-field'));
    console.log("textField", inputFeild);
    var searchInput = document.getElementById("searchInput");
    var ul = document.createElement("ul");
    results.appendChild(ul);
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', function (event) {
        var target = event.target;
        var searchQuery = target.value;
        console.log("searchQuery", searchQuery);
        var filteredList = [];
        filteredList = searchQuery !== '' ? startsWith(list, searchQuery) : [];
        console.log("filteredList", filteredList);
        displayFilteredList(filteredList, results, ul);
    });
};
exports.searchList = searchList;
// searchList(reservations, "search")
var startsWith = function (array, key) {
    var matcher = new RegExp("^".concat(key), 'g');
    return array.filter(function (word) { return word.firstName.match(matcher); });
};
var displayFilteredList = function (filteredList, results, ul) {
    // filteredList.map((filteredItem) => {
    ul.innerHTML = '';
    filteredList.forEach(function (item, index) {
        var li = document.createElement('li');
        li.setAttribute('class', 'item');
        ul.appendChild(li);
        console.log("item", item);
        li.innerHTML = li.innerHTML + item.firstName;
    });
    // })
};
