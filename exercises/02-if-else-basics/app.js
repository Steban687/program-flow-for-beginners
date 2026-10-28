/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `

flowchart TD

    A("Start") --> B["Cumpleaños de Juliana"]
    B["Cumpleaños de Juliana"] --> C{"¿Edad=> 18?"}
    C{"¿Edad=> 18?"} --> D["Si"]
    C{"¿Edad=> 18?"} --> E["No"]
    D["Si"] --> F["Puede beber"]
    E["No"] --> G["No puede beber"]
    G["No puede beber"] --> H("Fin")
    F["Puede beber"] --> H("Fin")

`;
// Do not modify this
module.exports = answer.trim(); 