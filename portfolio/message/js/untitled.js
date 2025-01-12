var fullGlass = '<img class="scoreboard_glasses" src="http://i.imgur.com/mA0nB2z.png">';
var missclick = false;
var score = 0;
var bh, bw, background, hotspots;
var clickedBool = false;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var scored_hits = [];
var clickHandler, index = 1;
$(document).on('tap', '.hit', function () {
		clickedBool = true;
	if (scored_hits.indexOf($(this).attr('id')) == -1 && (missclick == false)) {
		$("#" + this.getAttribute("id")).css("animation", "border .25s ease 1 forwards");
		$('#bottle' + index).css('opacity', '1');
		score++;
		$(".score").text(score + " of " + hotspots.length + " found");
		index++;
		setTimeout(function () {
			clickedBool = false;
		}, 300);
		scored_hits.push($(this).attr('id'));
		$(this).css('z-index', '-1');
	}
})
$(document).on('tap', '#body', function (event) {
	if (clickedBool == false) {
		missclick = true;
		$(".miss").css("width", circleWidth + "px");
		$(".miss").css("height", circleHeight + "px");
		$(".miss").css("left", event.pageX - circleWidth / 2);
		$(".miss").css("top", event.pageY - headerSize - circleHeight / 2);
		$(".miss").css("animation", "unborder .4s ease 1 forwards");
		setTimeout(function () {
			$(".miss").css("animation", "");
			$(".miss").css("left", 0);
			$(".miss").css("top", 0);
			missclick = false;
		}, 250);
	}
});
$(window).on("orientationchange", function () {
	location.reload();
});

function updateData(background) {
	background = getBackgroundSize(document.getElementById('body')); //or getElementsByTagName('body')[0]
	$(".debug").css("display", "none");
	bh = background.width;
	bw = background.height;
	hotspots = [
		{
			top: bh * .22
			, left: bw * .24
	}
		, {
			top: bh * .43
			, left: bw * .31
	}
		, {
			top: bh * .415
			, left: bw * .485
	}
		, {
			top: bh * .34
			, left: bw * 1.485
	}
		, {
			top: bh * .25
			, left: bw * 1.475
	}
];
	$(".score").html("0 of " + hotspots.length + " found");
	$('#body').css('background-size', 'cover');
}
setTimeout(function () {
	for (var i = 0; i < hotspots.length; i++) {
		$("#container").prepend('<div class="hit" id="hit' + i + '"/>');
		$("#hit" + i).css("top", hotspots[i].top + "px");
		$("#hit" + i).css("left", hotspots[i].left + "px");
		$("#hit" + i).css("width", circleWidth * 1.2 + "px");
		$("#hit" + i).css("height", circleWidth * 1.2 + "px");
	};
}, 1250);
window.onload = window.onresize = updateData;
h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
document.getElementById("container").style.width = w;
document.getElementById("body").style.width = w;
document.getElementById("container").style.height = h;
document.getElementById("body").style.height = h;
document.getElementsByTagName('header')[0].style.width = w;
var time = 60;
var circleWidth = w / 25;
var circleHeight = w / 25;
$("body").attr("width", w);
$("body").attr("height", h);
$("#body").css("height", h);
(function setupContainer() {
	$("#container").prepend('<canvas id="mycanvas" style="border: 1px solid #ccc"> Canvas element not supported	<br/> </canvas>');
})();
(function alignCanvas() {
	$("#body").attr("height", w + "px");
	$("#body").attr("width", w + "px");
	$("#mycanvas").attr("height", h + "px");
	$("#mycanvas").attr("width", h + "px");
})();
var touchzone = document.getElementById("body");
var sec = 0;
function pad(val) {
	return val > 9 ? val : "0" + val;
}
var timer = setInterval(function () {
	document.getElementsByClassName("time")[0].innerHTML = pad(parseInt(sec / 60, 10)) + ":" + pad(++sec % 60);
}, 1000);
//stop pinch to zoom
document.documentElement.addEventListener('touchstart', function (event) {
	if (event.touches.length > 1) {
		event.preventDefault();
	}
}, false);
//stop double tap to zoom
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
	var now = (new Date()).getTime();
	if (now - lastTouchEnd <= 300) {
		event.preventDefault();
	}
	lastTouchEnd = now;
}, false);
document.ontouchmove = function (e) {
	e.stopPropagation();
	e.stopImmediatePropagation();
}
var $scoreboard = $(".score");
setInterval(function () {
	$scoreboard.text(score + " of 5 found");
}, 50);