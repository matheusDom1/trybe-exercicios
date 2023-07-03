const verifyParameter = (name, age) => {
    if (typeof name === 'undefined' || typeof age === 'undefined') {
        throw new Error('Todas as informações são necessárias');
    }
}

const verifyAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
}
const studentRegister = (name, age) => {
    try {
        verifyAge(age);
        verifyParameter(name,age);

        return `${name}, seja bem-vindo(a) a AuTrybe!`
    } catch (err) {
        return err.message;
    }
  }

  console.log(studentRegister('Matheus', '17'));
