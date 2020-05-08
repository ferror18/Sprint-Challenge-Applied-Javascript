/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  //elements
  let carousel= document.createElement('div');
  let leftButton = document.createElement('div');
  let rightButton= document.createElement('div');
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let img3 = document.createElement('img');
  let img4 = document.createElement('img');
  //classes and id's
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img1.id = 'img1';
  img2.id = 'img2';
  img3.id = 'img3';
  img4.id = 'img4';
  img3.classList.add(`imgds`);
  img4.classList.add(`imgds`);
  //content
  img1.src = '../assets/carousel/mountains.jpeg';
  img2.src = "../assets/carousel/computer.jpeg";
  img3.src = "../assets/carousel/trees.jpeg";
  img4.src = "../assets/carousel/turntable.jpeg";

  //nesting
  const array = [leftButton, img1, img2, img3, img4, rightButton];
  array.forEach(element => {
    carousel.appendChild(element);
  });
  //event
  let stateofcar = 0
  leftButton.addEventListener('click', event => {
    function firstTurn() {
      img3.classList.remove('imgds');
      img1.classList.add('imgds');
    }
    function secondTurn() {
      img4.classList.remove('imgds');
      img2.classList.add('imgds');
    }
    function thirdTurn() {
      img1.classList.remove('imgds');
      img3.classList.add('imgds');
    }
    function fourthTurn() {
      img2.classList.remove('imgds');
      img4.classList.add('imgds');
    }
    if (stateofcar === 0) {
      firstTurn();
      stateofcar += 1;
    }else if (stateofcar === 1) {
      secondTurn();
      stateofcar += 1;
    }else if (stateofcar === 2) {
      thirdTurn();
      stateofcar += 1;
    }else if (stateofcar === 3) {
      fourthTurn();
      stateofcar = 0;
    }else{
      console.log(`Error| current State of carrousel : ${stateofcar}`);
    }
    console.log(`Error| current State of carrousel : ${stateofcar}`);
    // debugger
  });
  rightButton.addEventListener('click', event => {
    function firstTurn() {
      img3.classList.remove('imgds');
      img1.classList.add('imgds');
    }
    function secondTurn() {
      img4.classList.remove('imgds');
      img2.classList.add('imgds');
    }
    function thirdTurn() {
      img1.classList.remove('imgds');
      img3.classList.add('imgds');
    }
    function fourthTurn() {
      img2.classList.remove('imgds');
      img4.classList.add('imgds');
    }
    if (stateofcar === 0) {
      thirdTurn();
      stateofcar += 1;
    }else if (stateofcar === 2) {
      secondTurn();
      stateofcar += 1;
    }else if (stateofcar === 1) {
      firstTurn();
      stateofcar += 1;
    }else if (stateofcar === 3) {
      fourthTurn();
      stateofcar = 0;
    }else{
      console.log(`Error| current State of carrousel : ${stateofcar}`);
    }
    console.log(`Error| current State of carrousel : ${stateofcar}`);
    // debugger
  });
  //return
  return carousel
}
document.querySelector('.carousel-container').appendChild(carouselMaker());