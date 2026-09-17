/* Versión 3 de los guiones (17/09/2026).
   v2: pasados por el filtro de Víctor Heras en NotebookLM y corregidos contra los datos reales de la quinta.
   v3: pasada final de lenguaje. Voseo como el de los reels de referencia («vení que te muestro», «miren lo que es…,
   por favor», «ni bien entrás», «encima», «sí o sí», «la súper recomiendo», «¿sabés que sí? te lo digo»),
   sin lunfardo de relleno y sin frases de plantilla. Mai es quien sale en cámara.
   Reemplaza los guiones de refs-*.js; esos quedan como historia. */
GUIONES.intro.push("Versión 3 (17/09): los 30 guiones pasaron por el filtro de Víctor Heras en NotebookLM y después por una pasada final de lenguaje, con el habla de los reels de referencia. Cada tarjeta muestra la nota de la primera versión y las dos fallas que se corrigieron. Con ✎ Editar cambiás cualquier palabra.");
const H = (n, guiones) => { const r = GUIONES.refs.find(x => x.n === n); if (r) r.guiones = guiones; };

/* ───────── 01 · Te lo presentan a cámara ───────── */
H(1, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Si son ocho, tengo el lugar",
    angulo: "Mai le habla al grupo que nunca concreta, recorre con «ni bien entrás» y deja la cuenta por persona para el final.",
    heras: { nota: "5", fallas: [
      "Gancho quieto a cámara, sin sonido, y en el segundo 4 ya dice qué es y dónde queda.",
      "Lista comodidades como un folleto en vez de hablarle al que todavía no está buscando."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Si en tu grupo hace meses que dicen «un finde nos vamos» y nunca se van, vení que te muestro esto.",
      placa: "SI SON 8, TENGO EL LUGAR",
      plano: "Mai camina rápido hacia la cámara por el parque, con el mate. Se escucha el portón y los pájaros.",
      marco: "Identificación del grupo + gancho de 3 partes (palabra, movimiento, sonido)"
    },
    beats: [
      ["0:00", "Mai camina hacia cámara con el mate; portón y pájaros", "Si en tu grupo hace meses que dicen «un finde nos vamos» y nunca se van, vení que te muestro esto.", "¿Qué me va a mostrar?"],
      ["0:05", "Entra a la cabaña grande, la cámara la sigue hasta el hogar", "Ni bien entrás, la grande: hogar a leña, horno y mesa para seis.", ""],
      ["0:10", "Corte a la cabaña chica y a su baño", "Al lado, la chica. Cuatro en cada una, y cada familia con su baño.", "¿Y qué comparten?"],
      ["0:16", "Quincho con la parrilla humeando; paneo al parque", "Afuera es de todos: el quincho con la parrilla, el fogonero y este parque.", ""],
      ["0:21", "Mai sentada en la mesa de mosaico, levanta el mate", "Y ahora, la parte que le vas a mandar al grupo.", "Bucle"],
      ["0:24", "General con las luces del parque prendidas", "Entre los ocho, sale veinticinco mil por persona la noche. Y encima estás a dos horas de Buenos Aires.", "Pago"]
    ],
    cta: "Comentá PRECIO y te mandamos las tarifas y las fechas libres.",
    shots: ["Mai caminando con el mate hacia cámara (grabar el portón)", "Entrada a la grande hasta el hogar", "Cabaña chica y su baño", "Parrilla humeando y paneo al parque", "Mai en la mesa de mosaico levantando el mate", "General con luces del parque"],
    ojo: "$25.000 por persona es con la quinta completa y ocho personas ($200.000 ÷ 8), por noche.",
    caption: "Si son ocho, tengo el lugar.\nDos cabañas, quincho, fogonero y parque en San Pedro, a dos horas de Buenos Aires.\nComentá PRECIO."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "Si sos la que organiza y te clavan el visto",
    angulo: "Le habla a la que arma los planes. El enemigo es el grupo que no contesta; el cierre es el mensaje exacto que tiene que mandar.",
    heras: { nota: "6", fallas: [
      "Pregunta y respuesta al instante: cada duda se cierra y no queda nada abierto.",
      "No le pega a la frustración real: el grupo que no contesta."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Si sos la que arma los planes y el grupo te clava el visto, esto es para vos.",
      placa: "SI SOS LA QUE ORGANIZA 🙋‍♀️",
      plano: "Celular en primer plano con el chat del grupo y notificaciones sonando; atrás, desenfocado, el parque.",
      marco: "Cocktail party (nombra el rol) + enemigo común"
    },
    beats: [
      ["0:00", "Chat del grupo en el celu, notificaciones sonando", "Si sos la que arma los planes y el grupo te clava el visto, esto es para vos.", "¿Por qué no contestan?"],
      ["0:04", "Mai baja el celu; aparece enfocada la cabaña grande", "Te digo por qué no contestan: nadie quiere dormir ocho en una casa y pelearse por el baño.", "¿Y cómo se arregla?"],
      ["0:10", "Las dos puertas de las cabañas en un plano", "Acá son dos cabañas en el mismo terreno. Cada familia en la suya, con su baño.", ""],
      ["0:15", "El perro corre por el parque y entra a la cabaña", "El perro viene y duerme adentro. Y si llueve, el asado se hace igual en el quincho.", ""],
      ["0:20", "Mai escribe en el celu, en la mesa de mosaico", "Lo que tenés que mandar al grupo es esto:", "Bucle"],
      ["0:23", "Mai a cámara, leyendo lo que escribió", "«Somos ocho, sale veinticinco mil cada uno la noche, en San Pedro.» Y fijate cómo contestan.", "Pago"]
    ],
    cta: "Mandáselo al grupo.",
    shots: ["Chat de grupo armado (nombres inventados) con notificaciones", "Mai bajando el celu con la grande atrás", "Las dos puertas en un plano", "Perro corriendo y entrando a la cabaña", "Mai escribiendo en la mesa de mosaico", "Mai a cámara"],
    ojo: "El chat tiene que ser armado: nada de números ni nombres reales. $25.000 es con quinta completa y ocho.",
    caption: "Si sos la que organiza y te clavan el visto 🙃\nDos cabañas en San Pedro: cada familia en la suya y el perro adentro.\nMandáselo al grupo."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "Chicos sin pantalla, y vos sentada",
    angulo: "Habla la madre cansada. Lo que se vende no es lo que hacen los chicos: es el mate que por fin se toma caliente.",
    heras: { nota: "6,5", fallas: [
      "Lista 1-2-3 predecible, sin ninguna pregunta que retenga.",
      "Vende actividades de chicos en vez del descanso del adulto."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Si el finde en casa termina con los chicos pegados a la tablet, esto te va a servir.",
      placa: "CHICOS SIN PANTALLA 🚫📱",
      plano: "Tablet apagada tirada en el pasto. Se escucha una pelota que rebota y chicos gritando atrás.",
      marco: "Enemigo común (la pantalla) + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Tablet apagada en el pasto; pelota y chicos de fondo", "Si el finde en casa termina con los chicos pegados a la tablet, esto te va a servir.", "¿Qué hago?"],
      ["0:04", "Chico pateando la pelota en el parque", "Lo que les falta no es que se la saques. Es un lugar donde puedan correr sin que estés atrás de ellos.", "¿Dónde?"],
      ["0:10", "Juego de mesa en la mesa de mosaico; corte al fogonero de noche", "Acá el parque es cerrado, hay pelota, juegos de mesa y, a la noche, el fogonero.", ""],
      ["0:15", "Madre con mate en la galería mirando el parque", "Y a vos te pasa algo que no te pasa hace rato:", "Bucle"],
      ["0:18", "Mismo plano, cierra los ojos al sol", "te tomás un mate entero, caliente. A dos horas de Buenos Aires.", "Pago"]
    ],
    cta: "Guardalo para el finde largo del 10 de octubre.",
    shots: ["Tablet apagada en el pasto con pelota y chicos sonando", "Chico pateando la pelota", "Juego de mesa en la mesa de mosaico", "Fogonero de noche", "Madre con mate en la galería, ojos cerrados al sol"],
    ojo: "Chicos con permiso de los padres para publicar. La leña del fogonero la traen los huéspedes.",
    caption: "Chicos sin pantalla, y vos con un mate caliente.\nParque cerrado, juegos de mesa y fogonero. San Pedro, a dos horas.\nGuardalo para el finde largo."
  }
]);

/* ───────── 02 · «Repetilo, que te estoy grabando» ───────── */
H(2, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "«Repetime lo que me dijiste»",
    angulo: "Calca la frase de la referencia («ahora que te grabo no decís nada, ¿no?») y el dato que se escapa es la cuenta por persona.",
    heras: { nota: "5,5", fallas: [
      "A los 7 segundos ya dice dónde está y de qué se trata: se cae la intriga.",
      "El precio sale como dato frío, sin el grupo que cree que irse de a ocho sale carísimo."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "Te estoy grabando. Repetime lo que me dijiste recién.",
      placa: "SE LE ESCAPÓ A MAI 🤫",
      plano: "Celular en mano, movido, apuntando a Mai en el quincho. Se escucha la parrilla.",
      marco: "Parece video robado + secreto a medias"
    },
    beats: [
      ["0:00", "Celu movido, Mai en el quincho con la parrilla sonando", "Te estoy grabando. Repetime lo que me dijiste recién.", "¿Qué dijo?"],
      ["0:03", "Mai se tapa la cara riéndose mientras acomoda el carbón", "—No, dejá. —Dale, que ahora que te grabo no decís nada, ¿no?", "Tensión"],
      ["0:07", "Quien graba camina hacia la mesa de mosaico", "En mi grupo todos creen que irse ocho un finde sale carísimo.", "¿Y no?"],
      ["0:11", "Paneo rápido a las dos cabañas", "Dos cabañas, cuatro en cada una, todo el terreno para nosotros.", ""],
      ["0:16", "Vuelve a Mai, que deja el carbón y mira a cámara", "—¿Sabés que sí? Te lo digo: si vienen ocho y toman la quinta entera, sale veinticinco mil por persona la noche.", "Pago"],
      ["0:22", "Gira la cámara al parque con las luces prendidas", "¿Escucharon? Armen el grupo.", ""]
    ],
    cta: "Comentá FINDE y te pasamos las fechas libres.",
    shots: ["Una sola toma con el celu, sin estabilizar: Mai en el quincho con la parrilla sonando", "Caminata a la mesa de mosaico", "Paneo a las dos cabañas", "Giro al parque con luces"],
    ojo: "No inventar descuento ni promo. $25.000 es con quinta completa y ocho.",
    caption: "Se le escapó a Mai 🙈\nQuinta completa para ocho: $25.000 por persona la noche.\nComentá FINDE."
  },
  {
    v: "B", tipo: "Cambia el segmento",
    titulo: "«Repetime lo del perro»",
    angulo: "Para los que no viajan sin el perro. La respuesta se demora hasta que el perro entra solo a la cabaña.",
    heras: { nota: "6", fallas: [
      "Mai contesta «no paga» en el segundo 3: la duda se cierra enseguida.",
      "Falta el enemigo del dueño de perro: la guardería o el lugar que lo deja afuera."
    ]},
    dur: "≈22 s",
    hook: {
      dice: "Esperá, esperá, repetime lo del perro, que te estoy grabando.",
      placa: "¿TU PERRO SE QUEDA AFUERA? 🐶",
      plano: "El perro en primer plano mirando a cámara y jadeando; Mai atrás, en el parque.",
      marco: "Pregunta a medias + cocktail party (dueños de perro)"
    },
    beats: [
      ["0:00", "Perro en primer plano jadeando, Mai atrás", "Esperá, esperá, repetime lo del perro, que te estoy grabando.", "¿Qué pasa con el perro?"],
      ["0:03", "Mai se ríe y camina hacia la puerta de la cabaña", "—Que acá no lo dejás en una guardería ni atado en el patio.", "¿Y entonces?"],
      ["0:08", "La cámara sigue al perro, que entra a la cabaña", "(silencio: solo las patas del perro entrando)", "Brecha"],
      ["0:11", "El perro se echa al lado del sillón", "—Entra y duerme con ustedes. No paga, y no importa si es grande.", "Pago"],
      ["0:15", "Paneo al parque cerrado", "—Y el terreno está cerrado, así corre suelto mientras hacen el asado.", ""],
      ["0:19", "Quien graba, a cámara", "¿Y vos lo seguís dejando en lo de tu vieja cada vez que viajás?", ""]
    ],
    cta: "Etiquetá a esa persona que no viaja sin su perro.",
    shots: ["Perro mirando a cámara con Mai atrás", "Mai caminando a la puerta", "Seguir al perro entrando (sin hablar)", "Perro echado junto al sillón", "Parque cerrado", "Quien graba, a cámara"],
    ojo: "Única condición real: juntar lo que deja. Perro tranquilo para grabar.",
    caption: "El perro no se queda afuera: duerme en la cabaña, no paga y no importa el tamaño 🐶\nSan Pedro, a dos horas.\nEtiquetá a quien no viaja sin el suyo."
  },
  {
    v: "C", tipo: "Otro dato",
    titulo: "«¿Qué no hay que traer?»",
    angulo: "El enemigo es el baúl lleno. Lo que ya está se cuenta como alivio, con un corte cada tres segundos.",
    heras: { nota: "5,5", fallas: [
      "Lista de inventario sin conflicto: falta el que se pasa la noche anterior llenando el baúl.",
      "Gancho quieto en un dormitorio y tomas lentas, sin cortes cada pocos segundos."
    ]},
    dur: "≈20 s",
    hook: {
      dice: "Pará, repetime eso que te grabo: ¿qué no hay que traer?",
      placa: "NO CARGUES EL BAÚL DE MÁS 🧳",
      plano: "La cámara entra apurada al dormitorio; Mai estira una frazada. Se escucha el piso y los pájaros.",
      marco: "Enemigo común (el baúl lleno) + parece robado"
    },
    beats: [
      ["0:00", "Entrada apurada al dormitorio, Mai con la frazada", "Pará, repetime eso que te grabo: ¿qué no hay que traer?", "¿Qué?"],
      ["0:03", "Mai señala la cama hecha", "—Sábanas, frazadas y almohadas. Ya están.", ""],
      ["0:06", "Corte a la cocina: platos y tazas en el estante", "—La vajilla, también.", "¿Y qué sí traigo?"],
      ["0:09", "Paneo al quincho con la parrilla", "—Ustedes traen toallones, los condimentos y la leña o el carbón.", ""],
      ["0:13", "Auto estacionado adentro, baúl medio vacío", "—Y el auto queda acá adentro.", ""],
      ["0:16", "Mai con mate en el parque, a cámara", "Medio baúl libre. Para el perro, que viaja más cómodo.", "Pago"]
    ],
    cta: "Guardalo para la noche que armes los bolsos.",
    shots: ["Entrada apurada al dormitorio con Mai y la frazada", "Cama hecha", "Vajilla en la cocina", "Quincho y parrilla", "Auto adentro con el baúl medio vacío", "Mai con mate a cámara"],
    ojo: "Lista exacta del brief del cliente. No hay secador: no decir que está todo.",
    caption: "Lo que NO tenés que traer: sábanas, frazadas, almohadas y vajilla.\nLo que sí: toallones, condimentos y leña o carbón.\nGuardalo para la noche que armes los bolsos."
  }
]);

