export default function validateName(nameId) {
    const nameInput = document.querySelector(`#${nameId}`);
    const nameErrorMessage = document.querySelector(`#${nameId}_message_err`);

    nameInput.addEventListener("input", () => {
        const name = nameInput.value.trim();
        if (name.length < 2 || name.length > 5) {
            nameErrorMessage.textContent =
                "Name must be between 2 and 50 characters";
            nameInput.classList.add("error");
        } else {
            nameErrorMessage.textContent = "";
            nameInput.classList.remove("error");
        }
    });
}
