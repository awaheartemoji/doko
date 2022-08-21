function init() {
    Util.backButton();

    const list = document.getElementById("bitlist");
    const bitAmount = 8;
    const signed = true;

    for (let rowID = 0; rowID < bitAmount / 8; rowID++) {
        const row = []
        for (let i = 0; i < 8; i++) {
            const id = (rowID * 8) + i
            const databit = (id === bitAmount - 1 && signed)
            ? -Math.abs(Math.pow(2, id))
            : Math.pow(2, id)

            row.push(`
            <input class="bitinput" type="checkbox" id="bit${id}" data-bit="${databit}">
            <label class="bitlabel" for="bit${id}">${id}</label>
            `)
        }
        list.innerHTML += `<div class="bitrow">${row.join("\n")}</div>`
    }

    list.addEventListener("click", update);
}

function update() {
    const list = document.getElementById("bitlist");
    const result = document.getElementById("result");

    bits = Array.from(list.querySelectorAll(".bitinput:checked"))
    .map(box => parseInt(box.dataset.bit))
    bits.length > 0
    ? bits = bits.reduce((total, num) => total +  num)
    : bits = 0

    result.textContent = bits
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