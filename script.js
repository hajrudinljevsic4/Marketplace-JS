let alltotal = 0;

function addToCart(element) {

    let mainEl = element.closest(`.single-item`);
    let price = mainEl.querySelector(`.price`).innerText
    let name = mainEl.querySelector("h3").innerText
    let quantity = mainEl.querySelector("input").value
    let cartItems = document.querySelector(".cart-items")

    if(parseInt(quantity) > 0) {


        price = price.substring(1);
        price = parseInt(price)

        let total = price * parseInt(quantity)

        alltotal += total


        console.log(typeof(price))
        console.log(total);

        cartItems.innerHTML += `<div class="cart-single-item">
                                            <h3>${name}</h3>
                                            <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                            <button onClick = "removeFromCart(this)" class="remove-item">Ukloni</button>
                                            </div>` ;

        document.querySelector(".total").innerText = `total: $${alltotal}`

        element.innerText = "dodato"
        element.setAttribute("disabled", "true");

}else{
    alert("odaberi kolicinu")
 }




}

function removeFromCart(element) {

let mainEl = element.closest(".cart-single-item");

let price = mainEl.querySelector("p span").innerText;

let name = mainEl.querySelector("h3").innerText;

let vegetables = document.querySelectorAll(".single-item");

console.log(price)

price = parseInt(price)
alltotal -= price;


document.querySelector(".total").innerText = `total: $${alltotal}`


mainEl.remove();



vegetables.forEach(function  (vega)  {
let itemName = vega.querySelector(".si-content h3").innerText
    
if(itemName === name) {
vega.querySelector(".actions input").value = 0
vega.querySelector(".actions button").removeAttribute("disabled")
vega.querySelector(".actions button").innerText = "dodaj"

}
console.log(vega)
})

}


