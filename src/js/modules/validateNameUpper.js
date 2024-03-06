export default function validateNameUpper() {
    console.log("validateNameUpper");
    const nameInput = document.getElementById("name");
    const nameErrorMessage = document.getElementById("name_message_err");

    nameInput.addEventListener("input", () => {
        const name = nameInput.value.trim();
        const properCaseRegex = /^[A-Z][a-z]*$/;

        if (!properCaseRegex.test(name)) {
            nameErrorMessage.textContent = "Name must be in proper case (First letter uppercase, rest lowercase)";
            nameInput.classList.add("error");
        } else {
            nameErrorMessage.textContent = "";
            nameInput.classList.remove("error");
        }
    });   
}
