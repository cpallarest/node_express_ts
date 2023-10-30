import { opticalDisk } from "./opticalDisk.js";
import { IDisk } from "./IDisk.js";
import { IStorage } from "./IStorage.js";

export class Cd extends opticalDisk implements IDisk, IStorage{
    spin() {
        console.log("El CD está girando");
    };
    write(data: BinaryData) {
     console.log("escribiendo datos");   
    };
    read(filename: string):string{
        return "Datos leídos en el CD";        
    };
    delete(filename:string): void{
        console.log("He borrado un archivo")
    };
    toString(): string {
        return `CD.\nName: ${this.name}\n Type: ${this.type}.`
    };
}