/* ───────── 03 · POV sketch: secuestro que termina en venta ───────── */
H(3, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "POV: secuestrás a la chica de las cabañas",
    angulo: "Mai, «secuestrada», no larga la ficha: le pregunta al secuestrador cuántos son y le resuelve el problema. El precio lo pide él.",
    heras: { nota: "5,5", fallas: [
      "Dos segundos de silencio al arranque: rompe el gancho de 3 partes.",
      "Se saca la cinta y larga la ficha técnica de golpe, sin entrar por el problema del grupo."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "«¡Mmm! ¡Mmm!» (Mai grita con la cinta puesta)",
      placa: "POV: SECUESTRÁS A LA CHICA DE LAS CABAÑAS 🚗",
      plano: "Asiento de atrás: Mai con cinta de pintor en la boca, forcejeando de chiste. Sonido de motor y portazo.",
      marco: "Imagen absurda + sonido desde el segundo 0"
    },
    beats: [
      ["0:00", "Mai con cinta forcejeando; motor (auto detenido)", "«¡Mmm! ¡Mmm!»", "¿Qué pasa acá?"],
      ["0:02", "Se saca la cinta de un tirón y le habla al espejo", "—Pará, pará. Antes de llevarme a ningún lado: ¿cuántos son en tu grupo?", "¿Por qué pregunta eso?"],
      ["0:06", "Secuestrador con gorro de lana la mira por el espejo", "—…Ocho. —¿Y dónde pensaban meterse los ocho?", ""],
      ["0:10", "Corte a la cabaña grande, hogar prendido", "—Tengo dos cabañas en San Pedro. Cuatro en cada una, y la grande con hogar.", ""],
      ["0:16", "Corte al quincho con la parrilla humeando", "—El quincho es techado, así el asado sale aunque llueva. Y el perro duerme adentro.", ""],
      ["0:22", "Secuestrador, resignado", "—…¿Y cuánto sale?", "Bucle"],
      ["0:24", "Mai, sonrisa de oreja a oreja", "—¿Viste que te interesa? Veinticinco mil por persona, entre ocho.", "Pago"],
      ["0:28", "Él le abre la puerta; ella grita desde la vereda", "—¡Bajate! —¡El WhatsApp está en el perfil!", ""]
    ],
    cta: "Comentá RESERVA y te mandamos las fechas libres.",
    shots: ["Mai con cinta de pintor en el asiento de atrás (auto estacionado)", "Secuestrador con gorro de lana por el espejo", "Hogar prendido", "Parrilla humeando", "Mai gritando desde la vereda"],
    ojo: "Todo de chiste: cinta de pintor, gorro de lana (no pasamontañas), auto quieto. El motor se suma en edición.",
    caption: "Ni secuestrada deja de vender 😅\nDos cabañas, hogar a leña, quincho techado y el perro adentro. San Pedro.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "POV: tus amigos te secuestran para tu cumple",
    angulo: "El enemigo es el cumple de siempre en un bar. Las pistas no revelan nada hasta que le sacan la venda.",
    heras: { nota: "6", fallas: [
      "«¿A dónde me llevan?» es una pregunta pasiva, sin sonido fuerte.",
      "Los amigos cuentan todo antes de sacarle la venda."
    ]},
    dur: "≈27 s",
    hook: {
      dice: "—¿A dónde me llevan? —Callate. Este año no se festeja en un bar.",
      placa: "POV: TE SECUESTRAN PARA TU CUMPLE 🙈",
      plano: "Cumpleañero vendado con una bufanda en el asiento de atrás; los amigos cantan el feliz cumpleaños a los gritos.",
      marco: "Enemigo común (el cumple de siempre) + imagen y sonido"
    },
    beats: [
      ["0:00", "Vendado en el auto, amigos cantando a los gritos", "—¿A dónde me llevan? —Callate. Este año no se festeja en un bar.", "¿A dónde, entonces?"],
      ["0:04", "Amigo 1 le habla al oído", "—Pista uno: dos horas de ruta.", ""],
      ["0:07", "Amigo 2, tentado", "—Pista dos: dos cabañas. Una para los que madrugan y otra para vos.", ""],
      ["0:11", "Portón que se abre, visto desde el auto", "—Pista tres: el asado lo hacés vos.", "¿Dónde es?"],
      ["0:15", "Le sacan la venda frente a las cabañas", "(dos segundos de silencio: su cara)", "Pago"],
      ["0:18", "Corte al quincho con la parrilla prendida y la mesa armada", "—¿Y cuánto les salió esto? —Veinticinco mil cada uno. —Mentira.", ""],
      ["0:23", "Abrazo del grupo en el parque", "—Feliz cumple. Bienvenido a San Pedro.", ""]
    ],
    cta: "Etiquetá al amigo que cumple el mes que viene.",
    shots: ["Cumpleañero vendado cantando en el auto", "Amigos hablándole al oído", "Portón abriéndose desde el auto", "Sacar la venda frente a las cabañas (cara en primer plano)", "Quincho con parrilla y mesa armada", "Abrazo en el parque"],
    ojo: "Tres o cuatro amigos en cámara. $25.000 por persona es con la quinta completa y ocho.",
    caption: "Este año el cumple no fue en un bar 🎂\nDos cabañas, quincho techado y parque. San Pedro, a dos horas.\nEtiquetá al que cumple el mes que viene."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "POV: viaje sorpresa sin tablet",
    angulo: "Los chicos adivinan con antifaces y las pistas son lo que van a hacer; el alivio final es de los padres.",
    heras: { nota: "6", fallas: [
      "Arranca con una adivinanza pasiva, sin nombrar al enemigo (pantallas, encierro).",
      "Junta pistas sin moraleja: no vende el alivio de los padres."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "—Papá, ¿a dónde vamos? —A un lugar donde no vas a extrañar la tablet.",
      placa: "POV: VIAJE SORPRESA 🤫",
      plano: "Desde el asiento de adelante: dos chicos con antifaces atrás y el perro en el medio. Ladridos y risas.",
      marco: "Enemigo común + brecha abierta (¿a dónde?)"
    },
    beats: [
      ["0:00", "Chicos con antifaz y perro, ladridos", "—Papá, ¿a dónde vamos? —A un lugar donde no vas a extrañar la tablet.", "¿A dónde?"],
      ["0:04", "Madre se da vuelta sonriendo", "—Pista uno: el Toby viene, y duerme adentro con nosotros.", ""],
      ["0:08", "Un chico se levanta un poquito el antifaz", "—¿Hay lugar para jugar? —Pista dos: un parque enorme, y cerrado.", ""],
      ["0:12", "Corte al fogonero prendido de noche", "—Pista tres: a la noche, fuego.", "¿Adivinan?"],
      ["0:16", "Portón que se abre; se sacan los antifaces y corren con el perro", "—¡Llegamos! Vayan, que está cerrado.", "Pago"],
      ["0:20", "Padres con mate en la galería, mirándolos", "Y nosotros, sentados con un mate. San Pedro, a dos horas.", ""]
    ],
    cta: "Guardalo para el próximo finde que no sepas qué hacer con los chicos.",
    shots: ["Chicos con antifaz y perro en el auto", "Madre dándose vuelta", "Chico levantando el antifaz", "Fogonero de noche", "Portón y chicos corriendo con el perro", "Padres con mate en la galería"],
    ojo: "Permiso de los padres para publicar. Una familia ocupa una cabaña: sin el precio por persona de la quinta completa.",
    caption: "Viaje sorpresa, y nadie extrañó la tablet 🤫\nParque cerrado, fogonero y el perro adentro. San Pedro, a dos horas.\nGuardalo para el próximo finde."
  }
]);

/* ───────── 04 · Voz en off + «difícil elección» ───────── */
H(4, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Tenés para elegir cómo bajar un cambio",
    angulo: "La misma voz de la referencia («tenés para elegir», «difícil elección», «bajar un cambio») y la misma pregunta final para comentarios.",
    heras: { nota: "6", fallas: [
      "En el segundo 0 ya dice «vengan a esta quinta»: cierra la intriga, y no hay quiebre de sonido.",
      "Enumera aire, estufa, wifi y cocina como un folleto, sin el cansancio de la ciudad."
    ]},
    dur: "≈27 s",
    hook: {
      dice: "Si llegás al viernes con la cabeza quemada, tenés para elegir cómo bajar un cambio.",
      placa: "¿MATE O FOGONERO? 🌿",
      plano: "Pies descalzos pisando el pasto. Un bocinazo de ciudad se corta y entran los pájaros.",
      marco: "Monólogo interno + contraste sonoro"
    },
    beats: [
      ["0:00", "Pies descalzos en el pasto; bocinazo cortado por pájaros", "Si llegás al viernes con la cabeza quemada, tenés para elegir cómo bajar un cambio.", "¿Cuáles son las opciones?"],
      ["0:05", "Mate en la mesa de mosaico al sol; corte al fogonero", "Mate bajo los árboles a la tarde, o fogonero cuando cae el sol.", ""],
      ["0:10", "La persona mira a cámara y se encoge de hombros", "Difícil elección.", "¿Qué más hay?"],
      ["0:12", "Quincho con la parrilla humeando", "El asado va en el quincho techado, y los chicos y el perro, sueltos en el parque cerrado.", ""],
      ["0:18", "Hogar prendido en la grande", "Son dos cabañas para cuatro, y la grande tiene hogar a leña.", ""],
      ["0:22", "Persona tirada en el sillón mirando las luces del parque", "San Pedro, a dos horas de Buenos Aires. ¿Te gustaría conocerla en detalle?", "Pregunta abierta hacia el comentario"]
    ],
    cta: "Comentá RESERVA y te mandamos fotos, tarifas y fechas.",
    shots: ["Pies descalzos en el pasto (grabar pájaros; el bocinazo va en edición)", "Mate en la mesa de mosaico", "Fogonero", "Gesto de «difícil elección» a cámara", "Parrilla humeando", "Hogar prendido", "Sillón con las luces del parque"],
    ojo: "La voz en off se graba aparte, cerca de la boca y sin eco. La leña la traen los huéspedes.",
    caption: "Mate o fogonero: difícil elección.\nDos cabañas en San Pedro, a dos horas de Buenos Aires.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "El dilema es el video",
    titulo: "¿Por qué la grande sale diez mil más?",
    angulo: "Los diez mil de diferencia como pregunta: primero la chica, y lo que tiene la grande recién cuando se abre la puerta.",
    heras: { nota: "5,5", fallas: [
      "Arranca con una cifra como si fuera una cotización: le habla solo al que ya decidió.",
      "Muestra los dos precios de entrada y no deja nada por descubrir."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Entre estas dos hay diez mil pesos de diferencia. Antes de elegir la más barata, mirá lo que tiene la otra.",
      placa: "¿GRANDE O CHICA? 🏠",
      plano: "Pantalla partida con las dos puertas. Se escucha leña crujiendo.",
      marco: "Contraste + brecha abierta (¿qué tiene la otra?)"
    },
    beats: [
      ["0:00", "Pantalla partida de las dos puertas, leña crujiendo", "Entre estas dos hay diez mil pesos de diferencia. Antes de elegir la más barata, mirá lo que tiene la otra.", "¿Qué tiene?"],
      ["0:05", "Entra a la chica: sofá cama y dormitorio", "La chica: cien mil la noche. Cuatro personas, cocina, baño y aire en el dormitorio.", ""],
      ["0:10", "La puerta de la grande, todavía cerrada", "La grande: ciento diez mil. ¿Y por qué diez mil más?", "Bucle"],
      ["0:13", "Se abre: hogar prendido; horno abierto; freezer", "Hogar a leña, horno para hacer una pizza y freezer para el hielo.", "Pago"],
      ["0:19", "Las dos cabañas en un plano general", "Afuera comparten el quincho, el fogonero y el parque. Difícil elección.", ""]
    ],
    cta: "Comentá GRANDE o CHICA.",
    shots: ["Las dos puertas por separado, mismo encuadre", "Chica: sofá cama y dormitorio", "Puerta de la grande cerrada", "Hogar prendido", "Horno abierto", "Freezer", "General de las dos cabañas"],
    ojo: "GRANDE y CHICA no disparan DM: es una votación. La leña la traen los huéspedes.",
    caption: "Chica $100.000 · grande $110.000 por noche.\nLos $10.000 son el hogar a leña, el horno y el freezer.\n¿Cuál elegís? Comentá GRANDE o CHICA."
  },
  {
    v: "C", tipo: "Otro público",
    titulo: "Un finde sin «shh»",
    angulo: "El padre que se pasa el finde de hotel pidiendo silencio. Lo que cambia es que él se sienta.",
    heras: { nota: "6,5", fallas: [
      "Buena premisa, pero sin sonido de impacto al arranque.",
      "Muestra la solución en el segundo 4 y no deja nada abierto hasta el final."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Basta de pagar un hotel para estar todo el finde diciéndoles a los chicos «shh».",
      placa: "SIN «SHH» ESTE FINDE 🤫",
      plano: "Chico tirándose al pasto muerto de risa; pelota que rebota.",
      marco: "Enemigo común + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Chico tirándose al pasto, pelota rebotando", "Basta de pagar un hotel para estar todo el finde diciéndoles a los chicos «shh».", "¿Y entonces?"],
      ["0:04", "Auto entrando y portón cerrándose", "Acá el terreno es cerrado: corren, gritan, patean la pelota.", ""],
      ["0:09", "Manos con un juego de mesa en el quincho", "Si llueve, quincho techado y juegos de mesa.", ""],
      ["0:13", "Alguien cocina en la grande", "Cocinás lo que comen ellos, a la hora que tienen hambre.", "¿Y vos?"],
      ["0:17", "Adulto con mate en la galería, los chicos lejos", "¿Y vos? Vos te sentás con un mate y los mirás de lejos.", "Pago"],
      ["0:21", "General de las cabañas al atardecer", "San Pedro, a dos horas.", ""]
    ],
    cta: "Guardalo para el finde largo del 10 de octubre.",
    shots: ["Chico tirándose al pasto con pelota", "Auto entrando y portón cerrando", "Juego de mesa en el quincho", "Alguien cocinando en la grande", "Adulto con mate en la galería", "General al atardecer"],
    ojo: "Silencio desde las 00:00 es regla de la casa: el «gritan» es de día. Una familia ocupa una cabaña: sin precio por persona.",
    caption: "Un finde sin «shh».\nTerreno cerrado, juegos de mesa y cocina propia. San Pedro, a dos horas.\nGuardalo para el finde largo."
  }
]);

