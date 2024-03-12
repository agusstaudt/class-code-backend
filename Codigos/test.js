const Contador = require("./clase_1.js");

const contador1 = new Contador('Nahuel Navarro');
contador1.contar();
console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());
console.log(contador1.getResponsable());

