function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Qué es un Telescopio?",
    ayuda: "Lo utilizan para ver las estrellas",
    ayudaImg: "../img/Telescopio2.jpg",
    imagen: "../img/telescopio1.jpg",
    respuesta: "Instrumento óptico para observar objetos lejanos, en especial cuerpos celestes, que consiste esencialmente en un espejo o lente que concentra los rayos luminosos y forma una imagen del objeto, y una lente que amplía esta imagen",
    distractores: ["Instrumento musical utilizado para crear sonidos armonicos", "utencilio de cocina utilizado para batir ingredientes y obtener una mejor consitencia", "Objeto utilizado por historiadores para poder observar diferentes sucesos en la historia"],
  },
  {
    pregunta: "¿Qué es la NASA?",
    ayuda: "Llevo al humano a un lugar lejos de este planeta",
    ayudaImg: "../img/luna.jpg",
    imagen: "../img/nasa.png",
    respuesta: "Es la Administración Nacional de Aeronáutica y el Espacio que nos ayuda a entender y proteger el planeta, y explora el universo",
    distractores: ["Es la Administracion Nacional de Armas  y el Estado que brinda armamento a los paises","Es la Administracion Nacional de Comida y de Gastronomia que brinda alimento al mundo y sus rinconces mas profundos","Es la Administracion Nacional de Aviones y Vehiculos terrestres","Es la Administracion Nacional de Ciencia y Tecnologia que buscan la evolucion tecnologica"],
  },
  {
    
    pregunta: "¿Cuáles de los siguientes grupos de telescopios  realmente existen?",
    ayuda: "CHJWS",
    ayudaImg: "../img/satelites.jpg",
    imagen: "../img/sate.jpg",
    respuesta: "Chandra, Hubble, James Webb, Spitzer ",
    distractores: ["Walle, Pepe, Guillermo2, Mauricio", "Splintercell, Robloxer, Sony, Mania", "SpiderForce, Spoky, Oct,"],
  },
  {
    
    pregunta: "¿Quién fue el creador del telescopio James Webb?",
    ayuda: "Piensa en plural",
    ayudaImg: "../img/g.jpg",
    imagen: "../img/12.jpg",
    respuesta: "Varios voluntarios y cientificos experimentados",
    distractores: ["Pedrito Sola", "Albert Einstein", "Nikola Tesla"],
  },
  {
    
    pregunta: "¿Cuál es el objetivo de mandar estos dispositivos al espacio exterior?",
    ayuda: "Ayuda a ver mas alla de nuestros limites",
    ayudaImg: "../img/qw.jpeg",
    imagen: "../img/qr.jpg",
    respuesta: "Para la observación de planetas, estrellas, galaxias y otros cuerpos celestes",
    distractores: ["Para la observacion de los cambios en la marea", "Para la observacion de los habitantes de la tierra", "Para la observacion y estudio de los cambios en la atmosfera"],
  }, {
    
    pregunta: "¿Qué tiene de especial el telescopio James webb?",
    ayuda: "Ayudo a observar en una mejor resolucion a miles de km de nuestro hogar",
    ayudaImg: "../img/13.jpg",
    imagen: "../img/21.jpeg",
    respuesta: "Ofrece la imagen más profunda del universo conocida hasta ahora",
    distractores: [ "Ofrece el mejor sonido del universo conocido hasta ahora", "Ofrece la mejor cobertura de señal", "Ofrece la mejor vigilancia aerea"],
  }, {
    
    pregunta: "¿Cuál de estos telescopios es el mas potente?",
    ayuda: "Es enorme, literalmente",
    ayudaImg: "../img/gf.png",
    imagen: "../img/qwq.jpg",
    respuesta: "Giant Magellan Telescope ",
    distractores: ["James Webbs", "Chandra", "Hubble"],
  }, {
    
    pregunta: "¿Un telescopio tiene que estar obligatoriamente fuera del planeta para ser usado?",
    ayuda: "Siempre antes de salir a un lugar desconocido se empieza desde abajo",
    ayudaImg: "../img/41.jpg",
    imagen: "../img/rfs.jpg",
    respuesta: "NO",
    distractores: ["SI"],
  }, {
    
    pregunta: "¿Cómo son llevados los telescopios a la orbita de la tierra?",
    ayuda: "Venciendo la fuerza de gravedad",
    ayudaImg: "../img/qwe.jpg",
    imagen: "../img/321.jpg",
    respuesta: "Por medio de un cohete",
    distractores: ["Por medio de un globo espacial", "Via bluetooth", "Por paqueteria"],
  }, {
    
    pregunta: "¿Cuántos paises colaboraron para la creación del telescopio James Webb?",
    ayuda: "Es un multiplo de 7",
    ayudaImg: "../img/mundo.jpg",
    imagen: "../img/apoyo.jpg",
    respuesta: "14",
    distractores: ["3", "23", "10"],
  }, {
    
    pregunta: "¿Por qué el James Webb es una maravilla tecnologica?",
    ayuda: "Nos permitira entender cosas que no nos imaginamos",
    ayudaImg: "../img/1.jpg",
    imagen: "../img/pablo.jpg",
    respuesta: "Porque este explorará todas las fases de la historia cósmica y ayudará a la humanidad a comprender los orígenes del universo y nuestro lugar en él",
    distractores: ["Porque podra tomar fotos en muy alta calidad a pesar de la distancia", "Por su facilidad economica para poder vigilar todos los lugares del planeta", "Por sus multiples funciones para poder captar redes"],
  }, {
    
    
    pregunta: "¿De qué trata el evento conocido como NASA SPACE APPS?",
    ayuda: "Participan Varios equipos para resolver una problematica",
    ayudaImg: "../img/jovenes.jpg",
    imagen: "../img/logo.png",
    respuesta: "Es un proyecto de la NASA para desarrollar aplicaciones móviles y otros inventos utilizando los datos del universo, el medio ambiente, etc..",
    distractores: ["Es un proyecto de la Nasa para desarrollar el mejor platillo para el deleite de todos los comensales", "Es un concurso de ciencia y tecnologia en busca del mejor carrito bluethoot", "Es un concurso donde se busca al mejor cantante"],
  },
];
