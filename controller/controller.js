const Animal = require('../model/animal');
const fs = require('fs');
const path = require('path');
const { render } = require('express/lib/response');
// Add current path to filename
const filePath = path.resolve(__dirname, 'animals.json');

// router methods

exports.getMainPage = (req, res, next) => {
   let animals = loadData();
   res.render('index', { arr: animals });
};

exports.getAdd = (req, res, next) => {
   res.render('add');
};

exports.postAdd = (req, res, next) => {
   res.re;
   let data = req.body;
   let animals = [];
   saveData(new Animal(data.name, data.url, data.fact), next);
   res.redirect('/');
};

exports.delete = (req, res, next) => {
   let data = req.body;
   console.log('DataID' + data.id);
   remove(data.id);
   res.redirect('/');
};

// file system methods

//  working with JSON object read from the file (JSON.parse, JSON.stringify) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// working with file system in node.js
// https://www.geeksforgeeks.org/node-js-fs-readfile-method/

// fetch data from the file
const loadData = () => {
   try {
      let data = fs.readFileSync(filePath, 'utf8');
      // if file is not empty
      if (data) {
         return JSON.parse(data);
      }
   } catch (err) {
      console.log(err);
   }
   // if nothing is returned at this point, we need to return an empty array
   return [];
};

// save data
const saveData = function (animal, next) {
   // retrieving existing animal list
   const animals = loadData();
   //adding animal to existing array
   animals.push(animal);
   // saving animal array to the json file
   saveFile(animals);
};

//remove from the file
const remove = (id) => {
   const data = loadData(); // load data from the file
   // filter for all but matching id
   const animals = data.filter((entry) => {
      if (entry.id.toString() !== id.toString()) {
         return entry;
      }
   });
   // save file
   saveFile(animals);
};

// helper function
const saveFile = (array) => {
   try {
      fs.writeFileSync(filePath, JSON.stringify(array));
   } catch (err) {
      console.log(err);
   }
};
