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


const items = document.querySelectorAll(".accordion .item");

items.forEach(item => {
    item.querySelector(".title").addEventListener("click", () => {

        // đóng tất cả trước
        items.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        // mở cái đang click
        item.classList.toggle("active");
    });
});

document.getElementById("searchBook").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();

    let books = document.querySelectorAll(".accordion .content p");

    books.forEach(book => {
        if (book.innerText.toLowerCase().includes(keyword)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});