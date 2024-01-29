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

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
