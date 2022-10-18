const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    description: "Muestra la tabla en consola",
  })
  .option("u", {
    alias: "until",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "Define el límite de la multiplicación",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    } else if (isNaN(argv.u)) {
      throw "El límite debe ser un número";
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
