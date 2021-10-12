const containerTabella = document.getElementById("container-tabella");
const row = document.createElement("div");
row.classList.add("row", "my-row-cols-7");
containerTabella.append(row);
for (i = 1; i <= 100; i++) {
    const myBox = document.createElement("div");
    myBox.classList.add("ratio", "ratio-1x1", "cella-normale");
    myBox.textContent = i;
    row.append(myBox);

    const multiploDi3 = i % 3 === 0;
    const multiploDi5 = i % 5 === 0;

    if (multiploDi3) {
        myBox.textContent = "fizz";
        myBox.classList.add("multiplo3");
    }
    if (multiploDi5) {
        myBox.classList.add("multiplo5");
        myBox.textContent = "buzz";
    }
    if (multiploDi3 && multiploDi5) {
        myBox.classList.add("multiplo3-5");
        myBox.textContent = "fizzbuzz";

    }
};
