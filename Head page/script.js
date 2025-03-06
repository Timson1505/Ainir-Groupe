document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownMenu = document.querySelector(".dropdown");

    dropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
            dropdownMenu.classList.remove("active");
        }
    });
});

/* ==== Move Up Sidbar ===== */
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const footer = document.querySelector(".footer");
    const content = document.querySelector(".content");

    window.addEventListener("scroll", () => {
        const sidebarRect = sidebar.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        // Check if the footer is in view
        if (footerRect.top < window.innerHeight) {
            // Calculate how much to move the sidebar up
            const offset = window.innerHeight - footerRect.top;
            sidebar.style.top = `-${offset}px`;
        } else {
            // Reset the sidebar position if the footer is not in view
            sidebar.style.top = "70px";
        }
    });
});

/* ===== Мобильная Версия ===== */

