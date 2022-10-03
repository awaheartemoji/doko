function init() {
	Util.init();

	const list = document.getElementById("bitlist");
	let bitAmount = Math.round(8 / 8) * 8;
	let signed = true;


	list.addEventListener("click", () => update(signed, bitAmount));
	generateBits(bitAmount);

	// Update on signed toggle
	document.getElementById("signed").addEventListener("change", (e) => {
		signed = e.target.checked
			? true
			: false;
		update(signed, bitAmount);
	});

	// Update on bitAmount change
	document.getElementById("bits").addEventListener("input", (e) => {
		bitAmount = Math.round(e.target.value / 8) * 8;
		generateBits(bitAmount);
	});
}

function update(signed, bitAmount) {
	console.log(signed);
	const list = document.getElementById("bitlist");
	const result = document.getElementById("result");

	bits = Array.from(list.querySelectorAll(".bitinput:checked"))
		.map(box => {
			return box.id === `bit${bitAmount - 1}` && signed
				? parseInt(-Math.abs(box.dataset.bit))
				: parseInt(box.dataset.bit);

		});
	bits.length > 0
		? bits = bits.reduce((total, num) => total + num)
		: bits = 0;

	result.textContent = bits;
}

function generateBits(bitAmount) {
	const list = document.getElementById("bitlist");
	list.innerHTML = "";
	for (let rowID = 0; rowID < bitAmount / 8; rowID++) {
		const row = [];
		for (let i = 0; i < 8; i++) {
			const id = (rowID * 8) + i;
			const databit = Math.pow(2, id);

			row.push(`<div>
            <input class="bitinput" type="checkbox" id="bit${id}" data-bit="${databit}">
            <label class="bitlabel" for="bit${id}">${id + 1}</label>
            </div>`);
		}
		list.innerHTML += `<div class="bitrow">${row.join("\n")}</div>`;
	}
}


// for (let i = 0; i < 8; i++) {
//     const input = document.createElement("input");
//     input.type = "checkbox";

//     const label = document.createElement("p")
//     label.textContent = id

//     const container = document.createElement("div");
//     container.appendChild(input);
//     container.appendChild(label);
//     container.dataset.bitid = id
//     container.classList += " bit"

//     id++;
//     row.appendChild(container);
// }

// table.appendChild(row);