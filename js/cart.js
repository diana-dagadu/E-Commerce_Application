$(document).ready(function () {

    let ship = document.getElementById("shipment").innerHTML
    console.log(ship)
    
    $('#ti2').text(localStorage.getItem('itemQuantity'))
    $('#bagie').text(localStorage.getItem('itemQuantity'))
    $('#estT').text(parseInt(localStorage.getItem('itemTotal')) + parseInt(ship))
    $('#totalP').text(localStorage.getItem('itemTotal'))
    $('#unites').text(localStorage.getItem('itemPrice'))
      
})


$('#comot').on('click', ()=>{
    $('#removal').hide();
    $('#subT').text(0)
    $('#ti2').text(0)
    $('#bagie').text(0)
    $('#estT').text(0)
    $('#totalP').text(0)
    $('#unites').text(0)
})

function apply (){
    let apply = document.getElementById("prom").value;
    if (apply.length == 5){
        $('#est').text(0)
        $('#estT').text((parseInt(localStorage.getItem('itemTotal')) + parseInt(localStorage.getItem('shipValue'))) /2)
    } 
    console.log("clicked");
}