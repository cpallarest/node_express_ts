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
var _opticalDisk_name, _opticalDisk_file, _opticalDisk_type;
export class opticalDisk {
    constructor(name, type) {
        _opticalDisk_name.set(this, void 0);
        _opticalDisk_file.set(this, []);
        _opticalDisk_type.set(this, void 0);
        __classPrivateFieldSet(this, _opticalDisk_name, name, "f");
        __classPrivateFieldSet(this, _opticalDisk_type, type, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _opticalDisk_name, "f");
    }
    set name(name) {
        __classPrivateFieldSet(this, _opticalDisk_name, name, "f");
    }
    get file() {
        return __classPrivateFieldGet(this, _opticalDisk_file, "f");
    }
    set file(file) {
        __classPrivateFieldSet(this, _opticalDisk_file, file, "f");
    }
    get type() {
        return __classPrivateFieldGet(this, _opticalDisk_type, "f");
    }
    set type(type) {
        __classPrivateFieldSet(this, _opticalDisk_type, type, "f");
    }
}
_opticalDisk_name = new WeakMap(), _opticalDisk_file = new WeakMap(), _opticalDisk_type = new WeakMap();
