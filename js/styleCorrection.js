//$(window).on('load',function(){
//  $('#footer-above').css({'position':'absolute','top':'15%'});
//  $('#footer-below').css({'position':'absolute','top':'40%'});
//})

$(document).ready(function () {
  $('#about').children().css('visibility', 'visible');
  //  $('#about').children().css('visibility', 'visible');
  $('#about').children().css('display', 'block');
  $('#iframes').css('visibility', 'visible');
  $('#iframes').children().css('visibility', 'visible');
  $('.me').css('visibility', 'visible');
  $('.me').children().css('visibility', 'visible');
})


/*
var change = 0;
setInterval(function () {
  console.log('logging from fn');
  change = Math.round(Math.random() * 9);
  if (change > 7) {
    $('html').css('background-color', 'yellow'); //bisque
    $('*').css('border', '.5em solid bisque')
    setTimeout(function () {
      $('html').css('background-color', 'antiquewhite');
      $('*').css('border', '.5em solid black')
    }, 250);
  }
}, 1000);
//1275
*/
/*
var aboutPadRight = 1;
setInterval(function () {
  if(aboutPadRight < 90){
    aboutPadRight+=4;
     $('#about').css('padding-right', aboutPadRight + '%');   
  }
//  else{
//    $('#about').css('background-color','azure');
//        $('#about').css('color','burlywood');
//    setTimeout(function(){
//          $('#about').css('background-color','burlywood');
//       $('#about').css('color','azure');
//    },1250);
//    return;
//  }
}, 5);
*/
/*

var rightPlace = 7;
setInterval(function () {
  //  $('#iframeLeft').css('z-index', '2');
  $('#iframeLeft').css('top', '24%');
  setTimeout(function () {
    $('#iframeLeft').css('z-index', '0');
    $('#iframeLeft').css('top', '20.5%');
    $('#iframeRight').css('top', rightPlace + '%');
  }, 120);
  if (rightPlace < 14) rightPlace += 7;
  else {
    rightPlace = 7;
  }
}, 10000);
*/