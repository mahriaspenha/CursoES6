const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    { nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];

//2.1 - crie uma variavel que contenha todas idades dos usuarios: [23,15,30]

const idades = usuarios.map(item => item.idade)

// console.log(idades);

//2.2 - crie uma variavel que tenha apenas os usuarios que trabalham na rocketseat e com mais de 18 anos

const filter = usuarios.filter(users => users.empresa === 'Rocketseat' && users.idade > 18);

// console.log(filter);

//2.3 - crie uma variavel que procura por um usuario que trabalhe na empresa Google

const find = usuarios.find(item => item.empresa === 'Google');

// console.log(find)

//2.4 - multiplique a idade de todos usuarios por dois e depois realize um filtro que possuem no maximo 50 anos

const multiplique = usuarios.map(item => ({...item, idade : item.idade * 2})).filter(item => item.idade <= 50)

console.log(multiplique)



   




