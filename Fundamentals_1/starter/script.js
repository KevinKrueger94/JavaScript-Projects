// Variables
let js ="amazing";
let firstName = "Kevin ";
let surName = "Krüger";

// Variablen können nicht mit Zahlen beginnen.
// Ebenfalls kann man keine Keywords von JavaScript als Variablename verwenden
// Die Sonderzeichen _ und $ funktionieren, also z.B würde $funktion als
// Name einer Variable funktionieren.
// let 3days = 3; let new = 3; 

// Clean-Code Practice 
// Variablen nicht mit einem Großbuchstaben beginnen, dies ist eher
// für "Object oriented" Sachen vorgesehen.
// Alles in Großschrift wird für Const verwendet, also für Werte,
// die sich nicht mehr verändern.


if ( js === "amazing")
{
    console.log("JavaScript macht spaß!");
}

console.log("Mein Name ist", firstName + surName);
