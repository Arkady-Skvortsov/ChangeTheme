let ChangeButton = document.querySelector('.change-button-block');
let ChangeImg = document.querySelector('.change-img');

ChangeButton.addEventListener('click', () => {
   if(!document.documentElement.classList.contains('change-theme')) {
   	  document.documentElement.classList.add('change-theme');

      trans();

   	  ChangeButton.children[0].className = 'fas fa-moon';

   	  ChangeButton.children[0].classList.add('change-shadow');

   	  ChangeImg.classList.add('change-img-shadow');
   } else {
        document.documentElement.classList.remove('change-theme');

        trans();

   	  ChangeButton.children[0].className = 'fas fa-sun';

   	  ChangeButton.children[0].classList.remove('change-shadow');

   	  ChangeImg.classList.remove('change-img-shadow');
   }
});

let trans = () => {
    document.documentElement.classList.add('transition');

    setTimeout(() => {
       document.documentElement.classList.remove('transition');
    }, 900);
};