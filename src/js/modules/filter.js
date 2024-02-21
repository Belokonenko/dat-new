export default function filter() {
    const filter = document.querySelector("filter");
    const btnClose = document.querySelector("filter__btn");

    if (btnClose) {
        addEventListener("click", () => {});

        filter.classList.toggle("filter--active");
    }
}
