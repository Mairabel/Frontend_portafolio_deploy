export default interface Habilidad{
    id_habilidad:number;
    nombre:string;
    porcentaje:number;
    tipo:Tipo
}
export enum Tipo{
    "blanda","tecnica"
}