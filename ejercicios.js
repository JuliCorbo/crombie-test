const alumnos = [
    {
      nombre: "Jose",
      nota: 9,
    },
    {
      nombre: "pepe",
      nota: 10,
    },
    {
      nombre: "Carlos",
      nota: 5,
    },
    {
      nombre: "Maria",
      nota: 10,
    },
  ];
  
  let notaMayor = 0;
  let nombreNotaMayor = "";
  
  alumnos.forEach((alumno) => {
    if (alumno.nota > notaMayor) {
      notaMayor = alumno.nota;
      nombreNotaMayor = alumno.nombre;
    }
  });
  
  console.log(
    "La nota mayor es de ",
    nombreNotaMayor,
    " con ",
    notaMayor,
  );