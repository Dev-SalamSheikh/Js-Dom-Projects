// Global Variables
let div = null;



// Onload Funtion Handler

window.onload = () => {
    main()
}

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const btn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    btn.addEventListener('click', function () {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor.substring(1);
    })

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

function generateHEXColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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