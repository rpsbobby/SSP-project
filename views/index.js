const clickMe = document.getElementById('clickMe');
const inputModal = document.getElementById('inputModal');

clickMe.addEventListener('click', () => {
   inputModal.classList.remove('hide');
});
