document.addEventListener("DOMContentLoaded", () => {

  /** ==========================
   *  MOBILE MENU TOGGLE
   *  ========================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-right ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Toggle hamburger ↔ X icon
    menuToggle.textContent =
      menuToggle.textContent === "☰" ? "✖" : "☰";
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-right ul li a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });


  /** ==========================
   *  SCROLL ANIMATION
   *  ========================== */
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  });


  /** ==========================
   *  APPOINTMENT FORM HANDLER
   *  ========================== */
  const form = document.querySelector("#appointment-container form");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim(); 
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !phone || !date || !time) {
      formMessage.style.color = "red";
      formMessage.textContent = "⚠ Please fill in all required fields.";
      return;
    }

    // Simulated success response
    formMessage.style.color = "orange";
    formMessage.textContent = "✅ Appointment booked successfully! We will contact you soon.";

    form.reset();
  });

});