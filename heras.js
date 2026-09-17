/* Versión 2 de los guiones: pasados por el filtro de Víctor Heras en NotebookLM
   (cuaderno «Los Álamos · guiones virales (Víctor Heras)», 17/09/2026) y corregidos contra
   los datos reales de la quinta. Reemplaza los guiones de refs-*.js; esos quedan como historia. */
GUIONES.intro.push("Versión 2 (17/09): los 30 guiones pasaron por el filtro de Víctor Heras en NotebookLM, con 12 videos suyos como fuente. Cada tarjeta muestra la nota que sacó la versión anterior y las dos fallas que se corrigieron.");
const H = (n, guiones) => { const r = GUIONES.refs.find(x => x.n === n); if (r) r.guiones = guiones; };

/* ───────── 01 · Te lo presentan a cámara ───────── */
H(1, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "El error de irse de a ocho",
    angulo: "Entra por la frustración del grupo que nunca concreta, y el precio por persona queda como remate del bucle.",
    heras: { nota: "5", fallas: [
      "Gancho estático: presentación a cámara sin impacto visual ni sonido, y en el segundo 4 ya dice qué es y dónde queda (cierra la intriga).",
      "Nivel de conciencia 3: lista comodidades como un folleto en vez de hablarle al 90 % que no está buscando cabaña."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "¿Hace cuántos meses que en tu grupo dicen «este finde nos escapamos» y nunca pasa nada?",
      placa: "EL ERROR DE IRSE DE A 8 🤫",
      plano: "Mai camina rápido hacia la cámara por el parque, mate en mano. Sonido real: portón que se abre y pájaros.",
      marco: "Pregunta incómoda + monólogo interno (Heras) · gancho de 3 partes"
    },
    beats: [
      ["0:00", "Mai caminando hacia cámara con mate, portón y pájaros de fondo", "¿Hace cuántos meses que en tu grupo dicen «este finde nos escapamos» y nunca pasa nada?", "¿Por qué no pasa?"],
      ["0:04", "Entra a la cabaña grande, cámara la sigue hasta el hogar", "El problema no son las ganas: es querer meter a ocho personas en el mismo lugar.", "¿Y entonces?"],
      ["0:09", "Corte rápido a la cabaña chica y a su baño", "Acá son dos cabañas de cuatro. Cada familia con su espacio y su baño.", ""],
      ["0:15", "Quincho techado con la parrilla humeando", "Y en el medio, lo que es de todos: quincho techado, fogonero y parque cerrado.", "¿Cuánto sale esto?"],
      ["0:21", "Mai sentada en la mesa de mosaico, mira a cámara", "¿Querés saber cómo los convencés de armar el bolso hoy?", "Bucle abierto a propósito"],
      ["0:25", "Plano general con las luces del parque prendidas", "La quinta entera sale veinticinco mil pesos por persona. Lo mismo que una cabaña sola. A dos horas de Buenos Aires.", "Pago del bucle = moraleja"]
    ],
    cta: "Comentá PRECIO y te mandamos las tarifas y las fechas libres por privado.",
    shots: ["Mai caminando con mate hacia cámara (grabar el sonido del portón)", "Entrada a la grande hasta el hogar", "Cabaña chica + baño", "Parrilla humeando en el quincho", "Mai en la mesa de mosaico a cámara", "General con luces del parque"],
    ojo: "$25.000 por persona es con la quinta completa y 8 personas ($200.000 ÷ 8), por noche. Si Mai no graba, lo hace cualquiera del grupo.",
    caption: "El error de irse de a ocho: querer meterse todos bajo el mismo techo.\nDos cabañas, quincho, fogonero y parque en San Pedro.\nComentá PRECIO."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "Si sos la que organiza y nadie contesta",
    angulo: "Enemigo común: el grupo de WhatsApp que clava el visto. La respuesta al «¿cómo los convenzo?» llega al final.",
    heras: { nota: "6", fallas: [
      "Formato pregunta-respuesta que contesta todo al instante: cada duda se cierra y no queda tensión hasta el final.",
      "No hay enemigo común fuerte: nombra a la organizadora pero no le pega a la frustración del grupo que no responde."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "Si sos la que siempre arma la escapada y en el grupo nadie contesta, escuchá esto.",
      placa: "SI SOS LA QUE ORGANIZA 🙋‍♀️",
      plano: "Celular en primer plano con el chat del grupo lleno de notificaciones sonando; atrás, desenfocado, el parque.",
      marco: "Cocktail party + enemigo común (Heras)"
    },
    beats: [
      ["0:00", "Celular con el chat del grupo, sonido de notificaciones", "Si sos la que siempre arma la escapada y en el grupo nadie contesta, escuchá esto.", "¿Qué tengo que escuchar?"],
      ["0:04", "Baja el celu y aparece enfocada la cabaña grande", "El plan no se cae por la plata. Se cae porque nadie quiere dormir todos apretados en una casa.", "¿Y cómo se arregla?"],
      ["0:09", "Las dos puertas de las cabañas, una al lado de la otra", "Dos cabañas en el mismo predio: cada familia con su espacio y su baño.", ""],
      ["0:14", "Perro corriendo por el parque y entrando a la cabaña", "El perro viene, sin cargo, y duerme adentro. Y si llueve, quincho techado.", ""],
      ["0:20", "Mesa de mosaico con juegos de mesa", "¿Y sabés cómo cerrás la discusión del grupo en dos minutos?", "Bucle abierto"],
      ["0:24", "Mai sonriendo a cámara desde el parque", "Les decís que la quinta entera sale veinticinco mil por cabeza la noche. A dos horas de Buenos Aires.", "Pago"]
    ],
    cta: "Mandáselo al grupo. Y si te dicen que sí, comentá FINDE y te pasamos las fechas libres.",
    shots: ["Celular con chat de grupo armado (nombres inventados) y sonido de notificaciones", "Cabaña grande enfocándose", "Las dos puertas en un plano", "Perro corriendo y entrando a la cabaña", "Juegos de mesa en la mesa de mosaico", "Mai a cámara en el parque"],
    ojo: "El chat tiene que ser armado: nada de números ni nombres reales.",
    caption: "Si sos la que organiza y el grupo clava el visto 🙃\nDos cabañas, cada familia con su baño, el perro adentro. San Pedro.\nMandáselo al grupo."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "Si estás harta de verlos con la pantalla",
    angulo: "Le habla al padre o la madre cansada: la transformación no es de los chicos, es el descanso del adulto.",
    heras: { nota: "6,5", fallas: [
      "Lista 1-2-3 predecible: la imagen de la tablet es buena, pero enumera sin abrir ninguna pregunta que retenga.",
      "No usa el monólogo interno del padre agotado: lista actividades de chicos en vez de vender el descanso del adulto."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Si estás cansada de ver a tus hijos pegados a la pantalla todo el finde, mirá esto.",
      placa: "CHICOS SIN PANTALLA 🚫📱",
      plano: "Tablet apagada tirada en el pasto. Sonido real: pelota que rebota y chicos gritando atrás.",
      marco: "Enemigo común (la pantalla) + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Tablet apagada en el pasto, pelota y chicos de fondo", "Si estás cansada de ver a tus hijos pegados a la pantalla todo el finde, mirá esto.", "¿Qué hago?"],
      ["0:04", "Chico pateando la pelota en el parque", "El error no es sacársela a la fuerza. Es no tener un lugar cerrado donde puedan correr sin que los mires.", "¿Dónde?"],
      ["0:10", "Manos armando un juego de mesa en la mesa de mosaico; corte al fogonero de noche", "Parque cerrado, pelota, juegos de mesa y, a la noche, el fogonero.", ""],
      ["0:16", "Padre o madre con mate en la galería mirando el parque", "¿Y sabés qué es lo mejor que te pasa a vos?", "Bucle abierto"],
      ["0:20", "Mismo plano, cierra los ojos al sol", "Que mientras ellos juegan, vos por fin te sentás. A dos horas de Buenos Aires.", "Pago = moraleja"]
    ],
    cta: "Guardalo para el finde largo del 10 de octubre.",
    shots: ["Tablet apagada en el pasto con sonido de pelota y chicos", "Chico pateando la pelota", "Juego de mesa en la mesa de mosaico", "Fogonero de noche", "Adulto con mate en la galería, ojos cerrados al sol"],
    ojo: "Chicos con permiso de los padres para publicar. La leña del fogonero la traen los huéspedes.",
    caption: "Chicos sin pantalla y vos, por fin, sentada.\nParque cerrado, juegos de mesa y fogonero. San Pedro, a dos horas.\nGuardalo para el finde largo."
  }
]);

