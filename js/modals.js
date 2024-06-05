const authModal = document.querySelector('.modal__auth');
const loginModal = document.querySelector('.modal__login');
const createPostModal = document.querySelector('.modal__create');

const logInButton = document.querySelector('.LogInButton');
const signUpLinkButton = document.querySelector('.modal__auth_link')
const signUpButton = document.querySelector('.modal__reg_link')
const createPostButton = document.querySelector('.add__newpost_button');

const createPostCancelButton = document.querySelector('.modal__button_cancler');





function openModal(element){
  element.classList.add("hidden-modal");
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModal(element){
  element.classList.remove("hidden-modal");
  document.removeEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(evt){
  if(evt.key === "Escape"){
    const openPopups = document.querySelectorAll('.hidden-modal');
    openPopups.forEach(popup => {
      closeModal(popup);
    })
  }
}




logInButton.addEventListener('click', () =>{
  openModal(loginModal);
});

createPostButton.addEventListener('click', () =>{
  openModal(createPostModal);
});

signUpButton.addEventListener('click', () =>{
  closeModal(loginModal);
  openModal(authModal);
});

signUpLinkButton.addEventListener('click', () =>{
  closeModal(authModal);
  openModal(loginModal);
});

createPostCancelButton.addEventListener('click', () =>{
  closeModal(createPostModal);
});



document.addEventListener('DOMContentLoaded', (event) => {
  const dropbox = document.getElementById('dropbox');
  const inputFile = document.getElementById('input-file');
  const browseLink = document.getElementById('browse-link');

  // Открытие проводника при клике на "browse"
  browseLink.addEventListener('click', (e) => {
      e.preventDefault();
      inputFile.click();
  });

  // Обработка события выбора файла через проводник
  inputFile.addEventListener('change', (e) => {
      handleFiles(inputFile.files);
  });

  // Обработка события перетаскивания файлов
  dropbox.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropbox.classList.add('dragover');
  });

  dropbox.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dropbox.classList.remove('dragover');
  });

  dropbox.addEventListener('drop', (e) => {
      e.preventDefault();
      dropbox.classList.remove('dragover');
      const files = e.dataTransfer.files;
      handleFiles(files);
  });

  // Функция обработки файлов
  function handleFiles(files) {
      for (const file of files) {
          if (file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = (e) => {
                  // Очищаем содержимое dropbox
                  dropbox.innerHTML = '';
                  // Создаем и добавляем новое изображение
                  const img = document.createElement('img');
                  img.src = e.target.result;
                  img.alt = file.name;
                  img.classList.add('uploaded-image');
                  dropbox.appendChild(img);
              };
              break; // Загружаем только первый файл
          }
      }
  }
});
