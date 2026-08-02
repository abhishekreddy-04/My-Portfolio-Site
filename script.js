<script>

  /* DARK / LIGHT MODE */

  function toggleTheme() {

    document.body.classList.toggle("light");

    const button =
      document.querySelector(".theme-btn");

    if(document.body.classList.contains("light")) {

      button.textContent = "☀️";

    } else {

      button.textContent = "🌙";

    }

  }


  /* TYPING EFFECT */

  const roles = [

    "Software Testing Enthusiast",

    "IT Graduate",

    "Manual Testing Learner",

    "Technology Enthusiast"

  ];

  let roleIndex = 0;

  let charIndex = 0;

  let deleting = false;


  function typeEffect() {

    const element =
      document.getElementById("typing");

    const currentRole =
      roles[roleIndex];


    if(!deleting) {

      element.textContent =
        currentRole.substring(0, charIndex++);

      if(charIndex > currentRole.length) {

        deleting = true;

        setTimeout(typeEffect, 1200);

        return;

      }

    } else {

      element.textContent =
        currentRole.substring(0, charIndex--);

      if(charIndex < 0) {

        deleting = false;

        roleIndex =
          (roleIndex + 1) % roles.length;

      }

    }

    setTimeout(
      typeEffect,
      deleting ? 45 : 90
    );

  }

  typeEffect();


  /* SCROLL ANIMATION */

  const reveals =
    document.querySelectorAll(".reveal");


  function revealSections() {

    reveals.forEach(section => {

      const windowHeight =
        window.innerHeight;

      const sectionTop =
        section.getBoundingClientRect().top;

      if(sectionTop <
        windowHeight - 100) {

        section.classList.add("active");

      }

    });

  }

  window.addEventListener(
    "scroll",
    revealSections
  );

  revealSections();

</script>
