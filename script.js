$(document).ready(function () {
  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize <= 700) {
      document.getElementById("navbar").innerHTML =
        '<ol id="navbar-nav">' +
        '<li><a href="index.html">Abi Johnson</a></li>' +
        '<li><a href="contact.html">Contact</a></li>' +
        '<li><a href="about.html">About</a></li>' +
        '<li><a href="resume.html">Resume</a></li>' +
        "</ol>";
    } else {
      document.getElementById("navbar").innerHTML =
        '<a href="index.html" id="nav-title">Abi Johnson</a>' +
        '<ul id="navbar-nav">' +
        '<li><a href="contact.html">Contact</a></li>' +
        '<li><a href="about.html">About</a></li>' +
        '<li><a href="resume.html">Resume</a></li>' +
        "</ul>";

      var x = document.getElementById("resume-lang-list");
      x.style.display = "block";

      var y = document.getElementById("resume-tools-list");
      y.style.display = "block";

      var z = document.getElementById("resume-projects");
      z.style.display = "block";

      var a = document.getElementById("resume-experience");
      a.style.display = "block";

      var b = document.getElementById("resume-education");
      b.style.display = "block";
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
