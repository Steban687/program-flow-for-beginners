/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    B["i=1"] --> C{"¿i <= 5?"}
    C{"¿i <= 5?"} -->|"si"| D["Calificar tarea i"]
    C{"¿i <= 5?"} -->|"no"| E["promedio"]
    A("Start") --> F["calificar 5 tareas"]
    F["calificar 5 tareas"] --> B["i=1"]
    E["promedio"] --> G("Fin")
    D["Calificar tarea i"] --> H["i = i + 1"]
    H["i = i + 1"] --> C{"¿i <= 5?"}



`;

module.exports = answer.trim();