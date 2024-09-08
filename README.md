# Donaciones Electrónicas

### Decisiones

* *agregar-donacion.html*:
Se decidió que los mensajes de error sean mensajes de alerta de JS y que los campos con errores cambien a color rojo luego de intentar enviar el formulario. El mensaje de confirmación se encuentra vacío en el html y se escribe en el js.
Además, formulario para agregar otro dispositivo es clonado del dispositivo anterior, y se elimina el botón de "Agregar otro dispositivo" dando la opción de agregar 2 dispositivos a la vez como máximo para simplificar las validaciones en el js.

* *informacion-dispositivo*:
El atributo src de la imagen se encuentra vacío debido a que se hizo un diccionario para completar la información de los distintos dispositivos en el archivo info-disp.js, donde las imagenes van cambiando según el id del dispositivo.
