const hexbtn = document.querySelector('.create')
const hexValueBtn=document.querySelector('.hex-color-value')

const rgbbtn=document.querySelector('.rgb-btn')
const getInputRed=document.querySelector('#red')
const getInputGreen=document.querySelector('#green')
const getInputBlue=document.querySelector('#blue')

const hexCopyBtn=document.querySelector('.hex-copy');
const rgbCopyBtn=document.querySelector('.rgb-copy')
const rgbcolorvalue=document.querySelector('.rgb-color-value')
//create random hex color
const right=document.querySelector('.right_center');
hexbtn.addEventListener('click', () => {
    let charset = '0123456789ABCDEF'
    let hexColorOutput = "";

    for (let i = 0; i < 6; i++) {
        hexColorOutput += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    
    hexValueBtn.textContent = `#${hexColorOutput}`
    hexValueBtn.style.color= `#${hexColorOutput}`
    hexbtn.style.color = `#${hexColorOutput}`
    console.log("=======================")
    console.log(hexColorOutput)
    console.log("=======================")


})

rgbbtn.addEventListener('click',()=>{
    let extractRed=getInputRed.value;
    let extractGreen=getInputGreen.value;
    let extractBlue=getInputBlue.value;
    right.style.backgroundColor =`rgb(${extractRed},${extractGreen},${extractBlue})`
    // console.log(extractBlue,extractGreen,extractRed)
    rgbcolorvalue.textContent=`rgb(${extractRed},${extractGreen},${extractBlue})`
})

hexCopyBtn.addEventListener('click',hex_color_copy)

function hex_color_copy(){
    navigator.clipboard.writeText(hexValueBtn.textContent)
    alert('HEX color has been copied')
}

function rgb_color_copy(){
    navigator.clipboard.writeText(rgbcolorvalue.textContent)
    alert('RGB color has been copied')
}

rgbCopyBtn.addEventListener('click',rgb_color_copy)