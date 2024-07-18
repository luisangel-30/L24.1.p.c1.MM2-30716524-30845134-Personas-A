/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Porcentaje de mujeres procesadas: 58.33%
Hay más mujeres */

import CL_personas from "./CL_personas.js";
import CL_reporte from "./CL_reporte.js";

let perso1 = new CL_personas("Luisa", "F");
let perso2 = new CL_personas("Ana","F");
let perso3 = new CL_personas("José", "M");
let perso4 = new CL_personas("Carmen","F");
let perso5 = new CL_personas("Rosa","F");
let perso6 = new CL_personas("José","M");
let perso7 = new CL_personas("Maria","F");
let perso8 = new CL_personas("Luz","F");
let perso9 = new CL_personas("Rafael","M");
let perso10 = new CL_personas("Liz","F");
let perso11 = new CL_personas("Marco","M");
let perso12 = new CL_personas("Leo","M");

let reporte = new CL_reporte();

reporte.procesarpersonas(perso1);
reporte.procesarpersonas(perso2);
reporte.procesarpersonas(perso3);
reporte.procesarpersonas(perso4);
reporte.procesarpersonas(perso5);
reporte.procesarpersonas(perso6);
reporte.procesarpersonas(perso7);
reporte.procesarpersonas(perso8);
reporte.procesarpersonas(perso9);
reporte.procesarpersonas(perso10);
reporte.procesarpersonas(perso11);
reporte.procesarpersonas(perso12);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> Porcentaje de mujeres procesadas ${reporte.porcentajemuj()}% 
 <br> ${reporte.massexo()}
`