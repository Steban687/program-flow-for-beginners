/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `flowchart TD
    A("Start") --> B["Alquiler de autos"]
    B["Alquiler de autos"] --> C{"¿Edad >= 21?"}
    C{"¿Edad >= 21?"} -->|"si"| D{"¿Licencia válida?"}
    D{"¿Licencia válida?"} -->|"si"| E["Alquiler el auto"]
    D{"¿Licencia válida?"} -->|"no"| F["Rechazar"]
    C{"¿Edad >= 21?"} -->|"no"| F["Rechazar"]
    E["Alquiler el auto"] --> G("fin")
    F["Rechazar"] --> G("fin")

`;

module.exports = answer.trim();