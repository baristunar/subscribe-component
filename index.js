const checkbox = document.querySelectorAll('.checkbox');



checkbox.forEach(element => {
    element.addEventListener('click', ($event)=>{
       $event.target.parentElement.classList.toggle('active');
    })
})