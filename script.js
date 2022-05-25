const space = document.getElementById('animation');

function createParagraphs(){
    const randomParagraph = document.createElement('p');
    randomParagraph.classList.add('animation-paragraph');

    const pArray = [];

    for(let i=0; i<300; i++){
        pArray[i] = randomParagraph.cloneNode(true);
    }

    return pArray;
}

let i=0;
let j=0;
let k=0;
let l=0;
let arr=[];

function createMatrixAnim(letters){
    const alphabet = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η',
                      'θ', 'ι', 'κ', 'λ', 'ν', 'π', 'υ', 'ω'];
            
        letters[i].style.left = `${Math.floor(Math.random()*1800+20)}px`;
        letters[i].style.top = `${Math.floor(Math.random()*550+30)}px`;
        space.appendChild(letters[i]);
        setInterval(() => {
            letters[i].innerHTML += alphabet[Math.floor(Math.random()*15)];
            if(letters[i].textContent.length > 100)
                i++;
            if(letters[i].textContent.length > 70){
                setTimeout(() => {
                    arr[j] = letters[j].textContent;
                    letters[j].textContent = arr.shift();
                }, 10)
            } 
        }, 100)
        setInterval(() => {
            setTimeout(() => {
                var res = letters[i].textContent.slice(1);
                letters[i].textContent = res;
                k++;
            }, 300)
        }, 400)
        setInterval(() => {
            letters[i].style.top = (letters[i].offsetTop + 1) + "px";
        }, 40)
        setTimeout(() => {
            setInterval(() => {
                space.removeChild(letters[l]);
            }, 3500)
        }, 4000)
}

createMatrixAnim(createParagraphs())

setInterval(() => {
        createMatrixAnim(createParagraphs())
}, 40);