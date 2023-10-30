import { opticalDisk } from "./opticalDisk.js";
import { IDisk } from "./IDisk.js";
import { IStorage } from "./IStorage.js";

export class Dvd extends opticalDisk implements IDisk, IStorage{
    spin() {
        console.log("El DVD está girando");
    };
    write(data: BinaryData) {
     console.log("escribiendo datos");   
    };
    read(filename: string):string{
        return "Datos leídos en el DVD"        
    };
    delete(filename:string): void{
        console.log("He borrado un archivo")
    };
    toString(): string {
        return `DVD.\nName: ${this.name}\n Type: ${this.type}.`
    }
}