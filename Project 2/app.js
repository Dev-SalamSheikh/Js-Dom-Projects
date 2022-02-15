// Onload Funtion Handler

window.onload = () => {
    main()
}

function main(){
    const body = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function () {
        const bgColor = generateHEXColor();
        body.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
}
// Create Generate HexaDecimal Color Function

function generateHEXColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


// Collect All The Neccesary Referances


// Click Event Handler