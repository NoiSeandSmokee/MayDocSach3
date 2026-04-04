function goDetail(id){
localStorage.setItem("product",id);
window.location="detail.html";
}

const elements=document.querySelectorAll('.hidden');

function showOnScroll(){
const trigger=window.innerHeight*0.8;
elements.forEach(el=>{
if(el.getBoundingClientRect().top<trigger){
el.classList.add('show');
}
});
}

window.addEventListener('scroll',showOnScroll);
showOnScroll();
function goBack(){
    window.location = "index.html";
}