const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);

let catalog = {};
let key = 'propnaam';
let value = 'de waarde voor de prop';

import { loadImageInCatalog } from './functions/lib.js';
import GameObject from './classes/GameObject.js';

const init = () => {
  Promise.all([
    loadImageInCatalog(`img/bullet.png`, `bullet`, catalog),
    loadImageInCatalog(`img/player.png`, `player`, catalog),
    loadImageInCatalog(`img/explosion.png`, `explosion`, catalog)
  ]).then(loaded);//verwijst naar de functie loaded

  draw();
};

const loaded = () => {
  myGameObject = new GameObject(canvas.width/2, canvas.height/2, catalog.player);
  myGameObject.numFrames = 3;
}

const draw = () => {
  myGameObject.update();
  myGameObject.draw(ctx);
}

init();