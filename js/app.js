const sectionPage = new fullpage("#fullpage", {
  autoScrolling: true,
  fitToSection: false,
  fitToSectionDelay: 300,
  easing: "easeInOutCubic",
  scrollingSpeed: 700,
  css3: true,
  easingcss3: "ease-out",
  loopBottom: false,
  navigation: true,
  menu: "#menu",
  anchors: ["home", "about", "services", "work", "clients", "contact"],

  showActiveTooltip: false,

  verticalCentered: true,
  afterLoad: function (origin, destination, direction, trigger) {
    let changeLogo = document.getElementById("logo");
    if (
      destination.anchor === "home" ||
      destination.anchor === "work" ||
      destination.anchor === "services" ||
      destination.anchor === "contact"
    ) {
      //pongo negro
      changeLogo.setAttribute("src", "./media/logo-redandblack.png");
    } else {
      //pongo rojo
      changeLogo.setAttribute("src", "./media/logo-white.png");
    }
  },
});

