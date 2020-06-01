const usuario = {
    nome: 'Mahria',
    idade: 22,
    endereco: {
        cidade: 'Três Corações',
        estado: 'MG',
    },
};

// const { nome, idade, endereco: {cidade} } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome({nome, idade, endereco}) {
    console.log(nome, idade, endereco);
}

mostraNome(usuario);

// conseguimos utilizar a destruturacao p/ parametros de funções