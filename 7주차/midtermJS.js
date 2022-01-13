function calcDate(birth, addDate) {
	let now = new Date();
	let result = new Date(birth);
	result.setDate(birth.getDate() + addDate - 1);
	let resultDay = result.getFullYear() + "년 " + (result.getMonth() + 1) + "월 " + result.getDate() + "일 ";

	return resultDay;
}

var now = new Date();
var birth = new Date(1999, 6, 31);
var passedDay = Math.ceil( (now.getTime() - birth.getTime()) / (24*60*60*1000) );
var hundred = 100;

document.write("태어난 지<br><strong id='title'>" + passedDay + "일</strong><br><br>");
document.write("<table><tbody><tr><td><strong id='content'>" + hundred + "일 후</strong></td><td id='date'>" + calcDate(birth, hundred)+ "</td></tr>");
document.write("<tr><td><strong id='content'>" + passedDay + "일 후</strong></td><td id='date'>" + calcDate(birth, passedDay) + "</td></tr></tbody></table>");	