/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart LR
    A("Inicio") --> B["Pedir e mail"]
    B["Pedir e mail"] --> D{"¿Email válido?"}
    D{"¿Email válido?"} -->|"no"| C["intentar de nuevo"]
    C["intentar de nuevo"] --> B["Pedir e mail"]
    D{"¿Email válido?"} -->|"si"| E["continuar registro"]
    E["continuar registro"] --> F("Fin")
`;

module.exports = answer.trim();