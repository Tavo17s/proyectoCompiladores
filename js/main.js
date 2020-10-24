const reg = /^[A-Z]\d{3}[a-zñ]{3}[^A-Za-z\dñÑ ]{3}$/;

var formato = document.querySelector(".formato");

function othername() {
    var input = document.getElementById("userInput").value;
    if(reg.test(input)){
        document.querySelector(".row").innerHTML = 
        "<div class='col-sm-6 col-md-7'>"+
            "<div class='alert alert-success' id='box1'>"+
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>"+
                    "×</button>"+
               "<span class='glyphicon glyphicon-ok'></span> <strong>Contraseña correcta</strong>"+
                "<hr class='message-inner-separator'>"+
                "<p>La contraseña cumple con los requisitos</p>"+
            "</div>"+
        "</div>";
    }else{
        document.querySelector(".row").innerHTML = 
        "<div class='col-sm-6 col-md-7'>"+
            "<div class='alert alert-danger' id='box1'>"+
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>"+
                    "×</button>"+
               "<span class='glyphicon glyphicon-ok'></span> <strong>Contraseña incorrecta</strong>"+
                "<hr class='message-inner-separator'>"+
                "<p>Ingresa una contraseña valida</p>  "+
            "</div>"+
        "</div>";
    }
    
}

var enter = document.getElementById("userInput");
enter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("realizar").click();
  }
});

formato.addEventListener("click", function () {
    document.querySelector(".row").innerHTML = 
        "<div class='col-sm-6 col-md-7'>"+
            "<div class='alert alert-warning' id='box1'>"+
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>"+
                    "×</button>"+
               "<span class='glyphicon glyphicon-ok'></span> <strong>Formato de contraseña</strong>"+
                "<hr class='message-inner-separator'>"+
                "<p>Primera letra en mayúscula [A-Z]<br>Tres números [0-9]<br>Tres letras en minúsculas<br>Tres caracteres especiales<br>Ejemplo: A123abc!@#</p>"+
            "</div>"+
        "</div>";
});