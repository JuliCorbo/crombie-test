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
  
  alumnos.forEach((e) => {
    if (e.nota > notaMayor) {
      notaMayor = e.nota;
      nombreNotaMayor = e.nombre;
    }
  });
  
  console.log("la nota mayor es", notaMayor, "del alumno", nombreNotaMayor);




  