const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
const sliderContainers = document.querySelectorAll(".sliders");
let initialColors;

$(document).ready(function () {
  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize <= 700) {
      document.getElementById("navbar-mobile").innerHTML =
        '<ol id="navbar-nav">' +
        '<li><a href="index.html" id="the-nav">Abi Johnson</a></li>' +
        '<li><a href="contact.html" id="the-nav">Contact</a></li>' +
        '<li><a href="about.html" id="the-nav">About</a></li>' +
        '<li><a href="resume.html" id="the-nav">Resume</a></li>' +
        "</ol>";

      var x = document.getElementById("navbar");
      x.style.display = "none";
    } else {
      var x = document.getElementById("resume-lang-list");
      if (x.style.display != null) {
        x.style.display = "block";
      }

      var y = document.getElementById("resume-tools-list");
      if (y.style.display != null) {
        y.style.display = "block";
      }

      var z = document.getElementById("resume-projects");
      if (z.style.display != null) {
        z.style.display = "block";
      }

      var a = document.getElementById("resume-experience");
      if (a.style.display != null) {
        a.style.display = "block";
      }

      var b = document.getElementById("resume-education");
      if (b.style.display != null) {
        b.style.display = "block";
      }
    }
  }
  checkWidth();
  $(window).resize(checkWidth);
});

function displayLangList() {
  var windowSize = $(window).width();
  if (windowSize <= 700) {
    var x = document.getElementById("resume-lang-list");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } else {
    var x = document.getElementById("resume-lang-list");
    x.style.display = "block";
  }
}

function displayToolsList() {
  var windowSize = $(window).width();
  if (windowSize <= 700) {
    var x = document.getElementById("resume-tools-list");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } else {
    var x = document.getElementById("resume-tools-list");
    x.style.display = "block";
  }
}

function displayProjects() {
  var windowSize = $(window).width();
  if (windowSize <= 700) {
    var x = document.getElementById("resume-projects");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } else {
    var x = document.getElementById("resume-projects");
    x.style.display = "block";
  }
}

function displayExperience() {
  var windowSize = $(window).width();
  if (windowSize <= 700) {
    var x = document.getElementById("resume-experience");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } else {
    var x = document.getElementById("resume-experience");
    x.style.display = "block";
  }
}

function displayEducation() {
  var windowSize = $(window).width();
  if (windowSize <= 700) {
    var x = document.getElementById("resume-education");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } else {
    var x = document.getElementById("resume-education");
    x.style.display = "block";
  }
}

sliders.forEach((slider) => {
  slider.addEventListener("input", hslControls);
});

colorDivs.forEach((div, index) => {
  div.addEventListener("change", () => {
    updateTextUI(index);
  });
});

function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function originalColors() {
  initialColors = ["#8fd0d3", "#000d1a", "#e9ffff", "#40a0a5"];

  document.body.style.backgroundColor = initialColors[0];
  navtext1.style.color = initialColors[2];
  //navtext2.style.color = "green";

  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const descText = div.children[1];
    const ogColor = initialColors[index];

    div.style.backgroundColor = ogColor;
    hexText.innerText = ogColor;

    checkTextContrast(ogColor, hexText);
    checkTextContrast(ogColor, descText);

    const color = chroma(ogColor);
    const sliders = div.querySelectorAll(".sliders input");
    const hue = sliders[0];
    const brightness = sliders[1];
    const saturation = sliders[2];

    colorizeSliders(color, hue, brightness, saturation);
  });
  setColors();
  resetInputs();
}

function randomColors() {
  initialColors = [];

  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const descText = div.children[1];
    const randomColor = generateHex();

    initialColors.push(chroma(randomColor).hex());

    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;

    checkTextContrast(randomColor, hexText);
    checkTextContrast(randomColor, descText);

    const color = chroma(randomColor);
    const sliders = div.querySelectorAll(".sliders input");
    const hue = sliders[0];
    const brightness = sliders[1];
    const saturation = sliders[2];

    colorizeSliders(color, hue, brightness, saturation);
  });

  setColors();
  resetInputs();
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}

