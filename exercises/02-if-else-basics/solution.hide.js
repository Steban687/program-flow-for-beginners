const answer = `
flowchart TD

  A("Start") --> B["Fiesta"]
    B["Fiesta"] --> C{"edad =>18"}
    C{"edad =>18"} --> E["si"]
    C{"edad =>18"} --> F["no"]
    F["no"] --> D["puede beber"]
    E["si"] --> D["puede beber"]
    D["puede beber"] --> G["fin"]
    
module.exports = answer.trim();
