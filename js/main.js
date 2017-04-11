var digitalInterval = setInterval(function(){ digitalClock() }, 1000);

function digitalClock() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("digitalClock").innerHTML = time;
}

digitalClock();

	var hourHand = document.getElementById("hourHand");
	var minuteHand = document.getElementById("minuteHand");
	var secondHand = document.getElementById("secondHand")

function analogClock() {
	var date = new Date();
	var hour = date.getHours() % 12;
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.5 * minute);
	var minuteDeg = (minute * 6);
	var secondDeg = second * 6;

	hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
	minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
	secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';


	setTimeout(analogClock, 1000);
}

analogClock();

