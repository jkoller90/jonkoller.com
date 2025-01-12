var resizeEvent = new Event('resize');
var portfolio = document.getElementById('portMenu');
var about = document.getElementById('aboutMenu');
var i, buttons, classGame, classWriting, classAbout;
var portFlag = false;

window.onresize = function(){ location.reload(); }
document.addEventListener("DOMContentLoaded", function (event) {
  //	swal("This site is in development; please be careful with resizing the page! Formatting is underway.");
  buttons = document.getElementsByClassName('button');
  classGame = document.getElementsByClassName('game');
  classAbout = document.getElementsByClassName('classAbout');
  for (i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function () {
      this.style.backgroundColor = "antiquewhite";
    }
    buttons[i].onmouseout = function () {
      this.style.backgroundColor = 'white';
    }
    buttons[i].onmousedown = function () {
      this.style.backgroundColor = "antiquewhite";
      if (this.id == 'aboutButton') {
        for (i = 0; i < classGame.length; i++) {
          classGame[i].style.display = 'none';
        }
        portfolio.style.display = 'none';
        about.style.display = 'inline';
        if (!portFlag) {
          portFlag = true;
          for (i = 0; i < classAbout.length; i++) {
            classAbout[i].style.display = 'block';
          }
//          portfolio.style.display = 'inline';
        } else {
          portFlag = false;
          for (i = 0; i < classAbout.length; i++) {
            classAbout[i].style.display = 'none';
          }
          about.style.display = 'none';
        }
      } else if (this.id == 'cvButton') {
        for (i = 0; i < classGame.length; i++) {
          classGame[i].style.display = 'none';
        }
        portfolio.style.display = 'none';
        swal('Under development!');
      } else if (this.id == 'portButton') {
        if (!portFlag) {
          portFlag = true;
          for (i = 0; i < classGame.length; i++) {
            classGame[i].style.display = 'block';
          }
          about.style.display = 'none';
          portfolio.style.display = 'inline';
        } else {
          portFlag = false;
          for (i = 0; i < classGame.length; i++) {
            classGame[i].style.display = 'none';
          }
          portfolio.style.display = 'none';
        }
      }
    }
  }
});
