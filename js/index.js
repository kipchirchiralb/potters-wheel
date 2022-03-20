let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
projects.classList.add("hide");

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    let target = e.target.textContent.toLowerCase();
    if (target === "home") {
      home.classList.remove("hide");
      home.classList.remove("slideout");
      home.classList.add("slidein");
      projects.classList.add("slideout");
    } else if (target === "projects") {
      home.classList.remove("slidein");
      home.classList.add("slideout");
      projects.classList.remove("hide");
      projects.classList.remove("slideout");
      projects.classList.add("slidein");
    } else {
      alert("no such element");
    }
  })
);
