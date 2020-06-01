// REST 

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 3, 4, 4, 5, 6, 7));

// SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [... arr1, ...arr2];

// console.log(arr3);

const usuario1 = {
    nome: 'Mahria',
    idade: 22,
    empresa: 'Kataralol',
};

const usuario2 = { ...usuario1, nome: 'Mahria' };

console.log(usuario2);

// enquanto o rest pega o resto de alguma destruturação
// ou de uma passagem de parametro o spread ela faz o papel
// de propagar/repassar as informações de algum objeto
// ou array pra outra estrutura de dados 