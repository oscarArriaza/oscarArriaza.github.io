export default class nombreDeLaClase
{
    //Atributos: Deben ser privados, osea llevar el guion bajo al principio.
    _atributo1;
    _atributo2;
    _atributo3;
    _atributo4;

    //constructor: Debe ser publico, solo puede ser uno porque en javascript no hay sobrecarga de metodos como en java
    constructor(atributo1,atributo2,atributo3,atributo4)
    {
        this._atributo1=atributo1;
        this._atributo2=atributo2;
        this._atributo3=atributo3;
        this._atributo4=atributo4;
    }

    //Metodos: Deben ser publicos
    nombreDelMetodo()
    {

    }

    //Getters y setters: Deben ser publicos.
    get atributo1()
    {
        return this._atributo1;
    }

    set atributo1(nuevoValorParaElAtributo1)
    {
        this._atributo1=nuevoValorParaElAtributo1;
    }
}