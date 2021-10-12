const containerTabella = document.getElementById("container-tabella");

for (let i = 1; i <= 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row", "m-2");
    containerTabella.append(row);

    for (let x = 1; x <= 7; x++) {
        const multiploDi3 = x % 3 === 0;
        const multiploDi5 = x % 5 === 0;
        const multiploDiEntrambi = multiploDi3 === multiploDi5;

        const cell = document.createElement("div");
        cell.classList.add("ratio", "ratio-1x1", "border");

        let bgColor = "";



        if (!multiploDi3 || !multiploDi5 || multiploDiEntrambi) {
            bgColor = "cella-normale";
        }

        if (multiploDi3) {
            bgColor = "multiplo3";
        }
        if (multiploDi5) {
            bgColor = "multiplo5";
        }
        if ((multiploDi3 && multiploDi5)) {
            bgColor = "multiplo3-5";
        }
        row.innerHTML += `<div class="col">
                            <div class="ratio ratio-1x1 border ${bgColor}">
                            <div></div>
                            </div>
                        </div>`;
    }
}