/* Versión 4 de los guiones (17/09/2026).
   v2: filtro de Víctor Heras en NotebookLM, corregido contra los datos reales de la quinta.
   v3: pasada de lenguaje con el habla de los reels de referencia.
   v4: se graba DE A DOS. Mai en cámara y el estratega filmando (su voz puede entrar desde atrás, y en
   dos guiones aparece con el celu en un soporte). Nada de amigos, chicos ni extras en cámara: el grupo
   se sugiere con objetos (la mesa puesta para ocho, el chat, las dos puertas). Mai le habla a una sola
   persona, de vos. Reemplaza los guiones de refs-*.js; esos quedan como historia. */
GUIONES.intro.push("Versión 4 (17/09): todo se graba de a dos. Mai en cámara y vos filmando; tu voz puede entrar desde atrás. Nadie más aparece: el grupo se sugiere con la mesa puesta, el chat o las dos puertas. Mai le habla siempre a una sola persona, de vos. Con ✎ Editar cambiás cualquier palabra.");
const H = (n, guiones) => { const r = GUIONES.refs.find(x => x.n === n); if (r) r.guiones = guiones; };

/* ───────── 01 · Te lo presentan a cámara ───────── */
H(1, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Para ocho, tengo el lugar",
    angulo: "Mai sola a cámara le habla al que nunca logra juntar al grupo; recorre con «ni bien entrás» y deja la cuenta por persona para el final.",
    heras: { nota: "5", fallas: [
      "Gancho quieto a cámara, sin sonido, y en el segundo 4 ya dice qué es y dónde queda.",
      "Lista comodidades como un folleto en vez de hablarle al que todavía no está buscando."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Si en tu grupo hace meses que dicen «un finde nos vamos» y nunca se van, vení que te muestro esto.",
      placa: "PARA 8, TENGO EL LUGAR",
      plano: "Mai camina rápido hacia la cámara por el parque, con el mate. Se escucha el portón y los pájaros.",
      marco: "Identificación del grupo + gancho de 3 partes (palabra, movimiento, sonido)"
    },
    beats: [
      ["0:00", "Mai camina hacia cámara con el mate; portón y pájaros", "Si en tu grupo hace meses que dicen «un finde nos vamos» y nunca se van, vení que te muestro esto.", "¿Qué me va a mostrar?"],
      ["0:05", "Mai entra a la cabaña grande, la cámara la sigue hasta el hogar", "Ni bien entrás, la grande: hogar a leña, horno y mesa para seis.", ""],
      ["0:10", "Corte a la cabaña chica y a su baño", "Al lado, la chica. Cuatro en cada una, y cada familia con su baño.", "¿Y qué comparten?"],
      ["0:16", "Quincho con la parrilla humeando; paneo al parque", "Afuera es de todos: el quincho con la parrilla, el fogonero y este parque.", ""],
      ["0:21", "Mai sentada en la mesa de mosaico, levanta el mate", "Y ahora, la parte que le vas a mandar a tu grupo.", "Bucle"],
      ["0:24", "General con las luces del parque prendidas", "Entre ocho, sale veinticinco mil por persona la noche. Y encima estás a dos horas de Buenos Aires.", "Pago"]
    ],
    cta: "Comentá PRECIO y te mando las tarifas y las fechas libres.",
    shots: ["Mai caminando con el mate hacia cámara (grabar el portón)", "Mai entrando a la grande hasta el hogar", "Cabaña chica y su baño", "Parrilla humeando y paneo al parque", "Mai en la mesa de mosaico levantando el mate", "General con luces del parque"],
    ojo: "$25.000 por persona es con la quinta completa y ocho personas ($200.000 ÷ 8), por noche.",
    caption: "Para ocho, tengo el lugar.\nDos cabañas, quincho, fogonero y parque en San Pedro, a dos horas de Buenos Aires.\nComentá PRECIO."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "Si sos la que organiza y te clavan el visto",
    angulo: "Mai es la que organiza: el grupo está en el chat, no en cámara. El cierre es el mensaje exacto que hay que mandar.",
    heras: { nota: "6", fallas: [
      "Pregunta y respuesta al instante: cada duda se cierra y no queda nada abierto.",
      "No le pega a la frustración real: el grupo que no contesta."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Si sos la que arma los planes y el grupo te clava el visto, esto es para vos.",
      placa: "SI SOS LA QUE ORGANIZA 🙋‍♀️",
      plano: "El celu de Mai en primer plano con el chat del grupo y notificaciones sonando; atrás, desenfocado, el parque.",
      marco: "Cocktail party (nombra el rol) + enemigo común"
    },
    beats: [
      ["0:00", "Chat del grupo en el celu de Mai, notificaciones sonando", "Si sos la que arma los planes y el grupo te clava el visto, esto es para vos.", "¿Por qué no contestan?"],
      ["0:04", "Mai baja el celu; aparece enfocada la cabaña grande", "Te digo por qué no contestan: nadie quiere dormir ocho en una casa y pelearse por el baño.", "¿Y cómo se arregla?"],
      ["0:10", "Las dos puertas de las cabañas en un plano", "Acá son dos cabañas en el mismo terreno. Cada familia en la suya, con su baño.", ""],
      ["0:15", "Mai abre la puerta de la cabaña y señala el sillón", "El perro viene y duerme adentro. Y si llueve, el asado se hace igual en el quincho.", ""],
      ["0:20", "Mai escribe en el celu, en la mesa de mosaico", "Lo que tenés que mandar al grupo es esto:", "Bucle"],
      ["0:23", "Mai a cámara, leyendo lo que escribió", "«Somos ocho, sale veinticinco mil cada uno la noche, en San Pedro.» Y fijate cómo contestan.", "Pago"]
    ],
    cta: "Mandáselo a tu grupo.",
    shots: ["Chat de grupo armado en el celu de Mai (nombres inventados) con notificaciones", "Mai bajando el celu con la grande atrás", "Las dos puertas en un plano", "Mai abriendo la puerta y señalando el sillón", "Mai escribiendo en la mesa de mosaico", "Mai a cámara"],
    ojo: "El chat tiene que ser armado: nada de números ni nombres reales. $25.000 es con quinta completa y ocho.",
    caption: "Si sos la que organiza y te clavan el visto 🙃\nDos cabañas en San Pedro: cada familia en la suya y el perro adentro.\nMandáselo a tu grupo."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "Chicos sin pantalla, y vos sentada",
    angulo: "Mai habla como la mamá cansada. Los chicos no aparecen: están en los objetos (la tablet tirada, la pelota, el juego de mesa a medio armar).",
    heras: { nota: "6,5", fallas: [
      "Lista 1-2-3 predecible, sin ninguna pregunta que retenga.",
      "Vende actividades de chicos en vez del descanso del adulto."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Si el finde en casa termina con tus hijos pegados a la tablet, esto te va a servir.",
      placa: "CHICOS SIN PANTALLA 🚫📱",
      plano: "Tablet apagada tirada en el pasto. Se escucha una pelota que rebota fuera de cuadro.",
      marco: "Enemigo común (la pantalla) + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Tablet apagada en el pasto; sonido de pelota fuera de cuadro", "Si el finde en casa termina con tus hijos pegados a la tablet, esto te va a servir.", "¿Qué hago?"],
      ["0:04", "Pelota rodando sola por el parque hasta los pies de Mai", "Lo que les falta no es que se la saques. Es un lugar donde puedan correr sin que estés atrás.", "¿Dónde?"],
      ["0:10", "Juego de mesa a medio armar en la mesa de mosaico; corte al fogonero de noche", "Acá el parque es cerrado, hay pelota, juegos de mesa y, a la noche, el fogonero.", ""],
      ["0:15", "Mai con mate en la galería mirando el parque", "Y a vos te pasa algo que no te pasa hace rato:", "Bucle"],
      ["0:18", "Mismo plano, Mai cierra los ojos al sol", "te tomás un mate entero, caliente. A dos horas de Buenos Aires.", "Pago"]
    ],
    cta: "Guardalo para el finde largo del 10 de octubre.",
    shots: ["Tablet apagada en el pasto (grabar el rebote de una pelota aparte)", "Pelota rodando hasta los pies de Mai (vos la tirás desde atrás de cámara)", "Juego de mesa a medio armar", "Fogonero de noche", "Mai con mate en la galería, ojos cerrados al sol"],
    ojo: "Sin chicos en cámara: todo se cuenta con objetos. La leña del fogonero la traen los huéspedes.",
    caption: "Chicos sin pantalla, y vos con un mate caliente.\nParque cerrado, juegos de mesa y fogonero. San Pedro, a dos horas.\nGuardalo para el finde largo."
  }
]);

