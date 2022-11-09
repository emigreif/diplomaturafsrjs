const j = prompt("Ingrese cantidad de numeros:");

var numeros = new Array(j);

for (var i = 0; (i = numeros.length - 1); i++) {
  numeros[i] = prompt("Ingrese un numeros:");
}

document.write(numeros);
k = 1;
for (var i = 0; (i = numeros.length - 1); i++) {
  for (var i = 0; (i = numeros.length - 2); i++) {
    if (numeros[i] < numeros[k]) {
      aux = numeros[i];
      numeros[i] = numeros[k];
      numeros[k] = aux;
      k++;
    }
  }
}

document.write(numeros);

var aux = 0;
var k = 0;
f = 0;
// for (var i = 0; i < numeros.length; i++) {
do {
  f = 0;
  for (var d = 0; d < numeros.length; d++) {
    k = d + 1;
    if (parseint(numeros[d]) - parseint(numeros[k]) < 0) {
      aux = numeros[d];
      numeros[d] = numeros[k];
      numeros[k] = aux;

      f--;
    } else {
      f++;
    }
    document.write(
      "----nd----- ",
      numeros[d],
      "-----nk---- ",
      numeros[k],
      "----f----- ",
      f
    );
  }
  document.write(
    "----nums----- ",
    numeros,
    "----numsle----- ",
    numeros.length,
    "-----f---- ",
    f,
    "--------- "
  );
} while (f > j);

let j = prompt("Ingrese cantidad de numeros:");
var numeros = new Array();
numeros.length = j;
for (var i = 0; i < numeros.length; i++) {
  numeros[i] = prompt("Ingrese un numeros:");
}

document.write("--------- ", numeros, "--------- ");
document.write(numeros.length, "--------- ");
var max = numeros[0];
var ubicacion = 0;

for (var i = 0; i < numeros.length; i++) {
  if (parseInt(max) - parseInt(numeros[i]) < 0) {
    max = numeros[i];
    ubicacion = i;
  }
}

document.write(
  "----EL MAS GRANDE NO ES PELE ES:----- ",
  max,
  "----ubicacion:----- ",
  ubicacion
);
