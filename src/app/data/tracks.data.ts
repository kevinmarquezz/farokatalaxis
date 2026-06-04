import { LearningTrack } from '../models/autor.model';

export const TRACKS: LearningTrack[] = [
  {
    id: 'empezar-desde-cero',
    titulo: 'Empezar desde cero',
    tagline: 'Tu primera vez con las ideas de la libertad',
    descripcion: 'Un recorrido pensado para quien nunca leyó economía liberal pero tiene curiosidad genuina. Empezamos con los textos más cortos y accesibles de la tradición — sin jerga, sin tecnicismos — y terminamos con una base sólida para seguir explorando.',
    objetivo: 'Entender por qué el mercado funciona y el Estado falla, con argumentos propios para defenderlo en cualquier conversación.',
    paraQuien: [
      'Nunca leíste economía pero tenés curiosidad',
      'Escuchaste hablar del liberalismo y querés entender de qué se trata',
      'Querés una base antes de entrar a textos más densos',
    ],
    nivel: 'principiante',
    duracionTotal: '3-4 semanas',
    color: '#c9a227',
    temas: ['liberalismo', 'estado', 'libre-mercado'],
    pasos: [
      {
        recursoId: 'la-ley',
        introduccion: 'Arrancamos con Bastiat porque "La Ley" es el texto más claro y directo que existe sobre por qué el Estado no puede redistribuir sin robar. En 75 páginas plantea el problema central del liberalismo de una forma que nadie pudo superar en 170 años.',
        enfoque: 'Prestá atención a la distinción entre ley legítima y ley pervertida — es el eje de todo el argumento.',
      },
      {
        recursoId: 'lo-que-se-ve',
        introduccion: 'El segundo Bastiat. Este ensayo introdujo el concepto de costo de oportunidad antes de que tuviera nombre. Es cortísimo pero cambia la manera en que vas a mirar cualquier política económica de acá en adelante.',
        enfoque: 'El ejemplo del vidrio roto al principio parece trivial pero es la clave de todo. No lo saltees.',
      },
      {
        recursoId: 'anatomia-estado',
        introduccion: 'Rothbard en su versión más accesible. "Anatomía del Estado" es un ensayo breve que desmonta la idea de que el gobierno nos representa. Después de Bastiat, este texto lleva el argumento un paso más lejos.',
        enfoque: 'Fijate en cómo Rothbard define al Estado al principio — esa definición es la base de todo lo que sigue.',
      },
      {
        recursoId: 'libertad-elegir',
        introduccion: 'Cerramos con Friedman porque "Libertad de Elegir" es el libro más accesible que existe sobre economía de mercado aplicada a problemas concretos: educación, medicina, regulación. Es el que podés recomendar a cualquier persona sin importar su background.',
        enfoque: 'Los primeros tres capítulos son los más importantes. Si alguien solo tiene tiempo para una parte, es esa.',
      },
    ],
  },

  {
    id: 'la-otra-vereda',
    titulo: 'La otra vereda',
    tagline: 'Para quien viene de la izquierda y quiere entender el argumento liberal en serio',
    descripcion: 'Este track no está hecho para convencerte de nada. Está hecho para que conozcas los mejores argumentos del liberalismo — no la caricatura, sino el argumento real. Empezamos por donde más coincidencias hay y avanzamos hacia las diferencias más profundas.',
    objetivo: 'Poder discutir con liberales de igual a igual, entendiendo sus argumentos desde adentro aunque no los compartas.',
    paraQuien: [
      'Venís de ideas progresistas, keynesianas o de izquierda',
      'Querés entender al "enemigo" con honestidad intelectual',
      'Estás cansado de las caricaturas de ambos lados',
    ],
    nivel: 'principiante',
    duracionTotal: '3-4 semanas',
    color: '#5DCAA5',
    temas: ['estado', 'libre-mercado', 'politica-economica'],
    pasos: [
      {
        recursoId: 'lo-que-se-ve',
        introduccion: 'Arrancamos por acá porque "Lo que se ve y lo que no se ve" es el argumento más difícil de refutar y el que más incomoda a cualquier posición política. No habla de ideología — habla de consecuencias. Es un buen punto de partida neutral.',
        enfoque: 'Intentá aplicar el razonamiento de Bastiat a una política que vos apoyás. Es el ejercicio más valioso del track.',
      },
      {
        recursoId: 'basic-economics',
        introduccion: 'Sowell es quizás el autor más honesto intelectualmente de esta tradición. "Basic Economics" no es un panfleto — es un libro de economía accesible que explica cómo funcionan los precios, los incentivos y los mercados con ejemplos del mundo real. Muchos lectores de izquierda lo encuentran más convincente que otros autores porque Sowell no demoniza.',
        enfoque: 'Los capítulos sobre control de precios y vivienda son los más reveladores. Leelos con la mente abierta.',
      },
      {
        recursoId: 'camino-servidumbre',
        introduccion: 'Acá llegamos al texto más importante y más discutido. "Camino de Servidumbre" no es un ataque a la izquierda — Hayek era admirador de muchos ideales socialistas. Es una advertencia sobre los mecanismos institucionales que llevan al autoritarismo aunque nadie lo quiera. Haberlo leído es obligatorio para cualquier debate serio.',
        enfoque: 'Hayek no dice que todo socialismo lleva al nazismo. Dice que la planificación central concentra poder de formas que se vuelven difíciles de revertir. Esa distinción es importante.',
      },
      {
        recursoId: 'la-ley',
        introduccion: 'Cerramos con Bastiat porque después del recorrido, "La Ley" se lee distinto. Ahora tenés el contexto para entender por qué este texto sigue siendo tan relevante y también para identificar dónde podés estar de acuerdo y dónde no.',
        enfoque: 'En esta segunda lectura, intentá pensar cuál sería la respuesta de alguien que no coincide con Bastiat. Ese ejercicio vale más que cualquier resumen.',
      },
    ],
  },

  {
    id: 'estudiante-economia',
    titulo: 'Estudiante de economía',
    tagline: 'El contrapunto austriaco a lo que te enseñan en la facultad',
    descripcion: 'Si cursás economía en una universidad argentina o latinoamericana, probablemente te estén enseñando principalmente keynesianismo y economía neoclásica. Este track te da la otra perspectiva — la que casi ningún programa incluye — para que puedas pensar con más herramientas.',
    objetivo: 'Entender la crítica austriaca a la economía mainstream, el problema del cálculo económico y por qué el sistema de precios no puede ser reemplazado por ningún planificador.',
    paraQuien: [
      'Estudiás economía en la facultad',
      'Ya tenés base de micro y macro pero querés el contrapunto',
      'Te hacen ruido algunas cosas que te enseñan pero no sabés bien por qué',
    ],
    nivel: 'intermedio',
    duracionTotal: '1 mes y medio',
    color: '#AFA9EC',
    temas: ['praxeologia', 'conocimiento', 'planificacion', 'capital'],
    pasos: [
      {
        recursoId: 'uso-conocimiento',
        introduccion: 'Empezamos con el ensayo más importante de Hayek porque en 20 páginas destruye el supuesto central de toda la macroeconomía que vas a ver en la facultad: que el conocimiento puede centralizarse. Si el conocimiento es disperso y local, ningún planificador puede reemplazar al sistema de precios. Es el argumento más difícil de refutar en toda la economía.',
        enfoque: 'Conectá el argumento de Hayek con lo que te enseñan sobre equilibrio general. ¿Cómo se sostiene uno frente al otro?',
      },
      {
        recursoId: 'camino-servidumbre',
        introduccion: '"Camino de Servidumbre" no es solo política — tiene un argumento económico central: que la planificación parcial genera presiones hacia más planificación, en una lógica que se autoalimenta. Para un estudiante de economía, los primeros capítulos son los más relevantes.',
        enfoque: 'Prestá atención al capítulo sobre el Estado de Derecho. Hayek hace ahí una distinción entre reglas generales y dirección específica que es fundamental.',
      },
      {
        recursoId: 'liberalismo-mises',
        introduccion: '"Liberalismo" de Mises es más accesible que La Acción Humana y te da el sistema completo en menos páginas. Es el puente ideal entre los textos anteriores y la obra mayor de Mises.',
        enfoque: 'Fijate en cómo Mises fundamenta la propiedad privada no en moralidad sino en eficiencia económica. Es un argumento muy distinto al de Locke y vale la pena entender la diferencia.',
      },
      {
        recursoId: 'accion-humana',
        introduccion: 'Llegamos a La Acción Humana. No es necesario leerla entera en este punto — los primeros cinco capítulos son los más relevantes para un estudiante de economía. Ahí Mises construye la praxeología como alternativa epistemológica a la econometría. Es denso pero es el texto más importante de esta tradición.',
        enfoque: 'No te frustres si al principio parece abstracto. El capítulo sobre el cálculo económico (capítulo 26) es el payoff de todo el libro.',
      },
    ],
  },

  {
    id: 'sistema-libertario',
    titulo: 'El sistema libertario',
    tagline: 'El argumento más radical y más coherente del libertarismo',
    descripcion: 'Para quien ya tiene base liberal y quiere ir hasta las últimas consecuencias. Rothbard construyó el sistema filosófico más completo del libertarismo: desde la crítica al Estado hasta una teoría completa de derechos, propiedad y justicia basada en la autoposesión.',
    objetivo: 'Entender el anarcocapitalismo como sistema filosófico coherente, sus fundamentos en el derecho natural y sus implicancias prácticas.',
    paraQuien: [
      'Ya leíste a Hayek, Mises o Bastiat y querés ir más lejos',
      'Te interesa la filosofía política y los fundamentos del derecho',
      'Querés entender el argumento libertario más radical antes de aceptarlo o rechazarlo',
    ],
    nivel: 'avanzado',
    duracionTotal: '1 mes',
    color: '#F0997B',
    temas: ['anarcocapitalismo', 'derechos-naturales', 'propiedad', 'estado'],
    pasos: [
      {
        recursoId: 'anatomia-estado',
        introduccion: 'Empezamos con el Rothbard más accesible. "Anatomía del Estado" es un ensayo breve pero es la mejor introducción a su pensamiento: desmonta sistemáticamente cada justificación del Estado. Si ya leíste a Bastiat, este texto lleva el argumento mucho más lejos.',
        enfoque: 'Prestá atención a cómo Rothbard define al Estado en las primeras páginas. Esa definición — monopolio de la violencia sobre un territorio — es la base de todo su sistema.',
      },
      {
        recursoId: 'etica-libertad',
        introduccion: '"La Ética de la Libertad" es la obra magna del libertarismo filosófico. Rothbard construye desde cero una teoría de los derechos basada en la autoposesión — la idea de que cada persona es dueña de sí misma — y de ahí deriva todo el sistema: propiedad, contratos, justicia, y el rol legítimo de la fuerza. Es densa pero es el argumento más coherente de esta tradición.',
        enfoque: 'Los capítulos 6 al 12 son el núcleo filosófico. El resto aplica esos principios a casos concretos. Si algo se siente contraintuitivo, volvé a esos capítulos — la respuesta generalmente está ahí.',
      },
    ],
  },
];