export default function customSelect() {
    const customSelects = document.querySelectorAll(".custom-select");

    if (customSelects) {
        customSelects.forEach((item) => {
            console.log(item);

            const select = item.querySelector(".mySelect");
            const selectStyled = item.querySelector(".select-styled");
            const selectOptions = item.querySelector(".select-options");

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
