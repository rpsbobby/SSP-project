// class templates
// creating class template helps with security,
// it allows us to save a data coming from request in formatted way
module.exports = class Animal {
   constructor(name, imageURL, fact) {
      // id is created automatically
      this.id = Math.random();
      this.name = name;
      this.imageURL = imageURL;
      this.fact = fact;
   }
};
