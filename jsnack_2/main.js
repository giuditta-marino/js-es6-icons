$(document).ready(function(){
  // Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
  // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

  const myFunction = (array, a, b) => {
    const newArray = array.slice(a, b+1);
    return newArray;
  }

  // creo un array e applico la funzione
  const myArray = [1, 2, 3, 4, 5, 6, 7];

  let result = myFunction(myArray, 1, 7);
  console.log(result);

  // creo una funzione simile con il for
  const myFunction2 = (array, a, b) => {
    let newArray2 =[];
    for (var i = 0; i < array.length; i++) {
      if (i >= a && i <= b) {
        newArray2.push(array[i]);
      }
    }
    return newArray2;
  }

  let result2 = myFunction2(myArray, 2, 4);
  console.log(result2);

  // Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
  // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri (stesso esercizio ma bisogna usare foreach)
  //

  const myFunction4 = (array, a, b) => {
    newArray3= [];
    array.forEach((element, i) => {
      if (i >= a && i <= b) {
        newArray3.push(element)
      }
    })
    return newArray3;
  };

  let result4 = myFunction4(myArray, 1, 5)
  console.log(result4);

    // Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
    // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri (stesso esercizio ma bisogna usare foreach)
    //

   const myFunction3 = (array, a, b) => {
     if (a < b) {
       arrayFiltered = array.filter((element, i) => {
        return i >= a && i <= b
       })
       return arrayFiltered;
     } else {
       arrayFiltered = array.filter((element, i) => {
        return i >= b && i <= a
      });
     }
     return arrayFiltered;
    }

  let result3 = myFunction3(myArray, 5, 5);
  console.log(result3);




})
