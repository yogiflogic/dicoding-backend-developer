const message = (name) => {
    console.log(`Hello ${name}`);
 }

let baru = (color) => {
    console.log(`Hei This color ${color}`);
}

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);

const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
 message('JavaScript');
 baru("Greenyellow")