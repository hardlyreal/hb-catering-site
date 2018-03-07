const meatItems = [];
const sideItems = [];
const saladItems = [];
const dataKeys = [];
const menuBoard = document.querySelector(".menu-board");
const meatBoard = document.querySelector('.menu-board__meats');
const sideBoard = document.querySelector('.menu-board__sides');
const saladBoard = document.querySelector('.menu-board__salads');
const bodyDOM = document.querySelector('.body')

function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
}

// ALERT FUNCTIONS

// clear alert
function clearAlert() {
  const currentAlert = document.querySelector('.alert');
  if(currentAlert) {
    currentAlert.remove();
  }
}

// make alert
function alert(message, className) {
  // clears alert if one is displaying
  this.clearAlert();
  // create div hold alert
  const div = document.createElement("div");
  // basic alert class
  div.className = "alert";
  // class name based on type of alert
  div.classList.add(className);
  // message
  div.textContent = message;
  // append to DOM
  bodyDOM.appendChild(div);

  // remove after 3 seconds
  setTimeout(()=>{
    this.clearAlert();
  },3000);
}

// add menu item
function addMenuItem(arr, className, target) {
  // Push item name to array of items
  arr.push(target.previousElementSibling.textContent);
  // Add btn changed to remove btn
  target.classList.remove(className);
  target.classList.add("remove-btn");
  target.textContent = "remove";
  // menu item disabled (greye(d out)
  target.parentElement.parentElement.classList.add("disabled");
  // Pop up that says item added
  alert("item added!", "alert__success");
}

// remove menu item
function removeMenuItem(arr, className, target) {
  // remove item from data array
  remove(arr, target.previousElementSibling.textContent);
  // Add btn changed to remove btn
    target.classList.add(className);
    target.classList.remove("remove-btn");
    target.textContent = "add";
    // menu item disabled (greye(d out)
    target.parentElement.parentElement.classList.remove("disabled");
    // Pop up that says item removed
    alert("item removed!", "alert__warning");
}


// EVENT LISTENERS

// ADD BTN CLICK EVENT

// MEAT ADD
meatBoard.addEventListener("click", e => {
  if (e.target.classList.contains("meat-btn")) {
    if (meatItems.length <= 1) {
      addMenuItem(meatItems, 'meat-btn', e.target);
      // Push item name to array of items
      dataKeys.push(
        parseInt(e.target.previousElementSibling.getAttribute("data-key"))
      );
    } else {
      // Alert too many meat items
      alert("too many meat items", "alert__warning");
    }
  } else if (e.target.classList.contains("remove-btn")) {
      removeMenuItem(meatItems, 'meat-btn', e.target);
      remove(dataKeys, parseInt(e.target.previousElementSibling.getAttribute("data-key"))
    );
  }

  e.preventDefault();
});

// SIDE ADD
sideBoard.addEventListener('click', (e) => {
  if (e.target.classList.contains("side-btn")) {
    if (sideItems.length <= 2) {
      addMenuItem(sideItems, 'side-btn', e.target);  
    } else {
      // Alert extra sides cost $1.00 more per person
      addMenuItem(sideItems, 'side-btn', e.target); 
      alert("adding extra sides costs $1.00 more per person", "alert__cation");
      
    }
  } else if (e.target.classList.contains("remove-btn")) {
    removeMenuItem(sideItems, 'side-btn', e.target);
  }
  e.preventDefault();
});

// SALAD ADD
saladBoard.addEventListener('click', (e) => {
  if (e.target.classList.contains("salad-btn")) {
    if (saladItems.length <= 1) {
      addMenuItem(saladItems, 'salad-btn', e.target);
    } else {
      // Alert too many meat items
      alert("too many salad items", "alert__warning");
    }
  } else if (e.target.classList.contains("remove-btn")) {
    removeMenuItem(saladItems, 'salad-btn', e.target);
  }
  e.preventDefault();
});

// TOTAL BTN CLICK EVENT
const totalBtn = document.querySelector(".total-btn");
let totalGuestsInput = document.querySelector(".guest-input");

totalBtn.addEventListener("click", e => {
  let pricePerPerson, totalPrice, subTotalPrice;
  let totalGuests = parseInt(totalGuestsInput.value);
  let gratuity = 0.18;

  // reduce dataKeys
  const dataKeySum = dataKeys.reduce((accumulator, item) => accumulator + item);

  if (dataKeySum === 2) {
    pricePerPerson = 16;
  } else if (dataKeySum === 3) {
    pricePerPerson = 17.5;
  } else if (dataKeySum === 4) {
    pricePerPerson = 18.5;
  } else if (dataKeySum >= 6) {
    pricePerPerson = 20;
  }

  if(sideItems.length === 4) {
    pricePerPerson += 1;
  } else if (sideItems.length === 5) {
    pricePerPerson += 2;
  } else if (sideItems.length === 6) {
    pricePerPerson += 3;
  } else if (sideItems.length === 7) {
    pricePerPerson += 4;
  }

  if (totalGuests <= 75) {
    pricePerPerson += 5;
  }

  subTotalPrice = pricePerPerson * totalGuests;
  gratuity = pricePerPerson * totalGuests * gratuity;
  totalPrice = subTotalPrice + gratuity;
  // Display total
  const totalInput = document.querySelector('.total-input');
  totalInput.value = `TOTAL: $${totalPrice}.00`;
  totalInput.style.display = 'block';
  // const menuCreate = document.createElement('ul');
  // menuCreate.className = 'menu-create';
  // const meats =  meatItems.forEach(item => {
  //   `<li>${item}</li>`;
  
  // });
  // menuCreate.innerHTML = meats;
  // const menuPrintOut = document.querySelector('.menu-print-out');
  // menuPrintOut.appendChild(menuCreate);

  e.preventDefault();
});

menuBoard.addEventListener('click', toggleDescription);

function toggleDescription(e) {
  if (e.target.classList.contains('d-btn')) {
    e.target.parentElement.nextElementSibling.classList.toggle('visible');
    if (e.target.parentElement.nextElementSibling.classList.contains('visible')) {
      e.target.innerHTML = `Less <i class="fas fa-arrow-up"></i>`
    } else {
      e.target.innerHTML = `Description <i class="fas fa-arrow-down"></i>`
    }
  }
  e.preventDefault();
}