const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const newArr = ['Matheus', 'João', 'Gabriela', 'Vitória'];

function addCustomers(array, newCustomer) {

    for(let index = 0 ; index < newCustomer.length; index += 1){
        if (typeof newCustomer[index] != 'string') {
            return 'Todos os valores precisam ser strings';

        }   
        else {
            array.push(newCustomer[index]);           
        } 
    }
    return 'array adicionado com sucesso';
    
    }
    
console.log(addCustomers(trybeBankCustomers, ['Matheus','Leticia', 'Daniela', 78]));
console.log(trybeBankCustomers);

