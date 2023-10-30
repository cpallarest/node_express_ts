var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Disco_nombre, _Disco_contenido, _Disco_tipo;
export class Disco {
    constructor(nombre, contenido, tipo) {
        _Disco_nombre.set(this, void 0);
        _Disco_contenido.set(this, void 0);
        _Disco_tipo.set(this, void 0);
        __classPrivateFieldSet(this, _Disco_nombre, nombre, "f");
        __classPrivateFieldSet(this, _Disco_contenido, contenido, "f");
        __classPrivateFieldSet(this, _Disco_tipo, tipo, "f");
    }
    girar() {
        console.log("El disco está girando.");
    }
    almacenarDatos(dato) {
        __classPrivateFieldSet(this, _Disco_contenido, dato, "f");
        console.log("Datos almacenados en el disco.");
    }
    leerDatos() {
        return __classPrivateFieldGet(this, _Disco_contenido, "f");
    }
    obtenerInformacion() {
        console.log(`Nombre: ${__classPrivateFieldGet(this, _Disco_nombre, "f")}, Tipo: ${__classPrivateFieldGet(this, _Disco_tipo, "f")}, Contenido: ${__classPrivateFieldGet(this, _Disco_contenido, "f")}`);
    }
}
_Disco_nombre = new WeakMap(), _Disco_contenido = new WeakMap(), _Disco_tipo = new WeakMap();
