<script>
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }

  // Optional: change header on scroll
  const header = document.querySelector(".floating-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      header.style.backdropFilter = "blur(25px)";
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      header.style.backdropFilter = "blur(15px)";
    }
  });
</script>