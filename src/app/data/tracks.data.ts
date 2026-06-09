import { LearningTrack } from '../models/autor.model';

export const TRACKS: LearningTrack[] = [

  // ── POR DÓNDE EMPEZAR ──────────────────────────────────

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
    categoria: 'empezar',
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
        introduccion: 'Cerramos con Friedman porque "Libertad de Elegir" es el libro más accesible que existe sobre economía de mercado aplicada a problemas concretos: educación, medicina, regulación.',
        enfoque: 'Los primeros tres capítulos son los más importantes. Si alguien solo tiene tiempo para una parte, es esa.',
      },
    ],
  },

  {
    id: 'la-otra-vereda',
    titulo: 'La otra vereda',
    tagline: 'Para quien viene de la izquierda y quiere entender el argumento liberal en serio',
    descripcion: 'Este track no está hecho para convencerte de nada. Está hecho para que conozcas los mejores argumentos del liberalismo — no la caricatura, sino el argumento real.',
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
    categoria: 'empezar',
    pasos: [
      {
        recursoId: 'lo-que-se-ve',
        introduccion: 'Arrancamos por acá porque es el argumento más difícil de refutar y el que más incomoda a cualquier posición política. No habla de ideología — habla de consecuencias.',
        enfoque: 'Intentá aplicar el razonamiento de Bastiat a una política que vos apoyás. Es el ejercicio más valioso del track.',
      },
      {
        recursoId: 'basic-economics',
        introduccion: 'Sowell es quizás el autor más honesto intelectualmente de esta tradición. "Basic Economics" no es un panfleto — es un libro de economía accesible que explica cómo funcionan los precios y los mercados con ejemplos del mundo real.',
        enfoque: 'Los capítulos sobre control de precios y vivienda son los más reveladores. Leelos con la mente abierta.',
      },
      {
        recursoId: 'camino-servidumbre',
        introduccion: '"Camino de Servidumbre" no es un ataque a la izquierda — Hayek era admirador de muchos ideales socialistas. Es una advertencia sobre los mecanismos institucionales que llevan al autoritarismo aunque nadie lo quiera.',
        enfoque: 'Hayek no dice que todo socialismo lleva al nazismo. Dice que la planificación central concentra poder de formas difíciles de revertir. Esa distinción es importante.',
      },
      {
        recursoId: 'la-ley',
        introduccion: 'Cerramos con Bastiat porque después del recorrido, "La Ley" se lee distinto. Ahora tenés el contexto para entender por qué este texto sigue siendo tan relevante.',
        enfoque: 'En esta segunda lectura, intentá pensar cuál sería la respuesta de alguien que no coincide con Bastiat.',
      },
    ],
  },

  {
    id: 'estudiante-economia',
    titulo: 'Estudiante de economía',
    tagline: 'El contrapunto austriaco a lo que te enseñan en la facultad',
    descripcion: 'Si cursás economía en una universidad argentina o latinoamericana, probablemente te estén enseñando principalmente keynesianismo y economía neoclásica. Este track te da la otra perspectiva.',
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
    categoria: 'empezar',
    pasos: [
      {
        recursoId: 'uso-conocimiento',
        introduccion: 'Empezamos con el ensayo más importante de Hayek porque en 20 páginas destruye el supuesto central de toda la macroeconomía que vas a ver en la facultad: que el conocimiento puede centralizarse.',
        enfoque: 'Conectá el argumento de Hayek con lo que te enseñan sobre equilibrio general. ¿Cómo se sostiene uno frente al otro?',
      },
      {
        recursoId: 'camino-servidumbre',
        introduccion: '"Camino de Servidumbre" tiene un argumento económico central: que la planificación parcial genera presiones hacia más planificación, en una lógica que se autoalimenta.',
        enfoque: 'Prestá atención al capítulo sobre el Estado de Derecho. Hayek hace ahí una distinción entre reglas generales y dirección específica que es fundamental.',
      },
      {
        recursoId: 'liberalismo-mises',
        introduccion: '"Liberalismo" de Mises es más accesible que La Acción Humana y te da el sistema completo en menos páginas. Es el puente ideal entre los textos anteriores y la obra mayor de Mises.',
        enfoque: 'Fijate en cómo Mises fundamenta la propiedad privada no en moralidad sino en eficiencia económica.',
      },
      {
        recursoId: 'accion-humana',
        introduccion: 'Llegamos a La Acción Humana. No es necesario leerla entera — los primeros cinco capítulos son los más relevantes para un estudiante de economía.',
        enfoque: 'No te frustres si al principio parece abstracto. El capítulo sobre el cálculo económico es el payoff de todo el libro.',
      },
    ],
  },

  {
    id: 'sistema-libertario',
    titulo: 'El sistema libertario',
    tagline: 'El argumento más radical y más coherente del libertarismo',
    descripcion: 'Para quien ya tiene base liberal y quiere ir hasta las últimas consecuencias. Rothbard construyó el sistema filosófico más completo del libertarismo.',
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
    categoria: 'profundizar',
    pasos: [
      {
        recursoId: 'anatomia-estado',
        introduccion: 'Empezamos con el Rothbard más accesible. "Anatomía del Estado" es un ensayo breve pero es la mejor introducción a su pensamiento: desmonta sistemáticamente cada justificación del Estado.',
        enfoque: 'Prestá atención a cómo Rothbard define al Estado en las primeras páginas. Esa definición es la base de todo su sistema.',
      },
      {
        recursoId: 'etica-libertad',
        introduccion: '"La Ética de la Libertad" es la obra magna del libertarismo filosófico. Rothbard construye desde cero una teoría de los derechos basada en la autoposesión y de ahí deriva todo el sistema.',
        enfoque: 'Los capítulos 6 al 12 son el núcleo filosófico. Si algo se siente contraintuitivo, volvé a esos capítulos.',
      },
    ],
  },

  // ── PARA PROFUNDIZAR ───────────────────────────────────

  {
    id: 'joven-politica',
    titulo: 'Soy joven y me interesa la política',
    tagline: 'Para quien está formando su visión del mundo',
    descripcion: 'Un recorrido pensado para alguien de 16 a 25 años que empieza a interesarse por la política y la economía. Textos cortos, directos y sin tecnicismos que plantean las preguntas fundamentales.',
    objetivo: 'Construir una base sólida para pensar la política y la economía, con los textos más accesibles y directos de la tradición liberal.',
    paraQuien: [
      'Tenés entre 16 y 25 años y empezás a formarte una visión política',
      'Querés entender de qué hablan cuando hablan de liberalismo',
      'Buscás textos concretos, no abstractos ni académicos',
    ],
    nivel: 'principiante',
    duracionTotal: '2-3 semanas',
    color: '#B8A9D9',
    temas: ['libertad', 'estado', 'libre-mercado', 'politica'],
    categoria: 'empezar',
    pasos: [
      {
        recursoId: 'la-ley',
        introduccion: 'El mejor primer texto político que podés leer. Bastiat explica en 75 páginas qué es la ley, qué debería ser y qué pasa cuando el Estado la pervierte.',
        enfoque: 'Preguntate mientras leés: ¿cuántas leyes actuales entran en la categoría de ley pervertida según Bastiat?',
      },
      {
        recursoId: 'anatomia-estado',
        introduccion: 'Rothbard en su versión más accesible. 50 páginas que desmontarán muchas cosas que te enseñaron sobre el Estado.',
        enfoque: 'No tenés que estar de acuerdo con todo. Lo importante es que el argumento te haga pensar.',
      },
      {
        recursoId: 'mentalidad-anticapitalista',
        introduccion: 'Mises explica por qué tanta gente odia el capitalismo a pesar de que es el sistema que les dio prosperidad. Breve, accesible y muy útil para entender los debates políticos actuales.',
        enfoque: 'Pensá en personas que conocés. ¿Reconocés alguno de los patrones que describe Mises?',
      },
      {
        recursoId: 'por-una-nueva-libertad',
        introduccion: 'El manifiesto libertario de Rothbard. Aplica los principios liberales a problemas concretos que te afectan: educación, salud, trabajo.',
        enfoque: 'No es necesario leerlo entero — elegí los capítulos sobre los temas que más te interesen.',
      },
    ],
  },


  {
    id: 'raices-liberalismo',
    titulo: 'Las raíces del liberalismo',
    tagline: 'El fundamento filosófico e histórico de las ideas liberales',
    descripcion: 'Un recorrido por los textos que sentaron las bases filosóficas del liberalismo, desde Locke hasta Mill y Tocqueville. Para entender de dónde vienen las ideas antes de ver cómo se aplican.',
    objetivo: 'Entender el fundamento filosófico del liberalismo — derechos naturales, libertad individual, límites del poder — y cómo evolucionó desde el siglo XVII hasta el XIX.',
    paraQuien: [
      'Ya tenés base liberal y querés ir a los fundamentos filosóficos',
      'Te interesa la historia de las ideas y el pensamiento político',
      'Venís de la filosofía o el derecho y querés el origen teórico',
    ],
    nivel: 'intermedio',
    duracionTotal: '1 mes y medio',
    color: '#85B7EB',
    temas: ['filosofia-politica', 'derechos-naturales', 'libertad', 'democracia'],
    categoria: 'profundizar',
    pasos: [
      {
        recursoId: 'carta-tolerancia',
        introduccion: 'Arrancamos con Locke porque la tolerancia religiosa es donde el liberalismo nació históricamente. Este ensayo breve establece el principio de que el Estado no tiene autoridad sobre las conciencias.',
        enfoque: 'El argumento de Locke no es solo sobre religión — es sobre los límites del Estado sobre cualquier aspecto de la vida privada.',
      },
      {
        recursoId: 'segundo-tratado-gobierno',
        introduccion: 'El texto fundacional del liberalismo político. Locke establece que el poder político deriva del consentimiento y que los individuos tienen derechos naturales que el Estado no puede violar.',
        enfoque: 'El capítulo sobre la propiedad es el más importante y el más discutido. Leelo con cuidado.',
      },
      {
        recursoId: 'libertad-antiguos-modernos',
        introduccion: 'Constant hace en 40 páginas una de las distinciones más importantes de la filosofía política: la libertad de participar en el gobierno no es lo mismo que la libertad de vivir sin interferencia. El liberalismo defiende la segunda.',
        enfoque: 'Esta distinción explica por qué la democracia directa puede ser tan opresiva como la tiranía.',
      },
      {
        recursoId: 'sobre-libertad',
        introduccion: 'Mill lleva el argumento liberal a su máxima expresión con el principio del daño: el único fundamento legítimo para restringir la libertad de alguien es evitar que dañe a otros.',
        enfoque: 'El capítulo sobre la libertad de pensamiento y expresión sigue siendo el mejor argumento contra la censura que existe.',
      },
      {
        recursoId: 'democracia-america',
        introduccion: 'Tocqueville cierra el track porque su análisis de la democracia americana anticipa los peligros del igualitarismo y el "despotismo blando" — una tiranía sin tirano, ejercida por la opinión mayoritaria y el Estado benefactor.',
        enfoque: 'El concepto de "despotismo blando" en el volumen II es lo más relevante para entender el mundo actual.',
      },
    ],
  },

  {
    id: 'dinero-inflacion',
    titulo: 'Entender el dinero y la inflación',
    tagline: 'Por qué el dinero se destruye y quién tiene la culpa',
    descripcion: 'Un recorrido por los mejores textos sobre teoría monetaria austriaca y liberal. Para entender el origen de la inflación, el rol de los bancos centrales y por qué el dinero sano es una condición de la libertad.',
    objetivo: 'Entender por qué la inflación no es un fenómeno natural sino el resultado de decisiones políticas, y qué proponen los liberales como alternativa.',
    paraQuien: [
      'Querés entender la inflación más allá de los titulares',
      'Ya tenés base económica y querés profundizar en teoría monetaria',
      'Te interesan los debates sobre bancos centrales y criptomonedas',
    ],
    nivel: 'intermedio',
    duracionTotal: '1 mes',
    color: '#97C459',
    temas: ['dinero', 'inflacion', 'banca', 'libre-mercado'],
    categoria: 'profundizar',
    pasos: [
      {
        recursoId: 'capitalismo-libertad',
        introduccion: 'Empezamos con Friedman porque el capítulo sobre política monetaria de este libro es la introducción más clara al problema. Friedman explica cómo la Reserva Federal causó la Gran Depresión.',
        enfoque: 'El capítulo sobre el rol del gobierno en el dinero es el más relevante para este track.',
      },
      {
        recursoId: 'caso-contra-banco-central',
        introduccion: 'Rothbard desmonta la banca de reserva fraccionaria y el banco central como instituciones que generan inflación y ciclos económicos. Un argumento más radical que el de Friedman pero muy riguroso.',
        enfoque: 'Aunque no compartas las conclusiones, el análisis histórico de cómo surgió la banca central es fascinante.',
      },
      {
        recursoId: 'desnacionalizacion-dinero',
        introduccion: 'Hayek propone la solución más radical: eliminar el monopolio estatal sobre el dinero y permitir la competencia entre monedas privadas. Una idea que anticipó décadas los debates sobre Bitcoin.',
        enfoque: 'No es necesario estar de acuerdo con la propuesta para apreciar el diagnóstico del problema.',
      },
      {
        recursoId: 'historia-monetaria',
        introduccion: 'Cerramos con la obra empírica más importante de la tradición. Friedman y Schwartz demuestran con datos que la Gran Depresión fue causada por el colapso monetario provocado por la Fed.',
        enfoque: 'Es un libro largo y técnico — enfocate en la introducción y los capítulos sobre 1929-1933.',
      },
    ],
  },

  {
    id: 'por-que-falla-socialismo',
    titulo: 'Por qué falla el socialismo',
    tagline: 'El argumento económico completo, no solo el político',
    descripcion: 'El socialismo no fracasa solo por razones morales o políticas — fracasa por razones económicas fundamentales. Este track recorre los mejores textos que lo demuestran.',
    objetivo: 'Entender el argumento del cálculo económico de Mises, la teoría del conocimiento de Hayek y por qué el socialismo es imposible — no solo indeseable.',
    paraQuien: [
      'Ya conocés la crítica política al socialismo y querés la económica',
      'Querés argumentos sólidos más allá de "el socialismo no funciona"',
      'Estudiás economía y querés entender el debate Mises-socialismo',
    ],
    nivel: 'avanzado',
    duracionTotal: '2 meses',
    color: '#c9963a',
    temas: ['socialismo', 'calculo-economico', 'conocimiento', 'planificacion'],
    categoria: 'profundizar',
    pasos: [
      {
        recursoId: 'uso-conocimiento',
        introduccion: 'Empezamos con Hayek porque su argumento del conocimiento disperso es el más accesible y el más difícil de refutar. En 20 páginas establece por qué ningún planificador puede reemplazar al sistema de precios.',
        enfoque: 'Este ensayo es el prerequisito para entender el debate más profundo que viene después.',
      },
      {
        recursoId: 'socialismo-mises',
        introduccion: 'La refutación central. Mises demuestra que sin propiedad privada de los medios de producción es imposible el cálculo económico racional. El socialismo no puede saber qué producir ni cómo producirlo.',
        enfoque: 'La parte II, sobre el cálculo económico, es el corazón del libro. El resto es contexto.',
      },
      {
        recursoId: 'arrogancia-fatal',
        introduccion: 'El último Hayek sintetiza décadas de debate. El socialismo no es solo económicamente imposible — es el producto de una arrogancia intelectual: creer que la razón puede diseñar lo que solo la evolución cultural puede producir.',
        enfoque: 'El primer capítulo, sobre los límites de la razón, es el más importante.',
      },
      {
        recursoId: 'precios-produccion',
        introduccion: 'Cerramos con el análisis técnico del ciclo económico. Hayek muestra cómo la intervención monetaria genera los booms artificiales que inevitablemente colapsan — una aplicación práctica de todos los argumentos anteriores.',
        enfoque: 'Es el más técnico del track. Si tenés base económica, es el más valioso.',
      },
    ],
  },

  {
    id: 'regulacion-captura',
    titulo: 'El Estado que regula y el mercado que lo captura',
    tagline: 'Por qué la regulación casi siempre termina favoreciendo a los regulados',
    descripcion: 'Un track sobre la economía política de la regulación. Por qué las agencias creadas para proteger al público terminan protegiendo a las industrias, y qué dice la teoría económica sobre los límites del intervencionismo.',
    objetivo: 'Entender la teoría de la captura regulatoria, el intervencionismo como proceso y por qué las buenas intenciones no garantizan buenos resultados en política económica.',
    paraQuien: [
      'Te interesa la economía política y el rol del Estado en los mercados',
      'Querés entender por qué la regulación a menudo produce lo contrario de lo que busca',
      'Ya tenés base económica y querés profundizar en teoría de la regulación',
    ],
    nivel: 'intermedio',
    duracionTotal: '3 semanas',
    color: '#A8C97F',
    temas: ['regulacion', 'estado', 'intervencionismo', 'libre-mercado'],
    categoria: 'profundizar',
    pasos: [
      {
        recursoId: 'lo-que-se-ve',
        introduccion: 'Arrancamos con Bastiat porque el principio de las consecuencias no vistas es el fundamento de toda la crítica a la regulación. Toda intervención tiene efectos visibles e invisibles.',
        enfoque: 'Pensá en una regulación actual mientras leés. ¿Cuáles son los efectos que no se ven?',
      },
      {
        recursoId: 'caos-intervencionista',
        introduccion: 'Mises muestra que la intervención parcial en la economía genera distorsiones que generan presiones por más intervención. La regulación no es estable — tiende a crecer hasta el socialismo o a retroceder al libre mercado.',
        enfoque: 'El argumento sobre la lógica interna del intervencionismo es el más importante del libro.',
      },
      {
        recursoId: 'ciudadano-estado',
        introduccion: 'Stigler desarrolla la teoría de la captura regulatoria con evidencia empírica: las agencias reguladoras terminan siendo controladas por las industrias que regulan. Un argumento devastador contra el intervencionismo bien intencionado.',
        enfoque: 'Los casos históricos que Stigler analiza son tan relevantes hoy como cuando los escribió.',
      },
      {
        recursoId: 'conflict-of-visions',
        introduccion: 'Cerramos con Sowell porque explica por qué la gente sigue creyendo en la regulación a pesar de la evidencia. Las dos visiones del mundo que describe explican el debate político más profundo.',
        enfoque: 'La distinción entre visión constrictiva y no constrictiva es la clave del libro.',
      },
    ],
  },

  {
    id: 'capitalismo-moral',
    titulo: 'Capitalismo y moral',
    tagline: 'El argumento ético a favor del capitalismo, no solo el económico',
    descripcion: 'El capitalismo funciona — pero ¿es justo? Este track recorre los mejores argumentos morales a favor del mercado libre, desde la filosofía moral de Smith hasta la teoría de derechos de Rothbard.',
    objetivo: 'Entender por qué el capitalismo no solo es eficiente sino también el sistema más compatible con la dignidad, la libertad y la justicia — y poder defenderlo en ese terreno.',
    paraQuien: [
      'Aceptás los argumentos económicos del liberalismo pero te quedan dudas éticas',
      'Querés responder el argumento de que "el capitalismo funciona pero es injusto"',
      'Te interesa la filosofía moral y su relación con la economía',
    ],
    nivel: 'intermedio',
    duracionTotal: '1 mes',
    color: '#7EB8A4',
    temas: ['etica', 'capitalismo', 'derechos-naturales', 'justicia'],
    categoria: 'profundizar',
    pasos: [
      {
        recursoId: 'sentimientos-morales',
        introduccion: 'Empezamos con la primera gran obra de Smith porque establece que el mercado no requiere egoísmo puro — requiere simpatía y reputación. El capitalismo de Smith es moral desde sus fundamentos, no a pesar de ellos.',
        enfoque: 'El concepto del "espectador imparcial" es la clave. Es la base ética sobre la que descansa todo lo que viene después.',
      },
      {
        recursoId: 'mentalidad-anticapitalista',
        introduccion: 'Mises analiza el origen psicológico del anticapitalismo — el resentimiento, la envidia, la frustración. Entender por qué la gente odia el capitalismo es el primer paso para responder el argumento moral en su contra.',
        enfoque: 'Prestá atención al capítulo sobre los intelectuales. Es el más relevante para entender el debate cultural actual.',
      },
      {
        recursoId: 'etica-libertad',
        introduccion: 'Rothbard construye el argumento más riguroso: el capitalismo no es solo eficiente, es el único sistema compatible con los derechos naturales. La propiedad privada y el intercambio voluntario son moralmente obligatorios, no solo convenientes.',
        enfoque: 'Los primeros seis capítulos son los más importantes para este track. Ahí está el núcleo del argumento ético.',
      },
      {
        recursoId: 'conflict-of-visions',
        introduccion: 'Cerramos con Sowell porque explica por qué el debate moral sobre el capitalismo nunca se resuelve: las dos partes tienen visiones incompatibles de la naturaleza humana. Entender eso cambia cómo argumentás.',
        enfoque: 'La distinción entre resultados y procesos es central. El capitalismo no garantiza resultados justos — garantiza procesos justos.',
      },
    ],
  },
];