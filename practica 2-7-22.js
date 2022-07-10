// var numero2 = prompt("elige un numero o te mato")
// numero2 = parseFloat(numero2)// console.log(numero2)
var problemas = [
    "En una funion se ahn ocupado 9 filas de 10 asientos cada una y 7 asientos sueltos.\n¿Cuanto se ha recaudado si cada entrada cuesta 120 pesos?",
    "Carlos tiene 12 años. Su hermana Isabel tiene 4 años menos que Carlos, su padre tiene 29 años mas que Isabel y su madre tiene 5 años menos que su padre.\n¿Cuantos años tiene la madre de Carlos mas que el?",
    "Una camioneta lleva 50 cajas de tabletas de turron. En 20 de las cajas hay 36 tabletas en cada una y en el resto hay 24 tabletas en cada una. Deja en una tienda 50 tabletas.\n¿Cuantas tabletas de turron quedan en la camioneta?",
    "Jose ha ido con sus primos al teatro. Han pagado en total 4325 pesos por 3 entradas de adulto y 4 infantiles. Cada entrada de adulto cuesta 875 pesos.\n¿Cuanto cuesta cada entrada de infantil?",
    "Un auto realiza un viaje de 6 horas. EN cada una de las horas recorre: 100km, 120km, 110km, 95km, 89km, 110km.\n¿Cauntos kilometros ha recorrido?",
    "Daniel es conserje de un colegio. En un armario tiene 5 filas con 5 llaveros en cada fila. Cada llavero tiene 5 llaves.\n¿Cuantas llaves tiene en el armario?",
    "De un almacen han salido 6 camionetas con 6 percheros en cada una. Cada perchero tiene 6 perchas y en cada percha hay colgados 6 pantalones.\n¿Cuantos pantalones hay en total en las 6 camionetas?",
    "Sara compor varios refrescos a 12 pesos cada uno. Pago con un billete de 200 pesos y le devolvieron 32 pesos.\n¿Cuantos refrescos compro Sara?",
    "Lucia esta aprendiendo a manejar. Cada dia da una clase teorica de 50 minutos y otra clase practiva de 35 minutos.\n¿Cuantos minutos de clase da Lucia cada dia?",
    "Un supermecardo recibe un envio de 20 cajas de cereales con 30 paquetes cada una. Si cada paquete pesa 250 gramos, ¿cuantos kilogramos pesa el envio?",
    "En una carrera han participado 7000 personas entre hombres y mujeres, y 5000 personas entre mujere y niños. Si han corrido 3000 mujeres, ¿Cuantas personas han participado en total?",
    "En un hormiguero viven 245 hormigas. ¿Cuántas hormigas vivirán en 23 hormigueros iguales?",
    "Pedro ha comprado 6 bolsas de caramelos. Si en cada bolsa hay 10 caramelos, ¿cuántos ha comprado Pedro?",
    "Los padres de Fernando han pagado parte de su casa con 100 billetes de 500 euros. Averigua cuánto vale la casa si su precio total es el triple de lo que han pagado."
]
var resultados = [11640, 20, 1390, 425, 624, 125, 1296, 14, 85, 150, 9000, 5635, 60, 150000]

var numero1 = prompt("elige un numero del 1 al " + (problemas.length + 1) + " o te mato")

numero1 = parseFloat(numero1) 
console.log(numero1)

var respuesta = prompt(problemas[numero1-1])
respuesta = parseFloat(respuesta)

if (respuesta === resultados[numero1-1]){
    alert("esta bien") 
} else{
    alert("esta mal")
}
