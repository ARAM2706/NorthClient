// LocalStorage

function cargarJson() {
    var lista = localStorage.getItem("usuarios");
    if (lista == null) {
        return [];
    } else {
        return JSON.parse(lista);
    }
}


// Iniciar sesion
var sesionStatus = [false];

function IniciarSesion() {
    console.log("Hola")
    var ss = localStorage.getItem("StatusSesion");
    var users = cargarJson();

    if (users != []) {
        var email = document.getElementById("email").value;
        var passw = document.getElementById("password").value;
        var sino = false;
        for (i = 0; i < users.length; i++) {

            if (users[i].email == email && users[i].pass == passw) {

                location.href = 'html/ventas.html';
                sesionStatus = [true];
                localStorage.setItem("StatusSesion", JSON.stringify(sesionStatus));
                document.getElementById("NombreUsuario").value = users[i].name;
            }
        }
        if (!sino) {
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
            alert("Contraseña o usuario incorrectos");
        }

    }

}

// Agregar Usuarios

function AgregarUsuario() {
    let employees = cargarJson();
    let nuevo = {};
    nuevo.name = document.getElementById("name").value;
    nuevo.lastnameP = document.getElementById("lastname").value;
    nuevo.lastnameM = document.getElementById("title").value;
    nuevo.birthdate = document.getElementById("birthdate").value;
    nuevo.address = document.getElementById("address").value;
    nuevo.city = document.getElementById("city").value;
    nuevo.region = document.getElementById("region").value;
    nuevo.postalcode = document.getElementById("postalcode").value;
    nuevo.country = document.getElementById("country").value;
    nuevo.phone = document.getElementById("phone").value;
    nuevo.pass = document.getElementById("psw").value;
    nuevo.email = document.getElementById("email").value;

    if (nuevo.name == '' || nuevo.lastnameP == '' ||
        nuevo.lastnameM == '' || nuevo.birthdate == '' ||
        nuevo.address == '' || nuevo.city == '' ||
        nuevo.region == '' || nuevo.postalcode == '' || nuevo.country == '' ||
        nuevo.phone == '' || nuevo.email == '' || nuevo.pass == '') {
        alert('Favor de llenar todos los campos');
    } else {
        employees.push(nuevo);
        localStorage.setItem("usuarios", JSON.stringify(employees));
        location.href = '../html/ventas.html';
        document.getElementById("NombreUsuario").value = users.name;
    }
}