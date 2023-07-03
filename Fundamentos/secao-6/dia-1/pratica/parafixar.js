const mediaEstudante = (n1,n2,n3,n4) => {
    try {
        verificaNum(n1,n2,n3,n4);

        return calculoMedia(n1,n2,n3,n4);
    }
    catch (erro) {
        return erro.message;
    }
};

const verificaNum = (n1,n2,n3,n4) => {
    if (typeof n1 !== 'number' ||typeof n2 !== 'number' ||typeof n3 !== 'number' ||typeof n4 !== 'number') {
        throw new Error('Todos os valores devem ser números.');
    }
}
const calculoMedia = (n1,n2,n3,n4) => {
    const soma = n1 + n2 + n3 + n4;
    const media = soma / 4; 
    return media;
}

console.log(mediaEstudante(15,45,'20',30));