function copyCode(button) {
    const container = button.closest(".ca-code");
    const text = container.querySelector(".code-text").textContent;
    const tooltip = button.querySelector(".tooltip");

    navigator.clipboard.writeText(text).then(() => {
        tooltip.classList.add("show");
        setTimeout(() => {
            tooltip.classList.remove("show");
        }, 1500);
    });
}

const menuBtn = document.getElementById("menu-toggle");
const submenu = document.getElementById("submenu");
const closeBtn = document.getElementById("menu-close");

// Toggle submenu
menuBtn.addEventListener("click", () => {
    submenu.classList.add("active");
});

// Close when clicking close icon
closeBtn.addEventListener("click", () => {
    submenu.classList.remove("active");
});

// Close when clicking outside submenu content
submenu.addEventListener("click", (e) => {
    if (e.target === submenu) {
        submenu.classList.remove("active");
    }
});
