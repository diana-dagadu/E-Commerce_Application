let plus = document.getElementById("circle2");
let minus = document.getElementById("c1rcle1");
let quantity = document.getElementById("rectangle");
let addToBag = document.getElementById("rectangle2");
let unitPrice = document.getElementById("price");



$('#circle2').on("click", () => {
    console.log(" plus clicked");
    let quantityVal = parseInt(quantity.innerHTML)
    if (quantityVal <= 6) {
        console.log(quantityVal)
        quantityVal = quantityVal + 1;
        console.log(quantityVal)
        $('#rectangle').text(quantityVal);
        $('#bagie').text(quantityVal);
    }

})

$('#circle1').on('click', () => {
    console.log(' minus clicked')
    let quantityVal = parseInt(quantity.innerHTML)
    if (quantityVal >= 2) {
        console.log(quantityVal)
        quantityVal = quantityVal - 1;
        console.log(quantityVal)
        $('#rectangle').text(quantityVal);
        $('#bagie').text(quantityVal);

    }

})
$('#rectangle2').on('click',()=>{
    $('#sidie').slideDown('slow');
    $('#sidie').css('top', '70')
    $('#sidie').css('right', '10')
    $('#overlay').css('display', 'block')
    let totalPrice = parseInt(unitPrice.innerHTML) * parseInt(quantity.innerHTML);

    // Setting to localStorage
    localStorage.setItem('itemTitle', $('#title').text())
    localStorage.setItem('itemPrice', $('#price').text())
    localStorage.setItem('itemTotal', totalPrice)
    localStorage.setItem('itemQuantity', $('#rectangle').text())
    localStorage.setItem('shipValue', 14)
    localStorage.setItem('discountValue', 12)


    // Getting from locatStorage
    $('#quantity').text(localStorage.getItem('itemQuantity'))
    $('#qty').text(localStorage.getItem('itemTotal'))
    
})


// minus.addEventListener(() =>{
//     console.log("Minus Clicked")
// }


// addToBag.addEventListener(() =>
// {
//     console.log("Add to bag clicked");
// }


// plus.addEventListener(()=>{
//     console.log("Plus clicked");
// })

