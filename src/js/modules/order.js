export default function order() {
    const dropdownPanelOrder = document.querySelector(".dropdown-panel__order");

    if (dropdownPanelOrder) {
        console.log(dropdownPanelOrder);

        const btnArr = dropdownPanelOrder.querySelector(
            ".dropdown-panel__btn-arr"
        );
        console.log(btnArr);

        btnArr.addEventListener("click", () => {
            console.log("click");
            dropdownPanelOrder.classList.toggle(
                "order_active"
            );
        });
    }
}
