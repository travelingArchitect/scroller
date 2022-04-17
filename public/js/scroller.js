let subBtn = document.getElementById("Sbtn")
let numero = document.getElementById("numero");
let scroller = document.getElementById("scroller");

let DelBtn = document.getElementById("Dbtn")
let ArrBtn = document.getElementById("ArrBtn")

subBtn.addEventListener("click", populate)
DelBtn.addEventListener("click", remover)
ArrBtn.addEventListener("click", ArrFunc)

let cardsArray = []

function populate() {

    let cards = document.getElementsByClassName("card")
    let i = 0
    while (cards.length) {
        //  cards[i].parentNode.removeChild(cards[i])
        cards[i].remove()
    }
    console.log(cards)

    let val = numero.value;
    for (let i = 0; i < val; i++) {
        let myDiv = document.createElement("div")
        let myH = document.createElement("h1")
        myH.innerText = i + 1
        myDiv.style.backgroundColor = `hsl( ${i * 20} ,100%, 50%)`
        scroller.appendChild(myDiv)
        myDiv.appendChild(myH)
        myDiv.classList.add("card")
    }

}

function remover() {

    let cards = document.getElementsByClassName("card")
    for (let i = cards.length - 1; i >= 0; i = i - 2) {

        let obj = cardsArray.find(o => o.id === i);
        cardsArray.splice(i, 1)
        cards[i].remove()


    }
    console.log(cardsArray)

    /*
        let i = 0
        for (let i = cards.length - 1; i >= 0; i--) {
            cards[i].parentNode.removeChild(cards[i])
        }
    */

    // console.log(cards)

}


function ArrFunc() {
    let val = numero.value;

    for (let i = 0; i < val; i++) {
        let myDiv = document.createElement("div")
        let myH = document.createElement("h1")
        myH.innerText = i + 1
        myDiv.style.backgroundColor = `hsl( ${i * 20} ,100%, 50%)`
        scroller.appendChild(myDiv)
        myDiv.appendChild(myH)
        myDiv.classList.add("card")

        myDiv.setAttribute("data-id", i + 1)
        let obj = {}
        obj.id = i + 1
        obj.rem = i + 1
        cardsArray.push(obj)
    }
    console.log(cardsArray)
}



