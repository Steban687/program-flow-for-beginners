/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart LR
    A("Inicio") --> B["locked"]
    F["No more events"] --> G("fin")
    C["pass"] --> B["locked"]
    B["locked"] --> F["No more events"]
    B["locked"] -->|"coin"| H["Unlocked"]
    H["Unlocked"] -->|"push"| C["pass"]



`;

module.exports = answer.trim();