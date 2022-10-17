// import reservations from '../reservations.json';
import { MDCTextField } from '@material/textfield';
export const searchList = (list, elementId) => {
    const results = document.getElementById(elementId);
    const inputContainerDiv = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute('class', 'mdc-text-field mdc-text-field--filled');
    inputContainerDiv.appendChild(label);
    const span1 = document.createElement("span");
    span1.setAttribute('class', ' mdc-text-field__ripple');
    const span2 = document.createElement("span");
    span2.setAttribute('class', 'mdc-floating-label');
    span2.setAttribute('id', 'my-label-id');
    span2.innerHTML = 'Search';
    const input = document.createElement("input");
    input.setAttribute('class', 'mdc-text-field__input');
    input.setAttribute('id', 'searchInput');
    const span3 = document.createElement("span");
    span3.setAttribute('class', 'mdc-line-ripple');
    label.appendChild(span1);
    label.appendChild(span2);
    label.appendChild(input);
    label.appendChild(span3);
    results.appendChild(inputContainerDiv);
    const inputFeild = new MDCTextField(document.querySelector('.mdc-text-field'));
    console.log("textField", inputFeild);
    const searchInput = document.getElementById("searchInput");
    const ul = document.createElement("ul");
    results.appendChild(ul);
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', function (event) {
        const target = event.target;
        const searchQuery = target.value;
        console.log("searchQuery", searchQuery);
        let filteredList = [];
        filteredList = searchQuery !== '' ? startsWith(list, searchQuery) : [];
        console.log("filteredList", filteredList);
        displayFilteredList(filteredList, results, ul);
    });
};
// searchList(reservations, "search")
const startsWith = (array, key) => {
    const matcher = new RegExp(`^${key}`, 'g');
    return array.filter(word => word.firstName.match(matcher));
};
const displayFilteredList = (filteredList, results, ul) => {
    // filteredList.map((filteredItem) => {
    ul.innerHTML = '';
    filteredList.forEach((item, index) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        ul.appendChild(li);
        console.log("item", item);
        li.innerHTML = li.innerHTML + item.firstName;
    });
    // })
};
//# sourceMappingURL=searchList.js.map