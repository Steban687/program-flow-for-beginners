/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
<<<<<<< HEAD
flowchart TD
    A("Inicio") --> B["Seleccionar producto"]
    D{"¿Selección válida?"} -->|"si"| E{"¿Dinero suficiente?"}
    E{"¿Dinero suficiente?"} -->|"intentar de nuevo"| C["Insertar más dinero"]
    E{"¿Dinero suficiente?"} -->|"si"| F["Entregar producto"]
    C["Insertar más dinero"] --> D{"¿Selección válida?"}
    B["Seleccionar producto"] --> H["Insertar dinero"]
    H["Insertar dinero"] --> D{"¿Selección válida?"}
    F["Entregar producto"] --> I["Devolver dinero"]
    I["Devolver dinero"] --> G("fin")
=======
flowchart LR
    A("Inicio") --> B["Seleccionar de producto"]
    F["aqui tienes tu producto"] --> J["se devuelve el cambio"]
    J["se devuelve el cambio"] --> G("fin")
    E{"¿Selección válida?"} -->|"no"| C["invalida"]
    B["Seleccionar de producto"] --> E{"¿Selección válida?"}
    C["invalida"] --> B["Seleccionar de producto"]
    E{"¿Selección válida?"} --> H["Insertar  dinero"]
    H["Insertar  dinero"] --> D{"¿Dinero suficiente?"}
    D{"¿Dinero suficiente?"} -->|"si"| F["aqui tienes tu producto"]
    D{"¿Dinero suficiente?"} -->|"no"| I["insertar mas dinero"]
    I["insertar mas dinero"] --> D{"¿Dinero suficiente?"}

>>>>>>> 0dde47f (intentos fallidos de flijograma ejerciocio 10)

`;

module.exports = answer.trim();