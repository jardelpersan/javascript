let valores = [1,2,3,4,7,89,54]



/*for (let pos = 0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
