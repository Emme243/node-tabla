const fs = require("node:fs");
const colors = require("colors");

const crearArchivo = async (base, listar, until = 10) => {
  let outputInFile = "";
  let outputInConsole = "";
  for (let i = 1; i <= until; i++) {
    outputInConsole += `${colors.blue(base)} ${colors.gray(
      "x"
    )} ${i} = ${colors.cyan.italic(base * i)}\n`;
    outputInFile += `${base} x ${i} = ${base * i}\n`;
  }

  if (listar) {
    console.log("=================".cyan);
    console.log(`  Tabla del: ${colors.bold.blue(base)}`);
    console.log("=================".cyan);
    console.log(outputInConsole);
  }

  const fileName = `tabla-del-${base}-hasta-${until}.txt`;
  try {
    fs.writeFileSync(`./salida/${fileName}`, outputInFile);
    return fileName;
  } catch (error) {
    throw new Error(error?.message || "Algo salió mal");
  }
};

module.exports = {
  crearArchivo,
};
