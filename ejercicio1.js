//* ====== EJERCICIO 1 ======

const empresas = [
  {
    nombre: "Empresa1",
    informacion: {
      empleados: 75,
      direccion: {
        calle: "Av.San Luis",
        numero: 293,
      },
      locales: {
        local1: { telefono: 5652457875, empleados: 15 },
        local2: { telefono: 5285695875, empleados: 14 },
        local3: { telefono: null, empleados: 29 },
        local4: { telefono: 5425875876, empleados: 17 },
      },
    },
  },
  {
    nombre: "Empresa2",
    informacion: {
      empleados: 99,
      direccion: {
        calle: "Calle Junin",
        numero: 329,
      },
      locales: {
        local1: { telefono: null, empleados: 8 },
        local2: { telefono: 5862325625, empleados: 23 },
        local3: { telefono: 5685214785, empleados: 51 },
        local4: { telefono: 5245854875, empleados: 17 },
      },
    },
  },
  {
    nombre: "Empresa3",
    informacion: {
      empleados: 70,
      direccion: {
        calle: "Av.Lopez Torres",
        numero: 934,
      },
      locales: {
        local1: { telefono: 5487521493, empleados: 10 },
        local2: { telefono: null, empleados: 15 },
        local3: { telefono: 5862548751, empleados: 20 },
        local4: { telefono: 5632587845, empleados: 25 },
      },
    },
  },
];

//* Crear una función que reciba el arreglo "empresas" definido aquí arriba y retornar la cantidad total de empleados, es decir, la sumatoria
//* de todos los empleados de las 3 empresas.

const obtenerCantidadEmpleados = (listadoEmpresas) => {
  //* Obtengo un arreglo de arreglos, es decir, un arreglo en donde cada posición del mismo (0, 1, 2) sera un arreglo de objetos con el valor asignado a cada local
  //* Recordar que el valor que tiene asignado cada local es un "objeto"

  const infoLocales = listadoEmpresas.map((empresa) => {
    return Object.values(empresa.informacion.locales);
  });

  //* Aplano un nivel el arreglo obtenido en el punto anterior
  const infoLocalesAplanado = infoLocales.flat();

  //* Obtengo un arreglo con las cantidades de empleados de todos los locales, es decir, obtengo un arreglo de números
  const cantidades = infoLocalesAplanado.map((local) => local.empleados);

  //* Retorno la sumatoria de ese arreglo de números
  return cantidades.reduce((value, acum) => value + acum);
};

const obtenerCantidadEmpleados2 = (listadoEmpresas) => {
  const cantidades = listadoEmpresas
    .map((empresa) => {
      return Object.values(empresa.informacion.locales);
    })
    .flat()
    .map((local) => local.empleados);

  return cantidades.reduce((value, acum) => value + acum);
};

console.log(obtenerCantidadEmpleados(empresas));
console.log(obtenerCantidadEmpleados2(empresas));
