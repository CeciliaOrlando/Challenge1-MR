const students = [
  { id: 1, name: 'Juan', age: 20, grade: 2 },
  { id: 2, name: 'Nicolas', age: 22, grade: 6 },
  { id: 3, name: 'Agustín', age: 23, grade: 8 },
  { id: 4, name: 'David', age: 21, grade: 4 },
  { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => {
  // Usamos .map() para crear un nuevo arreglo con la propiedad status añadida
  return students.map(student => ({
      ...student, // Copiamos las propiedades del objeto original (... spread operator)
      status: student.grade >= 4 ? 'aprobado' : 'desaprobado' // Condicional para asignar 'aprobado' o 'desaprobado'
  }));
};

// Llamamos a la función y almacenamos el resultado en una nueva variable
const studentsWithStatus = addStatusToStudents(students);

// Creamos dos nuevas variables para almacenar los aprobados y desaprobados
const approvedStudents = studentsWithStatus.filter(student => student.status === 'aprobado');
const failedStudents = studentsWithStatus.filter(student => student.status === 'desaprobado');

// Mostramos los resultados
console.log("Estudiantes con su estado:", studentsWithStatus);
console.log("Aprobados:", approvedStudents);
console.log("Desaprobados:", failedStudents);
