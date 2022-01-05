module.exports = class Animal {
   constructor(name, imageURL, fact) {
      this.id = Math.random();
      this.name = name;
      this.imageURL = imageURL;
      this.fact = fact;
   }
};
