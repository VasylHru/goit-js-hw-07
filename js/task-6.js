
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