let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body');
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')


openShopping.addEventListener("click" ,()=>{
    body.classList.add("active");
})
closeShopping.addEventListener("click" ,()=>{
    body.classList.remove("active");
})
let products=[
    {
        id:1,
        name : 'منتجنا',
        image:'1.png',
        price:2000,
    },
    {
        id:1,
        name : 'ادوات لعب',
        image:'2.png',
        price:300,
    },
    {
        id:1,
        name : 'ادوات اكل',
        image:'3.png',
        price:200,
    },
    {
        id:1,
        name : 'اكل',
        image:'4.png',
        price:100,
    },
    {
        id:1,
        name : 'قفص',
        image:'5.png',
        price:650,
    },
    {
        id:1,
        name : 'بكج كامل',
        image:'6.png',
        price:800,
    },
];
// الكاردات كاملة
let listCards = [];
function initApp () {
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv)

    })
    
} 
// اضافة المعلومات
initApp();
function addToCard(key) {
    if(listCards[key]==null){
        listCards[key]=products[key];
        listCards[key].quantity=1;
    }
    reloadCard()
}
// الكارد حق الشراء
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

    const shoppingCard = document.getElementById('shoppingCard');
    const closeShoppingButton = document.querySelector('.closeShopping');

    closeShoppingButton.addEventListener('click', () => {
        shoppingCard.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', reloadCard);


// فتح السلة
const shoppingCart = document.getElementById('shoppingCart');

const cartContainer = document.getElementById('shoppingCard');

shoppingCart.addEventListener('click', () => {
    if (cartContainer.style.display === 'block' || cartContainer.style.display === '') {
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }
});


// زيادة في عدد المنتج
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
        
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}