const randomiseButton = document.getElementById('randomise');
const form = document.getElementById('form');
const nameField = document.getElementById('name');
const urlField = document.getElementById('url');
const textField = document.getElementById('textField');

// client side validation
form.addEventListener('submit', (e) => {
   e.preventDefault(); // stops form from submitting
   // if value are equal to empty string, informs user that those fields have to be filled
   if (urlField.value.trim() === '' || nameField.value.trim() === '') {
      alert('Please, make sure that all fields are filled');
   } else {
      form.submit();
   }
});

// event handler for randomise button
randomiseButton.addEventListener('click', (e) => {
   fetchData();
   fetchName();
});

const fetchName = () => {
   // fetching random user api
   const data = fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
         // accessing name field from api response and assigning nameField Value
         nameField.value = data.results[0].name.first;
      });
};

const fetchData = () => {
   // fetching random animal api
   const data = fetch('https://some-random-api.ml/animal/cat')
      .then((res) => res.json())
      .then((data) => {
         // assigning value to url and text fields
         urlField.value = data.image;
         textField.value = data.fact;
      });
};
