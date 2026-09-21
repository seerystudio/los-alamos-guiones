/* Guiones de etapa 1 · Solmi & Asociados (21/09/2026).
   E = pregunta de Emanuel (fija). V = respuesta de Víctor: casillero para que la escriba él.
   "ej" es solo una ayuda por si se traba; no es el guion. */
window.GUIONES = {
  titulo: "Trece preguntas. Las respuestas son tuyas.",
  intro: [
    "Estos son los primeros videos: tres formatos y tres temas —empresas, patrimonio y lo que se puede arreglar antes de un juicio—. Cada fila es un formato: a la izquierda, un video de ejemplo; a la derecha, sus guiones. Los marcados «Pregunta frecuente de tu web» salen de las preguntas de tu página: la respuesta ya es tuya, solo hay que decirla hablando. Debajo de cada arranque hay otros para elegir: se escribieron cuarenta por guion y quedaron solo los que entendería un chico de cinco años y le importarían a media familia; los marcados «De tu web» o «Tuya» salen de tu página y de la nota de Perfil y Fortuna. Si te gusta más alguno, tocá «Este».",
    "Las preguntas ya están. Lo que falta sos vos: en cada casillero escribí cómo lo dirías hablando, no como lo escribirías. Si te trabás, tocá «Ver un ejemplo».",
    "Más abajo está cómo se vería el perfil, en cuatro versiones: elegí la que más te guste y cambiale lo que quieras.",
    "Lo que escribís se guarda solo, a medida que escribís: si mañana abrís este mismo link en otro celular o en la compu, vas a ver lo último. Cuando termines, tocá «Enviar» arriba y mandalo por WhatsApp."
  ],
  reglas: [
    "Estos videos son para gente que todavía no te conoce: no hace falta explicar leyes, contá lo que ves en tu escritorio.",
    "Sin nombres ni casos que se puedan reconocer.",
    "Sin comparaciones con otros estudios y sin prometer resultados.",
    "Casi todos duran entre 30 y 40 segundos; el fijado de cómo trabajamos, un poco más. Frases cortas, como en una charla.",
    "Se graba de a dos: Emanuel filma y hace las preguntas."
  ],
  refs: [
    {
      n: 1, id: "Dbo8iYZR1M7",
      formato: "POV: la consulta",
      resumen: "La cámara es el que consulta. Emanuel pregunta del otro lado del escritorio y vos le contestás mirándolo",
      cuenta: "@clemente.jimenez_", datos: "abogado, México",
      tags: ["La cámara es el cliente", "Una pregunta, una respuesta", "Escritorio"],
      mecanica: [
        "El que mira se siente sentado en tu escritorio: es la primera charla, antes de pedirla.",
        "La pregunta es la que se haría cualquiera, con sus palabras. Por eso frena el dedo.",
        "La respuesta es corta y mirando a cámara: se ve cómo pensás."
      ],
      guiones: [
        {
          v: "A", tipo: "Presentación · va fijado al perfil",
          titulo: "¿A qué te dedicás, explicado fácil?",
          hooks: [
            ["Pregunta inducida", "Víctor, ¿por qué nadie entiende qué hace un abogado hasta el día que lo necesita?"],
            ["Contracorriente", "Víctor, siempre pensé que a un abogado se lo llama cuando ya hay lío. ¿Es así?"],
            ["Provocación", "Víctor, no tengo idea de qué hace un abogado. ¿Me lo explicás como si tuviera diez años?"],
            ["Lista", "Víctor, explicame a qué te dedicás con tres ejemplos que me puedan pasar a mí."],
            ["Contraste", "Víctor, ¿vos sos de los abogados que pelean o de los que arreglan?"],
            ["Secreto", "Víctor, ¿qué hace un abogado cuando no está en un juicio?"],
            ["Advertencia", "Víctor, ¿qué me puede pasar si en toda mi vida no hablo nunca con un abogado?"],
            ["Impacto visual", "[Sin hablar] Emanuel deja sobre el escritorio un contrato, una escritura y las llaves de una casa. «Víctor, ¿con cuál de estos me ayudás vos?»"],
            ["Vulnerabilidad", "Víctor, te confieso: cada vez que escucho «abogado» pienso en juicios y peleas. ¿Me convencés de lo contrario?"],
            ["Error", "Víctor, ¿cuál es el error del que llama a un abogado recién cuando ya es tarde?"],
            ["Pregunta inducida", "Víctor, si se lo tuvieras que explicar a un chico de diez años, ¿qué le dirías que hacés?"],
            ["Contracorriente", "Víctor, dicen que a los abogados hay que tenerlos lejos. ¿Tienen razón?"],
            ["Provocación", "Víctor, ¿los abogados no están solo para los juicios?"],
            ["Lista", "Víctor, ¿en qué tres momentos de la vida conviene tener un abogado cerca?"],
            ["Pregunta inducida", "Víctor, ¿por qué todos tienen un médico y un mecánico de confianza, pero casi nadie un abogado?"],
            ["Contracorriente", "Víctor, ¿es cierto que un abogado también sirve cuando todo anda bien?"],
            ["Error", "Víctor, ¿qué cree la gente que hace un abogado, y está mal?"],
            ["Provocación", "Víctor, ¿un abogado no es alguien que cobra por complicarte la vida?"],
            ["Vulnerabilidad", "Víctor, nunca en mi vida pisé un estudio de abogados. ¿Qué me perdí?", "Solo si es real."],
            ["Pregunta inducida", "Víctor, ¿para qué llamaría a un abogado si no estoy peleado con nadie?"],
            ["Error", "Víctor, ¿cuál es el peor momento para conocer a tu abogado?"],
            ["Pregunta inducida", "Víctor, en un cumpleaños alguien te pregunta «¿y vos qué hacés?». ¿Qué le contestás?"]
          ],
          angulo: "Contestás con tres situaciones de la vida real, no con nombres de áreas.",
          dur: "≈40 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿me podés explicar fácil a qué te dedicás? Para que gente común como yo entienda.", placa: "POV: le pedís a un abogado que te explique a qué se dedica. Fácil.", plano: "Vos del otro lado del escritorio, mirando a cámara." },
          beats: [
            ["0:05", "V", "Una frase corta que prometa explicarlo simple.", "Te lo explico con tres situaciones."],
            ["0:08", "V", "Situación 1 · un negocio con alguien. Qué hacés vos ahí.", "Abrís un negocio con un amigo. Todo bien. Yo me ocupo de que quede escrito qué pasa el día que no esté todo bien."],
            ["0:15", "V", "Situación 2 · lo que juntaste: la casa, un campo, lo de toda la vida.", "Tenés tu casa, un campo, lo que juntaste en toda una vida. Me ocupo de que quede ordenado y protegido, le vaya como le vaya al negocio."],
            ["0:23", "V", "Situación 3 · un problema que todavía no llegó a juicio.", "Y si ya tenés un problema con alguien, antes de ir a juicio nos sentamos a ver si se puede arreglar."],
            ["0:30", "E", "¿O sea que sos un abogado que no pelea?"],
            ["0:33", "V", "Una sola frase que resuma cómo trabajás. Es la que se va a recordar.", "Soy un abogado que prefiere que no haga falta."]
          ],
          cta: "Sin pedido: es la presentación. Termina con tu nombre y San Pedro en pantalla.",
          ojo: "Evitá los nombres de las áreas («planificación patrimonial», «derecho comercial»): el que te ve por primera vez no habla así."
        },
        {
          v: "B", tipo: "Patrimonio",
          titulo: "Si al negocio le va mal, ¿me pueden sacar la casa?",
          hooks: [
            ["Contracorriente", "Víctor, todos dicen que lo del negocio es del negocio y lo de la casa es de la casa. ¿Es así?"],
            ["Pregunta inducida", "Víctor, ¿por qué hay gente que se funde con el negocio y pierde también la casa?"],
            ["Advertencia", "Víctor, tengo un negocio y la casa a mi nombre. ¿Me tengo que preocupar?"],
            ["Secreto", "Víctor, cuando abrís un negocio, ¿en qué momento la casa entra en juego?"],
            ["Error", "Víctor, ¿cuál es el error que pone en riesgo la casa del que tiene un negocio?"],
            ["Contraste", "Víctor, ¿qué diferencia al negocio que se funde solo del que se lleva la casa puesta?"],
            ["Impacto visual", "[Sin hablar] Emanuel deja sobre el escritorio las llaves del local y las de su casa, en el mismo llavero. «Víctor, ¿esto va junto o separado?»"],
            ["Provocación", "Víctor, ¿es verdad que un negocio te puede costar la casa?"],
            ["Vulnerabilidad", "Víctor, abrí un negocio y todo está a mi nombre. ¿Hice mal?", "Solo si es real."],
            ["Advertencia", "Víctor, si hoy mi negocio tiene deudas, ¿mi familia se puede quedar sin casa?"],
            ["Error", "Víctor, ¿qué firma el que tiene un negocio sin saber que está poniendo su casa en juego?"],
            ["Contraste", "Víctor, dos vecinos con el mismo negocio fundido: uno conserva la casa y el otro no. ¿Por qué?"],
            ["Provocación", "Víctor, ¿tener la casa a tu nombre no alcanza para que sea tuya?"],
            ["Advertencia", "Víctor, si pedí un préstamo para el negocio a mi nombre, ¿qué estoy arriesgando?"],
            ["Vulnerabilidad", "Víctor, mi viejo tuvo un negocio toda la vida y nunca pensó en la casa. ¿Tuvo suerte?", "Solo si es real."],
            ["Pregunta inducida", "Víctor, ¿por qué alguien que nunca tuvo deudas personales puede terminar sin casa?"],
            ["Impacto visual", "[Sin hablar] Emanuel apila facturas impagas del local encima de la escritura de su casa. «Víctor, ¿esto aplasta a esto?»"],
            ["Predicción", "Víctor, si hoy me va bien con el negocio, ¿para qué pensar en la casa?"],
            ["Provocación", "Víctor, perder el negocio es duro, pero ¿perder la casa también?"],
            ["Advertencia", "Víctor, si mi mujer es la que tiene el negocio, ¿nuestra casa corre peligro?", "Ojo: da por hecho que la casa es de los dos. Víctor confirma cómo lo contestaría."],
            ["Transformación", "Víctor, un día abrís el negocio con la casa tranquila, y al otro la casa está en juego. ¿Cómo pasa eso?"],
            ["Pregunta inducida", "Víctor, ¿cuánto de mi casa le pertenece a mi negocio?"]
          ],
          angulo: "Proteger lo que tenés: primero lo que cree todo el que tiene un negocio, y la respuesta recién a la mitad.",
          dur: "≈35 s",
          hook: { quien: "Emanuel", dice: "Víctor, si a mi negocio le va mal, ¿me pueden sacar la casa?", placa: "POV: le preguntás a un abogado si tu negocio te puede costar la casa", plano: "Vos del otro lado del escritorio, mirando a cámara." },
          beats: [
            ["0:04", "V", "No contestes todavía: qué cree casi todo el que tiene un negocio.", "Casi todos los que tienen un negocio creen que no. Que lo del negocio es del negocio, y la casa es la casa."],
            ["0:10", "V", "Cuándo se dan cuenta de que no era tan así. Sin asustar.", "Y muchos se enteran de que no era tan simple el día que al negocio le va mal."],
            ["0:15", "E", "¿Entonces me la pueden sacar?"],
            ["0:17", "V", "Recién acá, la respuesta: de qué depende. Solo nombrado, sin explicar cómo se hace.", "Depende de cómo armaste las cosas. A nombre de quién está el negocio, qué firmaste vos personalmente, si lo tuyo y lo del negocio están separados."],
            ["0:26", "V", "Una frase que resuma la idea.", "Que la casa sea tuya no alcanza. Lo que la cuida es cómo armaste todo lo demás, y eso se decide antes."]
          ],
          cta: "Mandáselo a alguien que tenga un negocio y una casa.",
          confirmar: "¿Se puede decir así: que si la casa queda expuesta depende de cómo está armado el negocio, qué firmó cada uno y si está separado de lo personal?",
          ojo: "Sin prometer que la casa se salva ni explicar figuras (sociedades, fideicomisos): al que te ve por primera vez le alcanza con saber que depende de algo que se decide antes."
        },
        {
          v: "C", tipo: "Antes del juicio",
          titulo: "¿Una pelea se puede arreglar antes del juicio?",
          hooks: [
            ["Contracorriente", "Víctor, siempre escuché que si hay pelea, termina en juicio. ¿Es así?"],
            ["Secreto", "Víctor, ¿qué pasa antes de un juicio que en las películas nunca te muestran?"],
            ["Pregunta inducida", "Víctor, ¿por qué dos personas que no se hablan se sentarían en la misma mesa?"],
            ["Contraste", "Víctor, ¿qué conviene: arreglarlo sentados en una mesa o que lo decida un juez?"],
            ["Impacto visual", "[Sin hablar] Una mesa, dos sillas enfrentadas y una en la punta. «Víctor, ¿para qué es esta mesa?»"],
            ["Predicción", "Víctor, si me peleo con mi vecino y lo llevo a juicio, ¿cómo quedamos después, viviendo al lado?"],
            ["Vulnerabilidad", "Víctor, estoy peleado con alguien y no quiero ir a juicio. ¿Hay otra salida?", "Solo si es real."],
            ["Transformación", "Víctor, ¿es verdad que dos personas pueden entrar peleadas a una mesa y salir con un acuerdo?"],
            ["Provocación", "Víctor, ¿no es más fácil ir a juicio y que un juez diga quién tiene razón?"],
            ["Pregunta inducida", "Víctor, ¿una pelea con un hermano se tiene que arreglar con un juez?"],
            ["Contracorriente", "Víctor, ¿sentarse a hablar con el que te hizo mal no es de débil?"],
            ["Error", "Víctor, ¿cuál es el error del que va directo a juicio sin sentarse antes a hablar?"],
            ["Secreto", "Víctor, ¿quién es el que se sienta en la punta de la mesa cuando dos se pelean?"],
            ["Impacto visual", "[Sin hablar] Dos tazas de café sobre una mesa, frente a frente, sin tocar. «Víctor, ¿esto sirve más que un juez?»"],
            ["Pregunta inducida", "Víctor, ¿por qué pensamos que una pelea solo la arregla un juez?"],
            ["Vulnerabilidad", "Víctor, estoy enojado con alguien y quiero que un juez me dé la razón. ¿Estoy mal?", "Solo si es real."],
            ["Contracorriente", "Víctor, dicen que arreglar es para el que tiene miedo de perder. ¿Es así?"],
            ["Transformación", "Víctor, ¿cómo pasa alguien de «nos vemos en tribunales» a darse la mano?"],
            ["Impacto visual", "[Sin hablar] Emanuel escribe «NOS VEMOS EN TRIBUNALES» en un mensaje de WhatsApp y duda antes de mandarlo. «Víctor, ¿lo mando?»"],
            ["Provocación", "Víctor, ¿para qué quiero hablar con alguien que no quiero ver nunca más?"],
            ["Contracorriente", "Víctor, ¿un buen abogado no es el que te lleva a juicio y gana?"],
            ["Secreto", "Víctor, ¿qué pasa en esa mesa los primeros minutos, cuando nadie se mira?"],
            ["Vulnerabilidad", "Víctor, me da vergüenza sentarme con alguien con quien me peleé. ¿Es normal?", "Solo si es real."],
            ["Pregunta inducida", "Víctor, ¿cuándo me conviene dejar de pelear y sentarme a hablar?"]
          ],
          angulo: "Contás cómo es esa mesa, como una escena, sin explicar el trámite.",
          dur: "≈35 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿es verdad que una pelea se puede arreglar antes de llegar a un juicio?", placa: "POV: le preguntás a un abogado si una pelea se puede arreglar sin juicio", plano: "Vos del otro lado del escritorio, mirando a cámara." },
          beats: [
            ["0:04", "V", "Sí o no, y prometé contar cómo es.", "Sí. Y te cuento cómo es esa mesa, porque casi nadie la conoce."],
            ["0:08", "V", "Cómo es esa primera mesa, contada como una escena.", "Te sentás en una mesa con la otra persona, y alguien en el medio que ordena la charla. Al principio nadie se mira."],
            ["0:13", "V", "Qué tiene esa mesa que no tiene un juicio.", "Pero ahí pasa algo que en un juicio no pasa: el que decide todavía sos vos, no un juez."],
            ["0:20", "E", "¿Y si no se arregla?"],
            ["0:22", "V", "Qué pasa si no se arregla, sin plazos ni pasos.", "Entonces está el juicio. Pero antes probaste arreglarlo, y eso ya vale."]
          ],
          cta: "¿Conocés a alguien peleado con un socio, un vecino o un inquilino? Mandáselo.",
          confirmar: "¿Se puede decir así: que en la mediación deciden las partes y en el juicio decide el juez?",
          ojo: "No expliques el trámite (plazos, pasos, costos): al que te ve por primera vez le alcanza con saber que existe."
        },
        {
          v: "D", tipo: "Pregunta frecuente de tu web",
          titulo: "¿Qué pasa en una primera consulta?",
          hooks: [
            ["Vulnerabilidad", "Perdón, es la primera vez que vengo a un abogado. Estoy un poco nervioso."],
            ["Pregunta inducida", "¿Por qué me da más miedo venir al abogado que el lío en el que estoy?"],
            ["Contracorriente", "Vengo a preguntar nomás, ¿eh? No le quiero hacer juicio a nadie."],
            ["Impacto visual", "[Sin hablar] Emanuel entra con una carpeta llena de papeles y la deja caer sobre el escritorio. «Traje todo… creo.»"],
            ["Provocación", "Te aviso: no entiendo nada de leyes y no pienso hacer como que entiendo."],
            ["Contraste", "¿Esto es una charla o ya es un trámite?"],
            ["Error", "Me dijeron que no venga sin saber qué pedir. ¿Hice mal en venir?"],
            ["Advertencia", "Antes de sentarme: si me siento acá, ¿ya estoy firmando un papel?"],
            ["De tu web", "Nunca fui a un abogado. ¿Cómo sé si ya es momento de venir?", "Es la primera pregunta de tu web. Tu respuesta: «apenas aparece la duda, no cuando el problema ya escaló»."],
            ["Vulnerabilidad", "Estuve tres semanas por llamar y hoy me animé.", "Solo si es real."],
            ["Contracorriente", "Yo pensé que acá me iban a mirar raro por no saber nada."],
            ["Provocación", "Si me hablás en difícil, me voy, ¿eh?"],
            ["Advertencia", "Antes de empezar: no sé si lo mío es para un abogado."],
            ["Secreto", "¿Qué le preguntás a alguien que no sabe ni qué preguntar?"],
            ["Pregunta inducida", "¿Cuánto tengo que saber de leyes para sentarme acá?"],
            ["Transformación", "Hace una semana que no duermo por este papel. Hoy vine.", "Solo si es real."],
            ["Contracorriente", "Me dijeron que al abogado se va cuando ya es tarde. Espero no haber llegado tarde."],
            ["Impacto visual", "[Sin hablar] Emanuel toca el timbre del estudio, duda, y ya se está yendo cuando se abre la puerta."],
            ["Pregunta inducida", "¿Tengo que saber qué quiero antes de sentarme?"],
            ["Error", "Busqué todo en internet antes de venir y ahora estoy más confundido."],
            ["Vulnerabilidad", "Perdón si me trabo. Es la primera vez que lo cuento en voz alta.", "Solo si es real."],
            ["Contracorriente", "¿Acá se puede venir aunque nadie me esté haciendo juicio?"],
            ["Transformación", "Entro con un nudo en la panza. Te aviso."],
            ["Pregunta inducida", "¿Qué tengo que decir primero?"],
            ["Impacto visual", "[Sin hablar] Emanuel saca del bolsillo un papel doblado mil veces y lo alisa sobre el escritorio."]
          ],
          angulo: "Para el que ya te vio y está pensando en consultar: la cámara es él, llegando a tu escritorio.",
          dur: "≈32 s",
          hook: { quien: "Emanuel", dice: "Hola… la verdad, no sé ni por dónde empezar." },
          beats: [
            ["0:03", "V", "Cómo lo recibís. Algo humano, antes de hablar de nada legal.", "Sentate tranquilo. ¿Querés un café?"],
            ["0:06", "E", "¿Tenía que traer algo? No sé nada de leyes."],
            ["0:09", "V", "Qué conviene traer (tu web dice «llevá todo lo que tengas») y qué le pedís que haga.", "Lo que tengas: un contrato, un mensaje, un recibo. Aunque te parezca poca cosa. Y lo que no sepas, lo pregunto yo. Contame qué te pasó, con tus palabras."],
            ["0:15", "V", "Con qué se va cuando termina la charla.", "Cuando terminemos, vas a saber cómo estás parado y qué opciones tenés. En criollo."],
            ["0:21", "E", "¿Y si después no quiero hacer nada?"],
            ["0:23", "V", "Tu remate: qué es y qué no es una consulta.", "Decidís vos, y no tiene que ser hoy. Consultar no te obliga a nada."]
          ]
        }
      ]
    },
    {
      n: 2, id: "DavyC1fDgAn",
      formato: "La falsa entrevista",
      resumen: "Emanuel pregunta desde atrás de la cámara, como en una nota. Vos contestás mirando apenas al costado",
      cuenta: "@estudiorossiyasociados", datos: "estudio jurídico, Argentina",
      tags: ["Aire de nota en un medio", "Preguntas sobre vos", "Cortes secos"],
      mecanica: [
        "Parece una nota de diario o de radio, aunque la grabe Emanuel con el celular. Eso solo ya te da peso.",
        "Te preguntan por vos y por tu trabajo, no por la ley: la gente ve a la persona, que es lo que pediste.",
        "Entre pregunta y respuesta se corta seco, sin silencios: el ritmo lo pone la charla."
      ],
      guiones: [
        {
          v: "A", tipo: "Empresas",
          titulo: "El error que más ves en los que tienen un negocio",
          hooks: [
            ["Contracorriente", "Víctor, dicen que entre amigos no hace falta firmar nada. ¿Estás de acuerdo?"],
            ["Pregunta inducida", "Víctor, ¿por qué tantos negocios que arrancan entre amigos terminan mal?"],
            ["Secreto", "Víctor, ¿qué es lo que un abogado ve venir en un negocio y el dueño no?"],
            ["Advertencia", "Víctor, si tengo un negocio y hoy me va bien, ¿de qué me tendría que cuidar?"],
            ["Vulnerabilidad", "Víctor, ¿cuál fue el error que más te costó como empresario?", "Solo si es real. Es la anécdota del guion, pero puesta al principio."],
            ["Contraste", "Víctor, ¿qué es peor para un negocio: un mal socio, o un buen socio sin nada firmado?"],
            ["Provocación", "Víctor, ¿firmar un papel con tu socio es desconfiar de él?"],
            ["Impacto visual", "[Sin hablar] Dos manos que se estrechan, como cerrando un trato. «Víctor, ¿esto alcanza para arrancar un negocio?»"],
            ["Error", "Víctor, ¿qué error ves todos los días en los que tienen un negocio?"],
            ["Pregunta inducida", "Víctor, ¿por qué los que abren un negocio con un amigo no quieren firmar nada?"],
            ["Contracorriente", "Víctor, ¿un apretón de manos vale menos que un contrato?"],
            ["Vulnerabilidad", "Víctor, abrí un negocio con un amigo y no firmamos nada. ¿Me tengo que preocupar?", "Solo si es real."],
            ["Impacto visual", "[Sin hablar] Emanuel rompe una servilleta de bar donde dice «50 y 50». «Víctor, ¿esto sirve?»"],
            ["Transformación", "Víctor, ¿cómo pasa un negocio de andar bien a terminar en un abogado?"],
            ["Error", "Víctor, ¿qué hace mal el que tiene un negocio que anda bien?"],
            ["Advertencia", "Víctor, si el negocio es con un familiar, ¿también hay que firmar?"],
            ["Contraste", "Víctor, ¿qué dura más: una amistad o un negocio entre amigos?"],
            ["Provocación", "Víctor, ¿tu mejor amigo es tu mejor socio?"],
            ["Pregunta inducida", "Víctor, ¿por qué da vergüenza pedirle a un amigo que firme?"],
            ["Vulnerabilidad", "Víctor, tengo un negocio con mi cuñado. ¿Tendría que estar nervioso?", "Solo si es real."],
            ["Impacto visual", "[Sin hablar] Emanuel pega un post-it en la pared que dice «Lo hablamos». «Víctor, ¿esto es un contrato?»"],
            ["Contraste", "Víctor, ¿un negocio entre amigos o entre desconocidos? ¿Cuál termina peor?"],
            ["Contracorriente", "Víctor, ¿firmar todo no es de empresa grande?"],
            ["Transformación", "Víctor, ¿en qué momento un socio pasa de amigo a enemigo?"]
          ],
          angulo: "Desde tu lugar de empresario y abogado, el error de todos los días.",
          dur: "≈40 s",
          hook: { quien: "Emanuel", dice: "Víctor, vos que sos empresario y abogado: ¿cuál es el error que más ves en los que tienen un negocio?", placa: "El error que más veo en los que tienen un negocio", plano: "Vos de costado al escritorio o de pie junto al mapa, mirando a Emanuel." },
          beats: [
            ["0:05", "V", "El error, en pocas palabras. Sin dudar.", "Que todo está de palabra."],
            ["0:08", "V", "Con quién pasa, y por qué la gente lo hace igual.", "Con el socio, con el proveedor, con el que te alquila el local. Mientras anda bien, nadie quiere firmar nada, para no quedar como desconfiado."],
            ["0:16", "V", "Cuándo se nota el problema.", "El problema es que lo de palabra se recuerda distinto el día que las cosas andan mal."],
            ["0:21", "E", "¿A vos te pasó?"],
            ["0:23", "V", "Una anécdota tuya como empresario, en una o dos frases. Sin nombres.", "Esta es tuya: algo que no dejaste escrito y te costó. Si no tenés una, se saca la pregunta."],
            ["0:31", "V", "Una frase para cerrar.", "Firmarlo es para que dentro de unos años los dos se acuerden de lo mismo. Nada más que eso."]
          ],
          cta: "Mandáselo a tu socio."
        },
        {
          v: "B", tipo: "Patrimonio",
          titulo: "La frase del que está empezando a tener algo propio",
          hooks: [
            ["Contracorriente", "Víctor, ¿ordenar lo que tenés es de ricos?"],
            ["Pregunta inducida", "Víctor, ¿por qué el que está arrancando es el que menos cuida lo que tiene?"],
            ["Error", "Víctor, ¿cuál es el error del que pone su primer auto o su primera casa a su nombre?"],
            ["Advertencia", "Víctor, si mañana tengo un accidente, ¿qué pasa con mi casa y mi negocio?"],
            ["Contraste", "Víctor, ¿qué va primero: hacer crecer lo que tenés u ordenarlo?"],
            ["Transformación", "Víctor, ¿qué cambia cuando pasás de tener un sueldo a tener tu propio negocio?"],
            ["Impacto visual", "[Sin hablar] Emanuel deja sobre el escritorio las llaves de una casa, de un auto y de un local. «Víctor, ¿qué tengo que ordenar de todo esto?»"],
            ["Pregunta inducida", "Víctor, recién me compré mi primer auto. ¿Ya tengo que pensar a nombre de quién lo pongo?", "Solo si es real."],
            ["Contracorriente", "Víctor, yo tengo poco. ¿Qué voy a ordenar?"],
            ["Provocación", "Víctor, ¿no es un poco exagerado pensar en papeles cuando recién arranco?"],
            ["Error", "Víctor, ¿qué hace mal el que recién se compra la casa?"],
            ["Impacto visual", "[Sin hablar] Emanuel pone la primera llave de su primera casa sobre el escritorio. «Víctor, es lo primero que tengo. ¿Y ahora?»", "Solo si es real."],
            ["Pregunta inducida", "Víctor, ¿por qué da fiaca ordenar lo que uno tiene?"],
            ["Provocación", "Víctor, ¿ordenar lo que tengo no es de viejos?"],
            ["Lista", "Víctor, ¿qué es lo primero que tendría que ordenar alguien que recién empieza a tener lo suyo?"],
            ["Advertencia", "Víctor, si hoy no ordeno lo mío, ¿quién lo va a ordenar después?"],
            ["Error", "Víctor, ¿cuál es la frase que más escuchás del que recién empieza a tener lo suyo?", "Es la pregunta original sin «patrimonio»."],
            ["Pregunta inducida", "Víctor, ¿cuándo es el momento de ordenar lo que uno tiene?"],
            ["Contraste", "Víctor, ¿qué vale más: lo que ganás o cómo lo tenés ordenado?"],
            ["Impacto visual", "[Sin hablar] Una caja de zapatos llena de papeles sueltos: boletas, un título del auto, una escritura. «Víctor, ¿esto está ordenado?»"],
            ["Transformación", "Víctor, ¿qué cambia el día que tu negocio empieza a dar plata?"],
            ["Provocación", "Víctor, ¿ordenar lo que tengo es pensar en que me voy a morir?"],
            ["Vulnerabilidad", "Víctor, nunca pensé a nombre de quién pongo la casa o el auto. ¿Estoy a tiempo?", "Solo si es real."],
            ["Pregunta inducida", "Víctor, ¿a los treinta ya hay que ordenar la casa, el auto y el negocio?"],
            ["Error", "Víctor, ¿qué deja para después el que recién arranca, y después se arrepiente?"]
          ],
          angulo: "Entra por lo que la gente quiere lograr, no por un problema.",
          dur: "≈35 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿qué frase escuchás más de la gente que está empezando a tener algo propio?", placa: "La frase que más escucho del que está empezando a tener algo propio", plano: "Vos de costado al escritorio o de pie junto al mapa, mirando a Emanuel." },
          beats: [
            ["0:04", "V", "La frase, entre comillas, como te la dicen.", "«Primero lo hago crecer, después lo ordeno.»"],
            ["0:08", "V", "Por qué es lógico que lo piensen.", "Y es lógico: cuando estás arrancando, lo último que querés es un papel más."],
            ["0:13", "V", "Qué le dirías vos.", "Yo les digo que ordenar también es armar. Y es mucho más fácil cuando todavía es poco."],
            ["0:18", "E", "¿Por ejemplo?"],
            ["0:20", "V", "Dos o tres decisiones concretas, solo nombradas, sin explicar cómo se hacen.", "A nombre de quién ponés la casa. Si el negocio está separado de lo tuyo. Qué pasa si mañana te pasa algo. Son decisiones de hoy."]
          ],
          cta: "Mandáselo a alguien que esté arrancando.",
          ojo: "Sin hablar de inversiones ni de rendimientos: el video es sobre cuidar lo que se arma."
        },
        {
          v: "C", tipo: "Antes del juicio",
          titulo: "¿Por qué un abogado te diría que no hagas juicio?",
          hooks: [
            ["Contracorriente", "Víctor, ¿a un abogado no le conviene que hagas juicio?"],
            ["Pregunta inducida", "Víctor, ¿cómo puede ser que ganar un juicio no siempre sea ganar?"],
            ["Secreto", "Víctor, ¿qué te cuesta un juicio, además de plata?"],
            ["Advertencia", "Víctor, si voy a juicio por bronca, ¿qué me puede salir mal?"],
            ["Caso real", "Víctor, ¿alguna vez le dijiste a alguien «no vayas a juicio» y te hizo caso?", "Solo si es real. Sin nombres."],
            ["Predicción", "Víctor, si hoy le hago juicio a alguien que conozco, ¿cómo va a estar esa relación cuando termine?"],
            ["Error", "Víctor, ¿cuál es el error del que va a juicio con ganas de «ganarle» al otro?"],
            ["Impacto visual", "[Sin hablar] Emanuel apoya sobre el escritorio una carpeta gorda, llena de papeles. Víctor la cierra y la corre para un costado. «¿Por qué?»"],
            ["Provocación", "Víctor, arreglar ¿no es perder?"],
            ["Tuya, de Perfil y Fortuna", "Víctor, vos siempre decís que hay que mirar a largo plazo. ¿Un juicio es mirar a largo plazo?", "La frase es tuya: «Siempre hay que mirar a futuro, a largo plazo»."],
            ["Pregunta inducida", "Víctor, ¿vos le dirías a un cliente que no te contrate para un juicio?"],
            ["Vulnerabilidad", "Víctor, quiero hacerle juicio a alguien por orgullo. ¿Me frenarías?", "Solo si es real."],
            ["Advertencia", "Víctor, antes de hacerle juicio a un pariente, ¿qué tendría que pensar?"],
            ["Contraste", "Víctor, ¿qué pesa más: tener razón o terminar la pelea?"],
            ["Secreto", "Víctor, ¿qué le preguntás a alguien antes de decirle «vamos a juicio»?"],
            ["Provocación", "Víctor, ¿un abogado que no quiere juicios no es un abogado raro?"],
            ["Transformación", "Víctor, ¿qué le pasa a alguien entre el día que empieza un juicio y el día que termina?"],
            ["Pregunta inducida", "Víctor, si tengo razón, ¿por qué no iría a juicio?"],
            ["Contracorriente", "Víctor, dicen que el que arregla es porque no tenía razón. ¿Es así?"],
            ["Advertencia", "Víctor, ¿un juicio con alguien que ves todos los días es buena idea?"],
            ["Provocación", "Víctor, ¿no ir a juicio no es dejar que el otro se salga con la suya?"],
            ["Impacto visual", "[Sin hablar] Emanuel golpea la mesa: «¡Quiero juicio!». Víctor, tranquilo, le sirve un vaso de agua."],
            ["Pregunta inducida", "Víctor, si voy a juicio y gano, ¿por qué no estaría contento?"],
            ["Error", "Víctor, ¿cuál es la frase que más te repiten los que quieren ir a juicio?"],
            ["Secreto", "Víctor, ¿qué no se recupera nunca después de un juicio con alguien que conocés?"],
            ["Contraste", "Víctor, ¿un juicio o una charla? ¿Qué elegirías si fuera tu hermano?"]
          ],
          angulo: "Tu forma de trabajar, contada por vos, sin compararte con nadie.",
          dur: "≈40 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿por qué un abogado te diría que no hagas juicio?", placa: "¿Un abogado que te dice que no hagas juicio?", plano: "Vos de costado al escritorio o de pie junto al mapa, mirando a Emanuel." },
          beats: [
            ["0:04", "V", "Tu respuesta corta: por qué a veces conviene no ir a juicio.", "Porque a veces ganar un juicio te sale más caro que arreglar."],
            ["0:09", "V", "Qué cuesta un juicio, además de la plata.", "Años. Plata. Y la relación con la otra persona, que casi siempre es alguien que conocés."],
            ["0:16", "V", "Qué es acordar, para vos.", "Acordar no es ceder. Es elegir vos cuándo termina esto, en vez de que lo elija otro."],
            ["0:22", "E", "¿Y por qué trabajás así?"],
            ["0:24", "V", "Tu porqué, con tus palabras. Es la respuesta más personal de todas: puede ser más larga.", "Esta es tuya. En Perfil y Fortuna dijiste algo en esa línea: «Siempre hay que mirar a futuro, a largo plazo»."]
          ],
          cta: "Mandáselo a quien esté con ganas de «ir a juicio».",
          confirmar: "¿Se puede decir al aire que a veces ganar un juicio sale más caro que arreglar?",
          ojo: "Sin nombrar ni compararte con otros estudios."
        },
        {
          v: "D", tipo: "Pregunta frecuente de tu web",
          titulo: "¿Todos los problemas legales terminan en juicio?",
          hooks: [
            ["Contracorriente", "Víctor, todo el mundo dice que si llamás a un abogado, terminás en juicio. ¿Es así?"],
            ["Pregunta inducida", "Víctor, ¿por qué a la gente le da tanto miedo llamar a un abogado?"],
            ["Secreto", "Víctor, ¿qué no sabe el que está peleado con el vecino y ya se imagina en tribunales?"],
            ["Advertencia", "Víctor, si tengo una pelea con el inquilino, ¿estoy condenado a años de juicio?"],
            ["Contraste", "Víctor, ¿juicio o acuerdo: quién decide eso?"],
            ["Impacto visual", "[Sin hablar] Emanuel apila carpetas y más carpetas sobre el escritorio. «Víctor, ¿todo termina así?»"],
            ["Provocación", "Víctor, ¿un abogado siempre te va a mandar a juicio?"],
            ["Error", "Víctor, ¿cuál es el error de casi todos cuando les deben plata?"],
            ["Vulnerabilidad", "Víctor, un cliente me debe plata y no se la reclamo porque no quiero un juicio. ¿Estoy haciendo mal?", "Solo si es real."],
            ["Pregunta inducida", "Víctor, ¿pelearme con alguien es lo mismo que tener un juicio?"],
            ["Contracorriente", "Víctor, si llamo a un abogado, ¿ya le estoy declarando la guerra al otro?"],
            ["Error", "Víctor, ¿por qué hay gente que se banca años una deuda sin cobrar para no ir a juicio?"],
            ["Advertencia", "Víctor, si no quiero juicio, ¿me conviene no hacer nada?"],
            ["Transformación", "Víctor, ¿cómo pasa una pelea de «lo arreglamos» a «nos vemos en tribunales»?"],
            ["Provocación", "Víctor, ¿los abogados no viven de los juicios?"],
            ["Pregunta inducida", "Víctor, ¿a la gente le da miedo la pelea o le da miedo el juicio?"],
            ["Error", "Víctor, ¿qué cree la gente que pasa cuando llama a un abogado?"],
            ["Advertencia", "Víctor, si espero a que la pelea crezca, ¿qué pierdo?"],
            ["Impacto visual", "[Sin hablar] Emanuel escribe un mensaje: «Te voy a hacer juicio». Lo borra letra por letra. «Víctor, ¿hay otra?»"],
            ["Predicción", "Víctor, si hoy me peleo con un pariente, ¿dónde termina?"],
            ["Pregunta inducida", "Víctor, ¿por qué nos imaginamos un juez cada vez que pensamos en un abogado?"],
            ["Provocación", "Víctor, ¿llamar a un abogado no es exagerar?"],
            ["Contracorriente", "Víctor, en las películas todo termina en tribunales. ¿En la vida también?"],
            ["Pregunta inducida", "Víctor, ¿qué conviene hacer primero cuando te peleás con alguien por plata?"],
            ["Secreto", "Víctor, ¿qué sabe un abogado sobre los juicios que la gente no?"]
          ],
          angulo: "Primero contás lo que cree la gente, y recién después lo desarmás. La respuesta llega a la mitad.",
          dur: "≈32 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿todos los problemas legales terminan en juicio?" },
          beats: [
            ["0:03", "V", "No contestes todavía: contá qué cree la gente que llega al estudio.", "Casi todos los que se sientan acá creen que sí. Y llegan con el enojo preparado para eso."],
            ["0:08", "V", "Qué se imaginan cuando piensan en un juicio.", "Se imaginan años, papeles, un juez… y a la otra persona del otro lado de la sala."],
            ["0:13", "V", "Lo que casi nadie sabe.", "Lo que casi nadie sabe es que el juicio es una de las puertas. Hay otras antes."],
            ["0:17", "V", "Recién acá, la respuesta: cuáles son esas otras puertas.", "Un acuerdo, una negociación, una mediación. Y muchos problemas se terminan ahí, sin pisar un tribunal."],
            ["0:24", "E", "¿Y cómo sabés cuál conviene?"],
            ["0:26", "V", "Cómo se decide el camino.", "Mirando tu caso. Es lo primero que hacemos."]
          ]
        },
        {
          v: "E", tipo: "Va fijado al perfil",
          titulo: "Hay cientos de abogados: ¿por qué Solmi & Asociados?",
          hooks: [
            ["Contracorriente", "Víctor, dicen que todos los abogados son iguales. ¿Es así?"],
            ["Pregunta inducida", "Víctor, ¿cómo elige un abogado alguien que nunca tuvo uno?"],
            ["Provocación", "Víctor, convenceme: ¿por qué vendría acá y no a otro estudio?"],
            ["Secreto", "Víctor, ¿qué no sabe la gente de un estudio hasta que se sienta en el escritorio?"],
            ["Error", "Víctor, ¿cuál es el error más común al elegir un abogado?"],
            ["Vulnerabilidad", "Víctor, a los abogados les tengo desconfianza. ¿Por qué confiaría en vos?", "Solo si es real."],
            ["Impacto visual", "[Sin hablar] Emanuel pasa el dedo por una lista larguísima de estudios en el celular y lo deja sobre el escritorio. «Víctor, ¿por qué ustedes?»"],
            ["Promesa con tiempo", "Víctor, tenés treinta segundos para decirme por qué elegirte.", "El guion dura unos 40 s: los 30 son para la respuesta, no para el video."],
            ["Predicción", "Víctor, si hoy te elijo a vos, ¿qué es lo primero que va a pasar?"],
            ["Pregunta inducida", "Víctor, en San Pedro hay muchos abogados. ¿Por qué alguien tocaría tu puerta?"],
            ["Error", "Víctor, ¿qué pregunta tendría que hacerle alguien a un abogado antes de elegirlo?"],
            ["Advertencia", "Víctor, ¿qué pasa si elijo mal a mi abogado?"],
            ["Provocación", "Víctor, si fueras yo, ¿por qué no te elegirías?"],
            ["Pregunta inducida", "Víctor, ¿cómo sé que no me vas a decir lo que quiero escuchar?"],
            ["Error", "Víctor, ¿qué mira la gente al elegir un abogado, y no tendría que mirar?"],
            ["Pregunta inducida", "Víctor, ¿por qué alguien elegiría un estudio de San Pedro?"],
            ["Advertencia", "Víctor, si un abogado te dice que sí a todo, ¿desconfío?", "Ojo: no puede sonar a crítica de otros estudios."],
            ["Provocación", "Víctor, ¿un abogado de confianza existe?"],
            ["Contraste", "Víctor, ¿el mejor abogado es el que más sabe o el que no te endulza el oído?"],
            ["Transformación", "Víctor, ¿cómo pasa un abogado de ser un desconocido a ser «mi abogado»?"],
            ["Predicción", "Víctor, si hoy te consulto, ¿cómo sé que vas a pensar en mí dentro de unos años?"],
            ["Contracorriente", "Víctor, ¿para elegir abogado hay que preguntar a un conocido?"],
            ["Impacto visual", "[Sin hablar] Emanuel busca «abogado San Pedro» en el celular y hace scroll sin parar. Para. Mira a cámara. «Víctor…»"]
          ],
          angulo: "Para el que ya llegó a tu perfil. No contestás con adjetivos: contás cosas que hacés. La respuesta llega a la mitad.",
          dur: "≈40 s",
          hook: { quien: "Emanuel", dice: "Víctor, hay cientos de abogados. ¿Por qué elegir Solmi & Asociados?", placa: "Hay cientos de abogados. ¿Por qué este?", plano: "Vos de costado al escritorio o de pie junto al mapa, mirando a Emanuel." },
          beats: [
            ["0:05", "V", "No contestes todavía: qué contesta todo el mundo a esta pregunta.", "Esa pregunta todos la contestan igual: compromiso, experiencia, cercanía. Y está bien, pero eso lo puede decir cualquiera."],
            ["0:11", "V", "Qué vas a hacer vos en vez de decir adjetivos.", "Yo prefiero contarte lo que hago."],
            ["0:14", "V", "Una cosa que hacés, que muestre cómo trabajás.", "Si lo tuyo no es lo mío, te lo digo en la primera charla, y te mando con quien sabe."],
            ["0:20", "V", "Otra cosa que hacés, aunque no te convenga.", "Te digo cómo estás parado, aunque no sea lo que viniste a escuchar."],
            ["0:26", "V", "Una más, mirando para adelante.", "Y pienso en cómo vas a estar más adelante, no solo en ganar esta."],
            ["0:32", "E", "¿Y por qué trabajás así?"],
            ["0:34", "V", "Tu porqué, en una frase. Es la que se va a recordar. (La del ejemplo es tuya: la citó la nota de Perfil y Fortuna.)", "Porque el que bien anda, bien acaba."]
          ],
          cta: "Sin pedido: va fijado. Si querés, termina con «cómo trabajamos, en el otro video fijado».",
          confirmar: "¿Querés decir en público que si un caso no es lo tuyo, lo derivás?",
          ojo: "Sin nombrar ni compararte con otros estudios: hablás de lo que hacés vos, no de lo que hacen los demás."
        }
      ]
    },
    {
      n: 3, id: "Db661pnRLe0",
      formato: "Teleprompter, sin solemnidad",
      resumen: "Vos a cámara con el texto en el celular, pero como hablás en una charla: suelto, con algún gesto y alguna sonrisa",
      cuenta: "@clemente.jimenez_", datos: "abogado, México",
      tags: ["Texto preparado", "Tono de charla", "Dos tamaños de plano"],
      mecanica: [
        "El texto ya está escrito, así que sale claro y sin trabarte: se te ve seguro.",
        "Lo que le saca la solemnidad es el tono: decirlo como se lo contarías a un amigo en un café, no como un alegato.",
        "Alternar plano medio y primer plano en cada punto le da ritmo sin moverse del escritorio."
      ],
      guiones: [
        {
          v: "A", tipo: "Empresas",
          titulo: "Las empresas familiares que llegan a los nietos",
          hooks: [
            ["Contracorriente", "Las empresas familiares que llegan a los nietos no tienen más plata que las otras. Tienen otra costumbre."],
            ["Pregunta inducida", "¿Por qué hay empresas familiares que llegan a los nietos, y otras que no pasan de los hijos?"],
            ["Error", "El error que cometen casi todas las empresas familiares, y que se nota recién cuando cambia de manos."],
            ["Secreto", "Lo que tienen las empresas familiares que duran, y que desde afuera no se ve."],
            ["Predicción", "Pensá en tu empresa dentro de treinta años. ¿Quién está sentado en tu silla?"],
            ["Impacto visual", "[Sin hablar] Una foto vieja de un negocio familiar, en blanco y negro. Víctor la deja sobre el escritorio: «¿Por qué hay empresas que llegan hasta acá?»"],
            ["Transformación", "De un abuelo con un almacén a nietos con una empresa. En el medio hubo tres decisiones."],
            ["Pregunta inducida", "¿Qué pasa con el negocio de la familia cuando el abuelo ya no está?"],
            ["Contracorriente", "Pensás que lo que hunde a una empresa familiar son las ventas. Casi nunca es eso."],
            ["Error", "Lo que no se habla en el asado se termina hablando en el abogado."],
            ["Contraste", "Hermanos que siguen almorzando juntos y hermanos que no se hablan. Mismo negocio. ¿Qué cambió?"],
            ["Pregunta inducida", "¿Por qué los hermanos que se quieren se pelean por el negocio de los padres?"],
            ["Transformación", "El negocio del abuelo llegó a los nietos. No fue suerte."],
            ["Vulnerabilidad", "Veo muchas familias con un negocio. Casi todas dejan para después la charla más difícil.", "Solo si lo ve seguido."],
            ["Contracorriente", "No hace falta ser una empresa grande para pensar en los nietos."],
            ["Pregunta inducida", "¿Tu negocio familiar tiene fecha de vencimiento?"],
            ["Contraste", "El negocio de la familia puede unirte o separarte. Depende de tres decisiones."],
            ["Advertencia", "Si trabajás con tu familia, hay una charla que tienen que tener este domingo."],
            ["Transformación", "Empezó con el padre. Siguió con los hijos. ¿Llega a los nietos?"],
            ["Error", "Muchos creen que alcanza con quererse. En una empresa familiar, no alcanza."],
            ["Contracorriente", "El negocio familiar no se hereda. Se prepara."],
            ["Secreto", "Hay una pregunta que toda familia con un negocio debería hacerse. Y casi ninguna se hace."],
            ["Vulnerabilidad", "Soy empresario. Sé lo que es mezclar familia y trabajo.", "Víctor tiene empresas propias (BRIEF). Solo si trabaja con familia."]
          ],
          angulo: "Lo que tienen las que duran, contado con una sonrisa.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "Una empresa familiar no se cae por la plata. Se cae en la mesa del domingo." },
          beats: [
            ["0:05", "V", "Cosa 1 · en una frase. Primer plano.", "Las que llegan a los nietos tienen esto. Una: los hermanos saben quién decide. Spoiler: no deciden todos."],
            ["0:11", "V", "Cosa 2 · en una frase. Plano medio.", "Dos: lo hablaron con la mesa puesta y el asado en la parrilla. No en el velorio."],
            ["0:17", "V", "Cosa 3 · en una frase. Primer plano.", "Tres: lo dejaron escrito. Porque de palabra, a los nietos no llega nada."],
            ["0:23", "V", "Una frase que junte las tres.", "Al final, lo que llega a los nietos es cómo se hablaba en esa mesa."]
          ]
        },
        {
          v: "B", tipo: "Patrimonio",
          titulo: "Lo que la gente hace para proteger su casa, y no la protege",
          hooks: [
            ["Contracorriente", "Poner la casa a nombre de tu pareja no la protege. Y no es lo único que la gente hace mal."],
            ["Pregunta inducida", "¿Por qué hay gente que hizo de todo para proteger su casa y la tiene igual de expuesta?"],
            ["Error", "El error que comete casi todo el que quiere proteger su casa. Y es un clásico."],
            ["Secreto", "Lo que pasa con tu casa cuando la ponés a nombre de otro."],
            ["Advertencia", "Si alguna vez pensaste «la pongo a nombre de mi mujer y listo», no pases de largo."],
            ["Contraste", "Hay gente que protegió su casa y gente que cree que la protegió. Se diferencian en tres decisiones."],
            ["Impacto visual", "[Sin hablar] Víctor tiene las llaves de una casa y se las pasa a una mano que entra en cuadro. «Esto no es proteger tu casa.»"],
            ["Contracorriente", "En los asados todos saben cómo proteger la casa. Casi todos se equivocan."],
            ["Error", "Lo que te recomendó tu cuñado para proteger la casa, probablemente no la protege."],
            ["Impacto visual", "[Sin hablar] Víctor sostiene una escritura y le tacha el nombre con una lapicera. «Así no se protege una casa.»"],
            ["Predicción", "Si hoy ponés tu casa a nombre de otro, mañana puede ser suya."],
            ["Pregunta inducida", "¿Qué hace la gente para proteger su casa? Casi todo, mal."],
            ["Error", "Querés proteger tu casa y hacés justo lo que la deja expuesta."],
            ["Lista", "Los consejos de asado para cuidar la casa. Ninguno funciona."],
            ["Vulnerabilidad", "La mayoría llega a mi escritorio con la casa ya «protegida». Y no lo está."],
            ["Contraste", "La casa que creés protegida y la que está protegida. Desde afuera se ven iguales."],
            ["Transformación", "De «mi casa está a salvo» a «¿y ahora qué hago?». Pasa más de lo que pensás."],
            ["Impacto visual", "[Sin hablar] Una casa de juguete que pasa de mano en mano. Víctor la frena: «Pará.»"],
            ["Provocación", "Si tu plan para proteger la casa es ponerla a nombre de otro, no tenés un plan."],
            ["Error", "Tu casa la cuidás de un robo. ¿Y de una deuda?"],
            ["Contraste", "Todos cuidan el auto con un seguro. ¿Y la casa?"]
          ],
          angulo: "Tres «soluciones» que cualquiera escuchó en un asado. Se reconoce, se ríe, y después piensa.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "«La pongo a nombre de mi mujer y listo.» Si alguna vez lo dijiste, tu casa no está tan protegida como creés." },
          beats: [
            ["0:05", "V", "Cosa 1, y qué pasa en realidad. Primer plano.", "Ese es el clásico. La casa sigue expuesta, solo que ahora a los problemas de otra persona."],
            ["0:11", "V", "Cosa 2, y qué pasa en realidad. Plano medio.", "Dos: «Se la paso a uno de los chicos». Ahora la casa donde vivís es de otro. Y la decisión también."],
            ["0:17", "V", "Cosa 3, y qué pasa en realidad. Primer plano.", "Tres: «Lo hago cuando empiecen los problemas». Lo que se mueve a las apuradas, cuando ya hay deudas, se puede revisar."],
            ["0:23", "V", "Qué tienen en común las tres.", "Lo que sirve es ordenarlo con tiempo, cuando todavía no hay ningún problema."]
          ],
          cta: "Si conocés a alguien que dijo alguna de estas tres, mandáselo.",
          confirmar: "¿Se pueden decir así las tres: que poner la casa a nombre de otro no la protege, y que lo que se mueve cuando ya hay deudas se puede revisar?",
          ojo: "Nombrás los errores, no enseñás a proteger la casa: el cómo es para la consulta."
        },
        {
          v: "C", tipo: "Antes del juicio",
          titulo: "Lo que ves en una mediación y nadie te cuenta",
          hooks: [
            ["Pregunta inducida", "¿Por qué dos personas que no se hablan hace años terminan arreglando en una mesa?"],
            ["Impacto visual", "[Sin hablar] Dos sillas enfrentadas, una mesa y dos vasos de agua sin tocar. Víctor se sienta: «Acá no pasa lo que te imaginás.»"],
            ["Transformación", "Entran sin mirarse. Salen dándose la mano. Te muestro qué pasa en el medio."],
            ["Pregunta inducida", "¿Qué pasa cuando dos que están peleados se sientan en la misma mesa?"],
            ["Secreto", "Me siento en mesas donde dos personas no se hablan. Lo que pasa ahí no sale en ningún lado."],
            ["Error", "Casi todos llegan a la mesa con lo que quieren decir preparado. Y casi nunca sirve."],
            ["Advertencia", "Si alguna vez te toca sentarte frente a alguien con quien estás peleado, guardate este video."],
            ["Contraste", "Hermanos, vecinos, socios. Distintas peleas, la misma mesa."],
            ["Impacto visual", "[Sin hablar] Dos manos sobre una mesa, lejos una de otra. Muy despacio, se acercan."],
            ["Secreto", "Lo que se dice en voz baja en una mesa de acuerdo vale más que lo que se grita."],
            ["Contracorriente", "Una pelea legal no se parece a una serie. Se parece a una sobremesa."],
            ["Lista", "Lo que vi sentado entre dos personas peleadas.", "No arranca con «tres»."],
            ["Impacto visual", "[Sin hablar] Víctor apoya una caja de pañuelos en el medio de la mesa. «Esto se usa más de lo que creés.»"],
            ["Pregunta inducida", "¿Qué hace falta para que dos que no se hablan vuelvan a hablar?"],
            ["Advertencia", "Antes de sentarte a arreglar con alguien, te conviene saber cómo es esa mesa."],
            ["Contracorriente", "Las peleas legales no son frías. Son lo más humano que vi."],
            ["Pregunta inducida", "¿De qué se habla cuando dos personas peleadas se sientan a arreglar?"]
          ],
          angulo: "Lo humano de esa mesa, contado desde tu silla.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "En las películas, una pelea legal es gritos y un juez. Sentado en una mesa de acuerdo, se ven dos personas que no se animan a mirarse." },
          beats: [
            ["0:04", "V", "Cosa 1. Primer plano.", "Una: se habla mucho más de lo que pasó que de la plata."],
            ["0:09", "V", "Cosa 2. Plano medio.", "Dos: el que más grita no siempre es el que menos quiere arreglar. A veces es el que más."],
            ["0:15", "V", "Cosa 3. Primer plano.", "Tres: a veces lo que destraba todo es un «perdoname»."],
            ["0:21", "V", "Qué dejan ver las tres.", "Lo que traba casi nunca es lo que se reclama."]
          ]
        },
        {
          v: "D", tipo: "Va fijado al perfil",
          titulo: "Qué pasa cuando nos confiás tu caso, paso a paso",
          hooks: [
            ["Promesa con tiempo", "Te explico en 90 segundos el paso a paso de cuando trabajás con el estudio.", "El guion dura ≈70 s."],
            ["Secreto", "Lo que pasa del otro lado del escritorio cuando nos contás tu caso."],
            ["Vulnerabilidad", "Si nunca fuiste a un abogado y te da un poco de miedo, quedate hasta el final."],
            ["Contraste", "Lo que te imaginás que pasa cuando vas al abogado, y lo que pasa cuando te sentás."],
            ["Impacto visual", "[Sin hablar] Víctor abre una carpeta vacía sobre el escritorio y escribe en la tapa «Tu caso». «Así arranca.»"],
            ["Advertencia", "Antes de llamar a un abogado, mirá cómo es por dentro. Te va a sacar el miedo."],
            ["Pregunta inducida", "¿Qué pasa después de que le contás a un abogado lo que te pasó?"],
            ["Contracorriente", "Todos se imaginan que al abogado se entra y no se sale nunca más. Te muestro cómo es."],
            ["Lista", "Los pasos, desde que nos escribís hasta que se termina."],
            ["Impacto visual", "[Sin hablar] Víctor pone sobre el escritorio seis post-its en fila, uno por paso, todavía en blanco."],
            ["Pregunta inducida", "¿Te da miedo no entender nada cuando vas al abogado?"],
            ["Advertencia", "Si estás por consultar a un abogado, guardá este video."],
            ["Vulnerabilidad", "Sé que ir al abogado da miedo. Por eso te muestro cómo es, paso a paso."],
            ["Secreto", "¿Qué hace un abogado con tu caso cuando vos no estás mirando?"],
            ["Lista", "Seis pasos. Desde que te sentás hasta que termina."],
            ["Impacto visual", "[Sin hablar] Una puerta que se abre. Adentro, el escritorio de Víctor, con un café servido para el que llega."],
            ["Advertencia", "Si vas a ir al abogado por primera vez, empezá por acá."],
            ["Secreto", "Todo lo que pasa después de que nos escribís. Todo."],
            ["Provocación", "Ir al abogado no tendría que dar miedo. Te muestro por qué."],
            ["Vulnerabilidad", "Mucha gente me dice que llegó con un nudo en la panza. Por eso hice este video.", "Solo si es real."],
            ["Error", "Muchos no consultan porque no saben qué pasa después. Acá está."]
          ],
          angulo: "El camino entero, de la primera charla al final, dicho con calma. Es el fijado «Cómo trabajamos»: más largo que los otros, porque el que llega al perfil quiere saber esto antes de escribir.",
          dur: "≈70 s",
          hook: { quien: "Víctor", dice: "Te voy a explicar qué pasa cuando nos confiás tu caso. Paso a paso, y sin palabras difíciles.", placa: "Qué pasa cuando nos confiás tu caso" },
          beats: [
            ["0:06", "V", "Antes de los pasos: qué se imagina la gente. Plano medio.", "La mayoría se imagina que entra, le llenan la mesa de papeles y sale sin entender nada. No es así."],
            ["0:12", "V", "Paso 1 · la primera charla. Primer plano.", "Primero, me contás lo que te pasó, con tus palabras. Traé los papeles que tengas, aunque te parezcan poca cosa. Y no hace falta que sepas de leyes."],
            ["0:22", "V", "Paso 2 · cómo está parado. Plano medio.", "Después te pregunto lo que haga falta, y te explico claro cómo estás parado y qué opciones tenés."],
            ["0:32", "V", "Paso 3 · antes de arrancar: cuándo se habla de los honorarios. Sin montos. Primer plano.", "Antes de arrancar, te digo cuánto sale y qué incluye. Así sabés desde el principio en qué te metés."],
            ["0:40", "V", "Paso 4 · qué camino se toma. Plano medio.", "Si se puede arreglar sin juicio, arrancamos por ahí: negociar, sentarse a acordar. Si no se puede, vamos a juicio, pero sabiendo por qué."],
            ["0:52", "V", "Paso 5 · mientras dura. Primer plano.", "Y mientras dura, en cada paso sabés en qué está lo tuyo. No te enterás por otro lado."],
            ["1:00", "V", "El remate: qué es y qué no es venir al estudio. Plano medio.", "Y consultar no te obliga a nada: después de la charla, decidís vos."]
          ],
          cta: "Si querés contarme lo tuyo, el WhatsApp está en el perfil.",
          confirmar: "¿Los pasos son así en tu estudio? Sobre todo el de los honorarios (si los decís antes de arrancar) y el cierre con el WhatsApp.",
          ojo: "Frases cortas y un plano distinto por paso: aunque sea largo, cada paso tiene que durar poco. Sin montos, plazos ni promesas de resultado."
        }
      ]
    }
  ]
};

