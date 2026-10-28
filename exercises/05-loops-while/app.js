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
    B["Pedir contraseña"] --> E["¿Contraseña Correcta?"]
    E["¿Contraseña Correcta?"] --> D{"No"}
    D{"No"} --> B["Pedir contraseña"]
    E["¿Contraseña Correcta?"] --> C{"Si"}
    C{"Si"} --> F["Acceso Concedido"]
    F["Acceso Concedido"] --> G("fin")
`;

module.exports = answer.trim();