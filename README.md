# Layout-React-Native 👷‍♂️ 

## Diseño con Flexbox 🍱

Un componente puede especificar el diseño usando el algoritmo Flexbox. Flexbox está diseñado para proporcionar un diseño uniforme en diferentes tamaños de pantalla.

Normalmente se utilizará una combinación de flexDirection, alignItems y justifyContent para lograr el diseño correcto.

### Cómo Crear Diferentes Layouts

Los Layuouts en React Native usan un subset de Flexbox (Digo "subset" porque no todas las características que de la especificación de Flexbox están incluídas). Entonces si ya sabes Flexbox, ya puedes aplicar ese conocimiento en React Native. También vale la pena señalar que no hay floats o unidades basadas en porcentajes en React Native. Esto significa que solo podemos hacer layouts utilizando Flexbox y posicionamiento CSS.

### Lista de ejmplos.

#### Caso 1

- Por defecto flexDirection está asignado como 'column' a diferencia en diseño web que esta establecido como 'row'
- como podemos ver cada caja tiene asignado un flex con un valor entero, este es el que determina el alto en la pantalla que ocupara con respecto a sus elementos hermanos.
- Hay que considerar que no se especifican atributos en porcentaje en esta distribución.

```
...

  caja1: {
    padding: 20,
    backgroundColor: 'navy',
    flex: 1,
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
    flex: 1,
  },
  caja3: {
    padding: 20,
    backgroundColor: 'green',
    flex: 1,
  },
  caja4: {
    padding: 20,
    backgroundColor: 'teal',
    flex: 3,
  },
  
...
		
```

![caso1](https://github.com/ciroribba/Layout-React-Native/blob/main/img/Screenshot_1.png)

#### Caso 2

- flexDirection del componente View contenedor tiene asignado flexDirection 'row' 
- En este caso, conservando las cajas anteriores como hijas de este, mantendrá el ancho establecido en flex pero esta vez de forma horizontal.
- A su vez este contenedor tiene que tener su propio flex en 1, para que pueda ocupar la totalidad de la pantalla y sus hijos se distribuyan bien en el.

```
...

  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,//tiene q crecer el padre p q crezca el hijo
    flexDirection: 'row', //en react este es default
  },
...
		
```

![caso2](https://github.com/ciroribba/Layout-React-Native/blob/main/img/Screenshot_2.png)

#### Caso 3

- flexDirection del componente View contenedor tiene asignado flexDirection 'row' 
- En este caso, conservando las cajas anteriores como hijas de este, mantendrá el ancho establecido en flex pero esta vez de forma horizontal.
- A su vez este contenedor tiene que tener su propio flex en 1, para que pueda ocupar la totalidad de la pantalla y sus hijos se distribuyan bien en el.

```
...

  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,//tiene q crecer el padre p q crezca el hijo
    flexDirection: 'row', //en react este es default
  },
...
		
```

![caso3](https://github.com/ciroribba/Layout-React-Native/blob/main/img/Screenshot_3.png)


#### Caso 4

- Ahora vemos una variable de lo anterior con alignItems 'center'.

```
...

  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
...
		
```

![caso4](https://github.com/ciroribba/Layout-React-Native/blob/main/img/Screenshot_4.png)

### Por último dejo un screen del proyecto de layoutImage donde se implementan conocimientos anteriores para mostrar otras formas de usar flexBox en react-native.
- Hay que destacar que en este proyoyecto además se hace uso de scrollView, tanto vertical, como horizontal en la sección inspira, es un extra que seguro te puede servir 😉

![ejemplo](https://github.com/ciroribba/Layout-React-Native/blob/main/img/export.jpg)
