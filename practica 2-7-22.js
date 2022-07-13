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
    "Los padres de Fernando han pagado parte de su casa con 100 billetes de 500 euros. Averigua cuánto vale la casa si su precio total es el triple de lo que han pagado.",
    "Martin tiene una empresa de traducciones. Cada palabra traducida del inglés al español cuesta 0.25$, y cada palabra del español al inglés cuesta 0.75$. Si un documento tiene 252 palabras en ingles y 80 palabras en español, cuánto valdrá traducir el documento?",
    "Pedro tiene que comprar 68 pares de zapatillas. La mitad de los pares tienen un precio de 450$, y la otra mitad de los pares valen la mitad de los pares anteriores. Cada 10 pares de zapatillas, hay un descuento de 100$. Cuanto gasto pedro en total?",
    "El precio orginal de la ropa en un shopping es 100$, pero ahora esta en oferta de 80% de descuento. Si vos tenes 460$ pesos, cuanta ropa podes comprar?",
    "Los chicos de jardin quieren pasar de un lado del rio al otro lado, en el barco solo se pueden sentar 8 personas, y el profesor y los alumnos son en total 57 personas. Si el profesor tiene que ir en cada viaje del barco, cuantas veces hay que usar el barco para que todos pasen al otro lado del rio?",
    "Un colegio necesita comprar sillas y mesas para los salones. Cada mesa necesita 4 sillas, y cada salon necesita 7 mesas. Si cada mesa vale 650$ y cada silla vale cuatro veces menos que las mesas, cuanta plata tendra que gastar el colegio si hay 24 salones?",
]
var resultados = [11640, 20, 1390, 425, 624, 125, 1296, 14, 85, 150, 9000, 5635, 60, 150000, 123, 22350, 23, 7, 218400]

var numero1 = prompt("elige un numero del 1 al " + (problemas.length) + " o te mato")

numero1 = parseFloat(numero1) 
console.log(numero1)

var respuesta = prompt(problemas[numero1-1])
respuesta = parseFloat(respuesta)

if (respuesta === resultados[numero1-1]){
    alert("esta bien") 
} else{
    alert("esta mal")
}
