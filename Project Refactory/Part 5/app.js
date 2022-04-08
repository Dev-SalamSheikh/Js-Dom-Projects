
// Global Variables
let toastContainer = null;
const defaultColor = {
    red : 221,
    green : 222,
    blue : 238,
}


// Onload Handler 
window.onload = () => {
    main()
    updateColorCodeToDom(defaultColor)
}

// main or Boot function, this function will take care of getting all the DOM Reference

function main(){
    const genrateRandomcolorBtn = document.getElementById('generate-random-color');

    const colorModeHexInp = document.getElementById("input-hex");

    genrateRandomcolorBtn.addEventListener('click', function () {
        const color = generateColorDecimal();
        updateColorCodeToDom(color);
    });

    colorModeHexInp.addEventListener('keyup', 
    handleColorModeHexInp
    );

 
    const colorSliderRed = document.getElementById("color-slider-red");
    const colorSliderGreen = document.getElementById("color-slider-green");
    const colorSliderBlue = document.getElementById("color-slider-blue");
    const copyToClipboardBtn = document.getElementById('copy-to-clipboard');

    colorSliderRed.addEventListener('change', handleColorslider(colorSliderRed, colorSliderGreen, colorSliderBlue));

    colorSliderGreen.addEventListener('change', handleColorslider(colorSliderRed, colorSliderGreen, colorSliderBlue));

    colorSliderBlue.addEventListener('change', handleColorslider(colorSliderRed, colorSliderGreen, colorSliderBlue));

    copyToClipboardBtn.addEventListener('click', handleCopyToClipboard);

}

// DOM Functions

/**
 * Generate Dynamic DOM element to show a toast message
 * @param {string} msg 
 */

// Create Toast Message Function

function generateToastMsg(msg) {
    toastContainer = document.createElement('div');
    toastContainer.innerText = msg;
    toastContainer.className = 'toast-message toast-message-slide-in';

    toastContainer.addEventListener('click', function () {
        toastContainer.classList.remove('toast-message-slide-in');
        toastContainer.classList.add('toast-message-slide-out');
     
    toastContainer.addEventListener('animationend', function(){
        toastContainer.remove();
        toastContainer = null;
    });

    });


    document.body.appendChild(toastContainer);
}

    /**
     * find a checked element button from a list of radious button
     * @param {array} nodes
     * @return {string | null}
     */
    function getCheckedValueFromRadios (nodes){
        let checkedValue = null;
        for (let i = 0; i < nodes.length; i++) {
           if(nodes[i].checked){
               checkedValue = nodes[i].value;
               break;
           }
        }
        return checkedValue;
    }

/**
 * Update Dom element calculated Color Values
 * @param {object} color :;
 */

    function updateColorCodeToDom(color){

        const hexColor = generateHEXColor(color)
        const rgbColor = generateColorRGB(color);

        document.getElementById('color-display').style.backgroundColor = `#${hexColor}`;
        document.getElementById('input-hex').value = hexColor;
        document.getElementById('input-rgb').value = rgbColor
        document.getElementById('color-slider-red').value = color.red
        document.getElementById('color-slider-red-label').innerText = color.red
        document.getElementById('color-slider-green').value = color.green
        document.getElementById('color-slider-green-label').innerText = color.green
        document.getElementById('color-slider-blue').value = color.blue
        document.getElementById('color-slider-blue-label').innerText = color.blue;
    }





// Event Handlers

function handleColorModeHexInp (e){
    const hexColor = e.target.value;
     if(hexColor){
        this.value = hexColor.toUpperCase();
         if(isValidHex(hexColor)){
             const color = hexToDecimalColors(hexColor);
             updateColorCodeToDom(color)
         }
     }
 }


 function handleColorslider (colorSliderRed, colorSliderGreen, colorSliderBlue) {
    return function () {
        const color = {
            red : parseInt(colorSliderRed.value),
            green : parseInt(colorSliderGreen.value),
            blue : parseInt(colorSliderBlue.value)
        };
        updateColorCodeToDom(color);
    }
};

function handleCopyToClipboard(){
    const colorModeRadios = document.getElementsByName('color-mode');
    const mode = getCheckedValueFromRadios(colorModeRadios);
    if(mode === null){
        throw new Error('Invalid Radio Input');
    }

    if(toastContainer !== null){
        toastContainer.remove();
        toastContainer = null;
    }

    if(mode === 'hex'){
        const hexColor = document.getElementById('input-hex').value
       if(hexColor && isValidHex(hexColor)){
        navigator.clipboard.writeText(`#${hexColor}`);
        generateToastMsg(`#${hexColor} Copied...!`);
       }else{
           alert('Invalid Hex Color');
       }
    }else{
       const rgbColor = document.getElementById('input-rgb').value
       if(rgbColor){
        navigator.clipboard.writeText(rgbColor);
        generateToastMsg(`${rgbColor} Copied...!`);
       }else{
           alert('Invalid Rgb Color');
       }
    }
}


// Utilities Function



/**
 * Generate and Return an object of three color decimal values
 * @returns {object}
 */
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

/**
 * take a color of three decimal value and return an hexa decimal color code
 * @param {object} color 
 * @returns {string}
 */
function generateHEXColor({red, green, blue}) {
    // const {red, green, blue} = generateColorDecimal();

    const twoCode = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }

    return `${twoCode(red)}${twoCode(green)}${twoCode(blue)}`.toUpperCase();
}

/**
 * take a color of three decimal value and return an RGB color code
 * @param {object} color 
 * @returns {strings}
 */

function generateColorRGB ({red, green, blue}) {
    return `rgb(${red}, ${green}, ${blue})`;
}




// Generate Decimal Number Function 
/**Convert Hex Color to Decimal Color Object
 * @param {string} hex : ;
 * @returns {object} ;
 */

    function hexToDecimalColors(hex){
        let red = parseInt(hex.slice(0, 2), 16)
        let green = parseInt(hex.slice(2, 4), 16)
        let blue = parseInt(hex.slice(4), 16)

        return {
            red,
            green,
            blue
        }
    }

    rgbtoDecimal('FFFFFF');


/**Validate Hex Color Code
 * @param {string} color : ;
 * @returns {boolean};
 */

 function isValidHex(color){
    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}
