/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["(semáforo)    cambio de luces"]
    F{"si"} --> C["Color= verde"]
    F{"si"} --> D["Color= Amarillo"]
    F{"si"} --> E["Color= Rojo"]
    C["Color= verde"] --> G["avanzar"]
    D["Color= Amarillo"] --> H["reducir velocidad"]
    E["Color= Rojo"] --> I["detenerse"]
    G["avanzar"] --> J("fin")
    H["reducir velocidad"] --> J("fin")
    I["detenerse"] --> J("fin")
    B["(semáforo)    cambio de luces"] --> F{"si"}


`;

module.exports = answer.trim();