function colorizeSliders(color, hue, brightness, saturation) {
  const noSat = color.set("hsl.s", 0);
  const fullSat = color.set("hsl.s", 1);
  const scaleSat = chroma.scale([noSat, color, fullSat]);
  //Scale Brightness
  const midBright = color.set("hsl.l", 0.5);
  const scaleBright = chroma.scale(["black", midBright, "white"]);

  //Update Input Colors
  saturation.style.backgroundImage = `linear-gradient(to right,${scaleSat(
    0
  )}, ${scaleSat(1)})`;
  brightness.style.backgroundImage = `linear-gradient(to right,${scaleBright(
    0
  )},${scaleBright(0.5)} ,${scaleBright(1)})`;
  hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`;
}

function hslControls(e) {
  const index =
    e.target.getAttribute("data-bright") ||
    e.target.getAttribute("data-sat") ||
    e.target.getAttribute("data-hue");

  let sliders = e.target.parentElement.querySelectorAll('input[type="range"]');
  const hue = sliders[0];
  const brightness = sliders[1];
  const saturation = sliders[2];

  const bgColor = initialColors[index];

  let color = chroma(bgColor)
    .set("hsl.s", saturation.value)
    .set("hsl.l", brightness.value)
    .set("hsl.h", hue.value);

  colorDivs[index].style.backgroundColor = color;

  setColors();

  colorizeSliders(color, hue, brightness, saturation);
}

//White Text!
const navtext1 = document.getElementById("nav-title");
const homeBox1 = document.getElementById("home-box-link1");
const homeBox2 = document.getElementById("home-box-link2");

const navBar = document.getElementById("navbar-nav");
const theNavBar = navBar.querySelectorAll("#nav-link");

function setColors() {
  //SET COLORS TO SITE ! (:
  //body color
  var bodyColor = colorDivs[0].style.backgroundColor;

  //black text
  var text1Color = colorDivs[1].style.backgroundColor;

  //white text
  var text2Color = colorDivs[2].style.backgroundColor;

  //accents
  var accentColor = colorDivs[3].style.backgroundColor;

  document.body.style.backgroundColor = bodyColor;

  //set text1
  document.body.style.color = text1Color;

  //set text2
  navtext1.style.color = text2Color;
  homeBox1.style.color = text2Color;
  homeBox1.style.outlineColor = text2Color;
  homeBox2.style.color = text2Color;
  homeBox2.style.outlineColor = text2Color;
  var i = theNavBar.length;
  while (i--) {
    theNavBar[i].style.color = text2Color;
  }

  //set accent
  var i = generateBtn.length;
  while (i--) {
    generateBtn[i].style.backgroundColor = accentColor;
  }
  //generateBtn.style.backgroundColor = accentColor;
}

function updateTextUI(index) {
  const activeDiv = colorDivs[index];
  const color = chroma(activeDiv.style.backgroundColor);
  const textHex = activeDiv.querySelector(".colors h2");
  const descHex = activeDiv.querySelector(".colors h3");
  const icons = activeDiv.querySelectorAll(".controls button");
  textHex.innerText = color.hex();

  checkTextContrast(color, textHex);
  checkTextContrast(color, descHex);
  for (icon of icons) {
    checkTextContrast(color, icon);
  }

  setColors();
}

function resetInputs() {
  const sliders = document.querySelectorAll(".sliders input");
  sliders.forEach((slider) => {
    if (slider.name === "hue") {
      const hueColor = initialColors[slider.getAttribute("data-hue")];
      const hueValue = chroma(hueColor).hsl()[0];
      slider.value = Math.floor(hueValue);
    }
    if (slider.name === "brightness") {
      const brightColor = initialColors[slider.getAttribute("data-bright")];
      const brightValue = chroma(brightColor).hsl()[2];
      slider.value = Math.floor(brightValue * 100) / 100;
    }
    if (slider.name === "saturation") {
      const satColor = initialColors[slider.getAttribute("data-sat")];
      const satValue = chroma(satColor).hsl()[1];
      slider.value = Math.floor(satValue * 100) / 100;
    }
  });
  setColors();
}

originalColors();
