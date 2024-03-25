export default function modal() {
  const btnLogin = document.querySelector('.login__enter');
  const modal = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.modal__btn-close');

  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      console.log(btnLogin);
      modal.showModal();
    });

    closeModalButton.addEventListener('click', () => {
      modal.close();
    });
  }
}

