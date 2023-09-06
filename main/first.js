let titlearray = [
    "طريقة النظافة",
    "شرح المنتج"
];

let descriptionarray = [
    "الان هو يشرح كيف تحتفظ على نظافتها ",
    "الا هو يشرح اجزاؤها وكيف تتكون",
];
let page = [
    "./montagat.html",
    " ",

    
];

let d = document.querySelector(".container");

for (let i = 0; i < titlearray.length; i++){
    let f = document.querySelector(".container").innerHTML;
    d.innerHTML = ` <div id = "cards${i}" class="boxes">
    <div class="box_content">
        <h2>
        ${titlearray[i]}
        </h2>
        <p>
        ${descriptionarray[i]}
        </p>
        
        </a>
        <a href="
        ${page[i]}">
        للمزيد.</a>


    </div>
</div>` + f;
let b = document.getElementById(`cards${i}`);
b.style.backgroundImage = `url('../img/${titlearray[i]}.jpg')`
};