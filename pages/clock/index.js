function init() {
	Util.init();


	// const { width, height } = canvas;
	// console.log(width, height);

	// mspr: milliseconds per full rotation
	const hands = [
		{ length: 4, color: "#ff00ff", width: 1, mspr: 1000 },
		{ length: 10, color: "#ff00ff", width: 1, mspr: 60 * 1000 },
		{ length: 10, color: "#ff00ff", width: 2, mspr: 60 * 60 * 1000 },
		{ length: 6, color: "#ff00ff", width: 2, mspr: 12 * 60 * 60 * 1000 },
	];

	const markers = [
		{ interval: 15, length: 4, width: 1, color: "#ffff00" },
		{ interval: 5, length: 3, width: 1, color: "#ffff00" },
		{ interval: 1, length: 2, width: 1, color: "#ffff00" },
	];

	// Markers all with custom length, width, color
	// 1 Minute
	// 5 Minutes
	// 15 Minutes
	// Optional Numbers, [arbaic, roman]

	console.log(hands);

	drawBase(markers);
	drawHands(hands);

	setTimeout(() => {
		hands[0].color = "#00ff00";
	}, 2000);
}


function drawBase(markers) {

	const canvas = document.getElementById("base");
	const ctx = canvas.getContext("2d");
	const radius = canvas.width / 2;
	ctx.translate(radius, radius);

	for (let i = 0; i < 60; i++) {
		const angle = i * Math.PI / 30;
		ctx.rotate(angle);

		const marker = markers.find((obj) => Number.isInteger(i / obj.interval));
		ctx.strokeStyle = marker.color;
		ctx.lineWidth = marker.width;

		console.log(marker.interval);

		ctx.beginPath();
		ctx.moveTo(0, radius * 0.9);
		ctx.lineTo(0, radius * 0.9 - marker.length * 10);
		ctx.stroke();
		ctx.rotate(-angle);

		console.log(radius * 0.9 + marker.length);

	}
}


function drawHands(hands) {

	const canvas = document.getElementById("hands");
	const ctx = canvas.getContext("2d");
	const radius = canvas.width / 2;
	ctx.translate(radius, radius);

	setInterval(() => {

		ctx.translate(-radius, -radius);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.translate(radius, radius);

		const now = new Date;

		const miliseconds = now.getMilliseconds();
		const seconds = now.getSeconds() * 1000 + miliseconds;
		const minutes = now.getMinutes() * 60000 + seconds;
		const hours = now.getHours() * 3600000 + minutes;

		hands.forEach((hand, i) => {

			const time = [
				miliseconds,
				seconds,
				minutes,
				hours > 216000 ? hours - 216000 : hours,
			][i];

			const angle = time * Math.PI / (hand.mspr) * 2;

			ctx.beginPath();
			ctx.strokeStyle = hand.color;
			ctx.lineWidth = hand.width;

			ctx.rotate(angle);
			ctx.moveTo(0, 0);
			ctx.lineTo(0, hand.length * 10);
			ctx.stroke();
			ctx.rotate(-angle);
		});
	}, 10);
}