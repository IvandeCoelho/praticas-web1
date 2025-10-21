let nome1 = "João da Silva";
let matricula1 = "20112173000117";
let idade1 = 20;

let nome2 = "Maria Aparecida";
let matricula2 = "20112173000118";
let idade2 = 20;

console.log(nome1, matricula1, idade1)
console.log(nome2, matricula2, idade2)


const aluno1 = {nome:"Francisco Coelho",
                matricula:"20112173000119",
                idade:21,
                imprimirFicha(){
                    return `Nome do aluno: ${this.nome}\n
                    Matricula: ${this.matricula}\n
                    Idade: ${this.idade}`;
                }}

const aluno2 = {nome:"Marla Leite",
                matricula:"20112173000120",
                idade:21,
                imprimirFicha(){
                    return `Nome do aluno: ${this.nome}\n
                    Matricula: ${this.matricula}\n
                    Idade: ${this.idade}`;
                }
            }

console.log(aluno1)
console.log(aluno2)
console.log(aluno1.imprimirFicha())
console.log(aluno2.imprimirFicha())