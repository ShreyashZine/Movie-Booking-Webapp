const screenBtn = document.getElementById("screen-btn");
const bookingBtn = document.getElementById("booking-btn");
const menuBtn = document.getElementById("menu-btn");
const screenManagement = document.getElementById("screen-management");
const bookingManagement = document.getElementById("booking-management");
const menuManagement = document.getElementById("menu-management");

screenBtn.addEventListener("click", () => {
    hideAll();
    screenManagement.style.display = "block";
});

bookingBtn.addEventListener("click", () => {
    hideAll();
    bookingManagement.style.display = "block";
});

menuBtn.addEventListener("click", () => {
    hideAll();
    menuManagement.style.display = "block";
});

function hideAll() {
    screenManagement.style.display = "none";
    bookingManagement.style.display = "none";
    menuManagement.style.display = "none";
}