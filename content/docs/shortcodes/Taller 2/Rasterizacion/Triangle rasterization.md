# Triangle rasterization

La rasterización es el proceso por el cual una imagen se transforma en un conjunto de pixeles, los cuales pueden ser mostrados a traves de una salida digital. Este procedimiento incluye el uso de diferentes algoritmos dependiendo de la figura que se vaya a rasterizar.

Por ejemplo para razterizar un triangulo se necesita el desarrollo de dos pasos:
- Capturar su figura
- Recorrer su figura a traves de los pixeles

Para el primer paso es necesario verificar si el triangulo encaja en alguna de las siguientes opciones:

![](https://brakeza.com/wp-content/uploads/2018/12/concepto_rasterizacio%CC%81n.png)

Si no encaja en la figura BottomFlat o TopFlat, el triangulo debera partirse en dos como muestra la siguiente imagen:

![](https://docs.hektorprofe.net/cdn/graficos3d/image-49.png)

De manera que los triangulos resultantes sean de tipo BottomFlat o TopFlat.

Ahora bien una vez determinado el triangulo se usan coordenadas baricentricas

## Formulas

{{< p5-iframe sketch="/visual_computing/sketches/rasterization_2.js" width="646" height="646" >}}
