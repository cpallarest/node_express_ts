export interface IStorage{
    read(filename:string):String;
    write(data: BinaryData):void;
}