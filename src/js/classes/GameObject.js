import Vector from './Vector';

export default class GameObject {
  constructor(x, y, image) {
    this.location = new Vector(x, y);
    this.image = image;
    this.size = this.image.height;
    this.frameRate = 60;
    this.frameNr = 0;
    this.localFrameNr = 0;
    this.numFrames = 1;
  }

  update() {
    this.frameNr++;
    this.localFrameNr = Math.floor(this.frameNr / (60 / this.frameRate));
    this.localFrameNr = this.localFrame % this.numFrames;
  }

  draw(ctx){
    ctx.save();
    ctx.translate(this.location.x, this.location.y);
    ctx.drawImage(this.image, this.localFrameNr * this.size, 0, this.size,
                  this.size, -this.size/2, -this.size/2, this.size, this.size);
    ctx.restore();
  }
};