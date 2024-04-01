export default function customSelect() {
    const customSelects = document.querySelectorAll(".custom-select");

    if (customSelects) {
        customSelects.forEach((item) => {
            console.log(item);

            const select = item.querySelector(".custom-select__select");
            const selectStyled = item.querySelector(".custom-select__over");
            const selectOptions = item.querySelector(".custom-select__options");

            selectStyled.addEventListener("click", function () {
                selectOptions.style.display =
                    selectOptions.style.display === "none" ? "block" : "none";
            });

            selectOptions.addEventListener("click", function (event) {
                if (event.target.tagName === "LI") {
                    select.value = event.target.getAttribute("data-value");
                    selectStyled.textContent = event.target.textContent;
                    selectOptions.style.display = "none";
                }
            });
        });
    }
}