/* ───────── 02 · «Repetilo, que te estoy grabando» ───────── */
H(2, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "«Repetime lo que me dijiste»",
    angulo: "El formato ideal para dos: vos filmás y preguntás, Mai se tienta y larga el dato de la cuenta por persona.",
    heras: { nota: "5,5", fallas: [
      "A los 7 segundos ya dice dónde está y de qué se trata: se cae la intriga.",
      "El precio sale como dato frío, sin el que cree que irse de a ocho sale carísimo."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "Te estoy grabando. Repetime lo que me dijiste recién.",
      placa: "SE LE ESCAPÓ A MAI 🤫",
      plano: "Celular en mano, movido, apuntando a Mai en el quincho. Se escucha la parrilla.",
      marco: "Parece video robado + secreto a medias"
    },
    beats: [
      ["0:00", "Celu movido, Mai en el quincho con la parrilla sonando", "(vos) Te estoy grabando. Repetime lo que me dijiste recién.", "¿Qué dijo?"],
      ["0:03", "Mai se tapa la cara riéndose mientras acomoda el carbón", "—No, dejá. —(vos) Dale, que ahora que te grabo no decís nada, ¿no?", "Tensión"],
      ["0:07", "Caminás hacia la mesa de mosaico", "(vos) Porque todos creen que irse ocho un finde sale carísimo.", "¿Y no?"],
      ["0:11", "Paneo rápido a las dos cabañas", "(vos) Dos cabañas, cuatro en cada una, todo el terreno para el grupo.", ""],
      ["0:16", "Volvés a Mai, que deja el carbón y mira a cámara", "—¿Sabés que sí? Te lo digo: si vienen ocho y toman la quinta entera, sale veinticinco mil por persona la noche.", "Pago"],
      ["0:22", "Girás la cámara al parque con las luces prendidas", "(vos) ¿Escuchaste? Armá el grupo.", ""]
    ],
    cta: "Comentá FINDE y te paso las fechas libres.",
    shots: ["Una sola toma con el celu, sin estabilizar: Mai en el quincho con la parrilla sonando", "Caminata a la mesa de mosaico", "Paneo a las dos cabañas", "Giro al parque con luces"],
    ojo: "Tu voz se escucha desde atrás de cámara. No inventar descuento ni promo. $25.000 es con quinta completa y ocho.",
    caption: "Se le escapó a Mai 🙈\nQuinta completa para ocho: $25.000 por persona la noche.\nComentá FINDE."
  },
  {
    v: "B", tipo: "Cambia el segmento",
    titulo: "«Repetime lo del perro»",
    angulo: "Para el que no viaja sin su perro. La respuesta se demora hasta que Mai abre la puerta y muestra dónde duerme.",
    heras: { nota: "6", fallas: [
      "Mai contesta «no paga» en el segundo 3: la duda se cierra enseguida.",
      "Falta el enemigo del dueño de perro: la guardería o el lugar que lo deja afuera."
    ]},
    dur: "≈22 s",
    hook: {
      dice: "Esperá, esperá, repetime lo del perro, que te estoy grabando.",
      placa: "¿TU PERRO SE QUEDA AFUERA? 🐶",
      plano: "Mai en el parque con una correa en la mano, riéndose; la cámara se le acerca movida.",
      marco: "Pregunta a medias + cocktail party (dueños de perro)"
    },
    beats: [
      ["0:00", "Mai con una correa en la mano, cámara acercándose", "(vos) Esperá, esperá, repetime lo del perro, que te estoy grabando.", "¿Qué pasa con el perro?"],
      ["0:03", "Mai se ríe y camina hacia la puerta de la cabaña", "—Que acá no lo dejás en una guardería ni atado en el patio.", "¿Y entonces?"],
      ["0:08", "Mai abre la puerta sin hablar; la cámara entra atrás de ella", "(silencio: solo la puerta)", "Brecha"],
      ["0:11", "Mai deja la correa al lado del sillón", "—Entra y duerme con vos. No paga, y no importa si es grande.", "Pago"],
      ["0:15", "Paneo al parque cerrado", "—Y el terreno está cerrado, así corre suelto mientras hacés el asado.", ""],
      ["0:19", "Mai a cámara", "¿Y lo seguís dejando en lo de tu vieja cada vez que viajás?", ""]
    ],
    cta: "Etiquetá a esa persona que no viaja sin su perro.",
    shots: ["Mai con la correa en el parque, cámara acercándose", "Mai caminando a la puerta", "Puerta abriéndose (sin hablar)", "Correa al lado del sillón", "Parque cerrado", "Mai a cámara"],
    ojo: "Si está el perro de la quinta, que entre él en vez de la correa: queda mejor. Única condición real: juntar lo que deja.",
    caption: "El perro no se queda afuera: duerme en la cabaña, no paga y no importa el tamaño 🐶\nSan Pedro, a dos horas.\nEtiquetá a quien no viaja sin el suyo."
  },
  {
    v: "C", tipo: "Otro dato",
    titulo: "«¿Qué no hay que traer?»",
    angulo: "El enemigo es el baúl lleno. Vos preguntás desde atrás, Mai contesta mostrando, un corte cada tres segundos.",
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
      ["0:00", "Entrada apurada al dormitorio, Mai con la frazada", "(vos) Pará, repetime eso que te grabo: ¿qué no hay que traer?", "¿Qué?"],
      ["0:03", "Mai señala la cama hecha", "—Sábanas, frazadas y almohadas. Ya están.", ""],
      ["0:06", "Corte a la cocina: Mai abre el estante con platos y tazas", "—La vajilla, también.", "¿Y qué sí traigo?"],
      ["0:09", "Paneo al quincho con la parrilla", "—Traés toallones, los condimentos y la leña o el carbón.", ""],
      ["0:13", "Tu auto estacionado adentro, baúl medio vacío", "—Y el auto queda acá adentro.", ""],
      ["0:16", "Mai con mate en el parque, a cámara", "Medio baúl libre. Para el perro, que viaja más cómodo.", "Pago"]
    ],
    cta: "Guardalo para la noche que armes los bolsos.",
    shots: ["Entrada apurada al dormitorio con Mai y la frazada", "Cama hecha", "Mai abriendo el estante de la vajilla", "Quincho y parrilla", "Tu auto adentro con el baúl medio vacío", "Mai con mate a cámara"],
    ojo: "Lista exacta del brief del cliente. No hay secador: no decir que está todo.",
    caption: "Lo que NO tenés que traer: sábanas, frazadas, almohadas y vajilla.\nLo que sí: toallones, condimentos y leña o carbón.\nGuardalo para la noche que armes los bolsos."
  }
]);

