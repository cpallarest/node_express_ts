export class opticalDisk{
    #name:string;
    #size: number;
    #file: BinaryData[] = [];
    #type: string;
    constructor(name: string, size: number, type: string){
        this.#name = name;
        this.#size = size;
        this.#type = type;
    }
    get name(){
        return this.#name;
    }

    set name(name:string){
        this.#name = name;
    }

    get size(){
        return this.#size;
    }

    set size(size:number){
        this.#size = size;
    }
    get file(){
        return this.#file;
    }

    set file(file: BinaryData[]){
        this.#file = file;
    }

    get type(){
        return this.#type;
    }

    set type(type:string){
        this.#type = type;
    }
}