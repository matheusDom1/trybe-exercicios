let num = 10;
let fatorial = 0;
let arm = num; 
let total = 1;

for (let index = num - 1 ; index >= 1 ; index -= 1) {

    fatorial = ' x ' + index;
    arm = arm + fatorial;

}

for (let indexSoma = num ; indexSoma >= 1; indexSoma -= 1) {
    total = indexSoma * total;   
}


console.log(`O fatorial de ${num} é igual a ${arm} = ${total}`);