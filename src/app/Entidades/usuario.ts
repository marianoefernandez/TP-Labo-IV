/*
2-( componentes nuevos) Realizar:
la clase usuario con nombre y clave ,
el componente "Bienvenido"
el componente "login"
el componente "error"
( dejar los componentes listos)
opcional: hacer ruteo
*/

export class Usuario 
{
    usuario:string="";
    claveHash:string="";

    constructor()
    {

    }

    LoguearUsuario(usuario:string,clave:string)
    {
        this.usuario = usuario;
        this.claveHash = this.EncriptarContraseña(clave);
        localStorage.setItem("Usuario",JSON.stringify(this));
    }

    EncriptarContraseña(contraseña:string)
    {
        let bcrypt = require('bcryptjs');
        let passwordHash = bcrypt.hash(contraseña);

        return passwordHash;
    }

    VerificarContraseña(contraseñaIngresada:string, hashContraseña:string)
    {
        let bcrypt = require('bcryptjs');

        return bcrypt.compareSync(contraseñaIngresada,hashContraseña);
    }
}
