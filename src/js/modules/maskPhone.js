export default function maskPhone() {
    const phoneInput = document.getElementById("phone-input");

    phoneInput.addEventListener("input", () => {
        const value = phoneInput.value.replace(/\D/g, "").substring(0, 12);
        let formattedValue = "";

        if (value.length > 0) {
            formattedValue = "+";

            for (let i = 0; i < value.length; i++) {
                if (i === 3 || i === 5) {
                    formattedValue += " ";
                }
                formattedValue += value[i];
            }
        }

        phoneInput.value = formattedValue;
    });
}
