var productos = [[0,"Halo Infinite", "JuegoXbox.jpg", 5],[0,"Mando PS5", "MandoPs5.jpg", 1]];
var ltproduct = document.getElementById("list-products");
function loadLTP(){
    for(var i =0; i<productos.length;i++){
        var liuse = document.createElement("li");
        liuse.className="list-group-item d-flex justify-content-between align-items-start";
        liuse.innerHTML = '<div class="ms-2 me-auto"><div class="row"><div class="col-3"><img src="../src/'+productos[i][2]+'" width="50" alt=""></div><div class="col"><div class="h-100 ajv-txt fw-bold"><strong id="txt-producto0"> '+productos[i][1]+'</strong></div></div></div></div><p class="mr-2">$1500 c/u </p><span class="badge bg-primary rounded-pill">'+productos[i][3]+'</span>';
        ltproduct.appendChild(liuse);
    }                
}
loadLTP();
