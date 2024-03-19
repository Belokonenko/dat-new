export default function customSelect() {
    var select = document.getElementById("mySelect");
    var selectStyled = document.querySelector(".select-styled");
    var selectOptions = document.querySelector(".select-options");

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
}
