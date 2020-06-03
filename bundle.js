"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1 - crie uma variavel que contenha todas idades dos usuarios: [23,15,30]

var idades = usuarios.map(function (item) {
  return item.idade;
}); // console.log(idades);
//2.2 - crie uma variavel que tenha apenas os usuarios que trabalham na rocketseat e com mais de 18 anos

var filter = usuarios.filter(function (users) {
  return users.empresa === 'Rocketseat' && users.idade > 18;
}); // console.log(filter);
//2.3 - crie uma variavel que procura por um usuario que trabalhe na empresa Google

var find = usuarios.find(function (item) {
  return item.empresa === 'Google';
}); // console.log(find)
//2.4 - multiplique a idade de todos usuarios por dois e depois realize um filtro que possuem no maximo 50 anos

var multiplique = usuarios.map(function (item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    idade: item.idade * 2
  });
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(multiplique);
