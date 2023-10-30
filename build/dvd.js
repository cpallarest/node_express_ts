var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dvd_size;
import { opticalDisk } from "./opticalDisk.js";
export class Dvd extends opticalDisk {
    constructor() {
        super(...arguments);
        _Dvd_size.set(this, 4.7);
    }
    get size() {
        return __classPrivateFieldGet(this, _Dvd_size, "f");
    }
    spin() {
        console.log("El DVD está girando");
    }
    ;
    write(data) {
        console.log("escribiendo datos");
    }
    ;
    read(filename) {
        return "Datos leídos en el DVD";
    }
    ;
    delete(filename) {
        console.log("He borrado un archivo");
    }
    ;
    toString() {
        return `DVD.\nName: ${this.name}\nSize: ${__classPrivateFieldGet(this, _Dvd_size, "f")}\n Type: ${this.type}.`;
    }
}
_Dvd_size = new WeakMap();
