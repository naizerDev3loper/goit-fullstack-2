var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;//pixeles
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var x = parseInt(texto.value);
  var lineas = x, lineas2 = 1;
  var l = 0, l2 = x;
  var yi, xf, yi1, xf2;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l ;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  for(l2 = x; l2 > lineas2; l2--)
  {
    yi1 = espacio * l2 ;
    xf2 = espacio * (l2 + 1);
    dibujarLinea(colorcito, 300, yi1, xf2, 0);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);

  dibujarLinea(colorcito, 299, 1, 1, 1);
  dibujarLinea(colorcito, 299, 1, 299, 299);

}
