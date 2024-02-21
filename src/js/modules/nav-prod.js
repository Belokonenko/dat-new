export default function navProd() {
    const navProd = document.querySelector('.nav-prod');

    if (navProd) {
        const btnMenu = navProd.querySelector('.nav-prod__btn-menu');

        btnMenu.addEventListener('click', () => {
            navProd.classList.toggle('nav-prod_active');
        });

    }
}
