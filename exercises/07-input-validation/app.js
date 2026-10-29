/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["pedir el e mail"]
    B["pedir el e mail"] --> C{"e mail valido?"}
    D["Inválido"] --> F["Intentar Nuevamente"]
    F["Intentar Nuevamente"] --> C{"e mail valido?"}
    C{"e mail valido?"} --> E["Si"]
    E["Si"] --> G["Continuar Registro"]
    G["Continuar Registro"] --> H("Fin")
    C{"e mail valido?"} --> I["no"]
    I["no"] --> D["Inválido"]

`;

module.exports = answer.trim();