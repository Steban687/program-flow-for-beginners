/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
    flowchart TD
    A("inicio") --> B["hervir agua"]
    B["hervir agua"] --> C["preparar café"]
    C["preparar café"] --> D["servir café"]
    D["servir café"] --> E("fin")
`;
// Do not modify this
module.exports = answer.trim();