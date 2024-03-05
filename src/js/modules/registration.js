export default function registration() {
    // function validateForm() {
        var password = document.querySelector('input[type="password"]').value;
        var confirmPassword = document.querySelectorAll(
            'input[type="password"]'
        )[1].value;

        if (password !== confirmPassword) {
            document.getElementById("error-message").textContent =
                "Passwords do not match!";
            return false;
        }

        return true;
    // }
}
