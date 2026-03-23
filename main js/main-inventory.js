let table = document.querySelector("#phoneData tbody");
let nameInput = document.querySelector("#nameInput");
let priceInput = document.querySelector("#priceInput");
let qtyInput = document.querySelector("#qtyInput");
let catinput = document.querySelector("#catinput");
let nameInputEdit = document.querySelector("#nameInputEdit");
let priceInputEdit = document.querySelector("#priceInputEdit");
let qtyInputEdit = document.querySelector("#qtyInputEdit");
let catinpute = document.querySelector("#catinpute");

let indexToEdit = false;

let phones = JSON.parse(localStorage.getItem("phones")) || [];

let showPhones = () => {
  table.innerHTML = "";
  phones.forEach((el, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.cat}</td>
            <td>${el.price}</td>
            <td>${el.qty}</td>
            <td>
                <button onclick="openPhoneToEdit(${index})" data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-warning">Edit Phone</button>
                <button onclick="removePhone(${index})" class="btn btn-danger">Remove Phone</button>
            </td>
        </tr>
    `;
  });
};

showPhones();

const saveToLocalStorage = () => {
  localStorage.setItem("phones", JSON.stringify(phones));
};

let addNewPhone = () => {
  let newPhone = {
    name: nameInput.value,
    price: +priceInput.value,
    qty: +qtyInput.value,
    cat: catinput.value,
  };
  phones.push(newPhone);
  showPhones();
  saveToLocalStorage();
  nameInput.value = "";
  priceInput.value = "";
  qtyInput.value = "";
  catinput.value = "";
};

let removePhone = (indexToDelete) => {
  if (confirm("Are you sure?")) {
    phones.splice(indexToDelete, 1);
    showPhones();
    saveToLocalStorage();
  }
};

let openPhoneToEdit = (index) => {
  let phone = phones[index];
  nameInputEdit.value = phone.name;
  priceInputEdit.value = phone.price;
  qtyInputEdit.value = phone.qty;
  catinpute.value = phone.cat;
  indexToEdit = index;
};

let saveUpdates = () => {
  let newObj = {
    name: nameInputEdit.value,
    price: +priceInputEdit.value,
    qty: +qtyInputEdit.value,
    cat: catinpute.value,
  };
  if (indexToEdit !== false) {
    phones[indexToEdit] = newObj;
    showPhones();
    saveToLocalStorage();
  }
};
