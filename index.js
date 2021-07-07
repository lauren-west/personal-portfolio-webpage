function changeCoffee() { 
    if (document.getElementById('coffee').innerHTML == "Or perhaps tea, just for you?"){
        document.getElementById('coffee').innerHTML = "How do you like your coffee?"
        document.getElementById('coffee').style.color = 'white';
    } else {
        document.getElementById('coffee').innerHTML = "Or perhaps tea, just for you?"
        document.getElementById('coffee').style.color = "#4E2E54";
    }
}