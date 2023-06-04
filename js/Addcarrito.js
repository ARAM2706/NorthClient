function agregarcarrito(id, img, nombre, precio) {

    var aux = "'../html/carrito.html'";
    document.getElementById("btn-buynow").remove();
    var lt = document.createElement("li");
    lt.innerHTML = '<div class="mt-2" style="display:flex;align-items:center;border-bottom:1px solid #000;"><img style="float:left;" src="../src/' + img + '" class="card-img-top" alt="..."><p> ' + nombre + ' <strong>$ ' + precio + '</strong></p></div><li id="btn-buynow"><div class="text-center mt-1"><button class="btn-primary" onclick="window.location.href=' + aux + '">Comprar ahora</button></div></li>';
    var lts = document.getElementById("ltcarrito");
    lts.appendChild(lt);
}