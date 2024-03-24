export default function login() {
  const btnLogin = document.querySelector('.login__enter');
  const modal = document.querySelector('.modal-login');
  const closeModalButton = document.getElementById('closeModalLogin');

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

