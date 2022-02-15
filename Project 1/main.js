//  Steps One : Create a Onload Function

window.onload = () => {
    main();
}

function main(){
    const body = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click', function () {
        const rgbColor = generateRGBColor()
        body.style.backgroundColor = rgbColor
    })
}

// Step Two : Create Random RGB Color Generator Function 

function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}