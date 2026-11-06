/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `flowchart TD
    A("Start") --> B["vender bebida alcohólica."]
    B["vender bebida alcohólica."] --> D{"edad >=18"}
    D{"edad >=18"} -->|"si"| E["puede beber"]
    D{"edad >=18"} -->|"no"| C["no puede beber"]
    C["no puede beber"] --> G("Fin")
    E["puede beber"] --> G("Fin")
`;
// Do not modify this
module.exports = answer.trim(); 