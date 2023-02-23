const colorPicker = document.getElementById("color-picker");
const colorModeSelector = document.getElementById("color-mode-selector");

document.getElementById("get-color-btn").addEventListener("click", handleGetColorBtn);

function handleGetColorBtn() {
        let hex = colorPicker.value.slice(1);
        let mode = colorModeSelector.value.toLowerCase();
        let hexArr = [];
    
        fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
            .then(res => res.json())
            .then(data => {
                let colorArr = data.colors;
                colorArr.forEach((color) => {
                    hexArr.push(color.hex.value);
                })
                let colorAreas = document.querySelectorAll(".color-area");
                let colorHexNums = document.querySelectorAll(".color-hex-num");
                let i = 0;
        
                colorHexNums.forEach((num) => {
                    num.textContent = hexArr[0];
                    colorAreas[i].style.backgroundColor = hexArr[0];
                    i++;
                    hexArr.shift();
                })
            })
};