window.GUIONES.ideas = {
  n: 4,
  titulo: "Ideas de otros formatos",
  resumen: "Tres formatos más para los próximos meses. Se toma la forma, no el tono. Marcá si lo harías",
  items: [
    {
      id: "DbQ_BeHBEOx", formato: "El ranking",
      cuenta: "Eder Salinas", datos: "finanzas personales, México",
      tags: ["Del 1 al 10", "Se arma en pantalla", "De pie, con saco"],
      mecanica: [
        "Anuncia un ranking y uno se queda hasta ver quién sale primero.",
        "Cada puesto entra con su logo y una palabra: se entiende sin audio.",
        "Con saco y en la calle se ve serio, y a la vez tiene movimiento."
      ],
      ideas: [
        "Ranking de lo que más expone tu casa cuando tenés un negocio: de lo que menos riesgo trae a lo que más.",
        "Ranking de los papeles que todo negocio debería tener firmados, del menos al más importante.",
        "Ranking de las excusas para no ordenar nada: «soy joven», «a mí no me va a pasar», «sale caro».",
        "Ranking de los peores errores al tener una empresa, del que menos cuesta al que más."
      ],
      pide: "Vos a cámara, de pie. Los íconos y los números se agregan en la edición."
    },
    {
      id: "DcuOzmjFBhd", formato: "Dos caminos",
      cuenta: "@estudiorossiyasociados", datos: "estudio jurídico, Argentina",
      tags: ["Lado a lado", "Mismo punto de partida", "Remate en placa"],
      mecanica: [
        "Dos personas arrancan igual y cada una elige distinto: uno mira para saber cómo termina cada una.",
        "Los carteles de arriba dicen qué eligió cada una: se entiende sin audio.",
        "Cierra con una placa que dice de qué se trataba en realidad."
      ],
      ideas: [
        "El que firmó con su socio y el que lo dejó de palabra: cinco años después.",
        "El que ordenó lo suyo cuando le iba bien, y el que esperó a tener deudas.",
        "El que se sentó a arreglar y el que fue directo a juicio: dónde está cada uno un año después.",
        "Situaciones en las que se puede evitar el juicio: el mismo problema, contado por los dos caminos."
      ],
      pide: "Dos personas en cuadro, o la misma dos veces armado en edición. Vos podés ser el que lo cuenta desde afuera. Es actuado: corto y sin exagerar."
    },
    {
      id: "DcPk7G7x2iT", formato: "Esto sí, esto no",
      cuenta: "@clemente.jimenez_", datos: "abogado, México",
      tags: ["Dos columnas", "Íconos que aparecen", "Sentado, suelto"],
      mecanica: [
        "Dos palabras opuestas arriba, y el que mira adivina de qué lado cae cada cosa.",
        "Los íconos aparecen de a uno mientras habla: tiene ritmo sin moverse de la silla.",
        "Mucho gesto y tono de charla: serio sin ser solemne."
      ],
      ideas: [
        "Lo que protege tu casa y lo que no: ponerla a nombre de tu pareja, pasársela a un hijo, separar el negocio de lo tuyo.",
        "Lo que conviene dejar firmado y lo que no hace falta cuando abrís un negocio con alguien.",
        "Lo que se puede arreglar antes de un juicio y lo que no."
      ],
      pide: "Vos sentado, como en el teleprompter. Los íconos van en la edición. Explica un poco más, así que sirve para gente que ya te vio alguna vez."
    }
  ]
};

