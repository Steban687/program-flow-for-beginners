/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Inicio") --> B["Total = 0"]
    B["Total = 0"] --> C{"¿Más artículos?"}
    C{"¿Más artículos?"} --> D["Si"]
    D["Si"] --> F["Leer Precio"]
    F["Leer Precio"] --> G["Total = Total + Precio"]
    G["Total = Total + Precio"] --> C{"¿Más artículos?"}
    C{"¿Más artículos?"} --> E["No"]
    E["No"] --> H["Mostrar Total"]
    H["Mostrar Total"] --> I("Fin")

`;

module.exports = answer.trim();