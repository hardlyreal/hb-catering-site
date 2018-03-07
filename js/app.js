/* const PriceCtrl = (()=>{

  // PUBLIC METHODS
  return {
    
  }
})();

const UICtrl = (()=>{

  // selectors
  const selectors = {
    menuBoard: '.menu-board',
    meatBoard: '.menu-board__meats',
    sideBoard: '.menu-board__sides',
    saladBoard: '.menu-board__salads',
    totalBtn: '.total-btn',
    descriptionBtn: 'd-btn',
    addBtn: '.menu-btn'
  }
  // PUBLIC METHODS
  return {
    getSelectors: () => selectors
  }


})();

const App = ((PriceCtrl, UICtrl) => {
  
  // get selectors from UI controller
  const DOM = UICtrl.getSelectors();

  // store event listeners 
  const setEventListeners = () => {
    
    // toggle description
    document.querySelector(DOM.menuBoard).addEventListener('click', toggleDescription);

    // add / remove meat item
    document.querySelector(DOM.meatBoard).addEventListener('click', addMeatItem);

    // add / remove site item
    document.querySelector(DOM.sideBoard).addEventListener('click', addSideItem);

    // add / remove salad item
    document.querySelector(DOM.saladBoard).addEventListener('click', addSaladItem);

    // total menu price
    document.querySelector(DOM.totalBtn).addEventListener('click', totalMenuPrice);
  }

  // FUNCTIONS

  // TOGGLE DESCRIPTION
  function toggleDescription(e) {
    if (e.target.classList.contains(DOM.descriptionBtn)) {
      e.target.parentElement.nextElementSibling.classList.toggle('visible');
      if (e.target.parentElement.nextElementSibling.classList.contains('visible')) {
        e.target.innerHTML = `Less <i class="fas fa-arrow-up"></i>`
      } else {
        e.target.innerHTML = `Description <i class="fas fa-arrow-down"></i>`
      }
    }
    e.preventDefault();
  }

  // PUBLIC METHODS
  return {
    init: () => {
      setEventListeners();
    }
  }

})(PriceCtrl, UICtrl);


// INITIALIZE APP
App.init();


*/








/*


// Playground
const menuBoard = document.querySelector('.menu-board');
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

const addBtn = document.querySelectorAll('menu-btn');
const meatItems = [];
const sideItems = [];
const saladItems = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const dataKeys = [0,0,0];
const dataKeyNum = dataKeys.reduce(reducer);

let pricePerPerson = 16;

menuBoard.addEventListener('click', (e) => {
  if(e.target.classList.contains('meat-btn')) {
    if (meatItems.length <= 1) {
      meatItems.push(e.target.previousElementSibling.textContent);
      dataKeys.push(parseInt(e.target.previousElementSibling.getAttribute('data-key')));
      console.log(dataKeys);
      console.log(meatItems);
      if(dataKeyNum === 3) {
        pricePerPerson = 17.50;
      } else if (dataKeyNum === 4) {
        pricePerPerson = 18.50;
      } else if (dataKeyNum >= 6) {
        pricePerPerson = 20;
      }
      
    } else {
      
      console.log('you already have 2 meat items');
    }
  } else if (e.target.classList.contains('side-btn')) {
    if (sideItems.length <= 2) {
      sideItems.push(e.target.previousElementSibling.textContent);
      console.log(sideItems);
    } else {
      console.log('you already have 2 meat items');
    }
    
  } else if (e.target.classList.contains('salad-btn')) {
    if (saladItems.length <= 1) {
      saladItems.push(e.target.previousElementSibling.textContent);
      console.log(saladItems);
    } else {
      console.log('you already have 2 meat items');
    }
  }
});

if(dataKeyNum === 3) {
  pricePerPerson = 17.50;
} else if (dataKeyNum === 4) {
  pricePerPerson = 18.50;
} else if (dataKeyNum >= 6) {
  pricePerPerson = 20;
}






// UI SELECTORS
const menuBoardItem = document.querySelectorAll('.menu-board__item');
const menuBoardDescription = document.querySelectorAll('.menu-board__item--description');


// EVENT LISTENERS
// menuBoardItem.forEach(item => item.addEventListener('click', toggleDescription));
// menuBoardItem.forEach(item => item.addEventListener('click', showAlert));


// FUNCTIONS

// // SHOW ALERT WHEN ITEM IS ADDED
// function showAlert(e) {
//   if(e.target.classList.contains('menu-btn') {
//     addBtn.forEach((btn) => {
      
//     });
  
//   }
  
//   e.preventDefault();
// }


*/