window.GUIONES.fijados = {
  titulo: "Importante · los 3 videos fijados",
  resumen: "Van fijados arriba de todo en el perfil. Son para el que ya llegó a la cuenta y quiere saber quién sos antes de escribirte",
  items: [
    {
      n: "01", formato: "Quién soy",
      contesta: "¿Quién es? ¿En qué me puede ayudar?",
      ideas: [
        "Abogado y empresario: conocés las dos sillas del escritorio, la del abogado y la del que tiene algo que cuidar.",
        "En qué podés ayudar, contado como situaciones y no como áreas: si tenés un negocio, si querés proteger lo que juntaste, si tenés un problema y todavía no llegó a juicio.",
        "Termina mandando al segundo fijado."
      ],
      pide: "Sugerido: teleprompter, en tono de charla. Contanos qué empresas tenés (el rubro, sin nombres)."
    },
    {
      n: "02", formato: "Qué nos diferencia",
      contesta: "¿Por qué este estudio y no otro?",
      ideas: [
        "No decir «compromiso, experiencia, cercanía», que es lo que dice todo el mundo: contar cosas que hacés.",
        "Por ejemplo: si lo tuyo no es lo mío, te lo digo en la primera charla. Te digo lo que hay, aunque no sea lo que viniste a escuchar. Pienso en cómo vas a estar a largo plazo, no en ganar esta.",
        "Sin nombrar ni compararse con ningún otro estudio."
      ],
      pide: "Ya tiene guion: el 2E, en la fila de la falsa entrevista («Hay cientos de abogados: ¿por qué Solmi & Asociados?»)."
    },
    {
      n: "03", formato: "Cómo trabajamos",
      contesta: "¿Qué pasa si vengo con un problema?",
      ideas: [
        "El camino desde que alguien entra por la puerta: te cuenta con sus palabras, le explicás cómo está parado y qué opciones tiene, y si se puede arreglar sin juicio, se arranca por ahí.",
        "Remate: es una charla, no un trámite. Consultar no te obliga a nada.",
        "Es el único de los tres que invita a escribir."
      ],
      pide: "Ya tiene guion: el 3D, en la fila del teleprompter («Qué pasa cuando nos confiás tu caso, paso a paso»)."
    }
  ]
};