/* ───────── 03 · POV sketch: secuestro que termina en venta ───────── */
H(3, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "POV: secuestrás a la chica de las cabañas",
    angulo: "Vos manejás de «secuestrador» con el celu en un soporte; Mai atrás no larga la ficha: te pregunta cuántos son y te resuelve el problema.",
    heras: { nota: "5,5", fallas: [
      "Dos segundos de silencio al arranque: rompe el gancho de 3 partes.",
      "Se saca la cinta y larga la ficha técnica de golpe, sin entrar por el problema del grupo."
    ]},
    dur: "≈30 s",
    hook: {
      dice: "«¡Mmm! ¡Mmm!» (Mai grita con la cinta puesta)",
      placa: "POV: SECUESTRÁS A LA CHICA DE LAS CABAÑAS 🚗",
      plano: "Celu en un soporte en el tablero apuntando atrás: Mai con cinta de pintor en la boca, forcejeando de chiste. Sonido de motor.",
      marco: "Imagen absurda + sonido desde el segundo 0"
    },
    beats: [
      ["0:00", "Mai con cinta forcejeando; motor (auto detenido)", "«¡Mmm! ¡Mmm!»", "¿Qué pasa acá?"],
      ["0:02", "Se saca la cinta de un tirón y le habla al espejo", "—Pará, pará. Antes de llevarme a ningún lado: ¿cuántos son en tu grupo?", "¿Por qué pregunta eso?"],
      ["0:06", "Vos, con gorro de lana, la mirás por el espejo", "—…Ocho. —¿Y dónde pensaban meterse los ocho?", ""],
      ["0:10", "Corte a la cabaña grande, hogar prendido", "—Tengo dos cabañas en San Pedro. Cuatro en cada una, y la grande con hogar.", ""],
      ["0:16", "Corte al quincho con la parrilla humeando", "—El quincho es techado, así el asado sale aunque llueva. Y el perro duerme adentro.", ""],
      ["0:22", "Vos, resignado", "—…¿Y cuánto sale?", "Bucle"],
      ["0:24", "Mai, sonrisa de oreja a oreja", "—¿Viste que te interesa? Veinticinco mil por persona, entre ocho.", "Pago"],
      ["0:28", "Le abrís la puerta; ella grita desde la vereda", "—¡Bajate! —¡El WhatsApp está en el perfil!", ""]
    ],
    cta: "Comentá RESERVA y te mando las fechas libres.",
    shots: ["Celu en soporte apuntando al asiento de atrás: Mai con cinta de pintor (auto estacionado)", "Vos con gorro de lana por el espejo", "Hogar prendido", "Parrilla humeando", "Mai gritando desde la vereda (celu en mano)"],
    ojo: "Necesita un soporte para el celu en el auto. Todo de chiste: cinta de pintor, gorro de lana (no pasamontañas), auto quieto. El motor se suma en edición.",
    caption: "Ni secuestrada deja de vender 😅\nDos cabañas, hogar a leña, quincho techado y el perro adentro. San Pedro.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "POV: secuestrás a tu amiga para su cumple",
    angulo: "Mai vendada en el asiento de al lado; vos le das las pistas desde el volante. Nada se revela hasta que le sacás la venda.",
    heras: { nota: "6", fallas: [
      "«¿A dónde me llevan?» es una pregunta pasiva, sin sonido fuerte.",
      "Las pistas cuentan todo antes de sacar la venda."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "—¿A dónde me llevás? —Callate. Este año tu cumple no es en un bar.",
      placa: "POV: SECUESTRÁS A TU AMIGA PARA SU CUMPLE 🎂",
      plano: "Mai vendada con una bufanda en el asiento del acompañante, tentada; vos cantás el feliz cumpleaños desafinando.",
      marco: "Enemigo común (el cumple de siempre) + imagen y sonido"
    },
    beats: [
      ["0:00", "Mai vendada en el auto; vos cantando desafinado", "—¿A dónde me llevás? —(vos) Callate. Este año tu cumple no es en un bar.", "¿A dónde, entonces?"],
      ["0:04", "Mai intenta espiar por abajo de la bufanda", "—(vos) Pista uno: dos horas de ruta.", ""],
      ["0:07", "Mai se ríe", "—(vos) Pista dos: dos cabañas. Una para los que madrugan y otra para vos.", ""],
      ["0:11", "Portón que se abre, visto desde el auto", "—(vos) Pista tres: el asado lo hacés vos.", "¿Dónde es?"],
      ["0:14", "Le sacás la venda frente a las cabañas", "(dos segundos de silencio: la cara de Mai)", "Pago"],
      ["0:17", "Corte a la mesa del quincho puesta para ocho", "—¿Y el resto? —(vos) Llegan a la noche. Veinticinco mil cada uno. —Mentira.", ""],
      ["0:22", "Mai corre hacia el parque", "—¡Feliz cumple! Bienvenida a San Pedro.", ""]
    ],
    cta: "Etiquetá a la amiga que cumple el mes que viene.",
    shots: ["Celu en soporte: Mai vendada en el asiento del acompañante", "Mai espiando por abajo de la bufanda", "Portón abriéndose desde el auto", "Sacar la venda frente a las cabañas (cara en primer plano)", "Mesa del quincho puesta para ocho", "Mai corriendo al parque"],
    ojo: "El grupo no aparece: la mesa puesta para ocho alcanza. $25.000 por persona es con la quinta completa y ocho.",
    caption: "Este año el cumple no fue en un bar 🎂\nDos cabañas, quincho techado y parque. San Pedro, a dos horas.\nEtiquetá a la que cumple el mes que viene."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "Adiviná dónde estoy con los ojos cerrados",
    angulo: "Vos llevás a Mai de la mano con los ojos cerrados y ella adivina cada lugar por el sonido. Mismo juego de pistas, sin auto y sin extras.",
    heras: { nota: "6", fallas: [
      "La adivinanza del auto era pasiva y no nombraba al enemigo (el encierro).",
      "Juntaba pistas sin moraleja."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "—No abras los ojos. Adiviná dónde estás por lo que escuchás.",
      placa: "¿DÓNDE ESTOY? 🙈 (con los ojos cerrados)",
      plano: "Mai con los ojos cerrados, vos la llevás de la mano; se escuchan pájaros fuertes.",
      marco: "Brecha abierta (¿dónde?) + sonido como protagonista"
    },
    beats: [
      ["0:00", "Mai con los ojos cerrados, vos la llevás de la mano; pájaros", "—(vos) No abras los ojos. Adiviná dónde estás por lo que escuchás.", "¿Dónde está?"],
      ["0:04", "Primer plano de la parrilla que chisporrotea", "—Eso es una parrilla… ¿un quincho?", ""],
      ["0:08", "Primer plano de la leña crujiendo en el hogar", "—Eso es un hogar. Estoy adentro de una cabaña.", ""],
      ["0:12", "Sus pies descalzos en el pasto", "—Pasto. Mucho pasto. Y ni un auto.", "¿Lo adivina?"],
      ["0:16", "Mai abre los ojos frente a las dos cabañas", "—¿Esto está a dos horas de Buenos Aires?", "Pago"],
      ["0:20", "Mai a cámara, con el parque atrás", "Quinta Los Álamos, San Pedro. Y yo que pensaba que el finde me quedaba en casa.", ""]
    ],
    cta: "Guardalo para el finde que no sepas a dónde ir.",
    shots: ["Mai con los ojos cerrados llevada de la mano (grabar pájaros)", "Parrilla chisporroteando en primer plano", "Leña crujiendo en el hogar", "Pies descalzos en el pasto", "Mai abriendo los ojos frente a las cabañas", "Mai a cámara"],
    ojo: "El sonido manda: grabá cada ruido de cerca y subilo en edición.",
    caption: "Adiviné dónde estaba con los ojos cerrados 🙈\nParrilla, hogar a leña y pasto. San Pedro, a dos horas.\nGuardalo para el próximo finde."
  }
]);

/* ───────── 04 · Voz en off + «difícil elección» ───────── */
H(4, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Tenés para elegir cómo bajar un cambio",
    angulo: "Mai actúa el descanso y su voz en off narra, como en la referencia («tenés para elegir», «difícil elección», «bajar un cambio»).",
    heras: { nota: "6", fallas: [
      "En el segundo 0 ya dice «vengan a esta quinta»: cierra la intriga, y no hay quiebre de sonido.",
      "Enumera aire, estufa, wifi y cocina como un folleto, sin el cansancio de la ciudad."
    ]},
    dur: "≈27 s",
    hook: {
      dice: "Si llegás al viernes con la cabeza quemada, tenés para elegir cómo bajar un cambio.",
      placa: "¿MATE O FOGONERO? 🌿",
      plano: "Pies descalzos de Mai pisando el pasto. Un bocinazo de ciudad se corta y entran los pájaros.",
      marco: "Monólogo interno + contraste sonoro"
    },
    beats: [
      ["0:00", "Pies descalzos de Mai en el pasto; bocinazo cortado por pájaros", "Si llegás al viernes con la cabeza quemada, tenés para elegir cómo bajar un cambio.", "¿Cuáles son las opciones?"],
      ["0:05", "Mai con mate en la mesa de mosaico al sol; corte al fogonero", "Mate bajo los árboles a la tarde, o fogonero cuando cae el sol.", ""],
      ["0:10", "Mai mira a cámara y se encoge de hombros", "Difícil elección.", "¿Qué más hay?"],
      ["0:12", "Quincho con la parrilla humeando; parque vacío y enorme", "El asado va en el quincho techado, y el parque es cerrado, para soltar a los chicos y al perro.", ""],
      ["0:18", "Hogar prendido en la grande", "Son dos cabañas para cuatro, y la grande tiene hogar a leña.", ""],
      ["0:22", "Mai tirada en el sillón mirando las luces del parque", "San Pedro, a dos horas de Buenos Aires. ¿Te gustaría conocerla en detalle?", "Pregunta abierta hacia el comentario"]
    ],
    cta: "Comentá RESERVA y te mando fotos, tarifas y fechas.",
    shots: ["Pies descalzos de Mai en el pasto (grabar pájaros; el bocinazo va en edición)", "Mai con mate en la mesa de mosaico", "Fogonero", "Mai: gesto de «difícil elección» a cámara", "Parrilla humeando y parque vacío", "Hogar prendido", "Mai en el sillón con las luces del parque"],
    ojo: "La voz en off de Mai se graba aparte, cerca de la boca y sin eco. La leña la traen los huéspedes.",
    caption: "Mate o fogonero: difícil elección.\nDos cabañas en San Pedro, a dos horas de Buenos Aires.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "El dilema es el video",
    titulo: "¿Por qué la grande sale diez mil más?",
    angulo: "Los diez mil de diferencia como pregunta: primero la chica, y lo que tiene la grande recién cuando Mai abre la puerta.",
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
      ["0:05", "Mai entra a la chica: sofá cama y dormitorio", "La chica: cien mil la noche. Cuatro personas, cocina, baño y aire en el dormitorio.", ""],
      ["0:10", "Mai frente a la puerta de la grande, todavía cerrada", "La grande: ciento diez mil. ¿Y por qué diez mil más?", "Bucle"],
      ["0:13", "Abre: hogar prendido; horno abierto; freezer", "Hogar a leña, horno para hacer una pizza y freezer para el hielo.", "Pago"],
      ["0:19", "Las dos cabañas en un plano general", "Afuera comparten el quincho, el fogonero y el parque. Difícil elección.", ""]
    ],
    cta: "Comentá GRANDE o CHICA.",
    shots: ["Las dos puertas por separado, mismo encuadre", "Mai en la chica: sofá cama y dormitorio", "Mai frente a la puerta de la grande cerrada", "Hogar prendido", "Horno abierto", "Freezer", "General de las dos cabañas"],
    ojo: "GRANDE y CHICA no disparan DM: es una votación. La leña la traen los huéspedes.",
    caption: "Chica $100.000 · grande $110.000 por noche.\nLos $10.000 son el hogar a leña, el horno y el freezer.\n¿Cuál elegís? Comentá GRANDE o CHICA."
  },
  {
    v: "C", tipo: "Otro público",
    titulo: "Un finde sin «shh»",
    angulo: "La voz de Mai habla como la mamá que se pasa el finde de hotel pidiendo silencio. Los chicos se oyen, no se ven.",
    heras: { nota: "6,5", fallas: [
      "Buena premisa, pero sin sonido de impacto al arranque.",
      "Muestra la solución en el segundo 4 y no deja nada abierto hasta el final."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Basta de pagar un hotel para estar todo el finde diciéndoles a tus hijos «shh».",
      placa: "SIN «SHH» ESTE FINDE 🤫",
      plano: "Pelota que entra rodando al cuadro sobre el pasto; se escuchan risas de chicos fuera de cuadro.",
      marco: "Enemigo común + gancho de 3 partes"
    },
    beats: [
      ["0:00", "Pelota rodando en el pasto; risas fuera de cuadro", "Basta de pagar un hotel para estar todo el finde diciéndoles a tus hijos «shh».", "¿Y entonces?"],
      ["0:04", "Tu auto entrando y el portón cerrándose", "Acá el terreno es cerrado: corren, gritan, patean la pelota.", ""],
      ["0:09", "Manos de Mai con un juego de mesa en el quincho", "Si llueve, quincho techado y juegos de mesa.", ""],
      ["0:13", "Mai cocina en la grande", "Cocinás lo que comen ellos, a la hora que tienen hambre.", "¿Y vos?"],
      ["0:17", "Mai con mate en la galería, mirando lejos", "¿Y vos? Vos te sentás con un mate y los mirás de lejos.", "Pago"],
      ["0:21", "General de las cabañas al atardecer", "San Pedro, a dos horas.", ""]
    ],
    cta: "Guardalo para el finde largo del 10 de octubre.",
    shots: ["Pelota rodando en el pasto (vos la tirás; risas de chicos de banco de sonidos)", "Tu auto entrando y portón cerrando", "Manos de Mai con juego de mesa", "Mai cocinando en la grande", "Mai con mate en la galería", "General al atardecer"],
    ojo: "Sin chicos en cámara: las risas van de un banco de sonidos libre. Silencio desde las 00:00 es regla de la casa: el «gritan» es de día.",
    caption: "Un finde sin «shh».\nTerreno cerrado, juegos de mesa y cocina propia. San Pedro, a dos horas.\nGuardalo para el finde largo."
  }
]);

