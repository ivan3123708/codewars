class Block{
  constructor(data){
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.height * this.length;
  }

  getSurfaceArea() {
    return this.width * this.length * 2 + this.height * this.length * 2 + this.height * this.width * 2
  }
};