/* Perfil de Instagram de ejemplo. Sale de PERFIL-Y-CAPTIONS.md (bio y nombre) y de
   STORIES-Y-DESTACADAS.md (las cuatro destacadas y sus portadas). Todo se puede cambiar en la página. */
window.GUIONES.perfil = {
  titulo: "Así se vería el perfil",
  resumen: "Cuatro versiones para elegir. Tocá una arriba del panel de la derecha y después cambiale lo que quieras: se guarda solo",
  base: {
    usuario: "estudiosolmi",
    nombre: "Solmi & Asociados | Abogados",
    categoria: "Servicio legal",
    bio: "Víctor Solmi · abogado y empresario\nEmpresas, contratos y proteger lo tuyo ⚖️\nPriorizamos el acuerdo antes que el juicio\n📍 Mitre 2250, San Pedro",
    link: "estudiosolmi.com.ar",
    posts: "10", seguidores: "169", seguidos: "2",
    destacadas: [
      { nombre: "Áreas", letra: "A", fondo: "azul" },
      { nombre: "Estudio", letra: "E", fondo: "hueso" },
      { nombre: "Preguntas", letra: "P", fondo: "azul" },
      { nombre: "Consultar", letra: "C", fondo: "hueso" }
    ],
    fijados: ["Quién soy", "Qué nos diferencia", "Cómo trabajamos"]
  },
  notas: [
    "Hoy el perfil dice «SOLMI & Asociados | Estudio Jurídico» y, en la bio, solo «Estudio Jurídico · CABA, San Pedro y zona». No nombra nada que le pase a alguien.",
    "El nombre tiene un máximo de 30 caracteres y es lo que Instagram usa para buscar: por eso dice «Abogados». La bio, 150.",
    "La bio no invita a escribir todavía: falta saber si la primera consulta es paga y cuántas podés atender. El botón de WhatsApp alcanza.",
    "Las destacadas van con una letra grande, en azul y hueso alternados, hasta tener el logo en vectores. Adentro: tus áreas, dónde queda el estudio, las diez preguntas de tu web y cómo consultar.",
    "En la B el nombre pasa a ser el tuyo: sigue diciendo «Abogado», que es lo que busca la gente. El usuario no cambia en ninguna: la cuenta ya existe.",
    "Los tres de la grilla son los videos fijados: Instagram muestra primero el último que fijás, así que se fijan en orden 03, 02, 01."
  ]
};