/* ───────── 02 · «Repetilo, que te estoy grabando» ───────── */
H(2, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "«Repetí la locura que me dijiste»",
    angulo: "El video «robado» se estira: primero el enemigo (lo que cuesta salir en grupo), y el dato de los $25.000 recién al final.",
    heras: { nota: "5,5", fallas: [
      "A los 7 segundos ya dice dónde está y de qué se trata: se rompe la brecha de curiosidad.",
      "El precio sale como dato frío, sin el monólogo del grupo que cree que irse de a ocho es carísimo."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Te estoy grabando. Repetí la locura que me dijiste recién.",
      placa: "SE LE ESCAPÓ A SANDRA 🤫",
      plano: "Celular en mano, movido, apuntando a Mai en el quincho. Sonido real: la parrilla que chisporrotea.",
      marco: "Impacto visual (parece robado) + secreto a medias, gancho de 3 partes"
    },
    beats: [
      ["0:00", "Celu movido, Mai en el quincho junto a la parrilla que chisporrotea", "Te estoy grabando. Repetí la locura que me dijiste recién.", "¿Qué dijo?"],
      ["0:03", "Mai se tapa la cara riéndose mientras acomoda el carbón", "—No, cortala. —Dale, que si lo cuento yo en el grupo no me cree nadie.", "Tensión"],
      ["0:07", "Quien graba camina rápido hacia la mesa de mosaico", "Porque todos creen que irse ocho personas un finde es imposible de pagar.", "¿Y no lo es?"],
      ["0:12", "Paneo rápido a las dos cabañas", "Dos cabañas, cuatro en cada una, todo el predio para ustedes.", ""],
      ["0:17", "Vuelve a Mai en el quincho, ahora seria", "—Bueno: si vienen ocho y toman la quinta completa… sale veinticinco mil pesos por persona la noche.", "Pago"],
      ["0:23", "Gira la cámara al parque con las luces prendidas", "¿Escucharon? Veinticinco por cabeza. En San Pedro, a dos horas.", ""]
    ],
    cta: "Mandáselo al grupo y comentá FINDE: te pasamos las fechas libres.",
    shots: ["Toma única con el celu, sin estabilizar: Mai en el quincho con la parrilla sonando", "Caminata rápida a la mesa de mosaico", "Paneo a las dos cabañas", "Giro al parque con luces"],
    ojo: "No inventar descuento ni promo. $25.000 es con la quinta completa y ocho personas.",
    caption: "Se le escapó a Mai 🙈\nQuinta completa para 8: $25.000 por persona la noche.\nMandáselo al grupo."
  },
  {
    v: "B", tipo: "Cambia el segmento",
    titulo: "«¿Y qué hacés con el perro?»",
    angulo: "Enemigo común del que tiene perro: la guardería o el «pet friendly» que lo deja afuera. La respuesta se demora hasta que el perro entra.",
    heras: { nota: "6", fallas: [
      "Mai contesta «no paga» en el segundo 3: la duda se cierra enseguida.",
      "Le falta el enemigo común del dueño de perro: la guardería o el lugar que lo deja afuera."
    ]},
    dur: "≈22 s",
    hook: {
      dice: "No, no, repetilo que te estoy grabando: ¿qué hacés con el perro?",
      placa: "¿TU PERRO SE QUEDA AFUERA? 🐶",
      plano: "Celular con el perro en primer plano mirando a cámara y jadeando; Mai atrás en el parque.",
      marco: "Pregunta incómoda + cocktail party (dueños de perro)"
    },
    beats: [
      ["0:00", "Perro en primer plano jadeando, Mai atrás", "No, no, repetilo que te estoy grabando: ¿qué hacés con el perro?", "¿Qué pasa con el perro?"],
      ["0:04", "Mai se ríe y camina hacia la puerta de la cabaña", "—Lo que no hacés es dejarlo en una guardería. O atado afuera, como en todos lados.", "¿Y entonces?"],
      ["0:09", "La cámara sigue al perro, que entra a la cabaña", "(silencio: solo las patas del perro entrando)", "Brecha visual"],
      ["0:12", "El perro se echa al lado del sillón", "—Duerme adentro, con ustedes. No paga y no importa el tamaño.", "Pago"],
      ["0:16", "Paneo al parque cerrado", "—Y el predio está cerrado, así corre suelto mientras ustedes hacen el asado.", ""],
      ["0:20", "Mai a cámara", "San Pedro, a dos horas. ¿Lo vas a seguir dejando?", ""]
    ],
    cta: "Etiquetá a esa persona que no viaja sin su perro.",
    shots: ["Perro mirando a cámara con Mai atrás", "Mai caminando a la puerta", "Seguir al perro entrando a la cabaña (sin hablar)", "Perro echado junto al sillón", "Parque cerrado", "Mai a cámara"],
    ojo: "Única condición real: juntar lo que deja. Perro tranquilo para grabar.",
    caption: "El perro no se queda afuera: duerme en la cabaña, no paga y no importa el tamaño 🐶\nSan Pedro, a dos horas.\nEtiquetá a quien no viaja sin el suyo."
  },
  {
    v: "C", tipo: "Otro dato",
    titulo: "«¿Por qué cargamos el baúl al pedo?»",
    angulo: "El enemigo es el auto lleno de bolsos. La lista de lo que ya está se cuenta como alivio, con cortes cada pocos segundos.",
    heras: { nota: "5,5", fallas: [
      "Es una lista de inventario sin conflicto: falta el monólogo del que se pasa la noche anterior llenando el baúl.",
      "Gancho plano en un dormitorio quieto y tomas lentas, sin cambio de plano cada 3 a 5 segundos."
    ]},
    dur: "≈22 s",
    hook: {
      dice: "Esperá, decilo de nuevo que te grabo: ¿por qué cargamos el auto al pedo?",
      placa: "NO CARGUES EL BAÚL AL PEDO 🧳",
      plano: "Cámara entrando apurada al dormitorio, Mai estirando una frazada. Sonido real del piso y pájaros.",
      marco: "Error + enemigo común (el baúl lleno)"
    },
    beats: [
      ["0:00", "Entrada apurada al dormitorio, Mai con la frazada", "Esperá, decilo de nuevo que te grabo: ¿por qué cargamos el auto al pedo?", "¿Por qué?"],
      ["0:04", "Mai señala la cama hecha", "—Porque sábanas, frazadas y almohadas ya están.", ""],
      ["0:07", "Corte rápido a la cocina: platos y tazas en el estante", "—La vajilla también.", "¿Y qué sí traigo?"],
      ["0:10", "Paneo al quincho con la parrilla", "—Traete toallones, condimentos y la leña o el carbón.", ""],
      ["0:14", "Auto estacionado adentro del predio, baúl medio vacío", "—Y el auto queda acá adentro.", ""],
      ["0:17", "Mai a cámara con mate en el parque", "Medio baúl menos. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Guardalo para la noche que armes los bolsos.",
    shots: ["Entrada apurada al dormitorio con Mai y la frazada", "Cama hecha", "Vajilla en la cocina", "Quincho y parrilla", "Auto adentro con el baúl medio vacío", "Mai con mate a cámara"],
    ojo: "Lista exacta del brief del cliente. No hay secador: no decir que está todo.",
    caption: "No cargues el baúl al pedo 🧳\nYa están sábanas, frazadas, almohadas y vajilla. Traés toallones, condimentos y leña o carbón.\nGuardalo para la noche que armes los bolsos."
  }
]);

/* ───────── 03 · POV sketch: secuestro que termina en venta ───────── */
H(3, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "POV: secuestrás a la chica de las cabañas",
    angulo: "Mai, «secuestrada», no vende la ficha: le resuelve al secuestrador el problema de organizar a ocho. El precio lo pregunta él.",
    heras: { nota: "5,5", fallas: [
      "Dos segundos de silencio al arranque: rompe el gancho de 3 partes (falta sonido).",
      "Mai se saca la cinta y larga la ficha técnica de golpe: cierra la curiosidad en vez de entrar por el problema del grupo."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "«¡Mmm! ¡Mmm!» (Mai grita con la cinta puesta)",
      placa: "POV: SECUESTRÁS A LA CHICA DE LAS CABAÑAS 🚗",
      plano: "Asiento de atrás: Mai con cinta de pintor en la boca, forcejeando de chiste. Sonido de motor y portazo.",
      marco: "Impacto visual + absurdo, con sonido desde el segundo 0"
    },
    beats: [
      ["0:00", "Mai con cinta forcejeando, sonido de motor (auto detenido)", "«¡Mmm! ¡Mmm!»", "¿Qué pasa acá?"],
      ["0:02", "Se saca la cinta de un tirón y señala al secuestrador por el espejo", "—Antes de llevarme a cualquier lado, resolvé el quilombo que tenés con tu grupo este finde.", "¿Qué quilombo?"],
      ["0:06", "Secuestrador con gorro de lana, la mira por el espejo", "—¿Qué quilombo? —El de meter ocho personas en una casa y volver peleados.", ""],
      ["0:10", "Corte a la cabaña grande, hogar prendido", "—Dos cabañas separadas en San Pedro. Cada familia en la suya, y la grande con hogar a leña.", ""],
      ["0:16", "Corte al quincho con la parrilla humeando", "—Quincho techado, llueva o no. Y el perro duerme adentro, sin cargo.", ""],
      ["0:22", "Secuestrador, resignado", "—…¿Y cuánto sale esa locura?", "Bucle a punto de pagarse"],
      ["0:24", "Mai sonríe de oreja a oreja", "—¿Te interesa? Veinticinco mil por persona si son ocho. A dos horas de Buenos Aires.", "Pago"],
      ["0:28", "Él frena del todo y le abre la puerta; ella grita desde afuera", "—¡Ni te pasé el WhatsApp! ¡Está en el perfil!", ""]
    ],
    cta: "Comentá RESERVA y te mandamos las fechas libres.",
    shots: ["Mai con cinta de pintor en el asiento de atrás (auto estacionado)", "Secuestrador con gorro de lana por el espejo", "Hogar prendido en la grande", "Parrilla humeando", "Mai bajando y gritando desde la vereda"],
    ojo: "Todo de chiste: cinta de pintor, gorro de lana (no pasamontañas), auto quieto. El sonido de motor se agrega en edición.",
    caption: "Ni secuestrada deja de vender 😅\nDos cabañas, hogar a leña, quincho techado y el perro adentro. San Pedro.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "POV: tus amigos te secuestran para tu cumple",
    angulo: "El enemigo es el cumple de siempre en un bar. Las pistas no revelan nada hasta que le sacan la venda.",
    heras: { nota: "6", fallas: [
      "Gancho sin impacto sonoro ni provocación: «¿a dónde me llevan?» es una pregunta pasiva.",
      "Los amigos contestan todo antes de sacarle la venda: se va el suspenso."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "—¿A dónde me llevan? —Callate. Este año no festejás en un bar.",
      placa: "POV: TE SECUESTRAN PARA TU CUMPLE 🙈",
      plano: "Cumpleañero vendado con una bufanda en el asiento de atrás; amigos a los costados cantando el feliz cumpleaños a los gritos.",
      marco: "Enemigo común (el cumple de siempre) + impacto visual y sonoro"
    },
    beats: [
      ["0:00", "Vendado en el auto, amigos cantando a los gritos", "—¿A dónde me llevan? —Callate. Este año no festejás en un bar.", "¿A dónde entonces?"],
      ["0:04", "Amigo 1 le habla al oído", "—Pista uno: dos horas de ruta.", ""],
      ["0:07", "Amigo 2, riéndose", "—Pista dos: dos cabañas. Una para los que madrugan y otra para los que se quedan en la sobremesa.", ""],
      ["0:12", "Portón que se abre, visto desde el auto", "—Pista tres: el asado lo hacemos nosotros.", "¿Dónde es?"],
      ["0:16", "Le sacan la venda frente a las cabañas", "(silencio de dos segundos: su cara)", "Pago visual"],
      ["0:19", "Corte al quincho con la parrilla prendida y la mesa armada", "—¿Y cuánto les salió esto? —Veinticinco mil cada uno la noche.", ""],
      ["0:24", "Abrazo del grupo en el parque", "—Feliz cumple. Estamos en San Pedro.", ""]
    ],
    cta: "Etiquetá al amigo que cumple años el mes que viene.",
    shots: ["Cumpleañero vendado cantando en el auto", "Amigos hablándole al oído", "Portón abriéndose desde el auto", "Sacar la venda frente a las cabañas (cara en primer plano)", "Quincho con parrilla y mesa armada", "Abrazo en el parque"],
    ojo: "Necesita 3 o 4 amigos en cámara. $25.000 por persona es con la quinta completa y ocho. Silencio desde las 00:00: la sobremesa va adentro.",
    caption: "Este año el cumple no fue en un bar 🎂\nDos cabañas, quincho techado y parque. San Pedro, a dos horas.\nEtiquetá al que cumple el mes que viene."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "POV: viaje sorpresa sin pantallas",
    angulo: "Los chicos adivinan con antifaces; el enemigo son las pantallas y el departamento. El alivio final es de los padres.",
    heras: { nota: "6", fallas: [
      "Arranca con una adivinanza pasiva que no le habla al padre cansado ni nombra al enemigo (pantallas, encierro).",
      "Acumula pistas sin moraleja: no vende el alivio de ver a los chicos jugar tranquilos."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "—Papá, ¿a dónde vamos? —A pasar un finde entero sin pantalla.",
      placa: "POV: VIAJE SORPRESA SIN PANTALLAS 🚫📱",
      plano: "Desde el asiento de adelante: dos chicos con antifaces de dormir atrás y el perro en el medio. Ladridos y risas.",
      marco: "Enemigo común + brecha abierta (¿a dónde?)"
    },
    beats: [
      ["0:00", "Chicos con antifaz y perro, ladridos", "—Papá, ¿a dónde vamos? —A pasar un finde entero sin pantalla.", "¿A dónde?"],
      ["0:04", "Madre se da vuelta sonriendo", "—Pista uno: el perro viene y duerme adentro con nosotros.", ""],
      ["0:08", "Un chico se levanta un poco el antifaz", "—¿Hay lugar para jugar? —Pista dos: un parque enorme y cerrado.", ""],
      ["0:13", "Corte al fogonero prendido de noche", "—Pista tres: a la noche, fuego.", "¿Lo adivinan?"],
      ["0:17", "Portón que se abre; se sacan los antifaces y corren al parque con el perro", "—¡Llegamos! Corran, que está cerrado.", "Pago"],
      ["0:21", "Padres con mate en la galería, mirándolos", "Y nosotros, por primera vez en semanas, sentados. San Pedro, a dos horas.", "Moraleja"]
    ],
    cta: "Guardalo para el próximo finde que no sepas qué hacer con los chicos.",
    shots: ["Chicos con antifaz y perro en el auto", "Madre dándose vuelta", "Chico levantando el antifaz", "Fogonero de noche", "Portón y chicos corriendo con el perro", "Padres con mate en la galería"],
    ojo: "Chicos con permiso de los padres para publicar. Una familia ocupa una cabaña: no usar el precio por persona de la quinta completa.",
    caption: "Viaje sorpresa, cero pantallas 🤫\nParque cerrado, fogonero y el perro adentro. San Pedro, a dos horas.\nGuardalo para el próximo finde."
  }
]);

/* ───────── 04 · Voz en off + «difícil elección» ───────── */
H(4, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Llegás el viernes hirviendo",
    angulo: "Arranca por el monólogo del viernes a la noche; el dilema mate o fogonero abre, y el precio por persona cierra el bucle.",
    heras: { nota: "6", fallas: [
      "En el segundo 0 ya dice «vengan a esta quinta en San Pedro»: cierra la intriga, y no hay quiebre de sonido.",
      "Enumera aire, estufa, wifi y cocina como un folleto, sin el estrés de la ciudad que viene a cortar."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "Llegás el viernes hirviendo de la semana, y tenés que tomar una sola decisión.",
      placa: "BASTA DE ENCIERRO 🌿",
      plano: "Pies descalzos pisando el pasto. Sonido: un bocinazo de ciudad que se corta y entran los pájaros.",
      marco: "Monólogo interno + contraste sonoro (gancho de 3 partes)"
    },
    beats: [
      ["0:00", "Pies descalzos en el pasto; bocinazo cortado por pájaros", "Llegás el viernes hirviendo de la semana, y tenés que tomar una sola decisión.", "¿Cuál?"],
      ["0:04", "Mate en la mesa de mosaico al sol; corte al fogonero", "Para la tarde: mate bajo los árboles, o el fogonero cuando baja el sol.", ""],
      ["0:09", "La persona mira a cámara y se encoge de hombros", "Difícil elección.", "¿Qué más hay?"],
      ["0:11", "Quincho con la parrilla humeando", "El asado, en el quincho techado. El predio, cerrado: corren los chicos y el perro.", ""],
      ["0:17", "Hogar a leña prendido en la grande", "Dos cabañas de cuatro, una con hogar a leña. San Pedro, a dos horas.", "¿Cuánto sale?"],
      ["0:23", "Persona tirada en el sillón mirando las luces del parque", "¿Y lo mejor? Si son ocho, la quinta entera sale veinticinco mil por persona la noche.", "Pago"]
    ],
    cta: "Comentá RESERVA y te mandamos fotos, tarifas y fechas.",
    shots: ["Pies descalzos en el pasto (grabar pájaros; el bocinazo va en edición)", "Mate en la mesa de mosaico", "Fogonero", "Gesto de «difícil elección» a cámara", "Parrilla humeando", "Hogar prendido", "Sillón con las luces del parque"],
    ojo: "Voz en off grabada aparte, cerca de la boca y sin eco. $25.000 es con quinta completa y ocho personas.",
    caption: "Llegás el viernes hirviendo. Mate o fogonero: difícil elección.\nDos cabañas en San Pedro, a dos horas de Buenos Aires.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "El dilema es el video",
    titulo: "El dilema de las dos cabañas",
    angulo: "Diez mil pesos de diferencia como tensión: primero lo que tiene la chica, y lo que esconde la grande se revela último.",
    heras: { nota: "5,5", fallas: [
      "Arranca con una cifra como cotización: le habla solo al que ya decidió alquilar (nivel 3-4).",
      "Expone los dos precios de entrada y no deja tensión sobre qué tiene la grande."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Diez mil pesos de diferencia. Antes de elegir la más barata, mirá esto.",
      placa: "EL DILEMA DEL FINDE 🏠",
      plano: "Pantalla partida: puerta de la chica y puerta de la grande. Sonido de leña crujiendo.",
      marco: "Contraste + brecha abierta (¿qué tiene la otra?)"
    },
    beats: [
      ["0:00", "Pantalla partida de las dos puertas, leña crujiendo", "Diez mil pesos de diferencia. Antes de elegir la más barata, mirá esto.", "¿Qué tiene la otra?"],
      ["0:04", "Entra a la chica: sofá cama y dormitorio", "La chica: cien mil la noche. Para cuatro, con cocina, baño y aire en el dormitorio.", ""],
      ["0:09", "Corte a la puerta de la grande, todavía cerrada", "La grande: ciento diez mil. Y los diez mil de más tienen explicación.", "¿Cuál?"],
      ["0:13", "Se abre: hogar prendido; corte al horno abierto; corte al freezer", "Hogar a leña, horno para la pizza y freezer para el hielo del grupo.", "Pago"],
      ["0:19", "Las dos cabañas en un plano general", "Las dos comparten quincho, fogonero y parque. Difícil elección.", ""]
    ],
    cta: "Comentá GRANDE o CHICA. (Es votación: cuesta un dedo.)",
    shots: ["Las dos puertas por separado, mismo encuadre", "Interior de la chica: sofá cama y dormitorio", "Puerta de la grande cerrada", "Hogar prendido", "Horno abierto", "Freezer", "General de las dos cabañas"],
    ojo: "GRANDE y CHICA no disparan DM: son votación. La leña del hogar la traen los huéspedes.",
    caption: "Chica $100.000 · Grande $110.000 por noche.\nLos $10.000 son el hogar a leña, el horno y el freezer.\n¿Cuál elegís? Comentá GRANDE o CHICA."
  },
  {
    v: "C", tipo: "Otro público",
    titulo: "Sin «shhh» este finde",
    angulo: "El padre que se pasa el finde de hotel pidiendo silencio. La transformación es que él se siente.",
    heras: { nota: "6,5", fallas: [
      "Buena premisa, pero sin sonido de impacto al arranque.",
      "Revela la solución en el segundo 4 y no sostiene un bucle hasta el final."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Basta de pagar un hotel para pasarte el finde diciéndole a tus hijos «hacé silencio».",
      placa: "SIN «SHHH» ESTE FINDE 🤫",
      plano: "Chico tirándose al pasto muerto de risa; pelota que rebota.",
      marco: "Enemigo común + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Chico tirándose al pasto, pelota rebotando", "Basta de pagar un hotel para pasarte el finde diciéndole a tus hijos «hacé silencio».", "¿Y entonces?"],
      ["0:04", "Auto entrando y portón cerrándose", "Acá el predio es cerrado: corren, gritan y patean la pelota.", ""],
      ["0:09", "Manos con un juego de mesa en el quincho", "Si llueve, quincho techado y juegos de mesa.", ""],
      ["0:13", "Cocina de la grande, alguien cocina", "Y cocinás lo que comen ellos, no lo que hay en el menú.", "¿Y vos?"],
      ["0:17", "Adulto con mate en el sillón de la galería", "¿Y vos? Por primera vez en meses, te sentás a mirarlos.", "Pago"],
      ["0:21", "General de las cabañas al atardecer", "San Pedro, a dos horas de Buenos Aires.", ""]
    ],
    cta: "Guardalo para el finde largo del 10 de octubre.",
    shots: ["Chico tirándose al pasto con pelota", "Auto entrando y portón cerrando", "Juego de mesa en el quincho", "Alguien cocinando en la grande", "Adulto con mate en la galería", "General al atardecer"],
    ojo: "Silencio desde las 00:00 es regla de la casa: el «gritan» es de día. Una familia ocupa una cabaña: no usar el precio de la quinta completa.",
    caption: "Un finde sin «shhh».\nParque cerrado, juegos de mesa y cocina propia. San Pedro, a dos horas.\nGuardalo para el finde largo."
  }
]);

/* ───────── 05 · Influencer de visita ───────── */
H(5, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Lo que nadie te cuenta de irte de a ocho amigas",
    angulo: "La visita cuenta en primera persona, empezando por el miedo de todo grupo (dormir amontonadas) y cerrando con lo que les salió.",
    heras: { nota: "5,5", fallas: [
      "El gancho dice todo de entrada (viaje a San Pedro) y no tiene sonido de impacto.",
      "Vlog pasivo que enumera comodidades, sin el conflicto de organizar a ocho sin terminar peleadas."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "Nos escapamos ocho amigas y te cuento lo que nadie te dice de viajar en grupo.",
      placa: "LO QUE NADIE TE CUENTA 🤫",
      plano: "Selfie caminando por el parque; atrás, las amigas se ríen y chocan los vasos.",
      marco: "Secreto + identificación (grupo de amigas), con sonido desde el segundo 0"
    },
    beats: [
      ["0:00", "Selfie caminando, risas y vasos de fondo", "Nos escapamos ocho amigas y te cuento lo que nadie te dice de viajar en grupo.", "¿Qué no te dicen?"],
      ["0:04", "POV de la mano abriendo la puerta de una cabaña", "Uno: no se coman dormir amontonadas. Acá son dos cabañas de cuatro.", "¿Dos?"],
      ["0:09", "Quincho con la parrilla humeando; corte al horno de la grande", "Dos: si llueve, se come igual. Quincho techado, y la cocina de la grande tiene horno.", ""],
      ["0:14", "Amiga tirada en el sillón; corte al fogonero de noche", "Flor no se movió del sillón. Y a la noche, el fogonero se llevó el viaje.", ""],
      ["0:20", "Selfie en el dormitorio, cara de confesión", "Tres: traigan toallones y secador. Sábanas y frazadas ya están; secador no hay.", "Honestidad que suma"],
      ["0:25", "Selfie con el predio iluminado", "¿Y la plata? Entre las ocho, veinticinco mil cada una la noche.", "Pago"]
    ],
    cta: "Etiquetá a tus amigas y comentá FINDE para ver las fechas libres.",
    shots: ["Selfie caminando con amigas brindando atrás", "POV abriendo la puerta de una cabaña", "Parrilla humeando y horno de la grande", "Amiga en el sillón", "Fogonero de noche con amigas", "Selfie en el dormitorio", "Selfie con predio iluminado"],
    ojo: "Si la «visita» no durmió en la quinta, que no diga que se hospedó: puede decir «vinimos a conocerla». $25.000 es con quinta completa y ocho.",
    caption: "Lo que nadie te cuenta de irte de a ocho amigas 🏡\nDos cabañas, quincho techado, horno y fogonero. Secador no hay 😅\nEtiquetá a tus amigas."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "Yo no quería venir",
    angulo: "El papá escéptico: el enemigo es la ruta con chicos. Cada cosa que ve le baja el mal humor hasta el mate final.",
    heras: { nota: "6", fallas: [
      "Arranque en el auto sin sonido de impacto, y la premisa se entiende tan rápido que no queda duda abierta.",
      "Sin anclaje cinético: no se ve el agotamiento del padre frente al alivio del predio cerrado."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Yo no quería venir. Dos horas de ruta con dos chicos a los gritos y un perro.",
      placa: "YO NO QUERÍA VENIR 🤦‍♂️",
      plano: "Selfie del papá en el auto estacionado, cara de agotado; atrás, gritos de los chicos y un ladrido.",
      marco: "Transformación personal (de escéptico a convencido) + sonido real"
    },
    beats: [
      ["0:00", "Selfie en el auto, gritos y ladrido", "Yo no quería venir. Dos horas de ruta con dos chicos a los gritos y un perro.", "¿Qué le cambió la cara?"],
      ["0:04", "Portón cerrándose, auto adentro", "Primer punto a favor: el auto queda adentro y el portón se cierra.", ""],
      ["0:08", "Perro bajando y corriendo suelto por el pasto", "Al perro lo solté y no lo vi más. Predio cerrado. Y a la noche duerme adentro.", ""],
      ["0:13", "Quincho con la parrilla prendida", "Y miren este quincho. Acá se me terminó de ir el mal humor.", ""],
      ["0:18", "Selfie en el sillón con mate; chicos pateando la pelota lejos", "Hace dos horas que estoy sentado y nadie me pidió nada.", "Pago"],
      ["0:23", "Selfie con las cabañas de fondo", "Me equivoqué. San Pedro, a dos horas. Volvemos.", ""]
    ],
    cta: "Etiquetá al que en tu casa siempre dice «¿y si nos quedamos?».",
    shots: ["Selfie del papá en el auto (chicos y perro sonando)", "Portón cerrándose con el auto adentro", "Perro corriendo suelto", "Parrilla prendida", "Selfie en el sillón con mate y chicos lejos", "Selfie con las cabañas"],
    ojo: "El perro viaja en el asiento de atrás, nunca en el baúl. Una familia ocupa una cabaña: no usar el precio por persona de la quinta completa.",
    caption: "Yo no quería venir. Me equivoqué.\nPredio cerrado, perro suelto y parrilla techada. San Pedro, a dos horas.\nEtiquetá al que siempre dice «¿y si nos quedamos?»."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "La abuela se los llevó",
    angulo: "Le habla al público de 55+: la preocupación real de la abuela es que no se le escapen. El alivio es su mate.",
    heras: { nota: "6", fallas: [
      "Cuenta la historia completa en el segundo 0: no abre la pregunta de por qué se los llevó sola, y no hay sonido.",
      "Parte diario informativo (camas, comidas) sin el miedo real de la abuela: la calle y el aburrimiento."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Me traje a los tres nietos y los padres se quedaron en Buenos Aires. Lo que más miedo me daba era una sola cosa.",
      placa: "LA ABUELA SE LOS LLEVÓ 👵",
      plano: "Abuela a cámara con mate; atrás, risas y pelota que rebota.",
      marco: "Identificación 55+ + brecha abierta (¿qué miedo?)"
    },
    beats: [
      ["0:00", "Abuela con mate, risas y pelota atrás", "Me traje a los tres nietos y los padres se quedaron en Buenos Aires. Lo que más miedo me daba era una sola cosa.", "¿Cuál?"],
      ["0:05", "Portón cerrado; un nene corre por el parque", "Que se me escaparan a la calle. Lo primero que miré: el predio está cerrado.", "Pago parcial"],
      ["0:10", "Nietos con un juego de mesa en el quincho", "Si refresca, juegos de mesa en el quincho. Y en la cocina les hago lo que les gusta.", ""],
      ["0:15", "Dormitorio: matrimonial, cama de una plaza y sofá cama", "Dormimos los cuatro en la cabaña, cada uno en su cama.", ""],
      ["0:19", "Abuela sentada en la galería con las luces del parque", "Y mientras ellos corren, yo tomo mate tranquila. San Pedro, a dos horas.", "Moraleja"]
    ],
    cta: "Etiquetá a la abuela que se merece esto.",
    shots: ["Abuela a cámara con nietos y pelota atrás", "Portón cerrado y nene corriendo", "Nietos con juego de mesa en el quincho", "Dormitorio con las tres camas", "Abuela en la galería con luces"],
    ojo: "Capacidad estricta: cuatro por cabaña (abuela + tres nietos). Permiso de los padres para publicar a los chicos.",
    caption: "La abuela se llevó a los nietos a San Pedro 👵\nPredio cerrado, juegos de mesa y cocina propia.\nEtiquetá a la abuela que se lo merece."
  }
]);

/* ───────── 06 · Recorrido en una toma ───────── */
H(6, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Por qué acá entran ocho sin pelearse, en 40 segundos",
    angulo: "Toma continua con reloj en pantalla. El recorrido deja de ser paseo: cada parada contesta una pelea del grupo, y el precio llega con el cronómetro.",
    heras: { nota: "5,5", fallas: [
      "Frase funcional sin sonido de impacto ni una razón que toque al grupo estresado.",
      "Paseo estético para el que ya busca (nivel 3): no despierta al que todavía no pensó en irse."
    ]},
    dur: "≈35 s",
    hook: {
      dice: "Cuarenta segundos para mostrarte por qué acá entran ocho sin pelearse.",
      placa: "40 SEGUNDOS ⏱️ (cronómetro corriendo)",
      plano: "Portón que se abre con ruido metálico; Mai invita apurada con la mano, gran angular. Tic-tac en pantalla.",
      marco: "Promesa con tiempo + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Portón abriéndose, Mai invita, cronómetro arranca", "Cuarenta segundos para mostrarte por qué acá entran ocho sin pelearse.", "¿Llega? ¿Por qué no se pelean?"],
      ["0:04", "Camina rápido por el parque, toma continua", "Uno: el parque es cerrado. Los chicos y el perro, sueltos.", ""],
      ["0:10", "Pasa por el quincho y toca la parrilla", "Dos: si llueve, el asado sale igual. Quincho techado. Y a la noche, fogonero.", ""],
      ["0:17", "Entra a la grande (hogar) y señala la chica por la ventana", "Tres, la que evita las peleas: dos cabañas. Cada familia con su espacio y su baño.", "¿Y cuánto?"],
      ["0:25", "Sale hacia el fogonero y frena; muestra el cronómetro", "¿Y la plata?", "Bucle"],
      ["0:28", "Mai mira la pantalla del celu", "Veinticinco mil por persona si son ocho. San Pedro, a dos horas. Treinta y seis segundos.", "Pago"]
    ],
    cta: "Comentá PRECIO y te mandamos las tarifas y las fechas libres.",
    shots: ["UNA toma continua con gran angular, del portón al fogonero (ensayar dos veces)", "Grabar el ruido del portón", "Cronómetro sobreimpreso en edición"],
    ojo: "Ordenar todo el predio antes: la toma sin cortes muestra todo. Pileta cerrada: no apuntarle. $25.000 es con quinta completa y ocho.",
    caption: "Por qué acá entran ocho sin pelearse, en 40 segundos ⏱️\nDos cabañas, quincho techado, fogonero y parque cerrado. San Pedro.\nComentá PRECIO."
  },
  {
    v: "B", tipo: "Cambia la toma",
    titulo: "Cuánto tarda en irse la semana",
    angulo: "Una toma desde que baja del auto hasta el brindis. El bucle es cuánto costó «borrar la semana».",
    heras: { nota: "5", fallas: [
      "Arranca en silencio, solo con texto: rompe el gancho de 3 partes.",
      "Toma contemplativa sin pregunta abierta ni enemigo (la rutina, comer afuera)."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Mirá lo que tarda en irse la semana desde que pisás el pasto.",
      placa: "DEL AUTO AL ASADO 🥩 SIN CORTES",
      plano: "Puerta del auto que se abre adentro del predio y una bolsa de carbón que cae en el pasto. Sonido del portón que se cierra.",
      marco: "Promesa + reto visual (¿sin cortes?)"
    },
    beats: [
      ["0:00", "Baja del auto con la bolsa de carbón; portón que se cierra", "Mirá lo que tarda en irse la semana desde que pisás el pasto.", "¿Cuánto?"],
      ["0:04", "La cámara lo sigue hacia el quincho", "El auto queda adentro. Nada de buscar dónde estacionar.", ""],
      ["0:09", "Acomoda el carbón en la parrilla y prende", "Quincho techado: el fuego se prende aunque se nuble.", ""],
      ["0:15", "Un amigo le pasa un mate, otro pone la vajilla en la mesa", "La vajilla ya está. Las camas, hechas. Los amigos, llegando.", ""],
      ["0:21", "Gira la cámara al parque y levanta un vaso", "¿Querés saber cuánto costó borrar la semana?", "Bucle"],
      ["0:25", "Brindis a cámara con el fuego atrás", "Veinticinco mil por cabeza, entre ocho. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Mandáselo al asador del grupo.",
    shots: ["Toma única: bajar del auto → quincho → fuego → amigos → brindis", "Carbón con iniciador para que prenda rápido", "Grabar el portón cerrándose"],
    ojo: "El carbón lo traen los huéspedes: por eso se ve bajándolo del auto. $25.000 es con quinta completa y ocho.",
    caption: "Del auto al asado, sin cortes 🔥\nEl carbón lo traés vos; el quincho techado ya está.\nMandáselo al asador del grupo."
  },
  {
    v: "C", tipo: "Otro ritmo",
    titulo: "Papá, soltá el celular",
    angulo: "La toma va a la altura de un nene de 6 años que le muestra el lugar al padre. Lo último que revela es lo que le gusta a la mamá.",
    heras: { nota: "6", fallas: [
      "«¡Vení que te muestro!» es simpático pero no abre curiosidad ni toca al padre (pantallas, miedo a la calle).",
      "Tour infantil sin moraleja: no cierra en el descanso de los adultos."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "«¡Papá, soltá el celular y vení que te muestro el secreto!»",
      placa: "TOUR GUIADO POR BAUTI, 6 AÑOS 👦",
      plano: "Cámara a la altura del nene, que tira fuerte de la mano del adulto. Pelota que rebota.",
      marco: "Impacto visual + brecha abierta (¿qué secreto?)"
    },
    beats: [
      ["0:00", "Nene tirando de la mano del padre, cámara baja", "«¡Papá, soltá el celular y vení que te muestro el secreto!»", "¿Qué secreto?"],
      ["0:03", "Corre por el pasto con la pelota", "«¡Acá juego a la pelota y nadie me dice cuidado con la calle!»", ""],
      ["0:08", "Señala el fogonero (sin tocarlo)", "«¡Acá hacemos fuego a la noche!»", ""],
      ["0:12", "Entra a la cabaña y se tira en el sofá cama", "«¡Y acá duermo yo! ¡Y el perro también entra!»", ""],
      ["0:16", "Mira hacia arriba a la cámara", "«¿Y sabés qué es lo que más le gusta a mamá?»", "Bucle"],
      ["0:19", "Corte a la madre con mate en la galería, ojos cerrados", "«¡Que nadie la llama!»", "Pago"],
      ["0:22", "Placa final sobre el parque", "Quinta Los Álamos · San Pedro, a dos horas", ""]
    ],
    cta: "Etiquetá a la familia que tiene un Bauti.",
    shots: ["Toma a la altura del nene (celu a 80 cm del piso)", "Nene corriendo con la pelota", "Nene señalando el fogonero apagado", "Nene tirándose en el sofá cama", "Madre con mate en la galería"],
    ojo: "Permiso de los padres. Frases dichas por el nene a su manera, no memorizadas. El fogonero se muestra apagado cuando hay chicos cerca.",
    caption: "Tour guiado por el experto de la casa 👦\nParque cerrado, fogonero y el perro adentro. San Pedro, a dos horas.\nEtiquetá a la familia que tiene uno así."
  }
]);

/* ───────── 07 · «Se te mandan sin avisar» ───────── */
H(7, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "POV: se te meten sin avisar a la quinta",
    angulo: "Más corto y con conflicto real: Mai las encara, y el recorrido sale del «ya que están». La plata recién al portón.",
    heras: { nota: "5,5", fallas: [
      "Casi 50 segundos de tour lento: se pasa de los 15-45 s y cae la retención.",
      "Arranca con un saludo educado y resuelve el conflicto enseguida, sin sonido de impacto."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "¿Y ustedes qué hacen acá adentro?",
      placa: "POV: SE TE METEN SIN AVISAR 😳",
      plano: "Mai aparece desde atrás del quincho; dos chicas curioseando la parrilla se dan vuelta. Pasos rápidos y portón.",
      marco: "Conflicto + impacto visual y sonoro"
    },
    beats: [
      ["0:00", "Mai aparece por detrás del quincho; las chicas se dan vuelta", "¿Y ustedes qué hacen acá adentro?", "¿Las echa?"],
      ["0:03", "Las chicas, avergonzadas", "—Perdón, nos dijeron que podíamos chusmear… somos un grupo de ocho.", ""],
      ["0:06", "Mai suspira y arranca a caminar", "—Bueno. Ya que están, les muestro cómo entran ocho sin pelearse.", "¿Cómo?"],
      ["0:10", "Entran a la grande: hogar", "—Dos cabañas de cuatro. La grande con hogar a leña, horno y freezer.", ""],
      ["0:15", "Una abre la puerta del baño", "—¿Hay secador? —No. Ese lo traen. Pero el perro entra y duerme adentro.", "Honestidad que suma"],
      ["0:20", "Salen al fogonero; Mai las acompaña al portón", "—¿Y ahora me van a preguntar la plata, no?", "Bucle"],
      ["0:24", "Mai en el portón, guiño a cámara", "—Si son ocho, veinticinco mil cada una la noche. Escríbannos para la seña.", "Pago"]
    ],
    cta: "Comentá RESERVA y te escribimos.",
    shots: ["Mai saliendo desde atrás del quincho (grabar pasos y portón)", "Chicas avergonzadas", "Entrada a la grande con hogar", "Baño y pregunta del secador", "Fogonero", "Portón y guiño"],
    ojo: "Actuado pero con charla suelta: repasar las líneas y no leer. No decir que hay visitas de día: es un dato sin confirmar.",
    caption: "Se nos metieron sin avisar… y terminaron preguntando la seña 😅\nDos cabañas para ocho, hogar a leña y el perro adentro. Secador no hay.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "Cambia quién entra",
    titulo: "Cayeron un día antes",
    angulo: "El grupo que no aguantó la ciudad. La tensión es si Mai los deja pasar, y la regla del silencio cierra con humor.",
    heras: { nota: "6", fallas: [
      "Resuelve el conflicto en el segundo 6 («tienen suerte, está libre»): se va la duda.",
      "Lista logística (sábanas, carbón, súper) sin el monólogo del grupo que se escapa apurado."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "¡Paren todo! ¿Qué hacen acá? ¡La reserva es mañana!",
      placa: "CAYERON UN DÍA ANTES 🤦‍♀️",
      plano: "Mai abre el portón y del otro lado hay un auto lleno de amigos con la heladerita. Bocinazo y gritos.",
      marco: "Conflicto + impacto sonoro"
    },
    beats: [
      ["0:00", "Portón, auto lleno de amigos, bocinazo", "¡Paren todo! ¿Qué hacen acá? ¡La reserva es mañana!", "¿Los deja?"],
      ["0:04", "Amigos bajando, riéndose", "—No aguantábamos más la ciudad. —…Y ustedes no aguantan nada, ¿no?", "¿Y?"],
      ["0:08", "Mai mira el celular, piensa", "(silencio de un segundo)", "Brecha"],
      ["0:10", "Mai abre del todo", "—Tuvieron suerte. Cuatro en la grande y cuatro en la chica. Las camas ya están hechas.", ""],
      ["0:15", "Uno corre al quincho", "—¿Trajeron carbón? —…No. —Hay un súper a un minuto.", ""],
      ["0:20", "El perro baja y entra a la cabaña", "—Y el perro, adentro. Eso sí…", "¿Eso sí qué?"],
      ["0:24", "Mai a cámara mientras brindan atrás", "—…a las doce, silencio. Los conozco.", "Pago con humor"]
    ],
    cta: "Mandáselo al amigo que llegaría un día antes.",
    shots: ["Portón y auto lleno de amigos (bocinazo)", "Amigos bajando", "Mai mirando el celular", "Amigo corriendo al quincho", "Perro entrando a la cabaña", "Mai a cámara con brindis atrás"],
    ojo: "«Tuvieron suerte» es ficción del sketch: no puede sonar a que siempre hay lugar. Súper a un minuto: Supermercado 18, del relevamiento de Maps.",
    caption: "Cuando tu grupo no aguanta y cae un día antes 😂\nDos cabañas para ocho, quincho techado y súper a un minuto.\nMandáselo al que haría esto."
  },
  {
    v: "C", tipo: "Otro giro",
    titulo: "Tu vieja de sorpresa",
    angulo: "La visita inesperada parece un problema hasta que revela que reservó la otra cabaña y se lleva a los chicos.",
    heras: { nota: "6", fallas: [
      "Entrada sin sonido de impacto y con una placa que no atrapa al que no está buscando nada.",
      "Revela en el segundo 8 que reservó la chica: mata la curiosidad antes de la moraleja."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Hola, chicos… ¿llegué muy temprano?",
      placa: "TU VIEJA DE SORPRESA 😱",
      plano: "Padres con mate en el parque; portazo de auto fuera de cuadro y entra la abuela con bolso y una torta.",
      marco: "Identificación (humor de familia) + tensión"
    },
    beats: [
      ["0:00", "Portazo; entra la abuela con bolso y torta", "Hola, chicos… ¿llegué muy temprano?", "¿Dónde va a dormir?"],
      ["0:03", "Primer plano de las caras de los padres", "(se miran en silencio)", "Tensión"],
      ["0:05", "Madre, resignada", "—Mamá… ¿y dónde pensás dormir?", ""],
      ["0:08", "La abuela sonríe y no contesta; camina hacia la otra cabaña", "—Vengan.", "Brecha"],
      ["0:11", "Abre la puerta de la chica", "—Reservé esta. Con su baño y su cocina.", "Giro"],
      ["0:15", "Los chicos corren a abrazarla", "—Y a los nietos me los llevo a dormir conmigo.", ""],
      ["0:19", "Padres solos junto al fogonero, se miran y se ríen", "Dos cabañas en el mismo predio. Juntos, y cada uno en la suya.", "Moraleja"]
    ],
    cta: "Etiquetá a quien le haría esta sorpresa a tu familia.",
    shots: ["Padres con mate; entrada de la abuela con torta (portazo fuera de cuadro)", "Caras de los padres", "Abuela caminando a la otra cabaña", "Puerta de la chica abriéndose", "Chicos abrazando a la abuela", "Padres en el fogonero"],
    ojo: "Humor de familia, sin burla: la abuela queda como la heroína. Capacidad: abuela + chicos, hasta cuatro en la chica. Sin precio por persona: no es un grupo de ocho.",
    caption: "Cuando tu vieja cae de sorpresa… y se lleva a los chicos 😌\nDos cabañas en el mismo predio: juntos y cada uno en la suya. San Pedro.\nEtiquetá a quien haría esto."
  }
]);

/* ───────── 08 · Estética de cine ───────── */
H(8, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Apagar la semana, en detalles",
    angulo: "Misma estética de manos y luz cálida, pero con un bucle: «lo más difícil del plan», que se paga con humor al final.",
    heras: { nota: "5,5", fallas: [
      "«Vení que te muestro cómo es llegar» revela el tema sin intriga, y no hay sonido que frene el scroll.",
      "Inventario lindo (cama, hogar, luces) sin el cansancio de la ciudad que viene a apagar."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Vení que te muestro lo que se siente apagar la semana.",
      placa: "VIERNES, 19 H 🚗",
      plano: "Mano abriendo el portón a contraluz cálido. Sonido real: la llave que gira y el portón que cruje.",
      marco: "Impacto visual + sonido + monólogo interno"
    },
    beats: [
      ["0:00", "Mano con la llave en el portón, contraluz", "Vení que te muestro lo que se siente apagar la semana.", "¿Qué se siente?"],
      ["0:04", "Pies descalzos pisando el pasto", "Primero, pisás el pasto. El auto ya quedó adentro.", ""],
      ["0:08", "Mano sobre la cama hecha", "Entrás, y no hay nada que armar: la cama ya está hecha.", ""],
      ["0:12", "Mano acomodando leña en el hogar de la grande", "Si elegiste la grande, hogar a leña para la noche.", ""],
      ["0:16", "Luces del parque prendiéndose; mano cebando un mate", "¿Sabés qué es lo más difícil de todo este plan?", "Bucle"],
      ["0:21", "Mano cerrando el portón el domingo, luz de mediodía", "Irte el domingo.", "Pago"],
      ["0:24", "General de las dos cabañas iluminadas", "Quinta Los Álamos. San Pedro, a dos horas.", ""]
    ],
    cta: "Comentá SANPEDRO y te mandamos qué hacer en el pueblo cuando vengas.",
    shots: ["Mano con llave en el portón a contraluz (grabar el crujido)", "Pies descalzos en el pasto", "Mano sobre la cama hecha", "Mano con leña en el hogar", "Luces del parque prendiéndose + mate", "Mano cerrando el portón con luz de mediodía", "General iluminado"],
    ojo: "Hora dorada y exposición un poco baja; filtro cálido parejo en edición. La leña la traen los huéspedes.",
    caption: "Lo que se siente apagar la semana.\nLo más difícil del plan es irse el domingo.\nComentá SANPEDRO."
  },
  {
    v: "B", tipo: "La experiencia estrella",
    titulo: "El plan de la noche no es salir",
    angulo: "Cine armado en el quincho con una sábana. El bucle es cuánto le salió la noche a cada uno.",
    heras: { nota: "6", fallas: [
      "Arranca mudo, solo con texto: rompe el gancho de 3 partes.",
      "Muestra el proceso en línea recta sin una pregunta que retenga hasta el final."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "El mejor plan del sábado a la noche con tu grupo no es salir.",
      placa: "EL PLAN DE LA NOCHE NO ES SALIR 🎬",
      plano: "Mano prendiendo un proyector en el quincho a oscuras: «clic» y el haz de luz.",
      marco: "Contracorriente + impacto visual y sonoro"
    },
    beats: [
      ["0:00", "Clic del proyector, haz de luz en la oscuridad", "El mejor plan del sábado a la noche con tu grupo no es salir.", "¿Cuál es?"],
      ["0:04", "Manos atando una sábana entre los tirantes del quincho", "Colgás una sábana en el quincho techado.", ""],
      ["0:08", "Amigos con sillas, frazadas y un bol de pochoclos", "Frazadas de la cabaña, pochoclos y el fogonero al lado.", ""],
      ["0:14", "Siluetas de los ocho riéndose frente a la película", "Ocho amigos, dos cabañas, una película.", ""],
      ["0:19", "General nocturno del parque", "¿Sabés cuánto le salió esta noche a cada uno?", "Bucle"],
      ["0:23", "Fuego del fogonero, voz en off calma", "Veinticinco mil la noche, con la quinta entera. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Guardalo para la noche que vengan con el grupo.",
    shots: ["Proyector encendiéndose (grabar el clic)", "Sábana colgada en el quincho", "Amigos con sillas, frazadas y pochoclos", "Siluetas frente a la película", "General nocturno", "Fogonero"],
    ojo: "La quinta NO tiene proyector: lo trae el grupo. Decirlo en el caption. $25.000 es con quinta completa y ocho.",
    caption: "El plan de la noche no fue salir 🎬\nTraete el proyector: el quincho techado, las frazadas y el fogonero ya están.\nGuardalo para tu finde."
  },
  {
    v: "C", tipo: "Otro momento del día",
    titulo: "8:00, todos duermen",
    angulo: "La mañana contra la ciudad: el primer mate sin bocinas. El bucle es qué es lo más lindo de ese mate.",
    heras: { nota: "6", fallas: [
      "Gancho poético y pasivo, sin sonido de quiebre ni pregunta que obligue a quedarse.",
      "Momentos lindos sin el contraste con la ciudad (bocinas, colectivos) que les da valor."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Mirá lo que te perdés por no salir de la ciudad el fin de semana.",
      placa: "8:00 · TODOS DUERMEN 🤫",
      plano: "Rayo de sol por la ventana sobre alguien dormido. Sonido: la pava que silba bajito y los pájaros.",
      marco: "Pérdida (FOMO suave) + enemigo común (la ciudad)"
    },
    beats: [
      ["0:00", "Sol por la ventana, pava silbando, pájaros", "Mirá lo que te perdés por no salir de la ciudad el fin de semana.", "¿Qué?"],
      ["0:04", "Mano cebando el primer mate con vapor en la mesa de mosaico", "Ocho de la mañana: el primer mate, sin una bocina.", ""],
      ["0:09", "Pies descalzos en el pasto con rocío; perro estirándose en la galería", "El parque mojado. El perro, que ya se levantó.", ""],
      ["0:14", "Puertas de las dos cabañas cerradas, todo quieto", "Los otros siete, todavía durmiendo.", ""],
      ["0:18", "Mano apoyando el termo, mirando los árboles", "¿Y sabés qué es lo más lindo de este mate?", "Bucle"],
      ["0:22", "Mismo plano, sonido de pájaros solo", "Que por un rato, nadie te necesita. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Etiquetá a la que se levanta primera a cebar en tu grupo.",
    shots: ["Sol por la ventana sobre alguien dormido (grabar la pava y los pájaros)", "Mate con vapor en la mesa de mosaico", "Pies descalzos en el rocío", "Perro en la galería", "Puertas de las cabañas cerradas", "Mano con el termo mirando los árboles"],
    ojo: "Se graba el mismo día a la mañana si se duerme en la quinta; si no, queda para la próxima jornada.",
    caption: "8:00 en Los Álamos. Todos duermen.\nPrimer mate, parque mojado y ni una bocina.\nEtiquetá a la que se levanta primera."
  }
]);

/* ───────── 09 · 18 segundos, tres lugares, un mate ───────── */
H(9, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "¿Hace cuánto que la rutina te tiene congelado?",
    angulo: "Mismo mate y un lugar distinto por frase, pero con enemigo (la rutina) y el precio por persona como remate.",
    heras: { nota: "5,5", fallas: [
      "Pregunta genérica sin sonido de impacto, y dice San Pedro enseguida: se cae la intriga.",
      "Recorrido lindo sin el cansancio de la ciudad ni un enemigo común."
    ]},
    dur: "≈20 s",
    hook: {
      dice: "¿Hace cuántos meses que la rutina te tiene congelado?",
      placa: "¿Y SI ESTE FINDE…? 🧉",
      plano: "Mai con mate y termo frente a las cabañas a contraluz. Sonido: un sorbo fuerte de mate.",
      marco: "Pregunta incómoda + enemigo común, gancho de 3 partes"
    },
    beats: [
      ["0:00", "Frente a las cabañas, sorbo de mate", "¿Hace cuántos meses que la rutina te tiene congelado?", "¿Y qué hago?"],
      ["0:03", "Sentada en la galería, ceba", "Agarrás a tu grupo y se van dos horas.", ""],
      ["0:06", "En la cocina de la grande, horno abierto", "Dos cabañas, cuatro en cada una, con cocina de verdad.", ""],
      ["0:09", "En el quincho, junto a la parrilla", "Quincho techado para el asado, llueva o no.", ""],
      ["0:12", "En el medio del parque, otro sorbo", "¿Sabés cuánto cuesta desenchufar a los ocho?", "Bucle"],
      ["0:16", "Mismo lugar, ceba y sonríe", "Veinticinco mil por persona la noche. San Pedro.", "Pago"]
    ],
    cta: "Mandáselo a la persona con la que vendrías.",
    shots: ["Frente a las cabañas con mate y termo (grabar el sorbo)", "Sentada en la galería", "Cocina de la grande con el horno", "Junto a la parrilla del quincho", "Medio del parque"],
    ojo: "Misma ropa y mismo mate en todos los planos. Cada frase, tres tomas en su lugar. $25.000 es con quinta completa y ocho.",
    caption: "¿Hace cuánto que la rutina te tiene congelado?\nQuinta con dos cabañas para ocho en San Pedro, a dos horas.\nMandáselo a con quien vendrías."
  },
  {
    v: "B", tipo: "Cambia el objeto",
    titulo: "Este asado no se come apretados",
    angulo: "La tabla de carne viaja de la cocina de un depto a la parrilla de la quinta. El precio lo pregunta el bucle.",
    heras: { nota: "5", fallas: [
      "«Este asado no se come en tu casa» no abre una duda que retenga ni tiene sonido de impacto.",
      "Resuelve la intriga a la mitad, sin tensión hasta el remate."
    ]},
    dur: "≈20 s",
    hook: {
      dice: "Basta de comer apretados en un restaurante de la ciudad.",
      placa: "ESTE ASADO NO SE COME EN LA CIUDAD 🥩",
      plano: "Amigo con la tabla de carne en la cocina chica de un departamento. Sonido: el cuchillo que golpea la tabla.",
      marco: "Enemigo común + contraste de lugar"
    },
    beats: [
      ["0:00", "Amigo con la tabla en la cocina de un depto; golpe de cuchillo", "Basta de comer apretados en un restaurante de la ciudad.", "¿Dónde, entonces?"],
      ["0:03", "Mismo amigo con la tabla bajando del auto en la quinta", "Este asado se come en San Pedro.", ""],
      ["0:05", "Cruzando el parque con la tabla", "Dos cabañas y un parque para ocho.", ""],
      ["0:08", "Poniendo la carne en la parrilla del quincho", "Quincho techado: que llueva si quiere.", ""],
      ["0:11", "La tabla con la carne hecha en la mesa, amigos alrededor", "¿Y cuánto le salió a cada uno?", "Bucle"],
      ["0:15", "Brindis con el fuego atrás", "Veinticinco lucas por cabeza la noche, con la quinta entera.", "Pago"]
    ],
    cta: "Mandáselo al asador del grupo.",
    shots: ["Amigo con la tabla en la cocina de un depto (grabar el golpe del cuchillo)", "Bajando del auto con la tabla", "Cruzando el parque", "Carne a la parrilla", "Mesa con amigos y la carne", "Brindis"],
    ojo: "La carne y el carbón los traen ellos. $25.000 es por noche, con quinta completa y ocho.",
    caption: "Este asado no se come en la ciudad 🔥\nQuinta completa para ocho en San Pedro: $25.000 por persona la noche.\nMandáselo al asador del grupo."
  },
  {
    v: "C", tipo: "Otro público",
    titulo: "El perro viene con vos",
    angulo: "Lista de cuatro lugares con el perro; el cuarto, que es el que nadie da (adentro de la cabaña), queda último.",
    heras: { nota: "6", fallas: [
      "Lista ordenada sin sonido de impacto ni enemigo (la guardería, el «no se aceptan mascotas»).",
      "Recorre los lugares en fila sin crear expectativa por el beneficio principal: que duerma adentro."
    ]},
    dur: "≈20 s",
    hook: {
      dice: "Dejá de pagar guardería o de dejar a tu perro atado afuera.",
      placa: "EL PERRO VIENE CON VOS 🐶",
      plano: "Persona con mate sentada en el pasto; el perro se echa al lado. Ladrido corto.",
      marco: "Enemigo común + lista con el mejor ítem al final"
    },
    beats: [
      ["0:00", "Mate en el pasto, perro se echa, ladrido", "Dejá de pagar guardería o de dejar a tu perro atado afuera.", "¿Dónde lo llevo?"],
      ["0:04", "Galería con el perro a los pies", "Cuatro lugares para tomar mate con él, en la misma quinta. Uno: la galería.", "¿Cuáles más?"],
      ["0:07", "Quincho, perro abajo de la mesa", "Dos: el quincho, mientras se hace el asado.", ""],
      ["0:09", "Fogonero de noche, perro echado cerca", "Tres: el fogonero, con las luces del parque.", "¿Y el cuarto?"],
      ["0:12", "Adentro de la cabaña, perro dormido junto al sillón", "Y cuatro, el que nadie te da: adentro de la cabaña.", "Pago"],
      ["0:16", "Persona sonriendo con mate y perro", "Sin cargo y sin límite de tamaño. San Pedro, a dos horas.", ""]
    ],
    cta: "Mandáselo a quien no viaja sin su perro.",
    shots: ["Mate en el pasto con el perro echándose (grabar el ladrido)", "Galería con el perro", "Quincho con el perro abajo de la mesa", "Fogonero con el perro", "Perro dormido adentro de la cabaña", "Persona con mate y perro a cámara"],
    ojo: "Única condición del brief: juntar lo que dejan. Se puede sumar al caption.",
    caption: "Cuatro lugares para tomar mate con tu perro, y uno es adentro de la cabaña 🐶\nSin cargo y sin límite de tamaño. San Pedro.\nMandáselo a quien no viaja sin el suyo."
  }
]);

/* ───────── 10 · Fotocopiadora del POV que ganó ───────── */
H(10, [
  {
    v: "A", tipo: "POV con objeto",
    titulo: "POV: llegás con la credencial puesta",
    angulo: "La credencial del laburo como enemigo visible. Se queda en el auto; el bucle es lo único que hay que calcular.",
    heras: { nota: "5", fallas: [
      "Arranca sin voz ni sonido, solo con placa: rompe el gancho de 3 partes.",
      "Secuencia estética sin bucle, sin moraleja y sin el argumento de los ocho por persona."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "¿Hace cuántas semanas salís del laburo con la cabeza a punto de explotar?",
      placa: "POV: LLEGÁS CON LA CREDENCIAL 👔",
      plano: "Primer plano de una credencial colgada del cuello; atrás, desenfocado, el portón que se abre. Sonido: pitido de oficina cortado por el crujido del portón.",
      marco: "Monólogo interno + objeto en mano (fotocopiadora de Heras)"
    },
    beats: [
      ["0:00", "Credencial en el pecho, portón atrás; pitido cortado por el portón", "¿Hace cuántas semanas salís del laburo con la cabeza a punto de explotar?", "¿Y qué hago?"],
      ["0:04", "Mano sacándose la credencial y tirándola al asiento del auto", "Sacate eso. La compu, al baúl.", ""],
      ["0:08", "POV descalzo en el pasto", "San Pedro, a dos horas. Predio cerrado, nadie te busca.", ""],
      ["0:13", "Mano recibiendo un mate frente a las dos cabañas", "Dos cabañas para los ocho del grupo. Quincho techado y fogonero.", ""],
      ["0:18", "Fogonero prendiéndose con las luces del parque, risas", "¿Sabés qué es lo único que tenés que calcular?", "Bucle"],
      ["0:22", "Mai a cámara en el parque iluminado", "Veinticinco mil por persona la noche, con la quinta entera.", "Pago"]
    ],
    cta: "Guardalo para el viernes que lo necesites.",
    shots: ["Credencial en primer plano con portón atrás (grabar el crujido)", "Tirar la credencial al asiento", "Cerrar el baúl con la compu", "POV descalzo en el pasto", "Mano recibiendo mate frente a las cabañas", "Fogonero y luces", "Mai a cámara"],
    ojo: "Misma música y ritmo que el POV original: es parte de lo que funcionó. $25.000 es con quinta completa y ocho.",
    caption: "POV: llegás a San Pedro con la credencial todavía puesta.\nSe queda en el auto.\nGuardalo para el viernes que lo necesites."
  },
  {
    v: "B", tipo: "Personajes",
    titulo: "Vos del lunes vs. vos del viernes",
    angulo: "La misma persona discute consigo misma. La del lunes pone las objeciones; la respuesta de la plata se guarda para el final.",
    heras: { nota: "6,5", fallas: [
      "La primera pregunta no tiene sonido de quiebre ni un enemigo fuerte (la rutina).",
      "El viernes contesta «ya reservé» en el segundo 4: la duda se cierra enseguida."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Lunes: —¿Otra vez te vas a quedar encerrado todo el finde?",
      placa: "VOS DEL LUNES vs. VOS DEL VIERNES 💻🌿",
      plano: "Pantalla partida: a la izquierda, la misma persona agobiada frente a la compu; a la derecha, con buzo y mate en el parque. Tecleo cortado por pájaros.",
      marco: "Contraste + enemigo común (la rutina)"
    },
    beats: [
      ["0:00", "Pantalla partida; tecleo cortado por pájaros", "Lunes: —¿Otra vez te vas a quedar encerrado todo el finde?", "¿Qué le contesta?"],
      ["0:04", "Viernes señala las cabañas", "Viernes: —El error es quedarse. Nos vamos a San Pedro, dos horas.", ""],
      ["0:08", "Lunes, desconfiado", "Lunes: —¿Con los chicos, el perro y los Martínez? Terminamos peleados.", ""],
      ["0:12", "Viernes muestra el predio y el quincho", "Viernes: —Dos cabañas separadas, predio cerrado, y el perro duerme adentro.", ""],
      ["0:17", "Lunes cruza los brazos", "Lunes: —¿Y cuánto duele eso?", "Bucle"],
      ["0:20", "Viernes con la quinta iluminada atrás", "Viernes: —Entre los ocho, veinticinco mil cada uno la noche.", "Pago"],
      ["0:24", "Lunes cierra la compu de un golpe", "Lunes: —…Pasame la ubicación.", ""]
    ],
    cta: "Comentá FINDE y te pasamos las fechas libres.",
    shots: ["Mitad lunes: misma persona con camisa frente a la compu (cualquier escritorio)", "Mitad viernes: misma persona con buzo y mate en el parque, mismo encuadre", "Predio y quincho", "Quinta iluminada", "Cierre de la compu"],
    ojo: "Grabar las dos mitades con el celu a la misma altura y en el mismo lugar del cuadro. «Los Martínez» son la otra familia: así cierran los ocho.",
    caption: "Vos del lunes vs. vos del viernes.\nQuinta completa en San Pedro: $25.000 por persona entre ocho.\nComentá FINDE."
  },
  {
    v: "C", tipo: "Cambios rápidos",
    titulo: "De la oficina al fogonero en diez cortes",
    angulo: "Cortes cada segundo y medio, ahora con voz: cada corte es una frase, y lo que costó llega con el fuego.",
    heras: { nota: "5", fallas: [
      "Solo placas, sin voz: no hay gancho hablado ni monólogo interno.",
      "Clips lindos sin gancho-contexto-moraleja-CTA ni el argumento de los ocho."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "En diez cortes: del colapso de la semana al fuego prendido.",
      placa: "DE LA OFICINA AL FOGONERO 🔥",
      plano: "Mano que cierra la compu de un golpe. Sonido seco del clac y un motor que arranca.",
      marco: "Promesa + cambio de estímulo constante"
    },
    beats: [
      ["0:00", "Mano cerrando la compu (clac) + motor", "En diez cortes: del colapso de la semana al fuego prendido.", "¿Llega?"],
      ["0:03", "Llaves; ruta desde el parabrisas", "Viernes a la tarde, dos horas de ruta.", ""],
      ["0:06", "Portón abriéndose; bolsos cayendo en la cama", "El auto adentro. La cama ya hecha.", ""],
      ["0:10", "Zapatillas volando al pasto; mate servido en la mesa de mosaico", "Zapatillas afuera. Primer mate.", ""],
      ["0:14", "Parrilla humeando en el quincho", "El grupo prende el asado.", ""],
      ["0:18", "Fogonero prendido con las luces del parque", "¿Sabés cuánto costó borrar la oficina?", "Bucle"],
      ["0:21", "Mai junto al fuego", "Veinticinco mil por persona, entre ocho, con la quinta entera. San Pedro.", "Pago"]
    ],
    cta: "Mandáselo al grupo.",
    shots: ["Mano cerrando la compu (grabar el clac)", "Llaves del auto", "Ruta desde el parabrisas (graba el acompañante, nunca quien maneja)", "Portón abriéndose", "Bolsos en la cama", "Zapatillas al pasto", "Mate en la mesa de mosaico", "Parrilla humeando", "Fogonero y luces", "Mai junto al fuego"],
    ojo: "El ingreso es desde las 11:00: llegar el viernes a la tarde no choca, pero confirmarlo con Sandra antes de publicar. La ruta la graba el acompañante.",
    caption: "De la oficina al fogonero en diez cortes 🔥\nQuinta completa para ocho en San Pedro: $25.000 por persona.\nMandáselo al grupo."
  }
]);
