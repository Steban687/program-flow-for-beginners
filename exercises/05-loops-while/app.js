/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A("Inicio") --> B["Inicio de sesión (con contraseña)"]
    B["Inicio de sesión (con contraseña)"] --> C["Pedir contraseña"]
    C["Pedir contraseña"] --> D["Contraseña Correcta <=3 (Intento 1)"]
    D["Contraseña Correcta <=3 (Intento 1)"] --> E{"si"}
    E{"si"} --> G["Acceso Consedido"]
    D["Contraseña Correcta <=3 (Intento 1)"] --> F{"No"}
    L{"No"} --> M["¿Contraseña correcta?   (Intento 3)"]
    N["¿Contraseña correcta?   (Intento 2)"] --> K{"Si"}
    N["¿Contraseña correcta?   (Intento 2)"] --> L{"No"}
    O{"Si"} --> G["Acceso Consedido"]
    F{"No"} --> N["¿Contraseña correcta?   (Intento 2)"]
    K{"Si"} --> G["Acceso Consedido"]
    M["¿Contraseña correcta?   (Intento 3)"] --> O{"Si"}
    M["¿Contraseña correcta?   (Intento 3)"] --> H{"No"}
    H{"No"} --> I["Acceso Denegado"]
    I["Acceso Denegado"] --> J("Fin")
    G["Acceso Consedido"] --> J("Fin")

`;

module.exports = answer.trim();