import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'windsurf',
    name: 'Windsurf',
    nameEn: 'Windsurfing',
    nameCa: 'Windsurf',
    description: 'Domina el arte de navegar con el viento. Aprende a deslizarte sobre el agua combinando equilibrio, técnica y la fuerza del viento.',
    longDescription: 'El windsurf es uno de los deportes náuticos más emocionantes y completos. En nuestros cursos aprenderás desde los fundamentos básicos hasta maniobras avanzadas. Playa Larga ofrece condiciones ideales con vientos constantes y aguas tranquilas perfectas para el aprendizaje.',
    unsplashQuery: 'windsurfing ocean',
    levels: [
      { name: 'Iniciación', description: 'Primeros pasos en el windsurf', duration: '6 horas', included: ['Equilibrio en tabla', 'Posición básica', 'Navegación recta'] },
      { name: 'Intermedio', description: 'Perfecciona tu técnica', duration: '8 horas', included: ['Viradas', 'Trasluchadas', 'Navegación en ceñida'] },
      { name: 'Avanzado', description: 'Domina maniobras complejas', duration: '10 horas', included: ['Planing', 'Water start', 'Maniobras freestyle'] }
    ],
    included: ['Material completo', 'Neopreno', 'Seguro de accidentes', 'Monitor titulado', 'Fotos y vídeos'],
    minAge: 8,
    faqs: [
      { question: '¿Necesito saber nadar?', answer: 'Sí, es imprescindible saber nadar para practicar windsurf de forma segura.' },
      { question: '¿Qué condiciones de viento son ideales?', answer: 'Para iniciación, vientos de 8-15 nudos son perfectos. Para avanzados, 15-25 nudos.' },
      { question: '¿Se puede practicar todo el año?', answer: 'Sí, aunque la mejor temporada es de abril a octubre por las temperaturas.' },
      { question: '¿Incluye el material?', answer: 'Sí, todo el material está incluido: tabla, vela, neopreno y chaleco.' },
      { question: '¿Cuántas personas por grupo?', answer: 'Máximo 6 alumnos por monitor para garantizar atención personalizada.' }
    ],
    relatedSlugs: ['wing-foil', 'kitesurf', 'paddle-surf']
  },
  {
    slug: 'kitesurf',
    name: 'Kitesurf',
    nameEn: 'Kitesurfing',
    nameCa: 'Kitesurf',
    description: 'Vuela sobre el agua con la fuerza del viento. El kitesurf combina la adrenalina del wakeboard con la libertad del parapente.',
    longDescription: 'El kitesurf es una experiencia única que te permite deslizarte y saltar sobre el agua impulsado por una cometa. Nuestro método progresivo garantiza un aprendizaje seguro y efectivo. Las condiciones de Playa Larga son excepcionales para este deporte con viento térmico constante.',
    unsplashQuery: 'kitesurfing beach',
    levels: [
      { name: 'Iniciación', description: 'Control de cometa y body drag', duration: '9 horas', included: ['Manejo de cometa', 'Body drag', 'Water start'] },
      { name: 'Intermedio', description: 'Navegación independiente', duration: '6 horas', included: ['Navegación en ambos sentidos', 'Ceñida', 'Control de potencia'] },
      { name: 'Avanzado', description: 'Saltos y transiciones', duration: '8 horas', included: ['Saltos básicos', 'Transiciones', 'Riding toeside'] }
    ],
    included: ['Cometa y barra', 'Tabla', 'Arnés', 'Neopreno', 'Seguro RC'],
    minAge: 12,
    faqs: [
      { question: '¿Es peligroso el kitesurf?', answer: 'Con formación adecuada y respetando las normas de seguridad, es un deporte seguro.' },
      { question: '¿Cuánto tiempo se tarda en aprender?', answer: 'Con 9-12 horas de curso, la mayoría de alumnos navegan de forma autónoma.' },
      { question: '¿Necesito mucha fuerza física?', answer: 'No, la técnica es más importante que la fuerza. El arnés absorbe la tracción.' },
      { question: '¿Puedo hacer kitesurf si peso poco?', answer: 'Sí, adaptamos el tamaño de la cometa al peso y condiciones de viento.' },
      { question: '¿Qué pasa si no hay viento?', answer: 'Reprogramamos la clase sin coste adicional para otro día con mejores condiciones.' }
    ],
    relatedSlugs: ['windsurf', 'wing-foil', 'wake-board']
  },
  {
    slug: 'catamaran',
    name: 'Catamarán',
    nameEn: 'Catamaran',
    nameCa: 'Catamarà',
    description: 'Navega en un catamarán de vela ligera. Aprende las técnicas de navegación a vela en una embarcación estable y emocionante.',
    longDescription: 'La navegación en catamarán es perfecta para quienes buscan velocidad y emoción sin renunciar a la estabilidad. Nuestros catamaranes Hobie Cat son ideales para el aprendizaje y la diversión. Descubre la sensación de navegar a vela en las aguas cristalinas de la Costa Dorada.',
    unsplashQuery: 'catamaran sailing',
    levels: [
      { name: 'Iniciación', description: 'Fundamentos de navegación a vela', duration: '6 horas', included: ['Nomenclatura náutica', 'Maniobras básicas', 'Seguridad'] },
      { name: 'Intermedio', description: 'Navegación autónoma', duration: '8 horas', included: ['Viradas y trasluchadas', 'Trimado de velas', 'Navegación en ceñida'] },
      { name: 'Avanzado', description: 'Técnicas de regata', duration: '10 horas', included: ['Navegación con trapecio', 'Técnicas de regata', 'Tácticas de viento'] }
    ],
    included: ['Catamarán Hobie Cat', 'Chalecos salvavidas', 'Neopreno', 'Monitor titulado', 'Seguro'],
    minAge: 10,
    faqs: [
      { question: '¿Puedo venir con un acompañante?', answer: 'Sí, los catamaranes son biplaza, ideal para parejas o amigos.' },
      { question: '¿Es necesaria experiencia previa?', answer: 'No, nuestros cursos de iniciación empiezan desde cero.' },
      { question: '¿Qué tipo de catamarán usáis?', answer: 'Utilizamos Hobie Cat 15 y 16, referentes mundiales en vela ligera.' },
      { question: '¿Hay riesgo de volcar?', answer: 'Es poco frecuente en iniciación, pero si ocurre, enseñamos a adrizar.' },
      { question: '¿Puedo navegar solo tras el curso?', answer: 'Tras el nivel intermedio estarás preparado para navegar de forma autónoma.' }
    ],
    relatedSlugs: ['patin-catalan', 'windsurf', 'paddle-surf']
  },
  {
    slug: 'patin-catalan',
    name: 'Patín Catalán',
    nameEn: 'Catalan Boat',
    nameCa: 'Patí Català',
    description: 'Descubre la embarcación tradicional de la Costa Brava. El patín catalán es único en el mundo y forma parte de nuestra identidad mediterránea.',
    longDescription: 'El patín catalán es una embarcación de vela latina única en el Mediterráneo. Su diseño centenario lo hace perfecto para la navegación costera. Aprende a navegar esta joya de la tradición catalana con nuestros monitores expertos en aguas de Tarragona.',
    unsplashQuery: 'traditional sailing boat mediterranean',
    levels: [
      { name: 'Iniciación', description: 'Conoce el patín catalán', duration: '4 horas', included: ['Historia del patín', 'Maniobras básicas', 'Navegación costera'] },
      { name: 'Intermedio', description: 'Navegación con vela latina', duration: '6 horas', included: ['Cambios de bordo', 'Ajuste de vela latina', 'Navegación en diferentes rumbos'] },
      { name: 'Avanzado', description: 'Dominio completo', duration: '8 horas', included: ['Regatas', 'Navegación con olas', 'Maniobras avanzadas'] }
    ],
    included: ['Patín completo', 'Chaleco', 'Seguro', 'Monitor especializado', 'Material didáctico'],
    faqs: [
      { question: '¿Qué es un patín catalán?', answer: 'Es una embarcación tradicional de vela latina, típica de Cataluña desde el siglo XIX.' },
      { question: '¿Es difícil de manejar?', answer: 'Tiene sus particularidades, pero con nuestro método se aprende rápidamente.' },
      { question: '¿Cuántas personas caben?', answer: 'Normalmente 2-3 personas dependiendo del modelo.' },
      { question: '¿Se practica en competición?', answer: 'Sí, hay regatas de patín catalán en toda la costa catalana.' },
      { question: '¿Puedo alquilar un patín tras el curso?', answer: 'Sí, disponemos de patines de alquiler para navegantes certificados.' }
    ],
    relatedSlugs: ['catamaran', 'windsurf', 'paddle-surf']
  },
  {
    slug: 'paddle-surf',
    name: 'Paddle Surf',
    nameEn: 'Stand Up Paddle',
    nameCa: 'Paddle Surf',
    description: 'El deporte acuático más accesible y versátil. Navega de pie sobre una tabla mientras remas y disfrutas del paisaje costero.',
    longDescription: 'El paddle surf o SUP es perfecto para todas las edades y niveles. Desde paseos tranquilos hasta travesías y SUP yoga. Las aguas calmadas de Playa Larga son ideales para iniciarse en este deporte que combina ejercicio y conexión con la naturaleza.',
    unsplashQuery: 'stand up paddle boarding',
    levels: [
      { name: 'Iniciación', description: 'Primeras remadas', duration: '2 horas', included: ['Equilibrio', 'Técnica de remada', 'Seguridad'] },
      { name: 'Intermedio', description: 'Travesías y técnica', duration: '3 horas', included: ['Remada eficiente', 'Giros y maniobras', 'Travesías guiadas'] },
      { name: 'Avanzado', description: 'SUP Wave y Race', duration: '4 horas', included: ['Paddle surf en olas', 'Técnicas de competición', 'Downwind'] }
    ],
    included: ['Tabla SUP', 'Remo', 'Leash', 'Chaleco', 'Bolsa estanca'],
    minAge: 6,
    faqs: [
      { question: '¿Es difícil mantener el equilibrio?', answer: 'Las tablas de iniciación son muy estables. La mayoría se pone de pie en minutos.' },
      { question: '¿Puedo caerme al agua?', answer: 'Es parte del aprendizaje, pero siempre llevas leash y chaleco.' },
      { question: '¿Sirve para hacer ejercicio?', answer: 'Es un entrenamiento completo de core, brazos y piernas.' },
      { question: '¿Se puede practicar con niños?', answer: 'Sí, desde los 6 años. También hay tablas grandes para ir en familia.' },
      { question: '¿Necesito llevar algo?', answer: 'Solo bañador, crema solar y ganas. Todo el material lo proporcionamos.' }
    ],
    relatedSlugs: ['kayak', 'surf', 'windsurf']
  },
  {
    slug: 'esqui-nautico',
    name: 'Esquí Náutico',
    nameEn: 'Water Skiing',
    nameCa: 'Esquí Nàutic',
    description: 'Deslízate sobre el agua a toda velocidad. El esquí náutico es pura adrenalina y diversión arrastrado por nuestra lancha profesional.',
    longDescription: 'El esquí náutico es uno de los deportes acuáticos más emocionantes. Nuestra lancha profesional y monitores certificados te guiarán desde la primera salida del agua hasta maniobras avanzadas. Vive la sensación de velocidad y libertad sobre el Mediterráneo.',
    unsplashQuery: 'water skiing',
    levels: [
      { name: 'Iniciación', description: 'Primera salida del agua', duration: '30 min', included: ['Técnica de arranque', 'Posición básica', 'Equilibrio'] },
      { name: 'Intermedio', description: 'Cruces y giros', duration: '30 min', included: ['Cruces de estela', 'Giros', 'Control de velocidad'] },
      { name: 'Avanzado', description: 'Monoesquí y slalom', duration: '45 min', included: ['Monoesquí', 'Slalom', 'Saltos básicos'] }
    ],
    included: ['Esquís', 'Chaleco de impacto', 'Lancha con piloto', 'Monitor en agua', 'Fotos'],
    minAge: 8,
    faqs: [
      { question: '¿Es difícil salir del agua?', answer: 'Con nuestra técnica, el 90% de los alumnos salen en el primer intento.' },
      { question: '¿A qué velocidad va la lancha?', answer: 'Entre 25-35 km/h para iniciación, hasta 55 km/h para expertos.' },
      { question: '¿Cuánto dura cada sesión?', answer: 'Las sesiones son de 15-20 minutos de agua efectiva, suficiente para un buen entreno.' },
      { question: '¿Puedo venir con amigos?', answer: 'Sí, la lancha admite hasta 4 personas que pueden turnarse.' },
      { question: '¿Hay que tener fuerza en los brazos?', answer: 'No especialmente, la técnica correcta hace que la lancha haga el trabajo.' }
    ],
    relatedSlugs: ['wake-board', 'donut', 'banana-boat']
  },
  {
    slug: 'wake-board',
    name: 'Wakeboard',
    nameEn: 'Wakeboard',
    nameCa: 'Wakeboard',
    description: 'La evolución del esquí náutico con tabla. Salta, gira y deslízate con estilo sobre la estela de nuestra lancha profesional.',
    longDescription: 'El wakeboard combina elementos del snowboard, skateboard y surf. Es el deporte de arrastre más popular entre los jóvenes. Nuestra lancha Mastercraft genera la estela perfecta para aprender y progresar rápidamente en este espectacular deporte.',
    unsplashQuery: 'wakeboarding',
    levels: [
      { name: 'Iniciación', description: 'Levántate y navega', duration: '30 min', included: ['Salida del agua', 'Posición básica', 'Navegación recta'] },
      { name: 'Intermedio', description: 'Cruces y 180', duration: '30 min', included: ['Cruces de estela', 'Ollies', 'Giros 180'] },
      { name: 'Avanzado', description: 'Trucos y saltos', duration: '45 min', included: ['Saltos', 'Grabs', 'Rotaciones'] }
    ],
    included: ['Tabla wakeboard', 'Botas', 'Chaleco de impacto', 'Lancha Mastercraft', 'Casco opcional'],
    minAge: 10,
    faqs: [
      { question: '¿Es más fácil que el esquí náutico?', answer: 'Muchos lo encuentran más natural, especialmente si han hecho snowboard.' },
      { question: '¿Puedo usar mi propia tabla?', answer: 'Sí, si tienes material propio puedes traerlo.' },
      { question: '¿Hacéis sesiones de cable park?', answer: 'No, solo wakeboard con lancha náutica.' },
      { question: '¿Cuándo podré hacer saltos?', answer: 'Depende de la progresión, pero algunos alumnos saltan en su tercera sesión.' },
      { question: '¿La tabla se adapta a mi pie?', answer: 'Sí, tenemos botas ajustables para todas las tallas.' }
    ],
    relatedSlugs: ['esqui-nautico', 'surf', 'kitesurf']
  },
  {
    slug: 'surf',
    name: 'Surf',
    nameEn: 'Surfing',
    nameCa: 'Surf',
    description: 'Cabalga las olas del Mediterráneo. Aprende a surfear en las playas de Tarragona con olas perfectas para iniciación.',
    longDescription: 'Aunque el Mediterráneo no es famoso por sus olas, Tarragona ofrece días perfectos para aprender surf. Nuestros monitores conocen los mejores spots y condiciones. Aprende los fundamentos del surf de forma segura y progresiva en aguas cálidas.',
    unsplashQuery: 'surfing waves',
    levels: [
      { name: 'Iniciación', description: 'Ponte de pie en la tabla', duration: '2 horas', included: ['Pop-up', 'Remada', 'Lectura de olas'] },
      { name: 'Intermedio', description: 'Surfea la pared de la ola', duration: '2 horas', included: ['Take-off en pico', 'Bottom turn', 'Trim'] },
      { name: 'Avanzado', description: 'Maniobras en la ola', duration: '3 horas', included: ['Cut-back', 'Floater', 'Duck dive'] }
    ],
    included: ['Tabla de surf', 'Neopreno', 'Lycra', 'Seguro', 'Transporte a spots'],
    minAge: 8,
    faqs: [
      { question: '¿Hay olas en el Mediterráneo?', answer: 'Sí, especialmente en otoño e invierno hay días con olas surfables.' },
      { question: '¿Cuál es la mejor época para surfear aquí?', answer: 'De septiembre a abril hay más probabilidad de olas.' },
      { question: '¿Las tablas son blandas?', answer: 'Para iniciación usamos tablas de foam, seguras y con flotabilidad.' },
      { question: '¿Vamos siempre a la misma playa?', answer: 'No, elegimos el spot según las condiciones del día.' },
      { question: '¿Puedo aprender con olas pequeñas?', answer: 'Sí, las olas pequeñas son ideales para aprender con seguridad.' }
    ],
    relatedSlugs: ['paddle-surf', 'wake-board', 'kitesurf']
  },
  {
    slug: 'wing-foil',
    name: 'Wing Foil',
    nameEn: 'Wing Foiling',
    nameCa: 'Wing Foil',
    description: 'El deporte náutico más innovador. Vuela sobre el agua con un ala y una tabla de foil en una experiencia única.',
    longDescription: 'El wing foil es la última revolución en deportes náuticos. Combina un ala inflable con una tabla de hidrofoil para literalmente volar sobre el agua. Aprende este deporte del futuro con los mejores profesionales y el material más avanzado.',
    unsplashQuery: 'wing foil water sport',
    levels: [
      { name: 'Iniciación', description: 'Control del ala y equilibrio', duration: '4 horas', included: ['Manejo del wing', 'Equilibrio en tabla SUP', 'Navegación sin foil'] },
      { name: 'Intermedio', description: 'Primeros vuelos', duration: '4 horas', included: ['Introducción al foil', 'Técnica de despegue', 'Control de altura'] },
      { name: 'Avanzado', description: 'Vuelo sostenido', duration: '6 horas', included: ['Viradas en vuelo', 'Trasluchadas', 'Navegación avanzada'] }
    ],
    included: ['Wing inflable', 'Tabla de foil', 'Neopreno', 'Casco', 'Chaleco de impacto'],
    minAge: 14,
    faqs: [
      { question: '¿Necesito experiencia previa?', answer: 'Ayuda tener base de windsurf, kite o SUP, pero no es imprescindible.' },
      { question: '¿Es peligroso el foil?', answer: 'Con el equipo y formación adecuados es seguro. Siempre usamos casco.' },
      { question: '¿Cuánto viento hace falta?', answer: 'Desde 12-15 nudos ya se puede practicar, menos que en windsurf o kite.' },
      { question: '¿Puedo alquilar material después?', answer: 'Sí, tras completar el curso intermedio puedes alquilar equipo.' },
      { question: '¿Es difícil volar con el foil?', answer: 'Requiere práctica, pero la sensación de volar compensa el esfuerzo.' }
    ],
    relatedSlugs: ['windsurf', 'kitesurf', 'paddle-surf']
  }
]
