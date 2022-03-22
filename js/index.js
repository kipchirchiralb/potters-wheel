let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
let main = document.querySelector("main");
projects.classList.add("hide");

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    let target = e.target.textContent.toLowerCase();
    if (target === "home") {
      home.classList.remove("hide");
      home.classList.remove("slideout");
      home.classList.add("slidein");
      projects.classList.add("slideout");
      setTimeout(() => {
        projects.classList.add("hide");
        main.style.height = "75vh";
      }, 1000);
    } else if (target === "projects") {
      home.classList.remove("slidein");
      home.classList.add("slideout");
      projects.classList.remove("hide");
      // console.log(projects.clientHeight);
      projects.classList.remove("slideout");
      projects.classList.add("slidein");

      main.style.height = "800px";
      setTimeout(() => {
        home.classList.add("hide");
        console.log(e.target.clientHeight);
      }, 1000);
    } else {
      alert("no such element");
    }
  })
);
