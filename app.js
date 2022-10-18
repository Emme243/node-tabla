const argv = require("./config/yargs");
const colors = require("colors");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

const base = argv.b;
const listar = argv.l;
const until = argv.u;

crearArchivo(base, listar, until).then((fileName) => {
  console.log(colors.bgGreen.white(`Archivo ${fileName} creado.`));
});
