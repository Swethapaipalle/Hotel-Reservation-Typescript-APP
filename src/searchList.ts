// import reservations from '../reservations.json';
import { MDCTextField } from '@material/textfield';


export const searchList = (list: any[], elementId: string) => {

    const results = document.getElementById(elementId) as HTMLDivElement;
    const inputContainerDiv = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute('class', 'mdc-text-field mdc-text-field--filled');
    inputContainerDiv.appendChild(label)
    const span1 = document.createElement("span");
    span1.setAttribute('class', ' mdc-text-field__ripple');
    const span2 = document.createElement("span");
    span2.setAttribute('class', 'mdc-floating-label');
    span2.setAttribute('id', 'my-label-id');
    span2.innerHTML = 'Search'
    const input = document.createElement("input")
    input.setAttribute('class', 'mdc-text-field__input');
    input.setAttribute('id', 'searchInput');
    const span3 = document.createElement("span");
    span3.setAttribute('class', 'mdc-line-ripple');
    label.appendChild(span1)
    label.appendChild(span2)
    label.appendChild(input)
    label.appendChild(span3)
    results.appendChild(inputContainerDiv)
    const inputFeild = new MDCTextField(document.querySelector('.mdc-text-field') as HTMLInputElement);
    console.log("textField", inputFeild)

    const searchInput = document.getElementById("searchInput") as HTMLInputElement
    const ul = document.createElement("ul");
    results.appendChild(ul);

    searchInput?.addEventListener('input', function (event) {

        const target = event.target as HTMLInputElement;
        const searchQuery = target.value;
        console.log("searchQuery", searchQuery)
        let filteredList: any[] = [];
        filteredList = searchQuery !== '' ? startsWith(list, searchQuery) : [];
        console.log("filteredList", filteredList)
        displayFilteredList(filteredList, results, ul)

    });

}

// searchList(reservations, "search")

const startsWith = (array: any[], key: string) => {
    const matcher = new RegExp(`^${key}`, 'g');
    return array.filter(word => word.firstName.match(matcher));
}


const displayFilteredList = (filteredList: any[], results: HTMLDivElement, ul: HTMLUListElement) => {


    // filteredList.map((filteredItem) => {
    ul.innerHTML = ''
    filteredList.forEach((item, index) => {
        const li = document.createElement('li') as HTMLElement;
        li.setAttribute('class', 'item');
        ul.appendChild(li);
        console.log("item", item)
        li.innerHTML = li.innerHTML + item.firstName;

    });
    // })

}

