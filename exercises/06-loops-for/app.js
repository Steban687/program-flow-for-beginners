/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["i=1"]
    B["i=1"] --> C{"¿i<=5?"}
    C{"¿i<=5?"} --> D["Sí"]
    C{"¿i<=5?"} --> E["No Resume"]
    E["No Resume"] --> G["Mostrar Resume"]
    G["Mostrar Resume"] --> H("Fin")
    D["Sí"] --> F{"i=i+1"}
    F{"i=i+1"} --> C{"¿i<=5?"}

`;

module.exports = answer.trim();