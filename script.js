
/* =========================================
   1. MOBILE NAVIGATION MENU
========================================= */

// Find the menu button and navigation links in HTML
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Run the code only if both elements exist
if (menuToggle && navLinks) {

  // Open or close the menu when the button is clicked
  menuToggle.addEventListener("click", () => {

    // Toggle the "active" CSS class
    const isOpen = navLinks.classList.toggle("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    // Update the button's accessible label
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close the menu when a navigation link is selected
  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    });

  });

  // Close the menu when the Escape key is pressed
  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }

  });
}


/* =========================================
   2. AUTOMATIC COPYRIGHT YEAR
========================================= */

// Find the year element in the footer
const currentYear = document.getElementById("current-year");

// Display the current year automatically
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
