import type { Activity } from '@/types'

export const activities: Activity[] = [
  {
    slug: 'kayak',
    name: 'Kayak',
    description: 'Explora la costa de Tarragona a tu ritmo. Paseos en kayak individual o doble por calas escondidas y acantilados.',
    emoji: '🛶',
    minAge: 6,
    unsplashQuery: 'kayak sea coast',
    faqs: [
      { question: '¿Puedo ir solo o hay que ir en grupo?', answer: 'Ofrecemos tanto alquiler libre como salidas guiadas en grupo.' },
      { question: '¿Hay kayaks dobles?', answer: 'Sí, tenemos kayaks individuales y dobles para parejas o familias.' },
      { question: '¿Qué incluye el alquiler?', answer: 'Kayak, remo, chaleco salvavidas y bolsa estanca.' },
      { question: '¿Cuánto dura la ruta guiada?', answer: 'Las rutas guiadas duran entre 2 y 3 horas según el recorrido.' }
    ]
  },
  {
    slug: 'banana-boat',
    name: 'Banana Boat',
    description: 'Diversión garantizada para grupos. Agárrate fuerte mientras la banana es arrastrada a toda velocidad por nuestra lancha.',
    emoji: '🍌',
    minAge: 6,
    unsplashQuery: 'banana boat ride',
    faqs: [
      { question: '¿Cuántas personas caben?', answer: 'Nuestra banana tiene capacidad para 6 personas.' },
      { question: '¿Es seguro para niños?', answer: 'Sí, con chaleco y a velocidad moderada es apto desde 6 años.' },
      { question: '¿Cuánto dura el paseo?', answer: 'Cada sesión dura aproximadamente 15 minutos.' },
      { question: '¿Nos vamos a caer?', answer: '¡Ese es parte de la diversión! El piloto adapta la velocidad al grupo.' }
    ]
  },
  {
    slug: 'donut',
    name: 'Donut',
    description: 'Adrenalina pura sobre un flotador gigante. Gira, salta y ríe mientras te arrastramos por las aguas de Playa Larga.',
    emoji: '🍩',
    minAge: 8,
    unsplashQuery: 'towable tube water',
    faqs: [
      { question: '¿En qué se diferencia de la banana?', answer: 'El donut gira más y ofrece una experiencia más intensa.' },
      { question: '¿Cuántas personas por donut?', answer: 'Nuestros donuts son para 2-3 personas.' },
      { question: '¿Es más intenso que la banana?', answer: 'Sí, el donut ofrece más giros y saltos sobre las olas.' },
      { question: '¿Puedo elegir la intensidad?', answer: 'Sí, indicamos al piloto el nivel de adrenalina que prefieres.' }
    ]
  },
  {
    slug: 'paseos-lancha',
    name: 'Paseos en Lancha',
    description: 'Descubre la costa dorada desde el mar. Paseos relajados o excursiones a calas secretas con nuestra lancha.',
    emoji: '🚤',
    unsplashQuery: 'speedboat mediterranean coast',
    faqs: [
      { question: '¿Cuánto dura el paseo?', answer: 'Ofrecemos paseos de 30 minutos, 1 hora o excursiones de medio día.' },
      { question: '¿Podemos parar a bañarnos?', answer: 'Sí, en las excursiones largas paramos en calas para nadar.' },
      { question: '¿Cuántas personas caben?', answer: 'Nuestra lancha tiene capacidad para 8 pasajeros más patrón.' },
      { question: '¿Se puede alquilar la lancha en privado?', answer: 'Sí, ofrecemos alquiler privado para grupos y celebraciones.' }
    ]
  },
  {
    slug: 'esqui-bus',
    name: 'Esquí Bus',
    description: 'La experiencia más divertida para grupos grandes. Hasta 8 personas sobre un flotador gigante arrastrado por lancha.',
    emoji: '🎉',
    minAge: 6,
    unsplashQuery: 'group towable tube',
    faqs: [
      { question: '¿Qué es el esquí bus?', answer: 'Es un flotador gigante tipo sofá para 6-8 personas arrastrado por lancha.' },
      { question: '¿Es apto para despedidas?', answer: '¡Es perfecto! Es nuestra actividad más solicitada para grupos.' },
      { question: '¿Se puede combinar con otras actividades?', answer: 'Sí, ofrecemos packs que combinan esquí bus con banana y donut.' },
      { question: '¿Hay límite de peso?', answer: 'El límite total es de 600 kg, normalmente sin problema para 8 adultos.' }
    ]
  }
]
