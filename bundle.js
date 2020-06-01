"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// REST 
function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(soma(1, 3, 4, 4, 5, 6, 7)); // SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [... arr1, ...arr2];
// console.log(arr3);

var usuario1 = {
  nome: 'Mahria',
  idade: 22,
  empresa: 'Kataralol'
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Mahria'
});

console.log(usuario2); // enquanto o rest pega o resto de alguma destruturação
// ou de uma passagem de parametro o spread ela faz o papel
// de propagar/repassar as informações de algum objeto
// ou array pra outra estrutura de dados
