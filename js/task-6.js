// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// function createBoxes(amount) {
//   const boxesContainer = document.getElementById("boxes");
//   boxesContainer.innerHTML = "";

//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);
//     size += 10;
//   }
// }

// function destroyBoxes() {
//   const boxesContainer = document.getElementById("boxes");
//   boxesContainer.innerHTML = "";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const createButton = document.getElementById("create-button");
//   const destroyButton = document.getElementById("destroy-button");
//   const inputNumber = document.getElementById("input-number");

//   createButton.addEventListener("click", function () {
//     const amount = parseInt(inputNumber.value);
//     if (amount >= 1 && amount <= 100) {
//       createBoxes(amount);
//       inputNumber.value = "";
//     } else {
//       alert("Please enter a number between 1 and 100.");
//     }
//   });

//   destroyButton.addEventListener("click", function () {
//     destroyBoxes();
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('button[data-create]');
  const destroyButton = document.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    
   
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    }
    
    input.value = ''; 
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = '5px';
      fragment.appendChild(div);
      size += 10; 
    }

    boxesContainer.innerHTML = ''; 
    boxesContainer.appendChild(fragment); 
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ''; 
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
});