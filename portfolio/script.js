/* ================= NAVBAR SCROLL ================= */
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section, .content");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (window.scrollY >= top && window.scrollY < bottom && id) {
      links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
});

/* ================= MOON PARALLAX ================= */
const moon = document.getElementById("moon");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  moon.style.transform = `translate(${x}px, ${y}px)`;
});

/* ================= MAGNETIC SOCIAL ICONS ================= */
document.querySelectorAll(".magnetic").forEach(icon => {
  icon.addEventListener("mousemove", (e) => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    icon.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translate(0,0)";
  });
});
