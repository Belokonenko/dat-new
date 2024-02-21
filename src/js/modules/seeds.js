export default function seeds() {
    const blockSeeds = document.querySelector(".seeds");

    if (blockSeeds) {
        const btn = blockSeeds.querySelector(".seeds__btn");
        const textHidden = blockSeeds.querySelector(".seeds__text-hidden");

        btn.addEventListener("click", () => {
            console.log("clic hidden text");
            textHidden.classList.add("seeds__text--active");
            btn.style.display = "none";
        });
    }
}
