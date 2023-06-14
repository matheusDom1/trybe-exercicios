const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

let nomeCompleto = Object.values(reader);
let newBook = [{
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  }];

  function addnovoBook(obj, key, novo){
    if (typeof obj[key] === novo) {
        obj[key] = novo;
    }
  }
  console.log(addnovoBook(reader, 'favoriteBooks', newBook));
  console.log(reader);