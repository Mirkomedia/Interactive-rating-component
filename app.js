var thanks = document.querySelector(".thank-you")
var hwdw = document.getElementById("hwdw")
const ratingBtn = document.querySelectorAll(".round-btn")
const ratingDisplay = document.querySelector('.rating-display')
const submitBtn = document.querySelector('.submit-btn')



   ratingBtn.forEach(button => {

    button.addEventListener("click", () =>{

    ratingBtn.forEach(button => button.classList.remove('active'))

    button.classList.add('active')

   const ratingValue = button.getAttribute('data-value')

    ratingDisplay.textContent = ratingValue
    })


});
if(submitBtn ){
submitBtn.addEventListener('click', ()=>{
    if(thanks){
        thanks.removeAttribute('hidden')
    }}
)}





    

