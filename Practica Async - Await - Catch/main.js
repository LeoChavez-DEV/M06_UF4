// -----------------------------------------------------------------------------
function esDivisible (numero){
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
          // console.log(`El número ${numero} es divisible entre dos.`);
          resolve(`El número ${numero} es divisible entre dos.`);

        } else {
          console.log(`El número ${numero} no es divisible entre dos.`);
          resolve(`El número ${numero} no es divisible entre dos.`);

        }
      });    
}

async function comprobarEsDivisible() {
      try {
        const resultado = await esDivisible(6); 
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    
// -----------------------------------------------------------------------------

const comprobarNumero = new Promise((resolve, reject) => {
      const numero = 5; 
      if (numero >= 0 && numero <= 10) {
        // console.log(`El numero "${numero}" esta dentro del rango 0-10`)
        resolve(`El numero "${numero}" esta dentro del rango 0-10`)
      } else {
        // console.log(`El numero "${numero}" no esta dentro del rango 0-10  permitido`)
        resolve(`El numero "${numero}" no esta dentro del rango 0-10  permitido`)
      }
});


comprobarNumero
      .then(console.log)
      .catch(console.log);

// -----------------------------------------------------------------------------


let arr = ["a", "e", "i", "o", "u"]

function esVocal(letra){
    return new Promise((resolve, reject) => {
        if (arr.includes(letra.toLowerCase())) {
            resolve(`La letra "${letra}" es una vocal.`);
          } else {
            reject(`La letra "${letra}" no es una vocal.`);
          }
        });
}

async function comprobarEsVocal() {
  try {
    const resultado = await esVocal('a'); 
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}


// -----------------------------------------------------------------------------

function calcularDivision(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero2 === 0) {
      reject("No se puede dividir entre cero.");
    } else {
      const resultado = numero1 / numero2;
      resolve(`El resultado es: ${resultado}`);
    }
  });
}

async function Division() {
  try {
    const resultado = await calcularDivision(2, 2);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}


// -----------------------------------------------------------------------------
comprobarEsDivisible();
comprobarEsVocal();
Division();
