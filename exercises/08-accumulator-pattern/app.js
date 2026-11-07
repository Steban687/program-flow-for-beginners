/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    C["total = 0"] --> D{"¿Más artículos?"}
    D{"¿Más artículos?"} -->|"no"| F["se muestra el total"]
    F["se muestra el total"] --> G("fin")
    A("Inicio") --> C["total = 0"]
    D{"¿Más artículos?"} -->|"si"| B["leer precio"]
    B["leer precio"] --> E["total = total + precio"]
    E["total = total + precio"] --> D{"¿Más artículos?"}


`;

module.exports = answer.trim();