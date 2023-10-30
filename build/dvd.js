import { Disco } from "./disco";
export class Dvd extends Disco {
    constructor(nombre, contenido) {
        super(nombre, contenido, "DVD");
    }
    ReproducirVideo() {
        console.log("el video se está reproduciendo");
    }
}
