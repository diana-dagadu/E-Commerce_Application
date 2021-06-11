$(document).ready(function () {

    let discount = document.getElementById("disc")
    let ship = document.getElementById("shipment")


     $('#titl2').text(localStorage.getItem('itemQuantity'))
    $('#total1').text(parseInt(localStorage.getItem('itemTotal')) + parseInt(localStorage.getItem('shipValue'))+ parseInt(localStorage.getItem('discountValue')))

     $('#qt').text(localStorage.getItem('itemQuantity'))
     $('#bagie').text(localStorage.getItem('itemQuantity'))
     $('#unittt').text(localStorage.getItem('itemPrice'))
     $('#finalP').text(localStorage.getItem('itemTotal'))
})
