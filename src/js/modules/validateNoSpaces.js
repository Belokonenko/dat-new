export default function validateNoSpaces() {
    console.log("validateNoSpaces");
    const nameInput = document.getElementById("name");
    const nameErrorMessage = document.getElementById("name_message_err");

    nameInput.addEventListener("input", () => {
        const name = nameInput.value.trim();
        
        if (name.includes(" ")) {
            nameErrorMessage.textContent = "Name cannot contain spaces";
            nameInput.classList.add("error");
        } else {
            nameErrorMessage.textContent = "";
            nameInput.classList.remove("error");
        }
    });
}
