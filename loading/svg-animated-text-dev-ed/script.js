const pathList = document.querySelectorAll("#logo path");
const logo = document.querySelector("#logo");

let i = 1;
for (i = 1; i <= pathList.length; i++) {
    const path = pathList[i - 1];
    length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.animation = `line-animation 2s ease forwards ${0.3 * i}s`;
    path.style.strokeDashoffset = length;
    console.log(`letter ${i} is ${pathList[i - 1].getTotalLength()}`);
}

i += 4;

logo.style.animation = `fill 0.5s ease forwards ${0.3 * i}s`;
