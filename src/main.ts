import { Cd } from "./cd.js";
import { Dvd } from "./dvd.js";

const cd1 = new Cd("cd1", "CD-R");
const dvd1 = new Dvd("dvd1", "4");

cd1.spin();
console.log(cd1.read("cancion mp3"));
cd1.write("datos cd");
console.log(cd1.toString());

dvd1.spin();
console.log(dvd1.read("cancion mp3"));
dvd1.write("datos cd");
console.log(dvd1.toString());