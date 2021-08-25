const modal = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay')
      
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < btnOpenModel.length; i++) 
    btnOpenModel[i].addEventListener('click',openModal);        
btnCloseModel.addEventListener('click',closeModal);
overlay.addEventListener('keydown',overlay);
document.addEventListener("keydown", function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});