export abstract class opticalDisk{
    #name:string;
    #file: BinaryData[] = [];
    #type: string;
    constructor(name: string, type: string){
        this.#name = name;
        this.#type = type;
    }
    get name(){
        return this.#name;
    }

    set name(name:string){
        this.#name = name;
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

    abstract toString():string;
}