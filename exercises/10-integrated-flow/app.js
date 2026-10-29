/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Seleccionar producto"]
    B["Seleccionar producto"] --> C["Insertar dinero"]
    F["¿selección válida?"] --> H{"no"}
    C["Insertar dinero"] --> I["dinero suficiente"]
    I["dinero suficiente"] --> J{"no"}
    J{"no"} --> E["insertar mas dinero"]
    I["dinero suficiente"] --> G{"si"}
    G{"si"} --> F["¿selección válida?"]
    F["¿selección válida?"] --> K{"si"}
    E["insertar mas dinero"] --> I["dinero suficiente"]
    H{"no"} --> D["intentar de nuevo"]
    D["intentar de nuevo"] --> F["¿selección válida?"]
    K{"si"} --> L["Entregar producto"]
    L["Entregar producto"] --> M("fin")

`;

module.exports = answer.trim();