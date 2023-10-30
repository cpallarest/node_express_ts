import { opticalDisk } from "./opticalDisk.js";
import { IDisk } from "./IDisk.js";
import { IStorage } from "./IStorage.js";

export class Cd extends opticalDisk implements IDisk, IStorage{
    #size: number = 0.7;
    get size(){
        return this.#size;
    }
    spin() {
        console.log("El CD está girando");
    };
    write(data: string) {
     console.log("escribiendo datos");   
    };
    read(filename: string):string{
        return "Datos leídos en el CD";        
    };
    delete(filename:string): void{
        console.log("He borrado un archivo")
    };
    toString(): string {
        return `CD:\nName: ${this.name}\nSize: ${this.#size}\nType: ${this.type}.`
    };
}