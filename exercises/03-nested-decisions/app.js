/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `

flowchart TD
    A("Start") --> B["Alquiler de carros"]
    B["Alquiler de carros"] --> C["¿Edad>=21?"]
    B["Alquiler de carros"] --> D["¿Licencia Válida?"]
    C["¿Edad>=21?"] --> E{"No"}
    C["¿Edad>=21?"] --> F{"Si"}
    D["¿Licencia Válida?"] --> G{"Si"}
    D["¿Licencia Válida?"] --> H{"No"}
    G{"Si"} --> I["Alquilar el carro"]
    F{"Si"} --> I["Alquilar el carro"]
    H{"No"} --> J["Rechazar alquiler"]
    E{"No"} --> K["Rechazar alquiler"]
    K["Rechazar alquiler"] --> L("Fin")
    I["Alquilar el carro"] --> L("Fin")
    J["Rechazar alquiler"] --> L("Fin")
`;

module.exports = answer.trim();