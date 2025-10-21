//const alunos = ["Ivande", "Kauwives", "Davi", "Amanda"];
// //alunos[4] = "John"; funciona mas não recomendado
// let removido = alunos.pop();//Remove o ultimo elemento no array, e retorna o que foi removido
// alunos.pop();//Remove o ultimo elemento no array
// alunos.push("John");//adiciona elementos ao final do array

// alunos.shift()//Remove o primeiro elementos no inicio do array
// alunos.unshift("ola")//adiciona elementos ao inicio do arrau
// delete alunos[1]//remove o valor do indice pasado 

// console.log(alunos);
// console.log(removido);

// const copiaAlunos = alunos;

// console.log(alunos)
// console.log(copiaAlunos)


//const cars = ["Ford", "Hyundai", "BMW", "Honda"];
//const cars2 = cars.slice(-8);
//console.log(cars2); // Saída: Array [“Hyundai”, “BMW”]

//cars.forEach( e => console.log(e)); não retorna nada

const precos = [29.9, 56.48, 124.9, 239.9, 69.9]

const precosComDesconto = precos.map(valor => valor - (valor * 0.1));
console.log(precosComDesconto)

const precosFiltrados = precos.filter(valor => valor < 100)
console.log(precosFiltrados)

//reduce()
//                      (acumulador, precos) =>  calculo, inicio padrao
const total = precos.reduce((soma, preco) => soma += preco, 0)
console.log(total)