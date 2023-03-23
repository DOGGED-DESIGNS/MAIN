$(document).ready(() => {
  const triggerz = () => {
    const onl = document.querySelector(".onl");

    const elz = document.getElementById("aboutz");

    onl.classList.add("miss");

    elz.style.display = "block";
  };

  const mission = () => {
    const mission_links = document.querySelectorAll(".mission");

    const rem = document.querySelectorAll(".rem");

    mission_links.forEach((liz) => {
      liz.addEventListener("click", (e) => {
        e.preventDefault();

        mission_links.forEach((li) => {
          li.classList.remove("miss");
        });
        e.currentTarget.classList.add("miss");
        const show = e.currentTarget.dataset.id;
        rem.forEach((re) => {
          re.style.display = "none";
        });
        document.getElementById(show).style.display = "block";
      });
    });
  };
  const gettingValue = () => {
    const progress = document.querySelectorAll(".progressz");

    progress.forEach((e) => {
      let data = e.dataset.id;

      const inputz = document.getElementById(`${data}`);

      const valz = inputz.value;

      const selector = document.querySelector(`.selector.${data}`);
      const selectBtn = document.querySelector(`.selectBtn.${data}`);
      const smallbox = document.querySelector(`.smallbox.${data}`);
      const progressbar = document.querySelector(`.progressbar.${data}`);

      selector.style.left = `${valz}%`;
      selectBtn.style.right = `${valz}%`;
      smallbox.innerHTML = `${valz}%`;
      progressbar.style.width = `${valz}%`;
    });
  };

  const slideMover = () => {
    const progress = document.querySelectorAll(".progressz");

    progress.forEach((e) => {
      let data = e.dataset.id;

      console.log();

      const inputz = document.getElementById(`${data}`);

      console.log(inputz.value);
      inputz.oninput = (e) => {
        const val = e.currentTarget.value;
        const selector = document.querySelector(`.selector.${data}`);
        const selectBtn = document.querySelector(`.selectBtn.${data}`);
        const smallbox = document.querySelector(`.smallbox.${data}`);
        const progressbar = document.querySelector(`.progressbar.${data}`);

        selector.style.left = `${val}%`;
        selectBtn.style.right = `${val}%`;
        smallbox.innerHTML = `${val}%`;
        progressbar.style.width = `${val}%`;
      };
    });
  };

  const navFunct = () => {
    const link = document.querySelectorAll(".nav-link");

    link.forEach((li) => {
      li.addEventListener("click", (e) => {
        // e.preventDefault();

        link.forEach((liz) => {
          liz.classList.remove("activez");
        });

        e.currentTarget.classList.add("activez");
      });
    });
  };

  // owl carousel

  const owlForindex = () => {
    $(".testimonial .container .owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        544: {
          items: 2,
        },
      },
    });
  };

  const owlForabout = () => {
    $(".ourteam .owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        544: {
          items: 2,
        },
      },
    });
  };

  const owlFordetailz = () => {
    $(".detailz .container .owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        544: {
          items: 1,
        },
      },
    });
  };

  gettingValue();

  owlFordetailz();

  owlForabout();
  owlForindex();

  navFunct();

  slideMover();
  mission();
  triggerz();
});
