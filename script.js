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
// Fotolar
function prev1() {
	let link1 = "images/dtm1.jpg";
	let link2 = "images/dtm2.jpg";
	let link3 = "images/dtm3.jpg";
	let link4 = "images/images/dtm4.jpg";

	let source = document.getElementsByClassName("foto-hover")[0].src;
	if(source===link1) document.getElementsByClassName("foto-hover")[0].src = link4;
	else if(source===link2) document.getElementsByClassName("foto-hover")[0].src = link1;
	else if(source===link3) document.getElementsByClassName("foto-hover")[0].src = link2;
	else if(source===link4) document.getElementsByClassName("foto-hover")[0].src = link3;	
}
function next1() {
	let link1 = "/images/dtm1.jpg";
	let link2 = "/images/dtm2.jpg";
	let link3 = "/images/dtm3.jpg";
	let link4 = "/images/dtm4.jpg";

	let source = document.getElementsByClassName("foto-hover")[0].src;
	if(source===link1) document.getElementsByClassName("foto-hover")[0].src = link2;
	else if(source===link2) document.getElementsByClassName("foto-hover")[0].src = link3;
	else if(source===link3) document.getElementsByClassName("foto-hover")[0].src = link4;
	else if(source===link4) document.getElementsByClassName("foto-hover")[0].src = link1;	
}


function prev2() {
	let link1 = "/images/dars1.jpg";
	let link2 = "/images/dars2.jpg";
	let link3 = "/images/dars3.jpg";
	let link4 = "/images/dars4.jpg";

	let source = document.getElementsByClassName("foto-hover")[1].src;
	if(source===link1) document.getElementsByClassName("foto-hover")[1].src = link4;
	else if(source===link2) document.getElementsByClassName("foto-hover")[1].src = link1;
	else if(source===link3) document.getElementsByClassName("foto-hover")[1].src = link2;
	else if(source===link4) document.getElementsByClassName("foto-hover")[1].src = link3;	
}
function next2() {
	let link1 = "/images/dars1.jpg";
	let link2 = "/images/dars2.jpg";
	let link3 = "/images/dars3.jpg";
	let link4 = "/images/dars4.jpg";

	let source = document.getElementsByClassName("foto-hover")[1].src;
	if(source===link1) document.getElementsByClassName("foto-hover")[1].src = link2;
	else if(source===link2) document.getElementsByClassName("foto-hover")[1].src = link3;
	else if(source===link3) document.getElementsByClassName("foto-hover")[1].src = link4;
	else if(source===link4) document.getElementsByClassName("foto-hover")[1].src = link1;	
}


function prev3() {
	let link1 = "/images/darsdan_tashqari1.jpg";
	let link2 = "/images/darsdan_tashqari2.jpg";
	let link3 = "/images/darsdan_tashqari3.jpg";
	let link4 = "/images/darsdan_tashqari4.jpg";

	let source = document.getElementsByClassName("foto-hover")[2].src;
	if(source===link1) document.getElementsByClassName("foto-hover")[2].src = link4;
	else if(source===link2) document.getElementsByClassName("foto-hover")[2].src = link1;
	else if(source===link3) document.getElementsByClassName("foto-hover")[2].src = link2;
	else if(source===link4) document.getElementsByClassName("foto-hover")[2].src = link3;	
}
function next3() {
	let link1 = "/images/darsdan_tashqari1.jpg";
	let link2 = "/images/darsdan_tashqari2.jpg";
	let link3 = "/images/darsdan_tashqari3.jpg";
	let link4 = "/images/darsdan_tashqari4.jpg";

	let source = document.getElementsByClassName("foto-hover")[2].src;
	if(source===link1) document.getElementsByClassName("foto-hover")[2].src = link2;
	else if(source===link2) document.getElementsByClassName("foto-hover")[2].src = link3;
	else if(source===link3) document.getElementsByClassName("foto-hover")[2].src = link4;
	else if(source===link4) document.getElementsByClassName("foto-hover")[2].src = link1;	
}

