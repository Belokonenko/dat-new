export default function maskPhone() {
    const phoneInput = document.getElementById("phone-input");

    phoneInput.addEventListener("input", () => {
        console.log('maskPhone')
        let value = phoneInput.value.replace(/\D/g, "");
        let formattedValue = "";

        if (/^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/.test(value)) {
            formattedValue = value;
        } else {
            // Format the input according to the pattern
            formattedValue = value.substring(0, 12).replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, "+380 ($1) $3-$4-$5");
        }

        phoneInput.value = formattedValue;
    });
}
