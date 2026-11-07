/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
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

`;

module.exports = answer.trim();