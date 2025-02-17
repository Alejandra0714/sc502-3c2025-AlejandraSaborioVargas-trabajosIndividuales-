
const estudiantes = [
    { nombre: "Juan", apellido: "Pérez", nota: 8 },
    { nombre: "Ana", apellido: "Gómez", nota: 9 },
    { nombre: "Luis", apellido: "Martínez", nota: 7 },
    { nombre: "Marta", apellido: "Rodríguez", nota: 10 }
  ];
  
  let totalNotas = 0;
  const listaEstudiantesDiv = document.getElementById('listaEstudiantes');
  

  estudiantes.forEach(estudiante => {

    const divEstudiante = document.createElement('div');
    divEstudiante.classList.add('mb-2');
    divEstudiante.textContent = `${estudiante.nombre} ${estudiante.apellido}`;
    listaEstudiantesDiv.appendChild(divEstudiante);
  

    totalNotas += estudiante.nota;
  });
  

  const promedio = totalNotas / estudiantes.length;
  

  document.getElementById('promedio').textContent = promedio.toFixed(2);