/* ───────── 05 · Influencer de visita ───────── */
H(5, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Nos fuimos ocho amigas y te cuento",
    angulo: "Con las muletillas de la referencia («miren lo que es…, por favor», «yo sí o sí aproveché», «para mi sorpresa», «la súper recomiendo»).",
    heras: { nota: "5,5", fallas: [
      "El gancho cuenta todo de entrada y no tiene sonido de impacto.",
      "Vlog pasivo que enumera comodidades, sin el problema de organizar a ocho."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "Nos fuimos ocho amigas a San Pedro y les cuento lo que nadie te dice cuando viajás en grupo.",
      placa: "LO QUE NADIE TE CUENTA 🤫",
      plano: "Selfie caminando por el parque; atrás, las amigas se ríen y chocan los vasos.",
      marco: "Secreto + identificación (grupo de amigas), con sonido desde el segundo 0"
    },
    beats: [
      ["0:00", "Selfie caminando, risas y vasos de fondo", "Nos fuimos ocho amigas a San Pedro y les cuento lo que nadie te dice cuando viajás en grupo.", "¿Qué no te dicen?"],
      ["0:05", "POV de la mano abriendo la puerta de una cabaña", "Uno: no dormimos amontonadas. Son dos cabañas, cuatro en cada una.", "¿Qué más?"],
      ["0:09", "Paneo al quincho con la parrilla humeando", "Miren lo que es este quincho, por favor. Techado: si llueve, el asado sale igual.", ""],
      ["0:14", "Amiga tirada en el sillón", "Yo sí o sí aproveché el sillón, y como verán Flor también.", ""],
      ["0:18", "Horno de la grande con una pizza", "Para mi sorpresa, la cocina de la grande tiene horno. Hicimos pizza.", ""],
      ["0:22", "Selfie en el dormitorio, cara de confesión", "Lo único: traigan toallones y secador, que eso no hay.", "Honestidad que suma"],
      ["0:26", "Selfie con el terreno iluminado", "¿Y la plata? Entre las ocho, veinticinco mil cada una la noche. La súper recomiendo.", "Pago"]
    ],
    cta: "Etiquetá a tus amigas.",
    shots: ["Selfie caminando con amigas brindando atrás", "POV abriendo la puerta de una cabaña", "Parrilla humeando en el quincho", "Amiga en el sillón", "Horno de la grande con pizza", "Selfie en el dormitorio", "Selfie con terreno iluminado"],
    ojo: "Si la visita no durmió en la quinta, que no diga que se hospedó: «vinimos a conocerla». $25.000 es con quinta completa y ocho.",
    caption: "Nos fuimos ocho amigas a San Pedro 🏡\nDos cabañas, quincho techado, horno y fogonero. Secador no hay 😅\nEtiquetá a tus amigas."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "Yo no quería venir",
    angulo: "El papá que venía de mal humor. Cada cosa que ve se lo va bajando, hasta el mate.",
    heras: { nota: "6", fallas: [
      "Arranca en el auto sin sonido fuerte, y la premisa se entiende tan rápido que no queda duda.",
      "No se ve el cansancio del padre contra el alivio del terreno cerrado."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Yo no quería venir. Dos horas de ruta con dos chicos gritando atrás y el perro.",
      placa: "YO NO QUERÍA VENIR 🤦‍♂️",
      plano: "Selfie del papá en el auto estacionado, cara de cansado; atrás, gritos de los chicos y un ladrido.",
      marco: "Transformación (de escéptico a convencido) + sonido real"
    },
    beats: [
      ["0:00", "Selfie en el auto, gritos y ladrido", "Yo no quería venir. Dos horas de ruta con dos chicos gritando atrás y el perro.", "¿Qué lo hizo cambiar?"],
      ["0:04", "Portón cerrándose, auto adentro", "Primer punto a favor: el auto queda adentro y el portón se cierra.", ""],
      ["0:08", "Perro bajando y corriendo suelto por el pasto", "Al perro lo solté ni bien bajamos y no lo volví a ver. Terreno cerrado.", ""],
      ["0:13", "Paneo al quincho con la parrilla prendida", "Y miren lo que es este quincho, por favor.", ""],
      ["0:17", "Selfie en el sillón con mate; chicos con la pelota a lo lejos", "Hace dos horas que estoy sentado y nadie me pidió nada.", "Pago"],
      ["0:22", "Selfie con las cabañas de fondo", "Me equivoqué. Volvemos.", ""]
    ],
    cta: "Etiquetá al que en tu casa siempre dice «¿y si nos quedamos?».",
    shots: ["Selfie del papá en el auto (chicos y perro sonando)", "Portón cerrándose con el auto adentro", "Perro corriendo suelto", "Parrilla prendida", "Selfie en el sillón con mate y chicos lejos", "Selfie con las cabañas"],
    ojo: "El perro viaja en el asiento de atrás, nunca en el baúl. Una familia ocupa una cabaña: sin precio por persona.",
    caption: "Yo no quería venir. Me equivoqué.\nTerreno cerrado, perro suelto y parrilla techada. San Pedro, a dos horas.\nEtiquetá al que siempre dice «¿y si nos quedamos?»."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "La abuela se los llevó",
    angulo: "Para el público de 55 para arriba: la abuela tenía un solo miedo, y lo dice en el segundo 5.",
    heras: { nota: "6", fallas: [
      "Cuenta la historia entera en el segundo 0, sin sonido ni pregunta abierta.",
      "Parte diario (camas, comidas) sin el miedo real de la abuela."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Me traje a mis tres nietos y los padres se quedaron en Buenos Aires. Y tenía un solo miedo.",
      placa: "LA ABUELA SE LOS LLEVÓ 👵",
      plano: "Abuela a cámara con mate; atrás, risas y una pelota que rebota.",
      marco: "Identificación 55+ + brecha abierta (¿qué miedo?)"
    },
    beats: [
      ["0:00", "Abuela con mate, risas y pelota atrás", "Me traje a mis tres nietos y los padres se quedaron en Buenos Aires. Y tenía un solo miedo.", "¿Cuál?"],
      ["0:05", "Portón cerrado; un nene corre por el parque", "Que se me escaparan a la calle. Lo primero que miré: el terreno es cerrado.", "Pago parcial"],
      ["0:10", "Nietos con un juego de mesa en el quincho", "Si refresca, juegos de mesa en el quincho. Y les cocino lo que les gusta.", ""],
      ["0:15", "Dormitorio: matrimonial, cama de una plaza y sofá cama", "Dormimos los cuatro en la cabaña, cada uno en su cama.", ""],
      ["0:19", "Abuela sentada en la galería con las luces del parque", "Y mientras ellos corren, yo con mi mate. A las abuelas, se la súper recomiendo.", "Moraleja"]
    ],
    cta: "Etiquetá a la abuela que se merece esto.",
    shots: ["Abuela a cámara con nietos y pelota atrás", "Portón cerrado y nene corriendo", "Nietos con juego de mesa en el quincho", "Dormitorio con las tres camas", "Abuela en la galería con luces"],
    ojo: "Capacidad estricta: cuatro por cabaña (abuela + tres nietos). Permiso de los padres para publicar a los chicos.",
    caption: "La abuela se llevó a los nietos a San Pedro 👵\nTerreno cerrado, juegos de mesa y cocina propia.\nEtiquetá a la abuela que se lo merece."
  }
]);

/* ───────── 06 · Recorrido en una toma ───────── */
H(6, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "¡Vení que te muestro por qué acá entran ocho!",
    angulo: "El «vení que te muestro» de la referencia con cronómetro. Cada parada contesta una pelea del grupo; la plata llega con el reloj.",
    heras: { nota: "5,5", fallas: [
      "Frase funcional sin sonido de impacto ni una razón que toque al grupo.",
      "Paseo lindo para el que ya busca: no despierta al que todavía no pensó en irse."
    ]},
    dur: "≈34 s",
    hook: {
      dice: "¡Vení que te muestro por qué acá entran ocho sin pelearse, en cuarenta segundos!",
      placa: "40 SEGUNDOS ⏱️",
      plano: "Portón que se abre con ruido metálico; Mai invita apurada con la mano, gran angular. Cronómetro en pantalla.",
      marco: "Promesa con tiempo + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Portón abriéndose, Mai invita, arranca el cronómetro", "¡Vení que te muestro por qué acá entran ocho sin pelearse, en cuarenta segundos!", "¿Llega? ¿Por qué no se pelean?"],
      ["0:04", "Camina rápido por el parque, toma continua", "Uno: el parque es cerrado. Chicos y perro, sueltos.", ""],
      ["0:10", "Pasa por el quincho y toca la parrilla", "Dos: quincho techado, así el asado sale aunque llueva. Y a la noche, fogonero.", ""],
      ["0:17", "Entra a la grande (hogar) y señala la chica por la ventana", "Tres, la más importante: dos cabañas. Cada familia en la suya, con su baño.", ""],
      ["0:25", "Sale hacia el fogonero y frena", "¿Y la plata?", "Bucle"],
      ["0:27", "Mai mira el cronómetro en el celu", "Veinticinco mil por persona si son ocho. Treinta y seis segundos. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Comentá PRECIO y te mandamos las tarifas y las fechas libres.",
    shots: ["UNA toma continua con gran angular, del portón al fogonero (ensayar dos veces)", "Grabar el ruido del portón", "Cronómetro sobreimpreso en edición"],
    ojo: "Ordenar todo el terreno antes: la toma sin cortes muestra todo. Pileta cerrada: no apuntarle. $25.000 es con quinta completa y ocho.",
    caption: "Por qué acá entran ocho sin pelearse, en 40 segundos ⏱️\nDos cabañas, quincho techado, fogonero y parque cerrado. San Pedro.\nComentá PRECIO."
  },
  {
    v: "B", tipo: "Cambia la toma",
    titulo: "Del auto al fuego, sin cortar",
    angulo: "Una sola toma desde que baja del auto con el carbón hasta el brindis del grupo.",
    heras: { nota: "5", fallas: [
      "Arranca en silencio, solo con texto: rompe el gancho de 3 partes.",
      "Toma para mirar, sin pregunta abierta ni enemigo."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Del auto al fuego prendido, sin cortar. Vení.",
      placa: "DEL AUTO AL ASADO 🥩 SIN CORTES",
      plano: "Puerta del auto que se abre adentro del terreno y una bolsa de carbón que cae al pasto. Se escucha el portón cerrándose.",
      marco: "Reto visual (¿sin cortes?)"
    },
    beats: [
      ["0:00", "Baja del auto con la bolsa de carbón; portón que se cierra", "Del auto al fuego prendido, sin cortar. Vení.", "¿Llega?"],
      ["0:03", "La cámara lo sigue hacia el quincho", "El auto queda adentro. Ni hay que buscar dónde dejarlo.", ""],
      ["0:08", "Acomoda el carbón en la parrilla y prende", "El carbón lo trajimos nosotros. El quincho es techado, así que prende aunque se nuble.", ""],
      ["0:15", "Un amigo le pasa un mate, otra pone los platos en la mesa", "Los platos ya estaban, las camas hechas, y ya llegaron los demás.", "¿Cuánto les sale?"],
      ["0:21", "Gira la cámara al parque y levanta el vaso", "Entre los ocho, veinticinco mil cada uno la noche. Salud.", "Pago"]
    ],
    cta: "Mandáselo al asador del grupo.",
    shots: ["Toma única: bajar del auto → quincho → fuego → amigos → brindis", "Carbón con iniciador para que prenda rápido", "Grabar el portón cerrándose"],
    ojo: "El carbón lo traen los huéspedes: por eso se ve bajándolo del auto. $25.000 es con quinta completa y ocho.",
    caption: "Del auto al asado, sin cortes 🔥\nEl carbón lo traés vos; el quincho techado ya está.\nMandáselo al asador del grupo."
  },
  {
    v: "C", tipo: "Otro ritmo",
    titulo: "Papá, soltá el celular",
    angulo: "La toma va a la altura de un nene de 6 años que le muestra el lugar al padre. Lo último es lo que le gusta a la mamá.",
    heras: { nota: "6", fallas: [
      "«¡Vení que te muestro!» es simpático pero no abre curiosidad ni toca al padre.",
      "Tour de chicos sin moraleja: no cierra en el descanso de los grandes."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "«¡Papá, soltá el celular y vení que te muestro!»",
      placa: "TOUR GUIADO POR BAUTI, 6 AÑOS 👦",
      plano: "Cámara a la altura del nene, que tira fuerte de la mano del padre. Pelota que rebota.",
      marco: "Imagen tierna + brecha abierta"
    },
    beats: [
      ["0:00", "Nene tirando de la mano del padre, cámara baja", "«¡Papá, soltá el celular y vení que te muestro!»", "¿Qué le va a mostrar?"],
      ["0:03", "Corre por el pasto con la pelota", "«¡Acá juego a la pelota y nadie me dice cuidado con la calle!»", ""],
      ["0:08", "Señala el fogonero (sin tocarlo)", "«¡Acá hacemos fuego a la noche!»", ""],
      ["0:12", "Entra a la cabaña y se tira en el sofá cama", "«¡Y acá duermo yo! ¡Y el perro también entra!»", ""],
      ["0:16", "Mira hacia arriba, a la cámara", "«¿Y sabés qué es lo que más le gusta a mamá?»", "Bucle"],
      ["0:19", "Corte a la madre con mate en la galería, ojos cerrados", "«¡Que acá nadie la llama!»", "Pago"],
      ["0:22", "Placa final sobre el parque", "Quinta Los Álamos · San Pedro, a dos horas", ""]
    ],
    cta: "Etiquetá a la familia que tiene un Bauti.",
    shots: ["Toma a la altura del nene (celu a 80 cm del piso)", "Nene corriendo con la pelota", "Nene señalando el fogonero apagado", "Nene tirándose en el sofá cama", "Madre con mate en la galería"],
    ojo: "Permiso de los padres. Que el nene lo diga a su manera, no memorizado. El fogonero, apagado con chicos cerca.",
    caption: "Tour guiado por el experto de la casa 👦\nParque cerrado, fogonero y el perro adentro. San Pedro, a dos horas.\nEtiquetá a la familia que tiene uno así."
  }
]);

/* ───────── 07 · «Se te mandan sin avisar» ───────── */
H(7, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "POV: se te meten sin avisar",
    angulo: "Con el habla de la referencia («perdón que nos mandamos», «les comento», «¿cómo podríamos hacer para quedarnos?»), más corto y con la plata al final.",
    heras: { nota: "5,5", fallas: [
      "Casi 50 segundos de recorrido lento: se pasa de los 15-45 s.",
      "Arranca con un saludo educado y resuelve el conflicto enseguida, sin sonido."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "¡Disculpen! ¿Qué hacen acá adentro?",
      placa: "POV: SE TE METEN SIN AVISAR 😳",
      plano: "Mai aparece desde atrás del quincho; dos chicas que miraban la parrilla se dan vuelta. Pasos rápidos.",
      marco: "Conflicto + imagen y sonido"
    },
    beats: [
      ["0:00", "Mai aparece por detrás del quincho; las chicas se dan vuelta", "¡Disculpen! ¿Qué hacen acá adentro?", "¿Las echa?"],
      ["0:03", "Las chicas, avergonzadas", "—Perdón que nos mandamos, nos dijeron que podíamos mirar… Somos un grupo de ocho.", ""],
      ["0:07", "Mai suspira y arranca a caminar", "—Bueno, ya que están, les comento.", ""],
      ["0:10", "Entran a la grande: hogar", "—Son dos cabañas de cuatro. Esta tiene hogar a leña, horno y freezer.", ""],
      ["0:15", "Una abre la puerta del baño", "—¿Tienen secador? —No, eso tráiganlo. Pero el perro sí entra, y duerme adentro.", ""],
      ["0:20", "Salen hacia el portón", "—¿Y cómo podríamos hacer para quedarnos?", "Bucle"],
      ["0:23", "Mai en el portón, guiño a cámara", "—Si son ocho, veinticinco mil cada una la noche. Nos escriben y lo reservamos.", "Pago"]
    ],
    cta: "Comentá RESERVA y te escribimos.",
    shots: ["Mai saliendo desde atrás del quincho (grabar los pasos)", "Chicas avergonzadas", "Entrada a la grande con hogar", "Baño y pregunta del secador", "Caminata al portón", "Guiño en el portón"],
    ojo: "Actuado pero suelto: repasar las líneas y no leerlas. No decir que hay visitas de día: es un dato sin confirmar.",
    caption: "Se nos metieron sin avisar… y terminaron preguntando la seña 😅\nDos cabañas para ocho, hogar a leña y el perro adentro. Secador no hay.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "Cambia quién entra",
    titulo: "Cayeron un día antes",
    angulo: "El grupo que no aguantó la semana. La duda es si Mai los deja pasar; la regla del silencio cierra con humor.",
    heras: { nota: "6", fallas: [
      "Resuelve el conflicto en el segundo 6 («tienen suerte»): se va la duda.",
      "Lista de logística sin el apuro del grupo que se escapa."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "¡Paren! ¿Qué hacen acá? ¡La reserva es mañana!",
      placa: "CAYERON UN DÍA ANTES 🤦‍♀️",
      plano: "Mai abre el portón y del otro lado hay un auto lleno de amigos con la heladerita. Bocinazo y gritos.",
      marco: "Conflicto + sonido"
    },
    beats: [
      ["0:00", "Portón, auto lleno de amigos, bocinazo", "¡Paren! ¿Qué hacen acá? ¡La reserva es mañana!", "¿Los deja?"],
      ["0:03", "Amigos bajando, tentados", "—Es que no aguantábamos más la semana.", ""],
      ["0:06", "Mai mira el celular, piensa", "(un segundo de silencio)", "Brecha"],
      ["0:08", "Mai abre del todo", "—Bueno, tuvieron suerte. Cuatro en la grande, cuatro en la chica. Las camas ya están hechas.", ""],
      ["0:14", "Uno corre al quincho", "—¿Trajeron carbón? —… —Hay un súper a un minuto.", ""],
      ["0:19", "El perro baja y entra a la cabaña", "—Y el perro, obvio, adentro. Eso sí…", "¿Eso sí qué?"],
      ["0:23", "Mai a cámara, mientras brindan atrás", "—…a las doce, silencio. Que los conozco.", "Pago"]
    ],
    cta: "Mandáselo al amigo que llegaría un día antes.",
    shots: ["Portón y auto lleno de amigos (bocinazo)", "Amigos bajando", "Mai mirando el celular", "Amigo corriendo al quincho", "Perro entrando a la cabaña", "Mai a cámara con brindis atrás"],
    ojo: "«Tuvieron suerte» es ficción del sketch: no puede sonar a que siempre hay lugar. Súper a un minuto: Supermercado 18, del relevamiento de Maps.",
    caption: "Cuando tu grupo no aguanta y cae un día antes 😂\nDos cabañas para ocho, quincho techado y súper a un minuto.\nMandáselo al que haría esto."
  },
  {
    v: "C", tipo: "Otro giro",
    titulo: "Tu vieja de sorpresa",
    angulo: "La visita que parece un problema reservó la otra cabaña y se lleva a los chicos.",
    heras: { nota: "6", fallas: [
      "Entrada sin sonido y con una placa que no engancha al que no busca nada.",
      "Revela en el segundo 8 que reservó la chica, antes de la moraleja."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Hola, chicos… ¿llegué muy temprano?",
      placa: "TU VIEJA DE SORPRESA 😱",
      plano: "Padres con mate en el parque; portazo de auto fuera de cuadro y entra la abuela con bolso y una torta.",
      marco: "Humor de familia + tensión"
    },
    beats: [
      ["0:00", "Portazo; entra la abuela con bolso y torta", "Hola, chicos… ¿llegué muy temprano?", "¿Dónde va a dormir?"],
      ["0:03", "Primer plano de las caras de los padres", "(se miran en silencio)", "Tensión"],
      ["0:05", "Madre, resignada", "—Mamá… ¿y dónde pensás dormir?", ""],
      ["0:08", "La abuela no contesta; camina hacia la otra cabaña", "—Vengan.", "Brecha"],
      ["0:11", "Abre la puerta de la chica", "—Me reservé esta. Con su baño y su cocina.", "Giro"],
      ["0:15", "Los chicos corren a abrazarla", "—Y a los chicos me los llevo a dormir conmigo.", ""],
      ["0:18", "Padres solos junto al fogonero, se miran y se ríen", "Dos cabañas en el mismo terreno. Juntos, y cada uno en la suya.", "Moraleja"]
    ],
    cta: "Etiquetá a quien le haría esta sorpresa a tu familia.",
    shots: ["Padres con mate; entrada de la abuela con torta (portazo fuera de cuadro)", "Caras de los padres", "Abuela caminando a la otra cabaña", "Puerta de la chica abriéndose", "Chicos abrazando a la abuela", "Padres en el fogonero"],
    ojo: "Humor de familia, sin burla: la abuela es la que salva el finde. Capacidad: hasta cuatro en la chica. Sin precio por persona.",
    caption: "Cuando tu vieja cae de sorpresa… y se lleva a los chicos 😌\nDos cabañas en el mismo terreno: juntos y cada uno en la suya. San Pedro.\nEtiquetá a quien haría esto."
  }
]);

/* ───────── 08 · Estética de cine ───────── */
H(8, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Llegar un viernes, en detalles",
    angulo: "Manos, texturas y luz cálida, con la voz calma de la referencia y un final que se paga con humor.",
    heras: { nota: "5,5", fallas: [
      "«Vení que te muestro cómo es llegar» sin intriga y sin sonido que frene el scroll.",
      "Detalles lindos (cama, hogar, luces) sin el cansancio de la ciudad."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Vení que te muestro cómo es llegar un viernes.",
      placa: "VIERNES, 19 H 🚗",
      plano: "Mano abriendo el portón a contraluz cálido. Se escucha la llave que gira y el portón que cruje.",
      marco: "Imagen + sonido + monólogo interno"
    },
    beats: [
      ["0:00", "Mano con la llave en el portón, contraluz", "Vení que te muestro cómo es llegar un viernes.", "¿Cómo es?"],
      ["0:03", "Pies descalzos pisando el pasto", "Ni bien abrís, el pasto. El auto queda adentro.", ""],
      ["0:07", "Mano sobre la cama hecha", "Entrás a la cabaña y la cama ya está hecha.", ""],
      ["0:11", "Mano acomodando leña en el hogar de la grande", "Si elegiste la grande, el hogar para la noche.", ""],
      ["0:15", "Luces del parque prendiéndose; mano cebando un mate", "Afuera se prenden las luces del parque. ¿Lo más difícil de todo esto?", "Bucle"],
      ["0:20", "Mano cerrando el portón con luz de mediodía", "Irte el domingo.", "Pago"],
      ["0:23", "General de las dos cabañas iluminadas", "¿Qué les parece?", ""]
    ],
    cta: "Comentá SANPEDRO y te mandamos qué hacer en el pueblo cuando vengas.",
    shots: ["Mano con llave en el portón a contraluz (grabar el crujido)", "Pies descalzos en el pasto", "Mano sobre la cama hecha", "Mano con leña en el hogar", "Luces del parque prendiéndose + mate", "Mano cerrando el portón con luz de mediodía", "General iluminado"],
    ojo: "Hora dorada y exposición un poco baja; filtro cálido parejo en edición. La leña la traen los huéspedes.",
    caption: "Así es llegar un viernes a Los Álamos.\nLo más difícil es irse el domingo.\nComentá SANPEDRO."
  },
  {
    v: "B", tipo: "La experiencia estrella",
    titulo: "El plan del sábado no fue salir",
    angulo: "Cine armado en el quincho con una sábana. El chiste final es «el precio de la entrada».",
    heras: { nota: "6", fallas: [
      "Arranca mudo, solo con texto: rompe el gancho de 3 partes.",
      "Muestra el armado en línea recta, sin ninguna pregunta que retenga."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "El mejor plan del sábado a la noche con el grupo no fue salir.",
      placa: "EL PLAN DE LA NOCHE NO ES SALIR 🎬",
      plano: "Mano prendiendo un proyector en el quincho a oscuras: se escucha el clic y aparece el haz de luz.",
      marco: "Contracorriente + imagen y sonido"
    },
    beats: [
      ["0:00", "Clic del proyector, haz de luz en la oscuridad", "El mejor plan del sábado a la noche con el grupo no fue salir.", "¿Cuál fue?"],
      ["0:04", "Manos atando una sábana entre los tirantes del quincho", "Colgamos una sábana en el quincho.", ""],
      ["0:07", "Amigos con sillas, frazadas y un bol de pochoclos", "Frazadas de la cabaña, pochoclos y el fogonero al lado.", ""],
      ["0:12", "Siluetas de los ocho riéndose frente a la película", "Ocho amigos, dos cabañas, una película.", "¿Y cuánto salió?"],
      ["0:17", "General nocturno del parque", "¿El precio de la entrada?", "Bucle"],
      ["0:19", "Fuego del fogonero, voz calma", "Veinticinco mil cada uno la noche, con la quinta entera. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Guardalo para la noche que vengan con el grupo.",
    shots: ["Proyector encendiéndose (grabar el clic)", "Sábana colgada en el quincho", "Amigos con sillas, frazadas y pochoclos", "Siluetas frente a la película", "General nocturno", "Fogonero"],
    ojo: "La quinta NO tiene proyector: lo trae el grupo. Decirlo en el caption. $25.000 es con quinta completa y ocho.",
    caption: "El plan del sábado no fue salir 🎬\nTraete el proyector: el quincho techado, las frazadas y el fogonero ya están.\nGuardalo para tu finde."
  },
  {
    v: "C", tipo: "Otro momento del día",
    titulo: "8:00, todos duermen",
    angulo: "La mañana contra la ciudad: el primer mate sin bocinas, y la gracia de que por un rato nadie te necesite.",
    heras: { nota: "6", fallas: [
      "Gancho poético y pasivo, sin sonido de quiebre ni pregunta.",
      "Momentos lindos sin el contraste con la ciudad."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Esto es lo que te perdés si el finde te quedás en la ciudad.",
      placa: "8:00 · TODOS DUERMEN 🤫",
      plano: "Rayo de sol por la ventana sobre alguien dormido. Se escucha la pava bajito y los pájaros.",
      marco: "Lo que te perdés + enemigo común (la ciudad)"
    },
    beats: [
      ["0:00", "Sol por la ventana, pava, pájaros", "Esto es lo que te perdés si el finde te quedás en la ciudad.", "¿Qué?"],
      ["0:04", "Mano cebando el primer mate con vapor en la mesa de mosaico", "Ocho de la mañana. El primer mate, y ni una bocina.", ""],
      ["0:08", "Pies descalzos en el pasto con rocío; perro estirándose en la galería", "El pasto mojado. El perro, que ya se levantó.", ""],
      ["0:13", "Puertas de las dos cabañas cerradas, todo quieto", "Los otros siete, durmiendo.", ""],
      ["0:16", "Mano apoyando el termo, mirando los árboles", "Y lo mejor de este mate…", "Bucle"],
      ["0:19", "Mismo plano, solo pájaros", "…es que por un rato nadie te necesita. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Etiquetá a la que se levanta primera a cebar en tu grupo.",
    shots: ["Sol por la ventana sobre alguien dormido (grabar la pava y los pájaros)", "Mate con vapor en la mesa de mosaico", "Pies descalzos en el rocío", "Perro en la galería", "Puertas de las cabañas cerradas", "Mano con el termo mirando los árboles"],
    ojo: "Se graba a la mañana si se duerme en la quinta; si no, queda para la próxima jornada.",
    caption: "8:00 en Los Álamos. Todos duermen.\nPrimer mate, pasto mojado y ni una bocina.\nEtiquetá a la que se levanta primera."
  }
]);

/* ───────── 09 · 18 segundos, tres lugares, un mate ───────── */
H(9, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "¿Y qué tal si este finde te escapás?",
    angulo: "La pregunta de la referencia («¿y qué tal si te escapás…?») con mate en mano y un lugar por frase; cierra con «te esperamos».",
    heras: { nota: "5,5", fallas: [
      "Pregunta genérica sin sonido de impacto, y dice San Pedro enseguida.",
      "Recorrido lindo sin el cansancio de la ciudad."
    ]},
    dur: "≈18 s",
    hook: {
      dice: "¿Y qué tal si este finde te escapás con tu grupo a un lugar donde nadie te llame?",
      placa: "¿Y SI ESTE FINDE…? 🧉",
      plano: "Mai con mate y termo frente a las cabañas a contraluz. Se escucha un sorbo de mate.",
      marco: "Pregunta + deseo universal, gancho de 3 partes"
    },
    beats: [
      ["0:00", "Frente a las cabañas, sorbo de mate", "¿Y qué tal si este finde te escapás con tu grupo a un lugar donde nadie te llame?", "¿A dónde?"],
      ["0:04", "Sentada en la galería, ceba", "Dos cabañas para ocho, a dos horas de Buenos Aires,", ""],
      ["0:07", "En la cocina de la grande, horno abierto", "con todo lo que necesitás para cocinar,", ""],
      ["0:10", "En el quincho, junto a la parrilla", "un quincho techado para el asado", ""],
      ["0:12", "En el medio del parque", "y un parque enorme para no hacer nada.", "¿Cuánto?"],
      ["0:15", "Mismo lugar, ceba y sonríe", "Entre los ocho, veinticinco mil cada uno. Te esperamos.", "Pago"]
    ],
    cta: "Mandáselo a la persona con la que vendrías.",
    shots: ["Frente a las cabañas con mate y termo (grabar el sorbo)", "Sentada en la galería", "Cocina de la grande con el horno", "Junto a la parrilla del quincho", "Medio del parque"],
    ojo: "Misma ropa y mismo mate en todos los planos. Cada frase, tres tomas en su lugar. $25.000 es con quinta completa y ocho.",
    caption: "¿Y qué tal si este finde te escapás?\nQuinta con dos cabañas para ocho en San Pedro, a dos horas.\nMandáselo a con quien vendrías."
  },
  {
    v: "B", tipo: "Cambia el objeto",
    titulo: "Este asado no se come en la ciudad",
    angulo: "La tabla de carne viaja de la cocina de un depto a la parrilla de la quinta. Termina en la mesa larga.",
    heras: { nota: "5", fallas: [
      "El gancho no abre ninguna duda y no tiene sonido de impacto.",
      "Resuelve la intriga a la mitad, sin tensión hasta el remate."
    ]},
    dur: "≈18 s",
    hook: {
      dice: "Basta de comer apretados en un restaurante un sábado.",
      placa: "ESTE ASADO NO SE COME EN LA CIUDAD 🥩",
      plano: "Amigo con la tabla de carne en la cocina chica de un departamento. Se escucha el cuchillo contra la tabla.",
      marco: "Enemigo común + contraste de lugar"
    },
    beats: [
      ["0:00", "Amigo con la tabla en la cocina de un depto; golpe de cuchillo", "Basta de comer apretados en un restaurante un sábado.", "¿Dónde, entonces?"],
      ["0:03", "Mismo amigo con la tabla bajando del auto en la quinta", "Este asado se come en San Pedro.", ""],
      ["0:05", "Cruzando el parque con la tabla", "Dos cabañas y un parque para ocho.", ""],
      ["0:08", "Poniendo la carne en la parrilla del quincho", "Quincho techado: que llueva si quiere.", ""],
      ["0:11", "La tabla con la carne hecha en la mesa, amigos alrededor", "Todos en la misma mesa.", "¿Y cuánto?"],
      ["0:14", "Brindis con el fuego atrás", "Veinticinco mil cada uno la noche, con la quinta entera.", "Pago"]
    ],
    cta: "Mandáselo al asador del grupo.",
    shots: ["Amigo con la tabla en la cocina de un depto (grabar el cuchillo)", "Bajando del auto con la tabla", "Cruzando el parque", "Carne a la parrilla", "Mesa con amigos y la carne", "Brindis"],
    ojo: "La carne y el carbón los traen ellos. $25.000 es por noche, con quinta completa y ocho.",
    caption: "Este asado no se come en la ciudad 🔥\nQuinta completa para ocho en San Pedro: $25.000 por persona la noche.\nMandáselo al asador del grupo."
  },
  {
    v: "C", tipo: "Otro público",
    titulo: "El perro viene con vos",
    angulo: "Cuatro lugares para tomar mate con el perro; el cuarto, el que nadie da, queda último.",
    heras: { nota: "6", fallas: [
      "Lista ordenada sin sonido ni enemigo (la guardería).",
      "Recorre los lugares en fila sin crear expectativa por lo principal: que duerma adentro."
    ]},
    dur: "≈18 s",
    hook: {
      dice: "Dejá de pagar guardería cada vez que te vas un finde.",
      placa: "EL PERRO VIENE CON VOS 🐶",
      plano: "Persona con mate sentada en el pasto; el perro se echa al lado. Un ladrido corto.",
      marco: "Enemigo común + lo mejor al final"
    },
    beats: [
      ["0:00", "Mate en el pasto, perro se echa, ladrido", "Dejá de pagar guardería cada vez que te vas un finde.", "¿Y qué hago con él?"],
      ["0:03", "Galería con el perro a los pies", "Acá tenés cuatro lugares para tomar mate con él. Uno: la galería.", "¿Cuáles más?"],
      ["0:06", "Quincho, perro abajo de la mesa", "Dos: el quincho, mientras se hace el asado.", ""],
      ["0:08", "Fogonero de noche, perro echado cerca", "Tres: el fogonero.", "¿Y el cuarto?"],
      ["0:10", "Adentro de la cabaña, perro dormido junto al sillón", "Y cuatro, el que nadie te deja: adentro de la cabaña.", "Pago"],
      ["0:14", "Persona sonriendo con mate y perro", "No paga y no importa el tamaño. San Pedro, a dos horas.", ""]
    ],
    cta: "Mandáselo a quien no viaja sin su perro.",
    shots: ["Mate en el pasto con el perro echándose (grabar el ladrido)", "Galería con el perro", "Quincho con el perro abajo de la mesa", "Fogonero con el perro", "Perro dormido adentro de la cabaña", "Persona con mate y perro a cámara"],
    ojo: "Única condición del brief: juntar lo que dejan. Se puede sumar al caption.",
    caption: "Cuatro lugares para tomar mate con tu perro, y uno es adentro de la cabaña 🐶\nNo paga y no importa el tamaño. San Pedro.\nMandáselo a quien no viaja sin el suyo."
  }
]);

/* ───────── 10 · Fotocopiadora del POV que ganó ───────── */
H(10, [
  {
    v: "A", tipo: "POV con objeto",
    titulo: "POV: llegás con la credencial puesta",
    angulo: "La credencial del trabajo como enemigo a la vista. Se queda en el auto; la única decisión que queda es un chiste.",
    heras: { nota: "5", fallas: [
      "Arranca sin voz ni sonido, solo con placa.",
      "Secuencia linda sin pregunta abierta y sin moraleja."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "¿Hace cuántos viernes que salís del trabajo con la cabeza quemada?",
      placa: "POV: LLEGÁS CON LA CREDENCIAL 👔",
      plano: "Primer plano de una credencial colgada del cuello; atrás, desenfocado, el portón que se abre. Un pitido de oficina se corta con el portón.",
      marco: "Monólogo interno + objeto en mano (fotocopiadora de Heras)"
    },
    beats: [
      ["0:00", "Credencial en el pecho, portón atrás; pitido cortado por el portón", "¿Hace cuántos viernes que salís del trabajo con la cabeza quemada?", "¿Y qué hago?"],
      ["0:04", "Mano sacándose la credencial y tirándola al asiento del auto", "Sacate eso. La compu queda en el baúl.", ""],
      ["0:08", "POV descalzo en el pasto", "San Pedro, a dos horas. Terreno cerrado, nadie te busca.", ""],
      ["0:12", "Mano recibiendo un mate frente a las dos cabañas", "Dos cabañas para los ocho del grupo, quincho y fogonero.", ""],
      ["0:16", "Fogonero prendiéndose con las luces del parque, risas", "Y lo único que vas a tener que decidir esta noche…", "Bucle"],
      ["0:20", "Mai a cámara, con un mate en una mano y un vaso en la otra", "…¿mate o fernet?", "Pago"]
    ],
    cta: "Guardalo para el viernes que lo necesites.",
    shots: ["Credencial en primer plano con portón atrás (grabar el crujido)", "Tirar la credencial al asiento", "Cerrar el baúl con la compu", "POV descalzo en el pasto", "Mano recibiendo mate frente a las cabañas", "Fogonero y luces", "Mai con mate y vaso"],
    ojo: "Misma música y ritmo que el POV original: es parte de lo que funcionó.",
    caption: "POV: llegás a San Pedro con la credencial todavía puesta.\nSe queda en el auto.\nGuardalo para el viernes que lo necesites."
  },
  {
    v: "B", tipo: "Personajes",
    titulo: "Vos del lunes vs. vos del viernes",
    angulo: "La misma persona discute consigo misma. La del lunes pone las objeciones; la plata queda para el final.",
    heras: { nota: "6,5", fallas: [
      "La primera pregunta no tiene sonido ni un enemigo fuerte.",
      "El viernes contesta «ya reservé» en el segundo 4 y se cierra la duda."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Lunes: —¿Otra vez te vas a quedar encerrado todo el finde?",
      placa: "VOS DEL LUNES vs. VOS DEL VIERNES 💻🌿",
      plano: "Pantalla partida: a la izquierda, la misma persona agobiada frente a la compu; a la derecha, con buzo y mate en el parque. Tecleo cortado por pájaros.",
      marco: "Contraste + enemigo común (la rutina)"
    },
    beats: [
      ["0:00", "Pantalla partida; tecleo cortado por pájaros", "Lunes: —¿Otra vez te vas a quedar encerrado todo el finde?", "¿Qué le contesta?"],
      ["0:04", "Viernes, tranquilo, con el mate", "Viernes: —Esta vez no. Ya tengo dónde.", "¿Dónde?"],
      ["0:07", "Lunes, desconfiado", "Lunes: —¿Con los chicos, el perro y los Martínez? Terminamos peleados.", ""],
      ["0:11", "Viernes muestra el terreno y el quincho", "Viernes: —Dos cabañas separadas, terreno cerrado, y el perro duerme adentro.", ""],
      ["0:16", "Lunes cruza los brazos", "Lunes: —¿Y cuánto sale eso?", "Bucle"],
      ["0:18", "Viernes con la quinta iluminada atrás", "Viernes: —Entre los ocho, veinticinco mil cada uno. En San Pedro, a dos horas.", "Pago"],
      ["0:23", "Lunes cierra la compu de un golpe", "Lunes: —…Pasame la ubicación.", ""]
    ],
    cta: "Comentá FINDE y te pasamos las fechas libres.",
    shots: ["Mitad lunes: misma persona con camisa frente a la compu", "Mitad viernes: misma persona con buzo y mate en el parque, mismo encuadre", "Terreno y quincho", "Quinta iluminada", "Cierre de la compu"],
    ojo: "Grabar las dos mitades con el celu a la misma altura. «Los Martínez» son la otra familia: así cierran los ocho.",
    caption: "Vos del lunes vs. vos del viernes.\nQuinta completa en San Pedro: $25.000 por persona entre ocho.\nComentá FINDE."
  },
  {
    v: "C", tipo: "Cambios rápidos",
    titulo: "De la oficina al fogonero en diez cortes",
    angulo: "Un corte cada segundo y medio, con una frase por corte. Termina en el fuego y en Mai, sin precio: la gracia es el ritmo.",
    heras: { nota: "5", fallas: [
      "Solo placas, sin voz: no hay gancho hablado.",
      "Clips lindos sin gancho, contexto, moraleja ni cierre."
    ]},
    dur: "≈20 s",
    hook: {
      dice: "En diez cortes: del viernes en la oficina al fogonero prendido.",
      placa: "DE LA OFICINA AL FOGONERO 🔥",
      plano: "Mano que cierra la compu de un golpe. Clac seco y un motor que arranca.",
      marco: "Promesa + cambio de imagen constante"
    },
    beats: [
      ["0:00", "Mano cerrando la compu (clac) + motor", "En diez cortes: del viernes en la oficina al fogonero prendido.", "¿Llega?"],
      ["0:03", "Llaves; ruta desde el parabrisas", "Viernes a la tarde. Dos horas de ruta.", ""],
      ["0:06", "Portón abriéndose; bolsos cayendo en la cama", "El auto adentro. La cama hecha.", ""],
      ["0:09", "Zapatillas volando al pasto; mate servido en la mesa de mosaico", "Zapatillas afuera. Primer mate.", ""],
      ["0:12", "Parrilla humeando en el quincho", "El grupo prende la parrilla.", ""],
      ["0:15", "Luces del parque prendiéndose", "Y cuando cae el sol…", "Bucle"],
      ["0:17", "Fogonero prendido; Mai junto al fuego", "…fogonero. Te esperamos en San Pedro.", "Pago"]
    ],
    cta: "Mandáselo al grupo.",
    shots: ["Mano cerrando la compu (grabar el clac)", "Llaves del auto", "Ruta desde el parabrisas (graba el acompañante, nunca quien maneja)", "Portón abriéndose", "Bolsos en la cama", "Zapatillas al pasto", "Mate en la mesa de mosaico", "Parrilla humeando", "Luces del parque", "Fogonero con Mai"],
    ojo: "El ingreso es desde las 11:00: llegar el viernes a la tarde no choca, pero confirmarlo con Sandra antes de publicar. La ruta la graba el acompañante.",
    caption: "De la oficina al fogonero en diez cortes 🔥\nDos cabañas para ocho en San Pedro, a dos horas.\nMandáselo al grupo."
  }
]);