/* ───────── 05 · Influencer de visita ───────── */
H(5, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Vine a ver si entran ocho de verdad",
    angulo: "Mai hace de visita y lo cuenta en selfie, con las muletillas de la referencia («mirá lo que es…, por favor», «para mi sorpresa», «la súper recomiendo»).",
    heras: { nota: "5,5", fallas: [
      "El gancho cuenta todo de entrada y no tiene sonido de impacto.",
      "Vlog pasivo que enumera comodidades, sin el problema de organizar a ocho."
    ]},
    dur: "≈28 s",
    hook: {
      dice: "Me dijeron que acá entran ocho sin pelearse, y vine a comprobarlo.",
      placa: "¿ENTRAN 8 DE VERDAD? 🤔",
      plano: "Selfie de Mai caminando por el parque; se escucha el portón que se cierra atrás.",
      marco: "Desafío a comprobar + sonido desde el segundo 0"
    },
    beats: [
      ["0:00", "Selfie de Mai caminando; portón cerrándose", "Me dijeron que acá entran ocho sin pelearse, y vine a comprobarlo.", "¿Entran?"],
      ["0:04", "POV de la mano de Mai abriendo la puerta de una cabaña", "Primero: no es una casa. Son dos cabañas, cuatro en cada una.", "¿Qué más?"],
      ["0:09", "Paneo al quincho con la parrilla humeando", "Mirá lo que es este quincho, por favor. Techado: si llueve, el asado sale igual.", ""],
      ["0:14", "Mai en la cocina de la grande, abre el horno", "Para mi sorpresa, la cocina de la grande tiene horno. Pizza para ocho, sí o sí.", ""],
      ["0:19", "Selfie en el dormitorio, cara de confesión", "Lo único: traete toallones y secador, que eso no hay.", "Honestidad que suma"],
      ["0:23", "Selfie con el terreno iluminado", "¿Entran ocho? Entran. Y sale veinticinco mil cada uno la noche. La súper recomiendo.", "Pago"]
    ],
    cta: "Etiquetá a tu grupo.",
    shots: ["Selfie de Mai caminando (grabar el portón)", "POV de la mano abriendo la puerta de una cabaña", "Parrilla humeando en el quincho", "Mai abriendo el horno de la grande", "Selfie en el dormitorio", "Selfie con terreno iluminado"],
    ojo: "Mai no dice que se hospedó: vino a conocerla. $25.000 es con quinta completa y ocho.",
    caption: "¿Entran ocho de verdad? Fui a comprobarlo 🏡\nDos cabañas, quincho techado, horno y fogonero. Secador no hay 😅\nEtiquetá a tu grupo."
  },
  {
    v: "B", tipo: "Cambia el personaje",
    titulo: "Mi amigo no quería venir",
    angulo: "Mai en selfie y vos de amigo con cara de pocos amigos. Cada cosa que ve te va cambiando la cara.",
    heras: { nota: "6", fallas: [
      "Arranca en el auto sin sonido fuerte, y la premisa se entiende tan rápido que no queda duda.",
      "No se ve el mal humor frente al alivio del lugar."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "Él no quería venir. «Dos horas de ruta para ver unas cabañas.»",
      placa: "ÉL NO QUERÍA VENIR 🙄",
      plano: "Selfie de Mai en el auto estacionado; atrás, vos con los brazos cruzados y cara de fastidio. Suspiro fuerte.",
      marco: "Transformación (de escéptico a convencido) + humor"
    },
    beats: [
      ["0:00", "Selfie de Mai en el auto, vos con cara de fastidio atrás", "Él no quería venir. «Dos horas de ruta para ver unas cabañas.»", "¿Qué le cambió la cara?"],
      ["0:04", "Portón cerrándose, auto adentro; vos bajás desganado", "Primer punto a favor: el auto queda adentro y el portón se cierra.", ""],
      ["0:08", "Paneo al quincho con la parrilla; vos te acercás y tocás la parrilla", "Mirá lo que es este quincho. Mirale la cara.", ""],
      ["0:13", "Vos entrás a la grande y te quedás mirando el hogar", "Y cuando vio el hogar, se quedó callado.", "Bucle"],
      ["0:17", "Selfie de Mai; atrás, vos tirado en el sillón con un mate", "Hace una hora que no se levanta del sillón.", "Pago"],
      ["0:21", "Vos, a cámara, sin moverte", "—(vos) …¿Cuándo volvemos?", ""]
    ],
    cta: "Etiquetá al que en tu grupo siempre dice «¿y si nos quedamos?».",
    shots: ["Selfie de Mai en el auto con vos de fondo", "Portón cerrándose, vos bajando", "Vos tocando la parrilla", "Vos mirando el hogar", "Vos tirado en el sillón con mate", "Vos a cámara"],
    ojo: "Acá salís en cámara vos: Mai filma en selfie. Sin precio: la gracia es el cambio de cara.",
    caption: "Él no quería venir. Ahora pregunta cuándo volvemos.\nQuincho techado y hogar a leña. San Pedro, a dos horas.\nEtiquetá al que siempre dice «¿y si nos quedamos?»."
  },
  {
    v: "C", tipo: "Otro ángulo",
    titulo: "Las tres cosas que miré antes de traer a mi familia",
    angulo: "Mai como la que organiza el viaje familiar y viene a chequear. Lista de tres, con la más importante al final.",
    heras: { nota: "6", fallas: [
      "Contaba la historia entera en el segundo 0, sin sonido ni pregunta abierta.",
      "Parte diario (camas, comidas) sin el miedo real de quien organiza."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Antes de traer a mi familia, vine a mirar tres cosas. La tercera es la que casi nadie mira.",
      placa: "3 COSAS QUE MIRÉ ANTES ✅",
      plano: "Mai con una libreta y una lapicera cruzando el portón; se escucha la lapicera que hace clic.",
      marco: "Lista + brecha abierta (¿cuál es la tercera?)"
    },
    beats: [
      ["0:00", "Mai con libreta cruzando el portón; clic de la lapicera", "Antes de traer a mi familia, vine a mirar tres cosas. La tercera es la que casi nadie mira.", "¿Cuál es?"],
      ["0:05", "Mai prueba el portón y mira el cerco del parque", "Uno: que el terreno sea cerrado. Lo es.", ""],
      ["0:09", "Mai cuenta las camas: matrimonial, una plaza y sofá cama", "Dos: que duerman cuatro de verdad, cada uno en su cama. Sí.", "¿Y la tercera?"],
      ["0:14", "Mai abre la puerta de la cabaña y se ve la otra cabaña enfrente", "Tres: que si vienen mis suegros, tengan su propia cabaña. Y la tienen.", "Pago"],
      ["0:19", "Mai tacha la lista y cierra la libreta", "Listo. San Pedro, a dos horas.", ""]
    ],
    cta: "Guardalo para cuando organices el viaje familiar.",
    shots: ["Mai con libreta cruzando el portón (grabar el clic)", "Mai probando el portón y mirando el cerco", "Mai contando camas en el dormitorio", "Puerta abierta con la otra cabaña enfrente", "Mai tachando la lista"],
    ojo: "Capacidad estricta: cuatro por cabaña. «Suegros» es un ejemplo de familia grande: no hace falta que aparezcan.",
    caption: "Las 3 cosas que miré antes de traer a mi familia ✅\nTerreno cerrado, cuatro camas de verdad y una cabaña para cada familia.\nGuardalo para cuando organices el viaje."
  }
]);

