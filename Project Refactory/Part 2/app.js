
// Global Variables
let div = null;


// Onload Handler 
window.onload = () => {
    main()
}

// main or Boot function, this function will take care of getting all the DOM Reference

function main(){
    const genrateRandomcolorBtn = document.getElementById('generate-random-color');
    // const root = document.getElementById('root');
    // const output = document.getElementById('output');
    // const output2 = document.getElementById('output2');
    // const btn = document.getElementById('change-btn');
    // const copyBtn = document.getElementById('copy-btn');
    // const copyBtn2 = document.getElementById('copy-btn2');

    genrateRandomcolorBtn.addEventListener('click', function () {
        const color = generateColorDecimal();
        updateColorCodeToDom(color);

    });

    // copyBtn.addEventListener('click', function(){
    //     if(div !== null){
    //         div.remove();
    //         div = null;
    //     }
    //     window.navigator.clipboard.writeText(`#${output.value}`);
        
    //     if(isValidHex(output.value)){
    //         generateToastMsg(`#${output.value} Copied`);
    //     }else{
    //         alert('Invalid Color Code');
    //     }
    // })

    // copyBtn2.addEventListener('click', function(){
    //     if(div !== null){
    //         div.remove();
    //         div = null;
    //     }
    //     window.navigator.clipboard.writeText(`#${output2.value}`);
        
    //     if(isValidHex(output.value)){
    //         generateToastMsg(`${output2.value} Copied`);
    //     }else{
    //         alert('Invalid Color Code');
    //     }
    // })

    // output.addEventListener('keyup', function (e){
    //    const color = e.target.value;
    //     if(color){
    //         output.value = color.toUpperCase();
    //         if(isValidHex(color)){
    //             root.style.backgroundColor = `#${color}`;
    //         }
    //     }
    // });

}

// DOM Functions

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

/**
 * Update Dom element calculated Color Values
 * @param {object} color :;
 */

    function updateColorCodeToDom(color){

        const hexColor = generateHEXColor(color)
        const rgbColor = generateColorRGB(color);

        document.getElementById('color-display').style.backgroundColor = hexColor;
        document.getElementById('color-mode-hex').value = hexColor;
        document.getElementById('color-mode-rgb').value = rgbColor
        document.getElementById('color-slider-red').value = color.red
        document.getElementById('color-slider-red-label').innerText = color.red
        document.getElementById('color-slider-green').value = color.green
        document.getElementById('color-slider-green-label').innerText = color.green
        document.getElementById('color-slider-blue').value = color.blue
        document.getElementById('color-slider-blue-label').innerText = color.blue;

        

    
    }





// Event Handlers





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

    return `#${twoCode(red)}${twoCode(green)}${twoCode(blue)}`.toUpperCase();
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
