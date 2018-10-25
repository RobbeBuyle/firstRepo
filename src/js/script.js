
import { loadImageInCatalog } from './functions/lib.js';
import GameObject from './classes/GameObject.js';
{
  const canvas = document.getElementById(`canvas`);
  const ctx = canvas.getContext(`2d`);

  let catalog = {};

  let myGameObject;

const init = () => {
  Promise.all([
    loadImageInCatalog(`img/bullet.png`, `bullet`, catalog),
    loadImageInCatalog(`img/player.png`, `player`, catalog),
    loadImageInCatalog(`img/enemy.png`, `enemy`, catalog),
    loadImageInCatalog(`img/explosion.png`, `explosion`, catalog)
  ]).then(loaded);//verwijst naar de functie loaded
};

const loaded = () => {
  myGameObject = new GameObject(canvas.width/2, canvas.height/2, catalog.player);
  // myGameObject = new GameObject(canvas.width/2, canvas.height/2, catalog.player);
  myGameObject.numFrames = 3;

  draw();
}

const draw = () => {
  ctx.fillStyle = `black`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  myGameObject.update();
  myGameObject.draw(ctx);

  window.requestAnimationFrame(draw);
}

init();

}