/* ───────── 06 · Recorrido en una toma ───────── */
H(6, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "¡Vení que te muestro por qué acá entran ocho!",
    angulo: "Vos seguís a Mai en una sola toma con cronómetro. Cada parada contesta una pelea del grupo; la plata llega con el reloj.",
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
      ["0:04", "Mai camina rápido por el parque, toma continua", "Uno: el parque es cerrado. Chicos y perro, sueltos.", ""],
      ["0:10", "Pasa por el quincho y toca la parrilla", "Dos: quincho techado, así el asado sale aunque llueva. Y a la noche, fogonero.", ""],
      ["0:17", "Entra a la grande (hogar) y señala la chica por la ventana", "Tres, la más importante: dos cabañas. Cada familia en la suya, con su baño.", ""],
      ["0:25", "Sale hacia el fogonero y frena", "¿Y la plata?", "Bucle"],
      ["0:27", "Mai mira el cronómetro en el celu", "Veinticinco mil por persona, entre ocho. Treinta y seis segundos. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Comentá PRECIO y te mando las tarifas y las fechas libres.",
    shots: ["UNA toma continua con gran angular, siguiendo a Mai del portón al fogonero (ensayar dos veces)", "Grabar el ruido del portón", "Cronómetro sobreimpreso en edición"],
    ojo: "Ordenar todo el terreno antes: la toma sin cortes muestra todo. Pileta cerrada: no apuntarle. $25.000 es con quinta completa y ocho.",
    caption: "Por qué acá entran ocho sin pelearse, en 40 segundos ⏱️\nDos cabañas, quincho techado, fogonero y parque cerrado. San Pedro.\nComentá PRECIO."
  },
  {
    v: "B", tipo: "Cambia la toma",
    titulo: "Del auto a la mesa puesta para ocho, sin cortar",
    angulo: "Una sola toma: Mai baja del auto con el carbón, prende la parrilla y termina en la mesa puesta para el grupo que todavía no llegó.",
    heras: { nota: "5", fallas: [
      "Arranca en silencio, solo con texto: rompe el gancho de 3 partes.",
      "Toma para mirar, sin pregunta abierta ni enemigo."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Del auto a la mesa para ocho, sin cortar. Vení.",
      placa: "DEL AUTO AL ASADO 🥩 SIN CORTES",
      plano: "Puerta del auto que se abre adentro del terreno y una bolsa de carbón que cae al pasto. Se escucha el portón cerrándose.",
      marco: "Reto visual (¿sin cortes?)"
    },
    beats: [
      ["0:00", "Mai baja del auto con la bolsa de carbón; portón que se cierra", "Del auto a la mesa para ocho, sin cortar. Vení.", "¿Llega?"],
      ["0:03", "La cámara la sigue hacia el quincho", "El auto queda adentro. Ni hay que buscar dónde dejarlo.", ""],
      ["0:08", "Mai acomoda el carbón en la parrilla y prende", "El carbón lo traés vos. El quincho es techado, así que prende aunque se nuble.", ""],
      ["0:15", "Mai pone los últimos platos en la mesa larga", "Los platos ya están. Ocho lugares, y el resto del grupo llega en un rato.", "¿Cuánto les sale?"],
      ["0:21", "Mai levanta un vaso a cámara", "Entre ocho, veinticinco mil cada uno la noche. Salud.", "Pago"]
    ],
    cta: "Mandáselo al asador de tu grupo.",
    shots: ["Toma única siguiendo a Mai: auto → quincho → parrilla → mesa → brindis", "Carbón con iniciador para que prenda rápido", "Mesa larga armada para ocho antes de grabar", "Grabar el portón cerrándose"],
    ojo: "El carbón lo traen los huéspedes: por eso se ve bajándolo del auto. $25.000 es con quinta completa y ocho.",
    caption: "Del auto a la mesa para ocho, sin cortes 🔥\nEl carbón lo traés vos; el quincho techado ya está.\nMandáselo al asador de tu grupo."
  },
  {
    v: "C", tipo: "Otro ritmo",
    titulo: "POV: sos el primero del grupo en llegar",
    angulo: "La cámara sos vos llegando; Mai camina de espaldas guiándote en una toma, como la chica de la referencia, y te va contando dónde duerme cada uno.",
    heras: { nota: "6", fallas: [
      "El tour anterior era simpático pero no abría curiosidad.",
      "No cerraba en nada: ni moraleja ni pregunta."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "Llegaste primero, así que elegís cabaña vos. Vení.",
      placa: "POV: LLEGASTE PRIMERO AL FINDE 🏃",
      plano: "Mai camina de espaldas por el parque haciéndote señas de que la sigas; pasos en el pasto.",
      marco: "Identificación + brecha abierta (¿cuál elijo?)"
    },
    beats: [
      ["0:00", "Mai camina de espaldas, te hace señas", "Llegaste primero, así que elegís cabaña vos. Vení.", "¿Cuál elijo?"],
      ["0:03", "Mai abre la chica y gira adentro", "Esta es la chica: dormitorio, sofá cama, cocina.", ""],
      ["0:08", "Sale y cruza a la grande sin cortar", "Y esta es la grande…", ""],
      ["0:11", "Adentro, Mai se para al lado del hogar", "…con hogar a leña. Diez mil más.", "¿Cuál?"],
      ["0:15", "Mai se tira en el sillón de la grande", "Yo que vos, esta. Los otros que lleguen tarde se quedan con la chica.", "Pago"],
      ["0:20", "Mai señala por la ventana el quincho y el parque", "Igual el quincho y el parque son de todos. San Pedro, a dos horas.", ""]
    ],
    cta: "Etiquetá al que siempre llega último.",
    shots: ["UNA toma continua: Mai de espaldas guiando, chica → grande → sillón → ventana", "Gran angular, celu a la altura de los ojos"],
    ojo: "Ensayar el recorrido: Mai camina de espaldas y hay escalones o umbrales. Precios: chica $100.000 y grande $110.000 por noche.",
    caption: "POV: llegaste primero y elegís cabaña 🏃\nLa grande tiene hogar a leña. San Pedro, a dos horas.\nEtiquetá al que siempre llega último."
  }
]);

/* ───────── 07 · «Se te mandan sin avisar» ───────── */
H(7, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "POV: te mandás sin avisar",
    angulo: "La cámara sos vos, que entraste sin avisar. Mai te encuentra y termina mostrándote todo, con el habla de la referencia («perdón que me mandé», «te comento»).",
    heras: { nota: "5,5", fallas: [
      "Casi 50 segundos de recorrido lento: se pasa de los 15-45 s.",
      "Arranca con un saludo educado y resuelve el conflicto enseguida, sin sonido."
    ]},
    dur: "≈27 s",
    hook: {
      dice: "¡Disculpá! ¿Qué hacés acá adentro?",
      placa: "POV: TE MANDÁS SIN AVISAR 😳",
      plano: "POV mirando la parrilla del quincho; Mai aparece de golpe por detrás del quincho. Pasos rápidos.",
      marco: "Conflicto + imagen y sonido"
    },
    beats: [
      ["0:00", "POV mirando la parrilla; Mai aparece de golpe", "¡Disculpá! ¿Qué hacés acá adentro?", "¿Te echa?"],
      ["0:03", "La cámara baja, como avergonzada", "—(vos) Perdón que me mandé… me dijeron que podía mirar. Somos ocho.", ""],
      ["0:07", "Mai suspira y arranca a caminar", "—Bueno, ya que estás, te comento.", ""],
      ["0:10", "Entran a la grande: hogar", "—Son dos cabañas de cuatro. Esta tiene hogar a leña, horno y freezer.", ""],
      ["0:15", "Mai abre la puerta del baño", "—¿Secador? No, eso traelo. Pero el perro sí entra, y duerme adentro.", ""],
      ["0:20", "Salen hacia el portón", "—(vos) ¿Y cómo hago para quedarme?", "Bucle"],
      ["0:23", "Mai en el portón, guiño a cámara", "—Entre ocho, veinticinco mil cada uno la noche. Escribime y lo reservamos.", "Pago"]
    ],
    cta: "Comentá RESERVA y te escribo.",
    shots: ["POV en el quincho, Mai apareciendo de golpe (grabar los pasos)", "Cámara bajando", "Mai caminando", "Entrada a la grande con hogar", "Mai abriendo el baño", "Mai en el portón con guiño"],
    ojo: "Tu voz va desde atrás de cámara. Suelto, sin leer. No decir que hay visitas de día: es un dato sin confirmar.",
    caption: "Me mandé sin avisar… y terminé preguntando la seña 😅\nDos cabañas para ocho, hogar a leña y el perro adentro. Secador no hay.\nComentá RESERVA."
  },
  {
    v: "B", tipo: "Cambia quién entra",
    titulo: "POV: caíste un día antes",
    angulo: "La cámara sos vos llegando un día antes de la reserva. La duda es si Mai te deja pasar; la regla del silencio cierra con humor.",
    heras: { nota: "6", fallas: [
      "Resuelve el conflicto en el segundo 6 («tienen suerte»): se va la duda.",
      "Lista de logística sin el apuro del que se escapa."
    ]},
    dur: "≈25 s",
    hook: {
      dice: "¡Pará! ¿Qué hacés acá? ¡La reserva es mañana!",
      placa: "POV: CAÍSTE UN DÍA ANTES 🤦",
      plano: "Desde el auto: bocinazo, el portón se abre y Mai aparece con cara de «no puede ser».",
      marco: "Conflicto + sonido"
    },
    beats: [
      ["0:00", "Bocinazo; Mai abre el portón con cara de sorpresa", "¡Pará! ¿Qué hacés acá? ¡La reserva es mañana!", "¿Te deja?"],
      ["0:03", "La cámara sale del auto", "—(vos) Es que no aguantaba más la semana.", ""],
      ["0:06", "Mai mira el celular, piensa", "(un segundo de silencio)", "Brecha"],
      ["0:08", "Mai abre del todo", "—Bueno, tuviste suerte. Pasá, que la cama ya está hecha.", ""],
      ["0:13", "Mai señala el quincho", "—¿Trajiste carbón? —(vos) … —Hay un súper a un minuto.", ""],
      ["0:18", "Mai camina adelante, se da vuelta", "—Y el resto de tu grupo llega mañana, ¿no? Eso sí…", "¿Eso sí qué?"],
      ["0:22", "Mai a cámara", "—…a las doce, silencio. Que te conozco.", "Pago"]
    ],
    cta: "Mandáselo al amigo que llegaría un día antes.",
    shots: ["Desde el auto: bocinazo y portón abriéndose con Mai", "Cámara saliendo del auto", "Mai mirando el celular", "Mai abriendo del todo", "Mai señalando el quincho", "Mai a cámara"],
    ojo: "«Tuviste suerte» es ficción del sketch: no puede sonar a que siempre hay lugar. Súper a un minuto: Supermercado 18, del relevamiento de Maps.",
    caption: "Cuando no aguantás y caés un día antes 😂\nDos cabañas para ocho, quincho techado y súper a un minuto.\nMandáselo al que haría esto."
  },
  {
    v: "C", tipo: "Otro giro",
    titulo: "Todo lo que nadie se anima a preguntar",
    angulo: "Vos, desde atrás de cámara, le tirás a Mai las preguntas incómodas de corrido. Ella contesta caminando; la última es la que más se pregunta.",
    heras: { nota: "6", fallas: [
      "El sketch anterior necesitaba a más personas y revelaba el giro demasiado pronto.",
      "No dejaba una pregunta abierta hasta el final."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "Te hago las preguntas que nadie se anima a hacer. Rápido, sin pensar.",
      placa: "LO QUE NADIE PREGUNTA 🙊",
      plano: "Mai caminando hacia cámara; vos le apuntás con el celu como si fuera un micrófono. Se escucha un «¿lista?».",
      marco: "Formato pregunta-respuesta rápida + lo mejor al final"
    },
    beats: [
      ["0:00", "Mai camina hacia cámara; vos le acercás el celu", "—(vos) Te hago las preguntas que nadie se anima a hacer. Rápido, sin pensar.", "¿Cuáles?"],
      ["0:04", "Mai en el baño", "—(vos) ¿Hay secador? —No. Traelo.", ""],
      ["0:07", "Mai en el dormitorio", "—(vos) ¿Traigo sábanas? —No, ya están.", ""],
      ["0:10", "Mai en el quincho", "—(vos) ¿Y la leña? —Esa sí, traela vos.", ""],
      ["0:13", "Mai con la correa en el sillón", "—(vos) ¿El perro duerme adentro? —Sí. Y no paga.", "¿Y la última?"],
      ["0:17", "Mai frena en el parque", "—(vos) La última: ¿sale caro irse de a ocho?", "Bucle"],
      ["0:20", "Mai a cámara, sonriendo", "—Veinticinco mil por persona, con la quinta entera. ¿Algo más?", "Pago"]
    ],
    cta: "Comentá la pregunta que no te animás a hacer y te la contesto.",
    shots: ["Mai caminando hacia cámara", "Mai en el baño", "Mai en el dormitorio", "Mai en el quincho", "Mai con la correa en el sillón", "Mai frenando en el parque a cámara"],
    ojo: "Todas las respuestas son del brief del cliente. El cierre pide comentar sin palabra clave: sirve para juntar preguntas reales.",
    caption: "Todo lo que nadie se anima a preguntar 🙊\nSecador no, sábanas sí, leña la traés vos, el perro duerme adentro.\nComentá tu pregunta."
  }
]);

