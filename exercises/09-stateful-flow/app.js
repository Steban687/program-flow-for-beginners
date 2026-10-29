/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Start") --> B["Torniquete Bloqueado"]
    B["Torniquete Bloqueado"] --> C["Moneda"]
    C["Moneda"] --> D["Empujar"]
    D["Empujar"] --> E["Torniquete desbloqueado"]
    E["Torniquete desbloqueado"] --> F["persona pasa"]
    F["persona pasa"] --> B["Torniquete Bloqueado"]
    B["Torniquete Bloqueado"] --> G["No hay mas eventos"]
    G["No hay mas eventos"] --> H("Fin")

`;

module.exports = answer.trim();