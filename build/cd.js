import { Disco } from "./disco";
export class Cd extends Disco {
    constructor(nombre, contenido) {
        super(nombre, contenido, "CD");
    }
    ReproducirMusica() {
        console.log("la musica se está reproduciendo");
    }
}
