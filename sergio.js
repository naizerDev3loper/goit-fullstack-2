// VARIABLES //
var vp = document.getElementById("villaSergio");
var papel = vp.getContext("2d");

var fondo =
{
  url: "tile.webp",
  cargaOK: false
};
var vaca =
{
  url: "vaca.webp",
  cargaOK: false
};
var cerdo =
{
  url: "cerdo.webp",
  cargaOK: false
};
var pollo =
{
  url: "pollo.webp",
  cargaOK: false
};

// MANEJO DE OBJETOS, FUENTES Y CARGA DE LAS IMAGENES //
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
/*cerdo.imagen.addEventListener("load", moverCerdo);*/

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

// FUNCIONES //
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
  /*mover();*/
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}


var cantidad = aleatorio(1, 4);

function dibujar()
{
  if(fondo.cargaOK) //if evalua true por defecto asi que es redundante escribir == true
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {

    for(var v = 0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    for(var c = 0; c < cantidad; c++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen, x, y);
      /*mover();*/
    }
  }

  if(pollo.cargarOK)
  {
    console.log(cantidad);
    for(var p = 0; p < cantidad; p++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}
/*.moverCerdo();
function moverCerdo(xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function mover(evento)
{
  movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.DOWN:
      moverCerdo(x, y, x, y + movimiento, papel)
      y = y + movimiento;
        console.log("abajo");
    break;
    case teclas.UP:
      moverCerdo(x, y, x, y - movimiento, papel)
      y = y - movimiento;
      console.log("arriba");
    break;
    case teclas.LEFT:
      moverCerdo(x, y, x - movimiento, y, papel)
      x = x - movimiento;
      console.log("izquierda")
    break;
    case teclas.RIGHT:
      moverCerdo(x, y, x + movimiento, y, papel)
      x = x + movimiento;
      console.log("derecha");
    break;
    default:
      console.log("otra tecla");
    break;
  }*/

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
