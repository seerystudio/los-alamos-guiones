/* Guiones de etapa 1 · Solmi & Asociados (21/09/2026).
   E = pregunta de Emanuel (fija). V = respuesta de Víctor: casillero para que la escriba él.
   "ej" es solo una ayuda por si se traba; no es el guion. */
window.GUIONES = {
  titulo: "Nueve preguntas. Las respuestas son tuyas.",
  intro: [
    "Estos son los primeros videos: tres formatos y tres temas —empresas, patrimonio y lo que se puede arreglar antes de un juicio—. Cada fila es un formato: a la izquierda, un video de ejemplo; a la derecha, tres guiones.",
    "Las preguntas ya están. Lo que falta sos vos: en cada casillero escribí cómo lo dirías hablando, no como lo escribirías. Si te trabás, tocá «Ver un ejemplo».",
    "Lo que escribís se guarda en este dispositivo. Cuando termines, tocá «Enviar» arriba y mandalas por WhatsApp."
  ],
  reglas: [
    "Estos videos son para gente que todavía no te conoce: no hace falta explicar leyes, contá lo que ves en tu escritorio.",
    "Sin nombres ni casos que se puedan reconocer.",
    "Sin comparaciones con otros estudios y sin prometer resultados.",
    "Cada video dura entre 30 y 40 segundos: frases cortas, como en una charla.",
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
          angulo: "Contestás con tres situaciones de la vida real, no con nombres de áreas.",
          dur: "≈40 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿me podés explicar fácil a qué te dedicás? Para que gente común como yo entienda.", placa: "POV: le pedís a un abogado que te explique a qué se dedica. Fácil.", plano: "Vos del otro lado del escritorio, mirando a cámara." },
          beats: [
            ["0:05", "V", "Una frase corta que prometa explicarlo simple.", "Te lo explico con tres situaciones."],
            ["0:08", "V", "Situación 1 · un negocio con alguien. Qué hacés vos ahí.", "Abrís un negocio con un amigo. Todo bien. Yo me ocupo de que quede escrito qué pasa el día que no esté todo bien."],
            ["0:15", "V", "Situación 2 · una casa, un terreno y los hijos.", "Tenés una casa, un terreno, y tenés hijos. Me ocupo de que el día de mañana eso no sea el motivo por el que dejan de hablarse."],
            ["0:23", "V", "Situación 3 · un problema que todavía no llegó a juicio.", "Y si ya tenés un problema con alguien, antes de ir a juicio nos sentamos a ver si se puede arreglar."],
            ["0:30", "E", "¿O sea que sos un abogado que no pelea?"],
            ["0:33", "V", "Una sola frase que resuma cómo trabajás. Es la que se va a recordar.", "Soy un abogado que prefiere que no haga falta."]
          ],
          cta: "Sin pedido: es la presentación. Termina con tu nombre y San Pedro en pantalla.",
          ojo: "Evitá los nombres de las áreas («planificación patrimonial», «derecho comercial»): el que te ve por primera vez no habla así."
        },
        {
          v: "B", tipo: "Patrimonio",
          titulo: "¿Por qué los hijos se pelean por los terrenos?",
          angulo: "Entra por una escena que todos vieron alguna vez y termina en lo que se puede ordenar antes.",
          dur: "≈35 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿por qué cuando hay una herencia los hijos se viven peleando por los terrenos?", placa: "POV: le preguntás a un abogado por qué los hermanos se pelean por los terrenos", plano: "Vos del otro lado del escritorio, mirando a cámara." },
          beats: [
            ["0:04", "V", "¿Es por la plata o por otra cosa? Contalo como lo ves vos.", "¿Querés que te diga la verdad? Casi nunca es por la plata."],
            ["0:08", "V", "Qué tiene un terreno que no tiene la plata. Una imagen concreta.", "Un terreno no se parte como una torta. Uno lo quiere vender, otro quiere quedarse, y otro dice «ahí está papá»."],
            ["0:16", "V", "El porqué de fondo, en una frase.", "Y como nadie dejó dicho qué quería, cada uno está seguro de que lo sabe."],
            ["0:21", "E", "¿Y quién tiene razón?"],
            ["0:23", "V", "Tu respuesta, llevándola a lo que se puede hacer antes.", "Todos un poco. Por eso conviene hablarlo y dejarlo escrito mientras el que tiene el terreno todavía puede decirlo."]
          ],
          cta: "Si tenés un terreno y más de un hijo, mandáselo a ellos. Es una forma de empezar la charla.",
          ojo: "Que no se quede en la pelea: el video termina en lo que se puede ordenar antes."
        },
        {
          v: "C", tipo: "Antes del juicio",
          titulo: "¿Una pelea se puede arreglar antes del juicio?",
          angulo: "Contás cómo es esa mesa, como una escena, sin explicar el trámite.",
          dur: "≈35 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿es verdad que una pelea se puede arreglar antes de llegar a un juicio?", placa: "POV: le preguntás a un abogado si una pelea se puede arreglar sin juicio", plano: "Vos del otro lado del escritorio, mirando a cámara." },
          beats: [
            ["0:04", "V", "Sí o no, y prometé contar cómo es.", "Sí. Y te cuento cómo es, porque no es como en las películas."],
            ["0:08", "V", "Cómo es esa primera mesa, contada como una escena.", "Te sentás en una mesa con la otra persona, y alguien en el medio que ordena la charla. Al principio nadie se mira."],
            ["0:13", "V", "Qué tiene esa mesa que no tiene un juicio.", "Pero ahí pasa algo que en un juicio no pasa: el que decide todavía sos vos, no un juez."],
            ["0:20", "E", "¿Y si no se arregla?"],
            ["0:22", "V", "Qué pasa si no se arregla, sin plazos ni pasos.", "Entonces está el juicio. Pero antes lo intentaste con las dos manos."]
          ],
          cta: "¿Conocés a alguien peleado con un socio, un vecino o un inquilino? Mandáselo.",
          confirmar: "¿Se puede decir así: que en la mediación deciden las partes y en el juicio decide el juez?",
          ojo: "No expliques el trámite (plazos, pasos, costos): al que te ve por primera vez le alcanza con saber que existe."
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
        "Parece una entrevista en un medio sin necesitar un medio: suma prestigio.",
        "Las preguntas son sobre vos y tu oficio, no sobre la ley: es lo que humaniza.",
        "Corte seco entre pregunta y respuesta: el ritmo lo da la conversación."
      ],
      guiones: [
        {
          v: "A", tipo: "Empresas",
          titulo: "El error que más ves en los que tienen un negocio",
          angulo: "Desde tu lugar de empresario y abogado, el error de todos los días.",
          dur: "≈40 s",
          hook: { quien: "Emanuel", dice: "Víctor, vos que sos empresario y abogado: ¿cuál es el error que más ves en los que tienen un negocio?", placa: "El error que más veo en los que tienen un negocio", plano: "Vos de costado al escritorio o de pie junto al mapa, mirando a Emanuel." },
          beats: [
            ["0:05", "V", "El error, en pocas palabras. Sin dudar.", "Que todo está de palabra."],
            ["0:08", "V", "Con quién pasa, y por qué la gente lo hace igual.", "Con el socio, con el proveedor, con el que te alquila el local. Mientras anda bien, nadie quiere firmar nada, para no quedar como desconfiado."],
            ["0:16", "V", "Cuándo se nota el problema.", "El problema es que lo de palabra se recuerda distinto el día que las cosas andan mal."],
            ["0:21", "E", "¿A vos te pasó?"],
            ["0:23", "V", "Una anécdota tuya como empresario, en una o dos frases. Sin nombres.", "Esta es tuya: algo que no dejaste escrito y te costó. Si no tenés una, se saca la pregunta."],
            ["0:31", "V", "Una frase para cerrar.", "Escribirlo no es desconfiar. Es que dentro de cinco años los dos se acuerden de lo mismo."]
          ],
          cta: "Mandáselo a tu socio."
        },
        {
          v: "B", tipo: "Patrimonio",
          titulo: "La frase del que está armando su patrimonio",
          angulo: "Entra por lo que la gente quiere lograr, no por un problema.",
          dur: "≈35 s",
          hook: { quien: "Emanuel", dice: "Víctor, ¿qué frase escuchás más cuando alguien quiere armar su patrimonio?", placa: "La frase que más escucho del que está armando su patrimonio", plano: "Vos de costado al escritorio o de pie junto al mapa, mirando a Emanuel." },
          beats: [
            ["0:04", "V", "La frase, entre comillas, como te la dicen.", "«Primero lo hago crecer, después lo ordeno.»"],
            ["0:08", "V", "Por qué es lógico que lo piensen.", "Y es lógico: cuando estás arrancando, lo último que querés es un papel más."],
            ["0:13", "V", "Qué le dirías vos.", "Pero el orden no es lo que viene después de armar. Es parte de armar."],
            ["0:18", "E", "¿Por ejemplo?"],
            ["0:20", "V", "Dos o tres decisiones concretas, solo nombradas, sin explicar cómo se hacen.", "A nombre de quién ponés la casa. Si el negocio está separado de lo tuyo. Qué pasa si mañana te pasa algo. Son decisiones de hoy."]
          ],
          cta: "Mandáselo a alguien que esté arrancando.",
          ojo: "Sin hablar de inversiones ni de rendimientos: el video es sobre cuidar lo que se arma."
        },
        {
          v: "C", tipo: "Antes del juicio",
          titulo: "¿Por qué un abogado te diría que no hagas juicio?",
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
        }
      ]
    },
    {
      n: 3, id: "DbJtxojRE86",
      formato: "Lista de tres",
      resumen: "Vos solo a cámara. Tres puntos cortos, con un cambio de plano en cada uno",
      cuenta: "", datos: "estudio jurídico · «5 cosas que nunca haría después de un accidente»",
      tags: ["El número en el título", "Una frase por punto", "Cambio de plano"],
      mecanica: [
        "El número en el título abre una cuenta: uno se queda para llegar al tercero.",
        "Cada punto es una frase, sin desarrollo: entra en 30 segundos.",
        "Un plano distinto en cada punto (escritorio, de pie, un detalle) le da movimiento sin perder seriedad."
      ],
      guiones: [
        {
          v: "A", tipo: "Empresas",
          titulo: "3 cosas de las empresas familiares que llegan a los nietos",
          angulo: "Lo que tienen las que duran: entra por lo que se quiere lograr.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "Las empresas familiares que llegan a los nietos tienen tres cosas en común. Por lo menos, las que yo veo.", placa: "3 cosas que tienen las empresas familiares que llegan a los nietos", plano: "Escritorio, a cámara." },
          beats: [
            ["0:05", "V", "Cosa 1 · en una frase. Plano: de pie, junto al mapa.", "Los hermanos saben quién decide. No mandan todos."],
            ["0:11", "V", "Cosa 2 · en una frase. Plano: detalle de las manos sobre la mesa.", "Lo hablaron con la mesa puesta. No en el velorio."],
            ["0:17", "V", "Cosa 3 · en una frase. Plano: escritorio, más cerrado.", "Lo dejaron escrito. De palabra no llega a los nietos."],
            ["0:23", "V", "Una frase que junte las tres.", "Los nietos no heredan la empresa. Heredan cómo se hablaba en esa mesa."]
          ],
          cta: "Si tenés una empresa familiar, mandáselo a la familia.",
          ojo: "Que sean las tres que ves vos. Sin porcentajes de cuántas empresas sobreviven: circulan muchos y ninguno tiene fuente."
        },
        {
          v: "B", tipo: "Patrimonio",
          titulo: "3 frases que escucho antes de que una familia se pelee",
          angulo: "Tres frases que cualquiera dijo en su casa, y lo que pasa después.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "Hay tres frases que escucho siempre antes de que una familia se pelee por una herencia.", placa: "3 frases que escucho antes de que una familia se pelee por una herencia", plano: "Escritorio, a cámara." },
          beats: [
            ["0:04", "V", "Frase 1, y qué pasa después. Plano: de pie, junto al mapa.", "«Mis hijos se llevan bien.» Y es verdad. Hasta que hay que decidir quién se queda con qué."],
            ["0:10", "V", "Frase 2, y qué pasa después. Plano: detalle de la mesa.", "«Ya les dije lo que quiero.» Lo que dijiste en una sobremesa, cada uno lo recuerda a su manera."],
            ["0:16", "V", "Frase 3, y qué pasa después. Plano: escritorio, más cerrado.", "«Eso lo vemos después.» El después llega justo cuando ya no podés decidir vos."],
            ["0:22", "V", "Qué tienen en común las tres.", "Las tres son frases de cariño. Por eso nadie las ve venir."]
          ],
          cta: "Si escuchaste alguna en tu casa, mandáselo a tu familia."
        },
        {
          v: "C", tipo: "Antes del juicio",
          titulo: "3 cosas que ves en una mediación y nadie te cuenta",
          angulo: "Lo humano de esa mesa, desde tu silla.",
          dur: "≈30 s",
          hook: { quien: "Víctor", dice: "Tres cosas que ves sentado en una mediación, y nadie te cuenta.", placa: "3 cosas que ves en una mediación y nadie te cuenta", plano: "Escritorio, a cámara." },
          beats: [
            ["0:04", "V", "Cosa 1. Plano: de pie, junto al mapa.", "Se habla mucho más de lo que pasó que de la plata."],
            ["0:09", "V", "Cosa 2. Plano: dos sillas vacías, frente a frente.", "El que más grita no siempre es el que menos quiere arreglar."],
            ["0:15", "V", "Cosa 3. Plano: escritorio, más cerrado.", "A veces lo que destraba todo no es un número. Es una disculpa."],
            ["0:21", "V", "Qué dejan ver las tres.", "Lo que traba casi nunca es lo que se reclama."]
          ],
          cta: "¿Conocés a alguien que esté por ir a una? Mandáselo.",
          ojo: "Ningún caso que se pueda reconocer: ni tipo de conflicto, ni barrio, ni montos."
        }
      ]
    }
  ]
};
