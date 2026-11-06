/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `flowchart TD
    A("Start") --> B["Semáforo"]
    B["Semáforo"] --> C{"¿Color de la luz?"}
    C{"¿Color de la luz?"} -->|"Amarilla"| H["bajar la velocidad"]
    C{"¿Color de la luz?"} -->|"Roja"| I["parar"]
    C{"¿Color de la luz?"} -->|"Verde"| G["Avanzar"]
    H["bajar la velocidad"] --> D["Continuar"]
    I["parar"] --> D["Continuar"]
    G["Avanzar"] --> D["Continuar"]
    D["Continuar"] --> J("fin")

`;

module.exports = answer.trim();