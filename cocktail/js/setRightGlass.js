function setRightGlass(a) {
		$('#question').widowFix();
	if (a == 0) {
		$('#fluteIMG').click(function () {
			question_count++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;			
			switchSequence();
		});
		$('#aztecaIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#rocksIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#catalinaIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 1) {
		$('#fluteIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#aztecaIMG').click(function () {
			question_count++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;			
			switchSequence();
		});
		$('#rocksIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#catalinaIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 2) {
		$('#fluteIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#aztecaIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#rocksIMG').click(function () {
			question_count++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;			
			switchSequence();
		});
		$('#catalinaIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 3) {
		$('#fluteIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#aztecaIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#rocksIMG').click(function () {
			swal({
		title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#catalinaIMG').click(function () {
			question_count++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			switchSequence();
		});
	}
}