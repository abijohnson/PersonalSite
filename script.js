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
    }
  }
  checkWidth();
  $(window).resize(checkWidth);
});
