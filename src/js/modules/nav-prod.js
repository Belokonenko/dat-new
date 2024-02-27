export default function navProd() {
    const navProd = document.querySelector(".nav-prod");

    if (navProd) {
        const btnMenu = navProd.querySelector(".nav-prod__btn-menu");
        const btn = navProd.querySelectorAll(".nav-prod__btn");
        btnMenu.addEventListener("click", () => {
            navProd.classList.toggle("nav-prod_active");
        });

        btn.addEventListener("click", () => {
            navProd.classList.remove("nav-prod_active");
        });
    }
}
