"use strict";

(function () {
  window.addEventListener("load", init);

  function init() {
    startTyped();
    fetchSkills();
    fetchProjects();
    enableMobileNav();

    let text = id("home-text");
    text.addEventListener("mouseover", changeHoverHomeText);

    let theme = localStorage.getItem("theme");
    let mode = id("mode");
    if (theme) {
      document.body.classList.add(theme);
      mode.classList.remove("fa-moon");
      mode.classList.add("fa-sun");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      enableDarkMode();
    }
    mode.addEventListener("click", toggleMode);
  }

  function enableDarkMode() {
    document.body.classList.add("dark-theme");
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");
    localStorage.setItem("theme", "dark-theme");
    document.documentElement.setAttribute("data-color-scheme", "dark");
  }

  function enableMobileNav() {
    let hamburger = qs(".hamburger");
    let navMenu = qs(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    qsa(".nav-link").forEach((element) =>
      element.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }

  function fetchProjects() {
    fetch("./assets/projectsData.json")
      .then((resp) => resp.json())
      .then(populateProjects)
      .catch(console.error);
  }

  function populateProjects(projects) {
    let projectsContainer = id("projects-container");
    for (let i = 0; i < projects.length; i++) {
      let cardContainer = gen("div");
      cardContainer.classList.add("project-card-container");
      let card = gen("div");
      card.classList.add("project-card");

      let front = genFrontCard(projects[i]);
      let back = genBackCard(projects[i]);
      card.append(front, back);

      cardContainer.appendChild(card);
      projectsContainer.appendChild(cardContainer);
    }
  }

  function genFrontCard(project) {
    let front = gen("div");
    front.classList.add("project-front");

    let frontInfo = gen("div");
    frontInfo.classList.add("project-front-info");

    let name = gen("h3");
    name.innerHTML = project.name;
    let short = gen("p");
    short.innerHTML = project.short;

    let techUsed = gen("div");
    techUsed.classList.add("tech-container");

    let techList = project.techs;
    for (let i = 0; i < techList.length; i++) {
      let badge = gen("img");
      badge.src = techList[i].badge;
      badge.alt = techList[i].tech;
      techUsed.appendChild(badge);
    }
    frontInfo.append(name, short, techUsed);
    front.appendChild(frontInfo);
    return front;
  }

  function genBackCard(project) {
    let back = gen("div");
    back.classList.add("project-back");

    let backInfo = gen("div");
    backInfo.classList.add("project-back-info");

    let longContainer = gen("div");
    let longLabel = gen("h3");
    longLabel.innerHTML = "more info:";
    let long = gen("p");
    long.innerHTML = project.long;
    longContainer.append(longLabel, long);

    let externalContainer = gen("div");
    externalContainer.classList.add("social", "center");

    if (project.demo !== "") {
      let demo = gen("a");
      demo.href = project.demo;
      demo.target = "_blank";
      demo.rel = "noopener noreferrer";
      let eyeIcon = gen("i");
      eyeIcon.className = "fa-solid fa-eye fa-2xl";
      demo.appendChild(eyeIcon);
      externalContainer.appendChild(demo);
    }

    if (project.github !== "") {
      let github = gen("a");
      github.href = project.github;
      github.target = "_blank";
      github.rel = "noopener noreferrer";
      let githubIcon = gen("i");
      githubIcon.className = "fa-brands fa-github fa-2xl";
      github.appendChild(githubIcon);
      externalContainer.appendChild(github);
    }

    backInfo.append(longContainer, externalContainer);
    back.appendChild(backInfo);
    return back;
  }

  function fetchSkills() {
    fetch("./assets/skillsData.json")
      .then((resp) => resp.json())
      .then(populateSkills)
      .catch(console.error);
  }

  function populateSkills(techSkills) {
    for (let i = 0; i < techSkills.length; i++) {
      let query = "#" + techSkills[i].type + " .skills-container";
      let skillContainer = qs(query);
      let currSkills = techSkills[i].skills;
      for (let j = 0; j < currSkills.length; j++) {
        let skillCard = genSkillCard(currSkills[j]);
        skillContainer.appendChild(skillCard);
      }
    }
  }

  function genSkillCard(skill) {
    let skillCard = gen("div");
    skillCard.classList.add("skill-card");

    let iconContainer = gen("div");
    let icon = gen("i");
    icon.className = skill.iconClass;
    iconContainer.appendChild(icon);

    let skillName = gen("p");
    skillName.innerHTML = skill.name;

    skillCard.appendChild(iconContainer);
    skillCard.appendChild(skillName);

    return skillCard;
  }

  function toggleMode() {
    document.body.classList.toggle("dark-theme");

    let mode = id("mode");
    if (document.body.classList.contains("dark-theme")) {
      mode.classList.remove("fa-moon");
      mode.classList.add("fa-sun");
      localStorage.setItem("theme", "dark-theme");
      document.documentElement.setAttribute("data-color-scheme", "dark");
    } else {
      mode.classList.remove("fa-sun");
      mode.classList.add("fa-moon");
      localStorage.removeItem("theme", "dark-theme");
      document.documentElement.setAttribute("data-color-scheme", "light");
    }
  }

  function changeHoverHomeText() {
    let text = id("home-text");
    text.innerHTML = ">cd home";

    let newText = text.cloneNode(true);
    text.parentNode.replaceChild(newText, text);
  }

  function startTyped() {
    return new Typed("#typed", {
      strings: [
        "I'm a software engineer",
        "I'm a full stack developer",
        "I'm a lifelong learner.",
      ],
      typeSpeed: 45,
      backSpeed: 35,
      smartBackspace: true,
      loop: false,
    });
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Creates an new HTML element in the DOM and return it.
   * @param {string} tagName - HTML tag name.
   * @returns {element} - new element in the DOM.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
