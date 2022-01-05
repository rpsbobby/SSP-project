module.exports = class Animal {
   constructor(name, imageURL) {
      this.id = Math.random();
      this.name = name;
      this.imageURL = imageURL;
   }
};