/* Versiones del perfil para elegir. Cada una pisa sobre la base solo lo que cambia. */
window.GUIONES.perfil.versiones = [
  {
    "v": "A",
    "titulo": "El estudio",
    "porque": "La propuesta de hasta ahora: el estudio primero, las tres áreas y el acuerdo antes del juicio.",
    "datos": {}
  },
  {
    "v": "B",
    "titulo": "Víctor primero",
    "porque": "Lo que pediste en la reunión: humanizar la marca. El nombre es el tuyo y la bio habla como hablás vos.",
    "datos": {
      "nombre": "Víctor Solmi | Abogado",
      "categoria": "Abogado",
      "bio": "Abogado y empresario en San Pedro\n¿Un negocio, un socio, tu casa? Lo ordenamos antes\nSi hay un conflicto, primero busco el acuerdo\n📍 Mitre 2250",
      "destacadas": [
        {
          "nombre": "Quién soy",
          "letra": "V",
          "fondo": "azul"
        },
        {
          "nombre": "Qué hago",
          "letra": "Q",
          "fondo": "hueso"
        },
        {
          "nombre": "Preguntas",
          "letra": "P",
          "fondo": "azul"
        },
        {
          "nombre": "Escribime",
          "letra": "E",
          "fondo": "hueso"
        }
      ],
      "fijados": [
        "Quién soy",
        "Por qué yo",
        "Cómo trabajo"
      ]
    }
  },
  {
    "v": "C",
    "titulo": "Antes del juicio",
    "porque": "La frase de la propuesta arriba de todo: ordenar antes del conflicto, resolver antes del juicio.",
    "datos": {
      "bio": "Ordenar antes del conflicto.\nResolver antes del juicio.\nEmpresas · contratos · proteger tus bienes\nVíctor Solmi, abogado y empresario\n📍 San Pedro",
      "destacadas": [
        {
          "nombre": "Áreas",
          "letra": "A",
          "fondo": "azul"
        },
        {
          "nombre": "Antes del juicio",
          "letra": "J",
          "fondo": "hueso"
        },
        {
          "nombre": "Preguntas",
          "letra": "P",
          "fondo": "azul"
        },
        {
          "nombre": "Consultar",
          "letra": "C",
          "fondo": "hueso"
        }
      ]
    }
  },
  {
    "v": "D",
    "titulo": "El largo plazo",
    "porque": "Tu diferencial: la ética y mirar a futuro. Sale de Perfil y Fortuna y del guion de por qué elegirte.",
    "datos": {
      "bio": "Pensamos en cómo vas a estar más adelante, no solo en ganar esta\nAcuerdos antes que juicios\nEmpresas y proteger lo tuyo\n📍 San Pedro",
      "destacadas": [
        {
          "nombre": "El estudio",
          "letra": "E",
          "fondo": "azul"
        },
        {
          "nombre": "Cómo trabajamos",
          "letra": "T",
          "fondo": "hueso"
        },
        {
          "nombre": "Preguntas",
          "letra": "P",
          "fondo": "azul"
        },
        {
          "nombre": "Consultar",
          "letra": "C",
          "fondo": "hueso"
        }
      ]
    }
  }
];
