/*
 Escreva uma função que receba dois números e um caractere como argumentos. O caractere recebido
informa que tipo de operação deve ser realizada. Por exemplo, ao receber o caractere “+”, a função
deve calcular a soma dos números passados como argumento e retornar o resultado. Use “+” para soma,
“-” para subtração, “/” para divisão e “*” para multiplicação.
*/
function calculadora(n1, n2, c) {
    switch (c) {
        case "+":
            return (`${n1} + ${n2} = ${n1 + n2}`);
            break;
        case "-":
            return (`${n1} - ${n2} = ${n1 - n2}`);
            break;
        case "*":
            return (`${n1} * ${n2} = ${n1 * n2}`);
            break;
        case "/":
            return (`${n1} / ${n2} = ${n1 / n2}`);
            break;
        default:
            return ("operação invalida");
            break;
    }
}


/*Escreva uma função que receba uma quantidade não específica (aleatória) de números como
argumentos e retorne o produtório dos números passados. */



/*3. Implemente uma função que receba um número e retorne seu fatorial.*/

function fatorial(n) {
    if(n==0) return "Fatorial não existe";
    if(n==1) return 1;

    let = fatorial = 1;
    for(let i = 2; i <= n; i++){
        fatorial*=i;
    }
    return(`Fatorial de ${n} = ${fatorial}`);   
}

/*4. Implemente uma função que receba um array de números e retorne um outro array contendo somente
os números ímpares encontrados. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtraNumeros(numeros) {
    let numerosImpares = [];
    let numerosPares = [];

    for (let numero of numeros) {
        if (numero % 2 === 0) {
            numerosPares.push(numero);
        } else {
            numerosImpares.push(numero);
        }
    }

    return {
        impares: numerosImpares,
        pares: numerosPares
    };
}

let resultado = filtraNumeros(numeros);
console.log("Números ímpares:", resultado.impares);
console.log("Números pares:", resultado.pares);
