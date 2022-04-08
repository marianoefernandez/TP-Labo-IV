export class Suma 
{
    numero1:number = 0;
    numero2:number = 0;
    resultado:number = 0;

    Sumar()
    {
      this.numero1 = parseInt(this.numero1.toString());
      this.numero2 = parseInt(this.numero2.toString());
      this.resultado = this.numero1 + this.numero2;
    }
}
