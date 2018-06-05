window.onload = function (){
  const tasks = [
    {
      name: 'Pasear al perro',
      duration: 40
    },
    {
      name: 'Estudiar JS',
      duration: 120
    },
    {
      name: 'Ver un capítulo de Aggretsuko',
      duration: 15
    },
    {
      name: 'Ir a clases',
      duration: 300
    },
    {
      name: 'Cepillar al gato',
      duration: 40
    },
    {
      name: 'Ver fail compilation en Youtube',
      duration: 120
    }
  ];

  //Arreglo de tareas
  //arreglo de objeto seria "task" 
  //FOR (normal)
  let taskNames = [];
  for (let i= 0; i < tasks.length; i++){
    taskNames.push(tasks[i].name); /*con esto traigo la info a mi arreglo vacio /task[i] va recorriendo cada una de las posiciones en que se va parar de name */
  }
  //FOREACH
  /*Esto mismo (lo de arriba) se podría hacer con FOREACH pasa si o si por todos los elementos y no devuelve un arreglo nuevo tambien se debe hacer un arreglo vacio)*/
  let taskNames = [];
  tasks.forEach((tasks) => { /*en el () van las tareas que van dentro del arreglo o se podria poner index es decir i*/
    taskNames.push(tasks.name); /*solo se pone el nombre del arreglo con .name ya que esa es la propiedad que reccorrera */
  })

//REFACTORIZACIÓN DE FOREACH
let taskNames = [];
tasks.forEach(tasks => taskNames.push(tasks.name));

//MAP
const taskNames = tasks.map((tasks) /*tasks es el parametro y debe ser el mismo que abajo*/ => { 
  return tasks.name; /*este es que retorna el parametro.propiedad */
})

//REFACTORIZACION DE MAP
const taskNames = tasks.map(tasks => tasks.name);

//se acabo el primer ejemplo con 3 maneras disintas

//NUEVO EJERCICIO
//Se va a meter en un arreglo nuevo solo las tareas que tomaron mas de 2 horas (120 minutos)

//FOREACH (no devuelve un arreglo nuevo por lo tanto hay que deglarar las tareas que duran mas de 2 horas)
let difficultTasks = [];
tasks.forEach((element) => {
  if (element.duration >= 120) {
    difficultTasks.push(element);
  }
});

//FILTER (devuelve un arreglo nuevo con el filtro que le doy en su interior)(no se pueden hacer mas de un parametros a la vez, porque solo puede comparar una cosa si se necesita comparar mas parametros deberia usarse for o foreash)
const difficultTasks = tasks.filter((index) => { /*puede ser index, element lo que quiera */
  return index.duration >= 120;
});

//REFACTORIZACION DE FILTER
const difficultTasks = tasks.filter(index => index.duration >= 120);
// se puede sacar el parentesis ((index) por que es uno solo


//NUEVO EJERCICIO
//quiero sumar la duracion de todas las tareas

//REDUCE (recorro y saco la duracion de cada tarea, los valores los pusheo a una variable vacia y luego sumo)

//primero hacemos el map para sacar la duracion de las tareas

//[40,120,15,300,40,120]
//40+120= 160
//160+15= 175
//175+300= 475
//475+40= 515
//615+120= 635

const taskDuration = tasks.map ((index) => {
  //parametro.propiedad (devuelve todos los minutos de cada tarea)
  return index.duration;
}).reduce((previousValue/*40*/, currentValue/*120*/) => {
  return previousValue + currentValue; //va sumando cada vez como se ve arriba
});




}