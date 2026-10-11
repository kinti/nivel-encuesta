// Ítems de la encuesta. Los REALES provienen del corpus Menéame (CC BY 4.0):
// Rodrigo-Ginés et al., Meneame Media Bias Interaction dataset, Zenodo 19182446.
// Los de práctica están INVENTADOS y etiquetados como tales.
// Las etiquetas de sesgo del corpus NO se incluyen (ceguera del anotador).
const ITEMS = [
 {
  "id": "p1",
  "tipo": "practica",
  "titular": "El Gobierno aprueba el nuevo horario de las bibliotecas públicas",
  "extracto": "El Consejo de Gobierno aprobó ayer el nuevo horario, según anunció la portavoz en la rueda de prensa posterior.",
  "medio": "práctica",
  "anio": 2026
 },
 {
  "id": "p2",
  "tipo": "practica",
  "titular": "Caos y desgobierno: la ciudad navega a la deriva",
  "extracto": "La ciudad vive sus horas más tristes ante la pasividad de quien manda y no gobierna.",
  "medio": "práctica",
  "anio": 2026
 },
 {
  "id": "p3",
  "tipo": "practica",
  "titular": "Podría haber pacto entre los partidos antes del viernes",
  "extracto": "Todo apunta a que podría alcanzarse un acuerdo en las próximas horas, según se rumorea en los pasillos.",
  "medio": "práctica",
  "anio": 2026
 },
 {
  "id": "m0409594c",
  "tipo": "real",
  "titular": "Llamazares a la Iglesia: \"Abortar es un derecho, lo diga Agamenón o su porquero\"",
  "extracto": "Llamazares se pronunció en estos términos tras conocer el comunicado de la Conferencia Episcopal, en el que asegura que ningún católico coherente con su fe podrá aprobar ni dar su voto a la futura Ley de Salud Sexual y R...",
  "medio": "publico.es",
  "anio": 2009
 },
 {
  "id": "m31902cd0",
  "tipo": "real",
  "titular": "Una joven vende por redes sociales las cebollas de su abuelo después de que el comprador les dejara plantados",
  "extracto": "El jueves, cuando los 4000kg de cebollas estaban listos para recoger, el comprador le comentó que ya no las quería. Tras meses de trabajo cultivándolas, el agricultor veía como se iban a echar a perder todas.",
  "medio": "niusdiario.es",
  "anio": 2021
 },
 {
  "id": "m644a78f3",
  "tipo": "real",
  "titular": "Texas ejecutará al preso 403 solo porque fue testigo de un asesinato",
  "extracto": "El pasado 22 de agosto Texas ejecutó al reo 400. El número 403 es Kenneth Foster y será ajusticiado dentro de cuatro días por estar en el lugar equivocado en el momento equivocado: fue condenado a muerte por ver cómo un ...",
  "medio": "adn.es",
  "anio": 2007
 },
 {
  "id": "m19e2ac60",
  "tipo": "real",
  "titular": "Al borde del estallido: Madrid 25s-29s. Documental",
  "extracto": "El pasado martes 25 de septiembre decenas de miles de personas se reunieron para rodear el Congreso de los Diputados con la intención de pedir su dimisión.",
  "medio": "pulsociudadano.com",
  "anio": 2012
 },
 {
  "id": "m95895db0",
  "tipo": "real",
  "titular": "Sentencia que condena a Blas por calumnias al rey Jacobo, doña Adela y la infanta Claudia",
  "extracto": "Sentencia \"anonimizada\" de la Audiencia Nacional por calumnias e injurias a la Corona \"contra Blas, nacido en 1993 en Sineu\".",
  "medio": "poderjudicial.es",
  "anio": 2018
 },
 {
  "id": "mfdfad872",
  "tipo": "real",
  "titular": "Los mejores juegos gratis disponibles para jugar en esta cuarentena",
  "extracto": "Te traemos un listado completo con los mejores juegos gratis disponibles para jugar en esta cuarentena del COVID-19, ordenados por las plataformas para las que están disponibles.",
  "medio": "xataka.com",
  "anio": 2020
 },
 {
  "id": "m2c83e69b",
  "tipo": "real",
  "titular": "El bombardeo alemán sobre Bari: el segundo Pearl Harbor",
  "extracto": "La ciudad italiana de Bari tenía alrededor de 200.000 habitantes en 1943. A finales de ese año la calma de la ciudad había sido sustituida por una frenética actividad, con barcos aliados entrando y saliendo de su puerto ...",
  "medio": "quevuelenaltolosdados.com",
  "anio": 2019
 },
 {
  "id": "mcf7df705",
  "tipo": "real",
  "titular": "¿Manipulación o mala praxis? Los estudios financiados por el Gobierno",
  "extracto": "Junto con el fin del roaming dentro de la UE, el Parlamento Europeo también ha votado sobre un tema mucho más preocupante aunque menos público: la neutralidad de la red dentro de las fronteras comunitarias.",
  "medio": "hipertextual.com",
  "anio": 2015
 },
 {
  "id": "m739d9bff",
  "tipo": "real",
  "titular": "El día que dos aviones chocaron sobre el cielo de Nueva York",
  "extracto": "El 16 de diciembre de 1960 dos aviones comerciales chocaron en el cielo de Nueva York.",
  "medio": "life.com",
  "anio": 2010
 },
 {
  "id": "mcf73e564",
  "tipo": "real",
  "titular": "Rumspringa: El periodo en que los Amish 'corretean por ahí'",
  "extracto": "En la comunidad Amish nadie es bautizado al nacer. Al cumplir los 16 años, a los jóvenes les es permitido experimentar el \"mundo inglés\", abandonando el hogar y gozando de todo lo que hasta ese momento les era vedado: ro...",
  "medio": "perropericoteygato.blogspot.com",
  "anio": 2010
 },
 {
  "id": "m9e9e499a",
  "tipo": "real",
  "titular": "Perdidos (Lost): las políticas de FOX y Cuatro premian a los que se bajan series de Internet",
  "extracto": "Tanto Fox como Cuatro emitirán a las 5 de la madrugada del domingo 23 el doble episodio final (17 y 18).",
  "medio": "mundoplus.tv",
  "anio": 2010
 },
 {
  "id": "mf5891543",
  "tipo": "real",
  "titular": "El ahogamiento simulado \"sería tortura\" si me lo aplicaran a mi",
  "extracto": "El director de la Inteligencia Nacional de EE UU, Mike McConnell, dijo que la técnica de interrogación conocida como ahogamiento simulado \"sería tortura\" si él fuera sometido a ella.",
  "medio": "news.bbc.co.uk",
  "anio": 2008
 },
 {
  "id": "m8b86060a",
  "tipo": "real",
  "titular": "Detectan 1.499 infectados de coronavirus en Wuhan en estado crítico al hacer chequeos casa por casa",
  "extracto": "Los trabajadores sanitarios de Wuhan han encontrado 1.499 nuevos pacientes enfermos con coronavirus en chequeos realizados casa por casa.",
  "medio": "20minutos.es",
  "anio": 2020
 },
 {
  "id": "mf45843e5",
  "tipo": "real",
  "titular": "Asociación ecologista critica la \"demagogia\" de la Iglesia ante el aborto",
  "extracto": "La asociación AnimaNaturalis ha expresado hoy su rechazo a la campaña en contra del aborto que ha emprendido la Conferencia Episcopal -en la que da a entender que en España se protege más a los linces que a los fetos-, p...",
  "medio": "adn.es",
  "anio": 2009
 },
 {
  "id": "me452587f",
  "tipo": "real",
  "titular": "De EEUU a Italia: millones de trabajadores abandonan su empleo fijo",
  "extracto": "La cifra récord de renuncias obedece, sobre todo a movimientos que se están produciendo en sectores como la hostelería, el comercio, el transporte y en aquellos puestos que implican estar en primera línea con los cliente...",
  "medio": "lainformacion.com",
  "anio": 2021
 },
 {
  "id": "m2b6a859c",
  "tipo": "real",
  "titular": "¿Que no hay crisis? Cómo se nota que muchos no hacen la compra",
  "extracto": "LEED ANTES DE VOTAR. Los precios se han desplomado.Los asentadores, que tienen en su mano el mando a distancia que frena la caída del precio en las pantallas, no aprietan el botón hasta el último momento de la subasta.",
  "medio": "burbuja.info",
  "anio": 2007
 },
 {
  "id": "mc958ec6a",
  "tipo": "real",
  "titular": "Descubierta una onda de viveros de estrellas en nuestro entorno galáctico",
  "extracto": "Astrónomos de la Universidad de Harvard han encontrado una colosal estructura gaseosa ondulada, la más grande observada hasta ahora en la Vía Láctea, integrada por sucesivas regiones donde se forman estrellas.",
  "medio": "agenciasinc.es",
  "anio": 2020
 },
 {
  "id": "m9ecf4780",
  "tipo": "real",
  "titular": "Díaz Ayuso, sobre la contaminación: \"Nadie ha muerto de esto\"",
  "extracto": "La presidenta de la Comunidad de Madrid asegura que \"a nadie le gusta\" la contaminación pero niega que se hayan producido muertes relacionadas con ella, \"Nadie ha muerto de esto\" y afirma que nadie \"se va a morir\" a caus...",
  "medio": "eldiario.es",
  "anio": 2020
 },
 {
  "id": "m454ce469",
  "tipo": "real",
  "titular": "Las 2 técnicas de estudio que sí han demostrado ser efectivas",
  "extracto": "Han detectado cuales son los métodos de estudio más eficaces, gracias a una investigación llevada a cabo por los investigadores de la Universidad Estatal de Kent, dirigidos por John Dunlosky.",
  "medio": "medciencia.com",
  "anio": 2013
 },
 {
  "id": "mf0ce6058",
  "tipo": "real",
  "titular": "Le van a demoler la nave industrial pagándole mucho menos de lo que vale porque estorba a los constructores",
  "extracto": "Jesús Villegas, «decorador vegetal», es «el mayor proveedor» del musgo y los belenes que se venden en Navidad en la Plaza Mayor.",
  "medio": "20minutos.es",
  "anio": 2008
 },
 {
  "id": "m383cef28",
  "tipo": "real",
  "titular": "España revalida su título de campeón del mundo de hockey patines",
  "extracto": "España revalida su título de campeón del mundo - Hockey patines. España se confirma como la gran potencia de este deporte conquistando con todo merecimiento el título mundial frente a una selección argentina que siempre ...",
  "medio": "marca.com",
  "anio": 2011
 },
 {
  "id": "m6619e132",
  "tipo": "real",
  "titular": "\"La Alhambra es feísima”: las mejores peores críticas a nuestras joyas turísticas",
  "extracto": "La perfección no existe, y como sabe cualquier persona acostumbrada a comprar o reservar hoteles por internet, una puntuación media de cinco estrellas sobre cinco, tampoco.",
  "medio": "elconfidencial.com",
  "anio": 2019
 },
 {
  "id": "mfd396873",
  "tipo": "real",
  "titular": "\"Cuando llegué a Mauthausen le dije a mi amigo de Olvera: estamos jodidos\"",
  "extracto": "Eduardo Escot aún conserva la camisa de rayas que vistió en el campo nazi de Mauthausen (Austria), que acaba de celebrar el 65 aniversario de su liberación por los aliados.",
  "medio": "diariodesevilla.es",
  "anio": 2010
 },
 {
  "id": "m3d4bb127",
  "tipo": "real",
  "titular": "La broma de Google en Gmail por el April Fools’ no ha podido salir peor",
  "extracto": "Google anunció Mic Drop en su blog como su propuesta de broma para el April Fools': junto al botón \"Enviar\" de Gmail aparecería otro que no es el habitual \"enviar y archivar\", sino uno que envía el mail añadiendo el GIF ...",
  "medio": "hipertextual.com",
  "anio": 2016
 }
];
