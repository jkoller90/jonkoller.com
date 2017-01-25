//Written by Jon Koller, 2017. 
//Takes input from user on basic html form and either outputs voucher codes on the page or prompts the user
//to download a .csv file. 
var length, amount, charSet; //initial (input)
var charSet; //process (post-submission)
var charExclusions = []; //optional initial (input)
var toDownload; //optional process (post-submission)
var codeGenerated;
var displayCodeCheck = true;
var storedCodes = undefined;
var timedate = new Date();
var createdTime;

function formatDate(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

//downloads table of all codes
$("#downloadCodes").click(function (event) {
	$.ajax({
		type: "GET"
		, url: "downloadCodes.php"
		, dataType: "text"
		, success: function (response) {
			var blob = new Blob([response], {
				type: "text/csv"
			});
			saveAs(blob, "couponcodes.csv");
		}
	});
	event.preventDefault();
});

//add conditional for over 10 results? 
function charset(name) {
	var charsets = {
		numeric: "0123456789"
		, alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
		, alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	};
	return charsets[name];
}
$('html').keypress(function (e) {
	var key = e.which;
	if (key == 13) { // the enter key code
		processInput();
	}
});
//posts code
function postCodes(codeGenerated, i) {
	$.ajax({
		type: "post"
		, url: "postCodes.php"
		, data: "code=" + codeGenerated[i] + "&name=Unredeemed&email=N/a&redeemed=0000/00/00 00:00:00&createdTime=" + createdTime
		, success: function (data) {
			$("#info").html(data);
		}
	});
}
$("#submit").click(function (event) {
	processInput();
});

function clearInput() {
	$("#form-basic :input").each(function () {
		$(this).val('');
	})
}
//generates code
function processInput() {
	if (displayCodeCheck) {
		console.log(createdTime);
		//input 
		length = $("#length").val();
		amount = $("#amount").val();
		charSet = $("#charSet").val().toLowerCase();
		charExclusions.push($("#charExclusions").val());
		var inputCheck = false;
		if (length === '' || amount === '') {
			alert("Please enter values for length and amount.");
		}
		else {
			inputCheck = true;
		}
		if (inputCheck) {
			$("#showStoredData").css('visibility', 'visible');
			if (charExclusions[0] !== 0) {
				charSet = charset(charSet);
				charSet = charSet.split("");
				for (var i = 0; i < charExclusions[0].length; i++) {
					charSet.splice(charSet.indexOf(charExclusions[0][i]), 1);
				}
				charSet.join('');
			}
			else {
				charSet = charset(charSet);
			}
			if (amount > 10) {
				var toDownload = confirm('The limit of codes displayed on this page is 10. You entered 11 or greater and can download a .csv file with these codes provided. Is that okay?');
				if (toDownload) {
					var codeGenerated = voucher_codes.generate({
						length: length
						, count: amount
						, charset: charSet
					});
					var blob = new Blob([codeGenerated], {
						type: "text/csv"
					});
					saveAs(blob, "codefile.csv");
				}else {
					alert("Please re-enter a value under 10 for the amount.");
					return;
				}
			console.log(codeGenerated);
		}	else { // amount < 10 
			codeGenerated = voucher_codes.generate({
				length: length
				, count: amount
				, charset: charSet
			});

		//loops to complete async post request within closure of function call
		createdTime = formatDate(timedate);
		for (var i = 0; i < codeGenerated.length; i++) {
			postCodes(codeGenerated, i);
			console.log(i);
		}
	}
	}
	$("#reload").click(function (event) {
		location.reload();
	});
}