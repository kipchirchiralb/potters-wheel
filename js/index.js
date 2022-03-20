let home = document.querySelector(".home");
let projects = document.querySelector(".projects");
projects.classList.add("hide");

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    let target = e.target.textContent.toLowerCase();
    // console.log(target);
    // if (target === "home") {
    //   home.style.display = "flex";
    //   projects.style.display = "none";
    // } else if (target === "projects") {
    //   home.style.display = "none";
    //   projects.style.display = "grid";
    // } else {
    //   alert("no such element");
    // }
    if (target === "home") {
      let classes = [...projects.classList];
      console.log(classes);
      home.classList.remove("hide");
      home.classList.remove("slideout");
      home.classList.add("slidein");
      projects.classList.add("slideout");
      //   if(!projects.classList.contains('hide')){
      //   } fix bug- avoid multiple addition of class hide
      setTimeout(() => projects.classList.add("hide"), 2000);
    } else if (target === "projects") {
      let classes = [...projects.classList];
      console.log(classes);

      home.classList.remove("slidein");
      home.classList.add("slideout");
      projects.classList.remove("hide");
      projects.classList.remove("slideout");
      projects.classList.add("slidein");
      setTimeout(() => home.classList.add("hide"), 2000);
    } else {
      alert("no such element");
    }
  })
);

// console.log(projects.classList.contains("projects"));
