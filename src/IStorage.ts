export interface IStorage{
    read(filename:string):String;
    write(data: string):void;
    delete(filename:string): void;
}