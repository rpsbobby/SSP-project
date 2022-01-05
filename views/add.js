const button = document.getElementById('randomise');
const form = document.getElementById('form');
const nameField = document.getElementById('name');
const urlField = document.getElementById('url');
const textField = document.getElementById('textField');

// client side validation
form.addEventListener('submit', (e) => {
   e.preventDefault();
   if (urlField.value.trim() === '' || nameField.value.trim() === '') {
      alert('Please, make sure that all fields are filled');
   } else {
      form.submit();
   }
});

button.addEventListener('click', (e) => {
   fetchData();
   fetchName();
});

const fetchName = () => {
   const data = fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
         nameField.value = data.results[0].name.first;
      });
};

const fetchData = () => {
   // random api -> https://some-random-api.ml/endpoints
   const data = fetch('https://some-random-api.ml/animal/cat')
      .then((res) => res.json())
      .then((data) => {
         urlField.value = data.image;
         textField.value = data.fact;
      });
};
