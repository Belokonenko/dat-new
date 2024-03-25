export default function modal() {
  
    const btnOpenModal = document.querySelector('.login__enter');
  const modal = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.modal__btn-close');

  if (btnOpenModal) {
    btnOpenModal.addEventListener('click', event => {
      const btnDate = event.target.getAttribute('data-info');
      console.log(btnDate);

      console.log(btnOpenModal);
      modal.showModal();
    });

    closeModalButton.addEventListener('click', () => {
      modal.close();
    });
  }
}
