// show and hide mobile version navbar
var navLinks = document.getElementById("navLinks");
	
function showMenu(){
	navLinks.style.right = "0";
}

function hideMenu(){
	navLinks.style.right = "-200px"
}

var textbox = document.getElementById("send_email");
var arrowUp = document.getElementById("arrow-up")
var state = "inactive";
function sendEmail(){
	if(state === "active"){
		textbox.style.bottom = "-300px";
		arrowUp.style.transform = "rotate(0deg)";
		state = "inactive"		}
	else{
		textbox.style.bottom = "0px";
		arrowUp.style.transform = "rotate(180deg)";
		state = "active"
	}
}

function submitform(){
	var message = document.getElementById("send_email");
	var phone = document.getElementById("number");
	var name = document.getElementById("send_email");
	let data = { message, phone, name};

	fetch("/post/data/here", {
	  method: "POST",
	  headers: {'Content-Type': 'application/json'}, 
	  body: JSON.stringify(data)
	}).then(res => {
		  console.log("Request complete! response:", res);
	});
}

let dtm = [
	"images/dtm1.jpg",
	"images/dtm2.jpg",
	"images/dtm3.jpg",
	"images/dtm4.jpg"
];
let dars = [
	"images/dars1.jpg", 
	"images/dars2.jpg", 
	"images/dars3.jpg", 
	"images/dars4.jpg"
];
let darsdan_tashqari = [
	"images/darsdan_tashqari1.jpg", 
	"images/darsdan_tashqari2.jpg", 
	"images/darsdan_tashqari3.jpg", 
	"images/darsdan_tashqari4.jpg"
];

let index_dtm = 0;
let index_dars = 0;
let index_darsdan_tashqari = 0;

// Fotolar
function prev1() {
	if (index_dtm > 0) {
		index_dtm -= 1;
	} else {
		index_dtm = 3;
	}
	document.getElementsByClassName("foto-hover")[0].src = dtm[index_dtm];
}
function next1() {
	if (index_dtm < 3) {
		index_dtm += 1;
	} else {
		index_dtm = 0;
	}
	document.getElementsByClassName("foto-hover")[0].src = dtm[index_dtm];
}
//
function prev2() {
	if (index_dars > 0) {
		index_dars -= 1;
	} else if (index_dars === 0) {
		index_dars = 3;
	}
	document.getElementsByClassName("foto-hover")[1].src = dars[index_dars];
}
function next2() {
	if (index_dars < 3) {
		index_dars += 1;
	} else {
		index_dars = 0;
	}
	document.getElementsByClassName("foto-hover")[1].src = dars[index_dars];
}
//
function prev3() {
	if (index_darsdan_tashqari > 0) {
		index_darsdan_tashqari -= 1;
	} else if (index_darsdan_tashqari === 0) {
		index_darsdan_tashqari = 3;
	}
	document.getElementsByClassName("foto-hover")[2].src = darsdan_tashqari[index_darsdan_tashqari];
}
function next3() {
	if (index_darsdan_tashqari < 3) {
		index_darsdan_tashqari += 1;
	} else {
		index_darsdan_tashqari = 0;
	}
	document.getElementsByClassName("foto-hover")[2].src = darsdan_tashqari[index_darsdan_tashqari];	
}

