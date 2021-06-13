$(document).ready(function () {

    let ship = document.getElementById("shipment").innerHTML
    console.log(ship)
    
    $('#ti2').text(localStorage.getItem('itemQuantity'))
    $('#bagie').text(localStorage.getItem('itemQuantity')) 
    $('#estT').text(parseInt(localStorage.getItem('itemTotal')) + parseInt(ship))
    let estim =(parseInt(localStorage.getItem('itemTotal')) + parseInt(ship))
    localStorage.setItem('itemEst', estim)
    $('#totalP').text(localStorage.getItem('itemTotal'))
    $('#unites').text(localStorage.getItem('itemPrice'))
      
})


$('#comot').on('click', ()=>{
    $('#checkout').prop('disabled', true)
    $('#removal').hide();
    $('#subT').text(0)
    $('#ti2').text(0)
    $('#bagie').text(0)
    $('#estT').text(0)
    $('#totalP').text(0)
    $('#unites').text(0)


    localStorage.setItem('itemQuantity', 0)
    localStorage.setItem('itemQuantity', 0)
    localStorage.setItem('itemPrice', 0)
    localStorage.setItem('itemTotal', 0)
})



$('#qty1').change(function(){
    $('#ti2').text($(this).val());
    $('#bagie').text($(this).val());
    let bag = document.getElementById("ti2").innerHTML
    let unitP = document.getElementById("subT").innerHTML
    let estimated = ((parseInt(bag*unitP) + parseInt(localStorage.getItem('shipValue'))))
    $('#estT').text((parseInt(bag*unitP) + parseInt(localStorage.getItem('shipValue'))))
    localStorage.setItem('itemTotal',  estimated)
    localStorage.setItem('itemEst', estimated)
})

function apply (){
    let apply = document.getElementById("prom").value;
    if (apply.length == 5){
        $('#estT').text((parseInt(localStorage.getItem('itemTotal')) + parseInt(localStorage.getItem('shipValue'))) /2)
        $('#prom').val("")
    } 
    console.log("clicked");
}
