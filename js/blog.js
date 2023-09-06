let titlearray = [
    "تعرف على كيفية تدريب القطط على صندوق الرمل",
    "ما هي افضل أنواع رمل القطط",
    "طرق العناية بالقطط الكبيرة",
    "اسهل طريقة لقص اظافر القطط",

];

let descriptionarray = [
    "قد تحتاج القطط الصغيرة إلى القليل من المساعدة في التعرف على استخدام صندوق الفضلات. ",
    "إن قرار تربية قطٍ يُشاركك المنزل قد يبدو أمرًا مثيرًا ورائعًا، وهو كذلك بالطبع.",
    "مع تقدم القطط في العمر، تتغير احتياجاتهم الجسدية والسلوكية، وتميل القطط المُسنة إلى أن تكون أقل نشاطًا.",
    "يعد تقليم مخالب القطة كل أسبوعين إلى ثلاثة أسابيع جزءًا مهمًا للحفاظ على صحة حيوانك الأليف."
];
let page = [
    "./cat1.html",
    "./cat2.html",
    "./cat3.html",
    "./cat4.html"
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

