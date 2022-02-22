// Global Variables
let div = null;



// Onload Funtion Handler

window.onload = () => {
    main()
}

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');
    const btn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    btn.addEventListener('click', function () {
        const color = generateColorDecimal();
        const hex = generateHEXColor(color);
        const rgb = generateColorRGB(color); 

        root.style.backgroundColor = hex;
        output.value = hex.substring(1);
        output2.value = rgb;
    });

    copyBtn.addEventListener('click', function(){
        if(div !== null){
            div.remove();
            div = null;
        }
        window.navigator.clipboard.writeText(`#${output.value}`);
        
        if(isValidHex(output.value)){
            generateToastMsg(`#${output.value} Copied`);
        }else{
            alert('Invalid Color Code');
        }
    })

    output.addEventListener('keyup', function (e){
       const color = e.target.value;
        if(color){
            output.value = color.toUpperCase();
            if(isValidHex(color)){
                root.style.backgroundColor = `#${color}`;
            }
        }
    });

}
// Create Generate HexaDecimal Color Function


// Function 1 - Generate three random decimal number for red , green, blue & Return an Object 

function generateColorDecimal() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return{
        red,
        green,
        blue
    }
}

// Function 2 - Generate Hex Color Code
function generateHEXColor({red, green, blue}) {
    // const {red, green, blue} = generateColorDecimal();

    const twoCode = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }

    return `#${twoCode(red)}${twoCode(green)}${twoCode(blue)}`.toUpperCase();
}

// Function 03 - Generate Rgb Color Code

function generateColorRGB ({red, green, blue}) {
    return `rgb(${red}, ${green}, ${blue})`;
}


// Create Toast Message Function

function generateToastMsg(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');
     
    div.addEventListener('animationend', function(){
        div.remove();
        div = null;
    });

    });


    document.body.appendChild(div);
}



//  Checking Valid Hex Color
/**
 * @param {string} color : ;
 */

function isValidHex(color){
    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// Collect All The Neccesary Referances


// Click Event Handler