const form = document.querySelector('.rating');
const thankYou = document.querySelector('.thank-you')
form.addEventListener("submit", changeState)
function changeState () {
 
    thankYou.removeAttribute("hidden")
    console.log('removed')
    } 




