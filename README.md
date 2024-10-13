# PROGRAMACION DE NUEVAS TECNOLOGIAS 2

## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador react.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nextjs que ya tiene codigo base del frontend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. La url del backend es: https://salesbackend.azurewebsites.net/api/sales ya se encuentra desplegado en un app services en Azure
>    El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_supplies** con una collection llamada **sales**, ahí se encuentran aprox. 5.001 ventas.
> 5. Proba el endpoint que ya se encuentra desarrollado: /api/sales debería retornar un json con 23.000 películas. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point a continuación). Sí por algun motivo no llegase a funcionar, solicita asistencia.
>    -GET /api/sales?pageSize=[pageSize]&page=[page]

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Conectar el presente front con el backend: Para lo cual crea una pagina, que muestre las primeras 100 ventas, no te preocupes por el estilo por ahora, pero sí que sea prolijo. Los datos que se necesitan de las ventas en esta página son: saleDate, storeLocation y purchaseMethod
> 2. Necesitamos una página para ver los detalles del cliente de las ventas. Por lo cual te aconsejo que crees una pagina con un componente customer en el cual se muestren todos los datos del cliente, ademas de su satisfacción de la compra
> 3. Necesitamos una pagina que nos muestre el detalle de los items (productos), solo es necesario saber el nombre, el precio y la cantidad. No te preocupes de los estilos por ahora.
> 4. Por ultimo, en el componente que muestra los items, se requiere hacer el total del importe. Esto es cantidad por precio.

> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega

Si ya terminaste o ya es la hora de salida (pregunta cuando termina) asegurate de seguir los siguientes pasos para la entrega:

1. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio
