//* ====== EJERCICIO 2 ======

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
        local4: { telefono: null, empleados: 17 },
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
        local4: { telefono: null, empleados: 25 },
      },
    },
  },
];

//* Crear una función que reciba el arreglo "empresas" definido aquí arriba y retornar un arreglo de objetos con el siguiente formato
//* [{
//*     empresa:
//*     localesSinTel:
//* }]
//* donde "empresa" es un string con el de la empresa, y "localesSinTel" es un arreglo de strings con los locales que no cuentan con un telefono asignado.

const obtenerInformacionLocalesSinTel = (listadoEmpresas) => {
  const infoEmpresas = listadoEmpresas.map((empresa) => {
    //* POR CADA ITERACIÓN DEL MÉTODO MAP SE HACE LO SIGUIENTE ===============
    const { nombre } = empresa;

    //* Obtengo un arreglo de arreglos con la información (key-values) de los locales
    const localesInfo = Object.entries(empresa.informacion.locales);

    //* Filtro el arreglo anterior por los locales que NO tengan asignado un telefono
    const localesInfoFiltrados = localesInfo.filter(
      (local) => !local[1].telefono
    );

    //* Mapeo el arreglo anterior para retornar un arreglo de strings con los nombres de los locales
    const localesSinTel = localesInfoFiltrados.map((local) => local[0]);

    //* Retorno lo siguiente para de esta manera colocar este objeto en una nueva posición de mi nuevo arreglo
    return {
      nombre,
      localesSinTel,
    };

    //* FIN ITERACION
  });

  return infoEmpresas;
};

const obtenerInformacionLocalesSinTel2 = (listadoEmpresas) => {
  return listadoEmpresas.map((empresa) => {
    const { nombre } = empresa;

    const localesSinTel = Object.entries(empresa.informacion.locales)
      .filter((local) => !local[1].telefono)
      .map((local) => local[0]);

    return {
      nombre,
      localesSinTel,
    };
  });
};

console.log(obtenerInformacionLocalesSinTel(empresas));
console.log(obtenerInformacionLocalesSinTel2(empresas));
