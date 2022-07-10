var numero1 = prompt("elige un numero del 1 al 7 o te mato")

numero1 = parseFloat(numero1) 
console.log(numero1)
// var numero2 = prompt("elige un numero o te mato")
// numero2 = parseFloat(numero2)// console.log(numero2)
var problemas = [
    "En una funion se ahn ocupado 9 filas de 10 asientos cada una y 7 asientos sueltos.\n¿Cuanto se ha recaudado si cada entrada cuesta 120 pesos?",
    "Carlos tiene 12 años. Su hermana Isabel tiene 4 años menos que Carlos, su padre tiene 29 años mas que Isabel y su madre tiene 5 años menos que su padre.\n¿Cuantos años tiene la madre de Carlos mas que el?",
    "Una camioneta lleva 50 cajas de tabletas de turron. En 20 de las cajas hay 36 tabletas en cada una y en el resto hay 24 tabletas en cada una. Deja en una tienda 50 tabletas.\n¿Cuantas tabletas de turron quedan en la camioneta?",
    "Jose ha ido con sus primos al teatro. Han pagado en total 4325 pesos por 3 entradas de adulto y 4 infantiles. Cada entrada de adulto cuesta 875 pesos.\n¿Cuanto cuesta cada entrada de infantil?",
    "Un auto realiza un viaje de 6 horas. EN cada una de las horas recorre: 100km, 120km, 110km, 95km, 89km, 110km.\n¿Cauntos kilometros ha recorrido?",
    "Daniel es conserje de un colegio. En un armario tiene 5 filas con 5 llaveros en cada fila. Cada llavero tiene 5 llaves.\n¿Cuantas llaves tiene en el armario?",
    "De un almacen han salido 6 camionetas con 6 percheros en cada una. Cada perchero tiene 6 perchas y en cada percha hay colgados 6 pantalones.\n¿Cuantos pantalones hay en total en las 6 camionetas?"
]
var resultados = [11640, 20, 1390, 425, 624, 125, 1296]

var respuesta = prompt(problemas[numero1-1])
respuesta = parseFloat(respuesta)

if (respuesta === resultados[numero1-1]){
    alert("esta bien") 
} else{
    alert("esta mal")
}
