var pos = 0;
const pacArray = [
  ["PacMan1.png", "PacMan2.png"],
  ["PacMan3.png", "PacMan4.png"],
];
<<<<<<< HEAD
var mouth = 0;
=======
var direction = 0;
>>>>>>> bb4b30caa1deec64c699cf4fd1288cb3fe8c77d8
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
<<<<<<< HEAD
    direction: 0
=======
>>>>>>> bb4b30caa1deec64c699cf4fd1288cb3fe8c77d8
  };
}
// Factory to make a PacMan
function makePac() {
  // returns an object with values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  // Add image to div id = game
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "PacMan1.png";
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  // new style of creating an object
  return {
    position,
    velocity,
<<<<<<< HEAD
    newimg
=======
    newimg,
>>>>>>> bb4b30caa1deec64c699cf4fd1288cb3fe8c77d8
  };
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
<<<<<<< HEAD

    mouth = (mouth + 1) % 2
    item.newimg.src = pacArray[item.position.direction][mouth];
  });
 
  setTimeout(update, 50);
=======
  });
  setTimeout(update, 20);
>>>>>>> bb4b30caa1deec64c699cf4fd1288cb3fe8c77d8
}

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
<<<<<<< HEAD
    { 
    item.velocity.x = -item.velocity.x;
    item.position.direction = (item.position.direction + 1) % 2;
   
    // item.newimg.src = pacArray[(direction + 1) % 2][mouth];
    }
=======
    item.velocity.x = -item.velocity.x;
>>>>>>> bb4b30caa1deec64c699cf4fd1288cb3fe8c77d8
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
