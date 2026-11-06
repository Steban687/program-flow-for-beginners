/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Inicio") --> B["Pedir contraseña"]
    C{"¿contraseña correcta?"} -->|"si"| F["valida"]
    F["valida"] --> G("fin")
    B["Pedir contraseña"] --> C{"¿contraseña correcta?"}
    C{"¿contraseña correcta?"} -->|"no"| D["intentar de nuevo"]
    D["intentar de nuevo"] --> B["Pedir contraseña"]

`;

module.exports = answer.trim();