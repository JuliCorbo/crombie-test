// Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado


function verificarTipoData(numero) {
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      console.log("data no aceptada");
    }else{
        console.log("data aceptada")
    }}

  verificarTipoData(4)


//   Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)

const arr = [3, 5, 2, 4];

function generaArray(arr) {
  arr.forEach(element => {
    let result = element *= 5;
    console.log(result);
  });
}

generaArray(arr);

// Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango

const array2 = [7, 8, 8, 6, 5, 6, 4, 10];

function devuelvePromedio(array) {
  const sumaTotal = array.reduce(function(acc, value) {
    return acc + value;
  }, 0);

  const promedio = sumaTotal / array.length;
  return promedio;
}

const promedioArray2 = devuelvePromedio(array2);
console.log(promedioArray2);