/* ───────── 08 · Estética de cine ───────── */
H(8, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "Llegar un viernes, en detalles",
    angulo: "Las manos y los pies de Mai, texturas y luz cálida; su voz calma y un final que se paga con humor.",
    heras: { nota: "5,5", fallas: [
      "«Vení que te muestro cómo es llegar» sin intriga y sin sonido que frene el scroll.",
      "Detalles lindos (cama, hogar, luces) sin el cansancio de la ciudad."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Vení que te muestro cómo es llegar un viernes.",
      placa: "VIERNES, 19 H 🚗",
      plano: "La mano de Mai abriendo el portón a contraluz cálido. Se escucha la llave que gira y el portón que cruje.",
      marco: "Imagen + sonido + monólogo interno"
    },
    beats: [
      ["0:00", "Mano de Mai con la llave en el portón, contraluz", "Vení que te muestro cómo es llegar un viernes.", "¿Cómo es?"],
      ["0:03", "Pies descalzos de Mai pisando el pasto", "Ni bien abrís, el pasto. El auto queda adentro.", ""],
      ["0:07", "Mano sobre la cama hecha", "Entrás a la cabaña y la cama ya está hecha.", ""],
      ["0:11", "Mano acomodando leña en el hogar de la grande", "Si elegiste la grande, el hogar para la noche.", ""],
      ["0:15", "Luces del parque prendiéndose; mano cebando un mate", "Afuera se prenden las luces del parque. ¿Lo más difícil de todo esto?", "Bucle"],
      ["0:20", "Mano cerrando el portón con luz de mediodía", "Irte el domingo.", "Pago"],
      ["0:23", "General de las dos cabañas iluminadas", "¿Qué te parece?", ""]
    ],
    cta: "Comentá SANPEDRO y te mando qué hacer en el pueblo cuando vengas.",
    shots: ["Mano de Mai con la llave en el portón a contraluz (grabar el crujido)", "Pies descalzos en el pasto", "Mano sobre la cama hecha", "Mano con leña en el hogar", "Luces del parque prendiéndose + mate", "Mano cerrando el portón con luz de mediodía", "General iluminado"],
    ojo: "Hora dorada y exposición un poco baja; filtro cálido parejo en edición. La leña la traen los huéspedes.",
    caption: "Así es llegar un viernes a Los Álamos.\nLo más difícil es irse el domingo.\nComentá SANPEDRO."
  },
  {
    v: "B", tipo: "La experiencia estrella",
    titulo: "Armé el cine para el grupo",
    angulo: "Mai arma el cine en el quincho antes de que llegue el grupo: sábana, ocho sillas, pochoclos. El chiste final es «el precio de la entrada».",
    heras: { nota: "6", fallas: [
      "Arranca mudo, solo con texto: rompe el gancho de 3 partes.",
      "Muestra el armado en línea recta, sin ninguna pregunta que retenga."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "El plan del sábado a la noche no es salir. Mirá lo que armé.",
      placa: "EL PLAN DE LA NOCHE NO ES SALIR 🎬",
      plano: "La mano de Mai prende un proyector en el quincho a oscuras: se escucha el clic y aparece el haz de luz.",
      marco: "Contracorriente + imagen y sonido"
    },
    beats: [
      ["0:00", "Clic del proyector, haz de luz en la oscuridad", "El plan del sábado a la noche no es salir. Mirá lo que armé.", "¿Qué armó?"],
      ["0:04", "Mai ata una sábana entre los tirantes del quincho", "Una sábana en el quincho.", ""],
      ["0:07", "Mai acomoda ocho sillas con frazadas", "Ocho sillas, con las frazadas de las cabañas.", ""],
      ["0:11", "Mai llena un bol de pochoclos; el fogonero prendido al lado", "Pochoclos, y el fogonero al lado.", "¿Y cuánto sale?"],
      ["0:16", "Mai se sienta sola en la primera fila y mira a cámara", "¿El precio de la entrada?", "Bucle"],
      ["0:18", "Fuego del fogonero, voz calma", "Veinticinco mil cada uno la noche, con la quinta entera. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Guardalo para la noche que vengas con tu grupo.",
    shots: ["Proyector encendiéndose (grabar el clic)", "Mai atando la sábana", "Mai acomodando ocho sillas con frazadas", "Bol de pochoclos y fogonero", "Mai sentada sola en la primera fila", "Fogonero"],
    ojo: "La quinta NO tiene proyector: lo trae el grupo. Decirlo en el caption. $25.000 es con quinta completa y ocho.",
    caption: "El plan del sábado no es salir 🎬\nTraete el proyector: el quincho techado, las frazadas y el fogonero ya están.\nGuardalo para tu finde."
  },
  {
    v: "C", tipo: "Otro momento del día",
    titulo: "8:00, todos duermen",
    angulo: "Mai se levanta primera: el primer mate sin bocinas, y la gracia de que por un rato nadie la necesite.",
    heras: { nota: "6", fallas: [
      "Gancho poético y pasivo, sin sonido de quiebre ni pregunta.",
      "Momentos lindos sin el contraste con la ciudad."
    ]},
    dur: "≈23 s",
    hook: {
      dice: "Esto es lo que te perdés si el finde te quedás en la ciudad.",
      placa: "8:00 · TODOS DUERMEN 🤫",
      plano: "Rayo de sol por la ventana sobre la cama deshecha. Se escucha la pava bajito y los pájaros.",
      marco: "Lo que te perdés + enemigo común (la ciudad)"
    },
    beats: [
      ["0:00", "Sol por la ventana sobre la cama; pava, pájaros", "Esto es lo que te perdés si el finde te quedás en la ciudad.", "¿Qué?"],
      ["0:04", "Mano de Mai cebando el primer mate con vapor en la mesa de mosaico", "Ocho de la mañana. El primer mate, y ni una bocina.", ""],
      ["0:08", "Pies descalzos de Mai en el pasto con rocío", "El pasto mojado.", ""],
      ["0:12", "Puertas de las dos cabañas cerradas, todo quieto", "Los demás, durmiendo.", ""],
      ["0:15", "Mano de Mai apoyando el termo, mirando los árboles", "Y lo mejor de este mate…", "Bucle"],
      ["0:18", "Mismo plano, solo pájaros", "…es que por un rato nadie te necesita. San Pedro, a dos horas.", "Pago"]
    ],
    cta: "Etiquetá a la que se levanta primera a cebar en tu grupo.",
    shots: ["Sol por la ventana sobre la cama (grabar la pava y los pájaros)", "Mate con vapor en la mesa de mosaico", "Pies descalzos en el rocío", "Puertas de las cabañas cerradas", "Mano con el termo mirando los árboles"],
    ojo: "Se graba temprano si duermen en la quinta; si no, queda para la próxima jornada.",
    caption: "8:00 en Los Álamos. Todos duermen.\nPrimer mate, pasto mojado y ni una bocina.\nEtiquetá a la que se levanta primera."
  }
]);

/* ───────── 09 · 18 segundos, tres lugares, un mate ───────── */
H(9, [
  {
    v: "A", tipo: "Fiel a la referencia",
    titulo: "¿Y qué tal si este finde te escapás?",
    angulo: "La pregunta de la referencia («¿y qué tal si te escapás…?»), Mai con mate en mano y un lugar por frase; cierra con «te espero».",
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
      ["0:00", "Mai frente a las cabañas, sorbo de mate", "¿Y qué tal si este finde te escapás con tu grupo a un lugar donde nadie te llame?", "¿A dónde?"],
      ["0:04", "Mai sentada en la galería, ceba", "Dos cabañas para ocho, a dos horas de Buenos Aires,", ""],
      ["0:07", "Mai en la cocina de la grande, horno abierto", "con todo lo que necesitás para cocinar,", ""],
      ["0:10", "Mai en el quincho, junto a la parrilla", "un quincho techado para el asado", ""],
      ["0:12", "Mai en el medio del parque", "y un parque enorme para no hacer nada.", "¿Cuánto?"],
      ["0:15", "Mismo lugar, ceba y sonríe", "Entre ocho, veinticinco mil cada uno. Te espero.", "Pago"]
    ],
    cta: "Mandáselo a la persona con la que vendrías.",
    shots: ["Mai frente a las cabañas con mate y termo (grabar el sorbo)", "Mai sentada en la galería", "Mai en la cocina de la grande con el horno", "Mai junto a la parrilla del quincho", "Mai en el medio del parque"],
    ojo: "Misma ropa y mismo mate en todos los planos. Cada frase, tres tomas en su lugar. $25.000 es con quinta completa y ocho.",
    caption: "¿Y qué tal si este finde te escapás?\nQuinta con dos cabañas para ocho en San Pedro, a dos horas.\nMandáselo a con quien vendrías."
  },
  {
    v: "B", tipo: "Cambia el objeto",
    titulo: "Este asado no se come en la ciudad",
    angulo: "Mai lleva la tabla de carne de la cocina de un depto a la parrilla de la quinta. Termina en la mesa puesta para ocho.",
    heras: { nota: "5", fallas: [
      "El gancho no abre ninguna duda y no tiene sonido de impacto.",
      "Resuelve la intriga a la mitad, sin tensión hasta el remate."
    ]},
    dur: "≈18 s",
    hook: {
      dice: "Basta de comer apretados en un restaurante un sábado.",
      placa: "ESTE ASADO NO SE COME EN LA CIUDAD 🥩",
      plano: "Mai con la tabla de carne en la cocina chica de un departamento. Se escucha el cuchillo contra la tabla.",
      marco: "Enemigo común + contraste de lugar"
    },
    beats: [
      ["0:00", "Mai con la tabla en la cocina de un depto; golpe de cuchillo", "Basta de comer apretados en un restaurante un sábado.", "¿Dónde, entonces?"],
      ["0:03", "Mai con la tabla bajando del auto en la quinta", "Este asado se come en San Pedro.", ""],
      ["0:05", "Mai cruzando el parque con la tabla", "Dos cabañas y un parque para ocho.", ""],
      ["0:08", "Mai poniendo la carne en la parrilla del quincho", "Quincho techado: que llueva si quiere.", ""],
      ["0:11", "La tabla con la carne hecha en la mesa puesta para ocho", "Todos en la misma mesa.", "¿Y cuánto?"],
      ["0:14", "Mai levanta un vaso con el fuego atrás", "Veinticinco mil cada uno la noche, con la quinta entera.", "Pago"]
    ],
    cta: "Mandáselo al asador de tu grupo.",
    shots: ["Mai con la tabla en la cocina de un depto (cualquier cocina chica; grabar el cuchillo)", "Mai bajando del auto con la tabla", "Mai cruzando el parque", "Carne a la parrilla", "Mesa puesta para ocho con la carne", "Mai con el vaso"],
    ojo: "La carne y el carbón los traen ellos. $25.000 es por noche, con quinta completa y ocho.",
    caption: "Este asado no se come en la ciudad 🔥\nQuinta completa para ocho en San Pedro: $25.000 por persona la noche.\nMandáselo al asador de tu grupo."
  },
  {
    v: "C", tipo: "Otro público",
    titulo: "El perro viene con vos",
    angulo: "Mai en cuatro lugares con la correa (o con el perro de la quinta); el cuarto, el que nadie da, queda último.",
    heras: { nota: "6", fallas: [
      "Lista ordenada sin sonido ni enemigo (la guardería).",
      "Recorre los lugares en fila sin crear expectativa por lo principal: que duerma adentro."
    ]},
    dur: "≈18 s",
    hook: {
      dice: "Dejá de pagar guardería cada vez que te vas un finde.",
      placa: "EL PERRO VIENE CON VOS 🐶",
      plano: "Mai sentada en el pasto con un mate y una correa al lado. Un ladrido corto.",
      marco: "Enemigo común + lo mejor al final"
    },
    beats: [
      ["0:00", "Mai en el pasto con mate y correa; ladrido", "Dejá de pagar guardería cada vez que te vas un finde.", "¿Y qué hago con él?"],
      ["0:03", "Mai en la galería con la correa", "Acá tenés cuatro lugares para tomar mate con él. Uno: la galería.", "¿Cuáles más?"],
      ["0:06", "Mai en el quincho", "Dos: el quincho, mientras se hace el asado.", ""],
      ["0:08", "Mai en el fogonero de noche", "Tres: el fogonero.", "¿Y el cuarto?"],
      ["0:10", "Mai adentro de la cabaña, deja la correa junto al sillón", "Y cuatro, el que nadie te deja: adentro de la cabaña.", "Pago"],
      ["0:14", "Mai a cámara con el mate", "No paga y no importa el tamaño. San Pedro, a dos horas.", ""]
    ],
    cta: "Mandáselo a quien no viaja sin su perro.",
    shots: ["Mai en el pasto con mate y correa (ladrido de banco de sonidos si no hay perro)", "Mai en la galería", "Mai en el quincho", "Mai en el fogonero", "Mai dejando la correa junto al sillón", "Mai a cámara"],
    ojo: "Si está el perro de la quinta, que aparezca al lado de Mai en cada lugar. Única condición del brief: juntar lo que deja.",
    caption: "Cuatro lugares para tomar mate con tu perro, y uno es adentro de la cabaña 🐶\nNo paga y no importa el tamaño. San Pedro.\nMandáselo a quien no viaja sin el suyo."
  }
]);

/* ───────── 10 · Fotocopiadora del POV que ganó ───────── */
H(10, [
  {
    v: "A", tipo: "POV con objeto",
    titulo: "POV: llegás con la credencial puesta",
    angulo: "La cámara sos vos con la credencial del trabajo. Mai te recibe con un mate; la única decisión que queda es un chiste.",
    heras: { nota: "5", fallas: [
      "Arranca sin voz ni sonido, solo con placa.",
      "Secuencia linda sin pregunta abierta y sin moraleja."
    ]},
    dur: "≈24 s",
    hook: {
      dice: "¿Hace cuántos viernes que salís del trabajo con la cabeza quemada?",
      placa: "POV: LLEGÁS CON LA CREDENCIAL 👔",
      plano: "Primer plano de tu credencial colgada del cuello; atrás, desenfocado, el portón que se abre. Un pitido de oficina se corta con el portón.",
      marco: "Monólogo interno + objeto en mano (fotocopiadora de Heras)"
    },
    beats: [
      ["0:00", "Tu credencial en primer plano, portón atrás; pitido cortado por el portón", "(Mai, en off) ¿Hace cuántos viernes que salís del trabajo con la cabeza quemada?", "¿Y qué hago?"],
      ["0:04", "Tu mano se saca la credencial y la tira al asiento del auto", "(Mai) Sacate eso. La compu queda en el baúl.", ""],
      ["0:08", "POV descalzo en el pasto", "(Mai) San Pedro, a dos horas. Terreno cerrado, nadie te busca.", ""],
      ["0:12", "Mai te alcanza un mate frente a las dos cabañas", "Dos cabañas para los ocho de tu grupo, quincho y fogonero.", ""],
      ["0:16", "Fogonero prendiéndose con las luces del parque", "Y lo único que vas a tener que decidir esta noche…", "Bucle"],
      ["0:20", "Mai a cámara, con un mate en una mano y un vaso en la otra", "…¿mate o fernet?", "Pago"]
    ],
    cta: "Guardalo para el viernes que lo necesites.",
    shots: ["Tu credencial en primer plano con portón atrás (grabar el crujido)", "Tu mano tirando la credencial al asiento", "Cerrar el baúl con la compu", "POV descalzo en el pasto", "Mai alcanzando el mate frente a las cabañas", "Fogonero y luces", "Mai con mate y vaso"],
    ojo: "Misma música y ritmo que el POV original: es parte de lo que funcionó.",
    caption: "POV: llegás a San Pedro con la credencial todavía puesta.\nSe queda en el auto.\nGuardalo para el viernes que lo necesites."
  },
  {
    v: "B", tipo: "Personajes",
    titulo: "Vos del lunes vs. vos del viernes",
    angulo: "Mai hace de las dos. La del lunes pone las objeciones; la plata queda para el final.",
    heras: { nota: "6,5", fallas: [
      "La primera pregunta no tiene sonido ni un enemigo fuerte.",
      "El viernes contesta «ya reservé» en el segundo 4 y se cierra la duda."
    ]},
    dur: "≈26 s",
    hook: {
      dice: "Lunes: —¿Otra vez te vas a quedar encerrada todo el finde?",
      placa: "VOS DEL LUNES vs. VOS DEL VIERNES 💻🌿",
      plano: "Pantalla partida: a la izquierda, Mai agobiada frente a la compu; a la derecha, Mai con buzo y mate en el parque. Tecleo cortado por pájaros.",
      marco: "Contraste + enemigo común (la rutina)"
    },
    beats: [
      ["0:00", "Pantalla partida; tecleo cortado por pájaros", "Lunes: —¿Otra vez te vas a quedar encerrada todo el finde?", "¿Qué le contesta?"],
      ["0:04", "Viernes, tranquila, con el mate", "Viernes: —Esta vez no. Ya tengo dónde.", "¿Dónde?"],
      ["0:07", "Lunes, desconfiada", "Lunes: —¿Con los chicos, el perro y los Martínez? Terminamos peleados.", ""],
      ["0:11", "Viernes muestra el terreno y el quincho", "Viernes: —Dos cabañas separadas, terreno cerrado, y el perro duerme adentro.", ""],
      ["0:16", "Lunes cruza los brazos", "Lunes: —¿Y cuánto sale eso?", "Bucle"],
      ["0:18", "Viernes con la quinta iluminada atrás", "Viernes: —Entre ocho, veinticinco mil cada uno. En San Pedro, a dos horas.", "Pago"],
      ["0:23", "Lunes cierra la compu de un golpe", "Lunes: —…Pasame la ubicación.", ""]
    ],
    cta: "Comentá FINDE y te paso las fechas libres.",
    shots: ["Mitad lunes: Mai con camisa frente a la compu (cualquier escritorio)", "Mitad viernes: Mai con buzo y mate en el parque, mismo encuadre", "Terreno y quincho", "Quinta iluminada", "Cierre de la compu"],
    ojo: "Grabar las dos mitades con el celu a la misma altura. «Los Martínez» son la otra familia: así cierran los ocho, y no aparecen.",
    caption: "Vos del lunes vs. vos del viernes.\nQuinta completa en San Pedro: $25.000 por persona entre ocho.\nComentá FINDE."
  },
  {
    v: "C", tipo: "Cambios rápidos",
    titulo: "De la oficina al fogonero en diez cortes",
    angulo: "Un corte cada segundo y medio con Mai como protagonista, una frase por corte. Termina en el fuego, sin precio: la gracia es el ritmo.",
    heras: { nota: "5", fallas: [
      "Solo placas, sin voz: no hay gancho hablado.",
      "Clips lindos sin gancho, contexto, moraleja ni cierre."
    ]},
    dur: "≈20 s",
    hook: {
      dice: "En diez cortes: del viernes en la oficina al fogonero prendido.",
      placa: "DE LA OFICINA AL FOGONERO 🔥",
      plano: "La mano de Mai cierra la compu de un golpe. Clac seco y un motor que arranca.",
      marco: "Promesa + cambio de imagen constante"
    },
    beats: [
      ["0:00", "Mano de Mai cerrando la compu (clac) + motor", "En diez cortes: del viernes en la oficina al fogonero prendido.", "¿Llega?"],
      ["0:03", "Llaves; ruta desde el parabrisas", "Viernes a la tarde. Dos horas de ruta.", ""],
      ["0:06", "Portón abriéndose; el bolso de Mai cae en la cama", "El auto adentro. La cama hecha.", ""],
      ["0:09", "Zapatillas de Mai volando al pasto; mate servido en la mesa de mosaico", "Zapatillas afuera. Primer mate.", ""],
      ["0:12", "Mai prende la parrilla", "La parrilla, prendida.", ""],
      ["0:15", "Luces del parque prendiéndose", "Y cuando cae el sol…", "Bucle"],
      ["0:17", "Fogonero prendido; Mai junto al fuego", "…fogonero. Te espero en San Pedro.", "Pago"]
    ],
    cta: "Mandáselo a tu grupo.",
    shots: ["Mano de Mai cerrando la compu (grabar el clac)", "Llaves del auto", "Ruta desde el parabrisas (graba quien no maneja, nunca el que maneja)", "Portón abriéndose", "Bolso cayendo en la cama", "Zapatillas al pasto", "Mate en la mesa de mosaico", "Mai prendiendo la parrilla", "Luces del parque", "Mai junto al fogonero"],
    ojo: "El ingreso es desde las 11:00: llegar el viernes a la tarde no choca, pero confirmarlo con Sandra antes de publicar. La ruta la graba el que no maneja.",
    caption: "De la oficina al fogonero en diez cortes 🔥\nDos cabañas para ocho en San Pedro, a dos horas.\nMandáselo a tu grupo."
  }
]);
