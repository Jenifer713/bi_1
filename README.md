# WestBite Bistro | Fundamentos de Business Intelligence

Material educativo interactivo sobre Business Intelligence, toma de decisiones basada en datos y el proceso ETL, acompañado de un dashboard ejecutivo simulado para un restaurante de comida occidental.

## Contenido

- `index.html`: conceptos de BI, ejemplos aplicados a restaurantes, diagrama ETL y cuestionario gamificado.
- `dashboard.html`: KPIs, cinco gráficas interactivas y tabla de pedidos filtrable.
- `css/`: sistema de diseño compartido, estilos de la página educativa y estilos del dashboard.
- `js/`: utilidades comunes, lógica del cuestionario y datos e inicialización de Chart.js.
- `img/`: espacio para recursos visuales propios en formato SVG; no se requieren imágenes binarias.

## Tecnologías

- HTML5 semántico, CSS3 y JavaScript ES6+ sin frameworks.
- Bootstrap 5.3.3 para la cuadrícula y componentes responsivos.
- Bootstrap Icons 1.11.3 para iconografía.
- Chart.js 4.4.1 para las visualizaciones del dashboard.
- Inter y Poppins para tipografía.

Las librerías y fuentes se sirven desde CDN; no hay backend, proceso de compilación ni instalación de dependencias. Hace falta conexión a internet para cargar los CDN.

## Ejecutar en GitHub Codespaces

1. Crea un repositorio en GitHub y añade la estructura de archivos del proyecto.
2. Abre el repositorio y selecciona **Code → Codespaces → Create codespace on main**.
3. Para usar Live Server, abre la pestaña **Extensions**, busca e instala **Live Server**.
4. Abre `index.html` desde el explorador del proyecto y selecciona **Open with Live Server**. La extensión servirá el sitio y abrirá la vista previa.
5. Usa el enlace **Dashboard** de la navegación o abre `dashboard.html` para ver el panel de WestBite Bistro.

Como alternativa, desde la terminal de Codespaces ejecuta:

```bash
npx serve .
```

Abre en el navegador la URL local que indique el servidor. No hace falta generar una build.

## Editar el cuestionario

Las preguntas se mantienen como objetos en `js/quiz.js`. Cada una contiene el texto de la pregunta, cuatro opciones, el índice de la opción correcta (comenzando en cero) y una explicación. Al añadir o editar una pregunta, conserva cuatro opciones y actualiza el total anunciado en la interfaz si fuera necesario. El juego asigna diez puntos por acierto y ninguno por error. La mejor puntuación se guarda en el navegador con la clave `westbite-quiz-best`.

## Editar los datos del dashboard

Los conjuntos del dashboard están organizados por periodo en `js/dashboard.js` (`7d`, `30d` y `90d`). Cada periodo contiene KPIs, ventas por categoría, métodos de pago, serie diaria, platos principales, valoraciones y los diez pedidos recientes.

Al modificar los datos, conserva estas relaciones:

- Las ventas totales deben coincidir con la suma de las ventas diarias del periodo.
- La cantidad de platos en el Top 5 debe ser coherente con sus categorías.
- El ticket promedio debe aproximarse a las ventas totales divididas entre los pedidos.
- El periodo de 90 días debe incluir una observación por día.

Las cantidades monetarias se muestran en dólares estadounidenses.

## Apariencia y accesibilidad

El sistema visual compartido vive en `css/styles.css`. Sus custom properties definen paleta, tipografía, radios, sombras y espaciado; el tema oscuro se controla con `data-theme="dark"` y se persiste en `localStorage` con la clave `wb-theme`. Los estilos de cada página están separados en `css/home.css` y `css/dashboard.css`.

El sitio utiliza HTML semántico, navegación por teclado, foco visible y regiones accesibles para información dinámica. El tema y la experiencia interactiva están pensados para funcionar sin recarga de página.

## Licencia

MIT License

Copyright (c) 2026 WestBite Bistro

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el “Software”), para utilizar el Software sin restricciones, incluidos los derechos de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias, y permitir que las personas a quienes se proporcione el Software hagan lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA “TAL CUAL”, SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, EXTRACONTRACTUAL O DE OTRO TIPO, QUE SURJA DE O EN RELACIÓN CON EL SOFTWARE O SU USO U OTRAS OPERACIONES CON ÉL.
