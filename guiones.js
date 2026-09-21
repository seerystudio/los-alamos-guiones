/* Guiones de etapa 1 · Solmi & Asociados (21/09/2026).
   E = pregunta de Emanuel (fija). V = respuesta de Víctor: casillero para que la escriba él.
   "ej" es solo una ayuda por si se traba; no es el guion. */
window.GUIONES = {
  titulo: "Trece preguntas. Las respuestas son tuyas.",
  intro: [
    "Estos son los primeros videos: tres formatos y tres temas —empresas, patrimonio y lo que se puede arreglar antes de un juicio—. Cada fila es un formato: a la izquierda, un video de ejemplo; a la derecha, sus guiones. Los marcados «Pregunta frecuente de tu web» salen de las preguntas de tu página: la respuesta ya es tuya, solo hay que decirla hablando. Debajo de cada arranque hay diez o más para elegir, cada uno con un gancho distinto; los marcados «De tu web» o «Tuya» salen de tu página y de la nota de Perfil y Fortuna. Si te gusta más alguno, tocá «Este».",
    "Las preguntas ya están. Lo que falta sos vos: en cada casillero escribí cómo lo dirías hablando, no como lo escribirías. Si te trabás, tocá «Ver un ejemplo».",
    "Más abajo está cómo se vería el perfil: nombre, bio y destacadas. Todo se puede cambiar.",
    "Lo que escribís se guarda solo en este dispositivo y en este navegador. Cuando termines, tocá «Enviar» arriba y mandalo por WhatsApp. Si vas a tardar varios días, bajate un respaldo desde «Enviar»: algunos celulares borran lo guardado de las páginas que no se abren por una semana."
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
          hooks: [["Pregunta inducida", "Víctor, ¿por qué nadie entiende qué hace un abogado hasta el día que lo necesita?"], ["Contracorriente", "Víctor, siempre pensé que a un abogado se lo llama cuando ya hay lío. ¿Es así?"], ["Provocación", "Víctor, te lo digo en serio: no tengo idea de qué hace un abogado. ¿Me lo explicás como si tuviera diez años?"], ["Lista", "Víctor, explicame a qué te dedicás, pero con tres ejemplos de la vida real."], ["Contraste", "Víctor, ¿vos sos de los abogados que pelean o de los que arreglan?"], ["Secreto", "Víctor, ¿qué hace un abogado que casi nadie sabe que hace?"], ["Advertencia", "Víctor, ¿qué me puede pasar si en toda mi vida no hablo nunca con un abogado?"], ["Impacto visual", "[Sin hablar] Emanuel deja sobre el escritorio un contrato, una escritura y las llaves de una casa. «Víctor, ¿con cuál de estos me ayudás vos?»"], ["Promesa con tiempo", "Víctor, ¿me explicás en un minuto a qué te dedicás?"], ["Vulnerabilidad", "Víctor, te confieso algo: cada vez que escucho «abogado» pienso en problemas. ¿Me convencés de lo contrario?"], ["De tu web", "Víctor, en tu página dice que el derecho es «una herramienta de creación». ¿Eso qué quiere decir, en criollo?", "La frase es de tu web. Si la elegís, la respuesta tiene que llegar a las mismas tres situaciones."]],
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
          hooks: [["Contracorriente", "Víctor, todos dicen que lo del negocio es del negocio y lo de la casa es de la casa. ¿Es así?"], ["Pregunta inducida", "Víctor, ¿por qué hay gente que se funde con el negocio y pierde también la casa?"], ["Advertencia", "Víctor, tengo un negocio y la casa a mi nombre. ¿Me tengo que preocupar?"], ["Secreto", "Víctor, ¿qué es lo que casi nadie sabe cuando abre un negocio con la casa a su nombre?"], ["Error", "Víctor, ¿cuál es el error que pone en riesgo la casa del que tiene un negocio?"], ["Contraste", "Víctor, ¿qué diferencia al negocio que se funde solo del que se lleva la casa puesta?"], ["Impacto visual", "[Sin hablar] Emanuel deja sobre el escritorio las llaves del local y las de su casa, en el mismo llavero. «Víctor, ¿esto va junto o separado?»"], ["Predicción", "Víctor, si dentro de dos años al negocio le va mal, ¿qué pasa con mi casa?"], ["Provocación", "Víctor, ¿es verdad que un negocio te puede costar la casa?"], ["Vulnerabilidad", "Víctor, abrí un negocio y todo está a mi nombre. ¿Hice mal?", "Solo si es real."]],
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
          hooks: [["Contracorriente", "Víctor, siempre escuché que si hay pelea, termina en juicio. ¿Es así?"], ["Secreto", "Víctor, ¿qué pasa antes de un juicio que en las películas nunca te muestran?"], ["Pregunta inducida", "Víctor, ¿por qué dos personas que no se hablan se sentarían en la misma mesa?"], ["Contraste", "Víctor, ¿qué conviene: arreglarlo sentados en una mesa o que lo decida un juez?"], ["Advertencia", "Víctor, si estoy peleado con mi socio y voy directo a juicio, ¿qué me estoy perdiendo?"], ["Impacto visual", "[Sin hablar] Una mesa, dos sillas enfrentadas y una en la punta. «Víctor, ¿para qué es esta mesa?»"], ["Predicción", "Víctor, si me peleo con mi vecino y lo llevo a juicio, ¿cómo quedamos después, viviendo al lado?"], ["Vulnerabilidad", "Víctor, estoy peleado con alguien y no quiero ir a juicio. ¿Hay otra salida?"], ["Transformación", "Víctor, ¿es verdad que dos personas pueden entrar peleadas a una mesa y salir con un acuerdo?"], ["Provocación", "Víctor, ¿no es más fácil ir a juicio y que un juez diga quién tiene razón?"]],
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
          hooks: [["Vulnerabilidad", "Perdón, es la primera vez que vengo a un abogado. Estoy un poco nervioso."], ["Pregunta inducida", "¿Por qué me da más miedo venir al abogado que el problema que tengo?"], ["Contracorriente", "Vengo a preguntar nomás, ¿eh? No le quiero hacer juicio a nadie."], ["Impacto visual", "[Sin hablar] Emanuel entra con una carpeta llena de papeles y la deja caer sobre el escritorio. «Traje todo… creo.»"], ["Provocación", "Te aviso: no entiendo nada de leyes y no pienso hacer como que entiendo."], ["Contraste", "¿Esto es una charla o ya es un trámite?"], ["Duda real", "No sé si lo mío es civil, comercial o qué. ¿Igual me atendés?", "Sale de tu web: «no hace falta que lo sepas de antemano»."], ["Error", "Me dijeron que no venga sin saber qué pedir. ¿Hice mal en venir?"], ["Transformación", "Entré sin saber qué hacer. Vamos a ver cómo salgo."], ["Advertencia", "Antes de sentarme: si me siento acá, ¿ya estoy firmando algo?"], ["De tu web", "Nunca fui a un abogado. ¿Cómo sé si ya es momento de venir?", "Es la primera pregunta de tu web. Tu respuesta: «apenas aparece la duda, no cuando el problema ya escaló»."]],
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
          hooks: [["Contracorriente", "Víctor, dicen que entre amigos no hace falta firmar nada. ¿Estás de acuerdo?"], ["Pregunta inducida", "Víctor, ¿por qué tantos negocios que arrancan entre amigos terminan mal?"], ["Secreto", "Víctor, ¿qué es lo que un abogado ve venir en un negocio y el dueño no?"], ["Advertencia", "Víctor, si tengo un negocio y hoy me va bien, ¿de qué me tendría que cuidar?"], ["Vulnerabilidad", "Víctor, ¿cuál fue el error que más te costó como empresario?", "Solo si es real. Es la anécdota del guion, pero puesta al principio."], ["Contraste", "Víctor, ¿qué es peor para un negocio: un mal socio, o un buen socio sin nada firmado?"], ["Provocación", "Víctor, ¿firmar un papel con tu socio es desconfiar de él?"], ["Predicción", "Víctor, si abro un negocio con un amigo, ¿qué va a pasar dentro de cinco años?"], ["Impacto visual", "[Sin hablar] Dos manos que se estrechan, como cerrando un trato. «Víctor, ¿esto alcanza para arrancar un negocio?»"], ["Promesa con tiempo", "Víctor, si hoy abro un negocio, ¿qué hago la primera semana para no arrepentirme?"], ["Tuya, de Perfil y Fortuna", "Víctor, una vez dijiste que es imposible que uno sea especialista en todo. ¿Eso también vale para el que tiene un negocio?", "La frase es tuya (Perfil y Fortuna). Llevala al error de hacer todo solo y de palabra."]],
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
          hooks: [["Contracorriente", "Víctor, ¿ordenar lo que tenés es cosa de ricos?"], ["Pregunta inducida", "Víctor, ¿por qué el que está arrancando es el que menos cuida lo que tiene?"], ["Error", "Víctor, ¿cuál es el error del que recién empieza a tener cosas a su nombre?"], ["Lista", "Víctor, nombrame tres decisiones que tendría que tomar hoy alguien que recién está armando lo suyo."], ["Advertencia", "Víctor, si mañana me pasa algo, ¿qué pasa con lo que tengo?"], ["Contraste", "Víctor, ¿qué va primero: hacer crecer lo que tenés u ordenarlo?"], ["Secreto", "Víctor, ¿qué sabe el que ya tiene algo armado que el que está empezando todavía no?"], ["Transformación", "Víctor, ¿qué cambia cuando pasás de tener un sueldo a tener algo propio?"], ["Predicción", "Víctor, lo que hoy estoy armando, ¿a nombre de quién va a estar dentro de diez años?"], ["Impacto visual", "[Sin hablar] Emanuel deja sobre el escritorio las llaves de una casa, de un auto y de un local. «Víctor, ¿qué tengo que ordenar de todo esto?»"], ["La versión anterior", "Víctor, ¿qué frase escuchás más cuando alguien quiere armar su patrimonio?", "Era la pregunta original. «Patrimonio» es palabra de abogado: la gente dice «lo mío», «lo que tengo»."]],
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
          hooks: [["Contracorriente", "Víctor, ¿a un abogado no le conviene que hagas juicio?"], ["Pregunta inducida", "Víctor, ¿cómo puede ser que ganar un juicio no siempre sea ganar?"], ["Secreto", "Víctor, ¿qué cuesta un juicio que nadie te dice cuando lo empezás?"], ["Contraste", "Víctor, ¿qué conviene más: ganar un juicio o arreglar?"], ["Advertencia", "Víctor, si voy a juicio por bronca, ¿qué me puede salir mal?"], ["Caso real", "Víctor, ¿alguna vez le dijiste a alguien «no vayas a juicio» y te hizo caso?", "Solo si es real. Sin nombres."], ["Predicción", "Víctor, si hoy le hago juicio a alguien que conozco, ¿cómo va a estar esa relación cuando termine?"], ["Error", "Víctor, ¿cuál es el error del que va a juicio con ganas de «ganarle» al otro?"], ["Impacto visual", "[Sin hablar] Emanuel apoya sobre el escritorio una carpeta gorda, llena de fojas. Víctor la cierra y la corre para un costado. «¿Por qué?»"], ["Provocación", "Víctor, arreglar ¿no es perder?"], ["Tuya, de Perfil y Fortuna", "Víctor, vos siempre decís que hay que mirar a largo plazo. ¿Un juicio es mirar a largo plazo?", "La frase es tuya: «Siempre hay que mirar a futuro, a largo plazo»."]],
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
          hooks: [["Contracorriente", "Víctor, todo el mundo dice que si llamás a un abogado, terminás en juicio. ¿Es así?"], ["Pregunta inducida", "Víctor, ¿por qué a la gente le da tanto miedo llamar a un abogado?"], ["Secreto", "Víctor, ¿qué es lo que casi nadie sabe cuando tiene un problema legal?"], ["Advertencia", "Víctor, si tengo un problema con alguien, ¿estoy condenado a años de juicio?"], ["Contraste", "Víctor, ¿juicio o acuerdo: quién decide eso?"], ["Impacto visual", "[Sin hablar] Emanuel apila carpetas y más carpetas sobre el escritorio. «Víctor, ¿todo termina así?»"], ["Provocación", "Víctor, ¿un abogado siempre te va a mandar a juicio?"], ["Error", "Víctor, ¿cuál es el error que comete casi todo el que tiene un problema legal?"], ["Vulnerabilidad", "Víctor, tengo un problema y no llamo a nadie porque no quiero un juicio. ¿Estoy haciendo mal?"], ["Lista", "Víctor, ¿cuántos caminos hay cuando tenés un problema legal?"]],
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
          hooks: [["Contracorriente", "Víctor, dicen que todos los abogados son iguales. ¿Es así?"], ["Pregunta inducida", "Víctor, ¿cómo elige un abogado alguien que nunca tuvo uno?"], ["Provocación", "Víctor, convenceme: ¿por qué vendría acá y no a otro estudio?"], ["Secreto", "Víctor, ¿qué no sabe la gente de un estudio hasta que se sienta en el escritorio?"], ["Contraste", "Víctor, ¿qué te hace distinto: lo que decís o lo que hacés?"], ["Error", "Víctor, ¿cuál es el error más común al elegir un abogado?"], ["Vulnerabilidad", "Víctor, te soy sincero: a los abogados les tengo desconfianza. ¿Por qué confiaría en vos?", "Solo si es real."], ["Impacto visual", "[Sin hablar] Emanuel pasa el dedo por una lista larguísima de estudios en el celular y lo deja sobre el escritorio. «Víctor, ¿por qué ustedes?»"], ["Promesa con tiempo", "Víctor, tenés treinta segundos para decirme por qué elegirte."], ["Predicción", "Víctor, si hoy te elijo a vos, ¿qué es lo primero que va a pasar?", "Cambiada: la anterior preguntaba «¿cómo voy a estar dentro de cinco años?», y contestarla es prometer un resultado."], ["Tuya, de Perfil y Fortuna", "Víctor, ¿qué quiere decir «el que bien anda, bien acaba»?", "La frase es tuya. Si la elegís, el remate del guion cambia: ya no puede cerrar con la misma frase."]],
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
          hooks: [["Contracorriente", "Las empresas familiares que llegan a los nietos no tienen más plata que las otras. Tienen otra cosa."], ["Pregunta inducida", "¿Por qué hay empresas familiares que llegan a los nietos, y otras que no pasan de los hijos?"], ["Error", "El error que cometen casi todas las empresas familiares, y que se nota recién cuando cambia de manos."], ["Secreto", "Lo que tienen las empresas familiares que duran, y que desde afuera no se ve."], ["Advertencia", "Si en tu empresa familiar deciden todos, tenemos un problema."], ["Contraste", "Hay empresas familiares que llegan a los nietos y otras que se terminan con los hijos. La diferencia no es la plata."], ["Provocación", "Tu empresa familiar no la va a heredar tu nieto. Va a heredar otra cosa."], ["Predicción", "Pensá en tu empresa dentro de treinta años. ¿Quién está sentado en tu silla?"], ["Impacto visual", "[Sin hablar] Una foto vieja de un negocio familiar, en blanco y negro. Víctor la deja sobre el escritorio: «¿Por qué hay empresas que llegan hasta acá?»"], ["Transformación", "De un abuelo con un almacén a nietos con una empresa. En el medio hicieron tres cosas."]],
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
          hooks: [["Contracorriente", "Poner la casa a nombre de tu pareja no la protege. Y no es lo único que la gente hace mal."], ["Pregunta inducida", "¿Por qué hay gente que hizo de todo para proteger su casa y la tiene igual de expuesta?"], ["Error", "El error que comete casi todo el que quiere proteger su casa. Y es un clásico."], ["Secreto", "Lo que casi nadie sabe cuando pone su casa a nombre de otro."], ["Advertencia", "Si alguna vez pensaste «la pongo a nombre de mi mujer y listo», mirá esto."], ["Lista", "La casa a nombre de tu mujer, a nombre de un hijo, o «después lo veo». Ninguna la protege."], ["Contraste", "Hay gente que protegió su casa y gente que cree que la protegió. La diferencia está en estas tres cosas."], ["Impacto visual", "[Sin hablar] Víctor tiene las llaves de una casa y se las pasa a una mano que entra en cuadro. «Esto no es proteger tu casa.»"], ["Provocación", "Tu casa no está protegida porque la pusiste a nombre de otro. Está en otro lado, nomás."], ["Vulnerabilidad", "Mucha gente que se sienta en este escritorio ya hizo alguna de estas tres. Tranquilo: se puede ordenar."]],
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
          hooks: [["Contracorriente", "Todos creen que en una mediación se discute plata. Casi nunca es eso."], ["Pregunta inducida", "¿Por qué dos personas que no se hablan hace años terminan arreglando en una mesa?"], ["Impacto visual", "[Sin hablar] Dos sillas enfrentadas, una mesa y dos vasos de agua sin tocar. Víctor se sienta: «Acá pasan cosas que nadie cuenta.»"], ["Contraste", "Lo que ves sentado en una mediación no se parece en nada a lo que muestran las películas."], ["Secreto", "Hay una palabra que en una mediación vale más que cualquier número. Te cuento cuál."], ["Error", "El error de casi todos los que llegan a una mediación. Y no tiene nada que ver con la ley."], ["Advertencia", "Si te toca sentarte en una mediación, hay tres cosas que te conviene saber antes."], ["Provocación", "El que más grita en una mesa no siempre es el que tiene razón. Ni el que menos quiere arreglar."], ["Transformación", "Entran sin mirarse. Salen dándose la mano. Esto es lo que pasa en el medio."], ["Número específico", "Hace [X] años que me siento en mesas de mediación. Estas son tres cosas que vi.", "Poné tus años reales."]],
          angulo: "Lo humano de esa mesa, contado desde tu silla.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "En las películas, una pelea legal es gritos y un juez. Sentado en una mediación, se ve otra cosa." },
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
          hooks: [["Promesa con tiempo", "Te explico en 90 segundos el paso a paso de cuando trabajás con el estudio."], ["Contracorriente", "Ir al abogado no es meterse en un trámite. Te muestro cómo es de verdad."], ["Pregunta inducida", "¿Por qué a tanta gente le da miedo llamar a un abogado? Porque no sabe qué pasa después."], ["Secreto", "Lo que pasa del otro lado del escritorio cuando nos contás tu caso."], ["Vulnerabilidad", "Si nunca fuiste a un abogado y te da un poco de miedo, este video es para vos."], ["Contraste", "Lo que te imaginás que pasa cuando vas al abogado, y lo que pasa en realidad."], ["Impacto visual", "[Sin hablar] Víctor abre una carpeta vacía sobre el escritorio y escribe en la tapa «Tu caso». «Te cuento qué pasa desde acá.»"], ["Transformación", "Entrás sin saber cómo estás parado. Salís sabiendo qué opciones tenés. Así es el camino."], ["Error", "El error de casi todos antes de consultar: creer que tienen que llegar con todo resuelto."], ["Provocación", "No necesitás saber de leyes para venir. Para eso estoy yo."], ["De tu web", "¿Cuándo es momento de ir a un abogado? Apenas aparece la duda. Y esto es lo que pasa cuando venís.", "La primera mitad es textual de tu web."]],
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
  resumen: "Nombre, bio y destacadas. Tocá cualquier cosa del panel de la derecha y cambiá lo que quieras: se guarda en este dispositivo",
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
    "Los tres de la grilla son los videos fijados: Instagram muestra primero el último que fijás, así que se fijan en orden 03, 02, 01."
  ]
};
