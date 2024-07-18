export default class CL_reporte {
    constructor() {
        this.contpersonas = 0;
        this.contmuj = 0;
        this.conthomb = 0;
    }
    procesarpersonas(per){
        this.contpersonas++;
        if(per.sexo === "F"){
            this.contmuj++;
        }
        else {
            this.conthomb++;
        }
    }
    porcentajemuj(){
        return (this.contmuj / this.contpersonas) * 100;
    }
    massexo(){
        if(this.contmuj > this.conthomb)
            return "Hay mas mujeres";
        else
        if(this.contmuj < this.conthomb)
            return "Hay mas hombres";
        else
        if(this.contmuj == this.conthomb)
            return "Ambos por igual";
    }
    
}