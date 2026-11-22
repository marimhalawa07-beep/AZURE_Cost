const navbarHTML = `
  <nav class="navbar">
    <a href="index.html" class="logo">Azure Coast<span>.</span></a>

    <button
      class="menu-button"
      id="menu-button"
      aria-label="Toggle navigation menu"
      aria-expanded="false"
    >
      ☰
    </button>

    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" data-page="home">Home</a></li>
      <li><a href="about.html" data-page="about">About</a></li>
      <li><a href="chalets.html" data-page="chalets">Chalets</a></li>
      <li><a href="my-bookings.html" data-page="my-bookings">My Bookings</a></li>
    </ul>

    <div class="nav-buttons">
      <a href="login.html" class="login-link">Log In</a>
      <a href="register.html" class="register-button">Register</a>
    </div>
  </nav>
`;

const footerHTML = `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-about">
        <h2>Azure Coast<span>.</span></h2>
        <p>Your destination for peaceful coastal escapes and unforgettable memories.</p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="chalets.html">Chalets</a>
        <a href="my-bookings.html">My Bookings</a>
      </div>

      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: info@azurecoast.com</p>
        <p>Phone: +20 100 000 0000</p>
      </div>
    </div>

    <div class="copyright">
      <p>© 2026 Azure Coast. All rights reserved.</p>
    </div>
  </footer>
`;

const navbarPlaceholder = document.getElementById("navbar");
const footerPlaceholder = document.getElementById("footer");

if (navbarPlaceholder) {
  navbarPlaceholder.innerHTML = navbarHTML;
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHTML;
}

const currentPage = document.body.dataset.page;
const pageLinks = document.querySelectorAll("#nav-links a[data-page]");

pageLinks.forEach(function (link) {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
  }
});

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
}