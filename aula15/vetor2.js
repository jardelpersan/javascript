let valores = [1,2,3,4,7,89,54]

let pos = valores.indexOf(6)
console.log(valores)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}