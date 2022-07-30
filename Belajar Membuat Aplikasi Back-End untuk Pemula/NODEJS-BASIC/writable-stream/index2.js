const fs = require('fs');
 
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end();

// Method end() digunakan untuk menandakan akhir dari writable stream sekaligus bisa digunakan sebagai penulisan writeable terakhir
// writableStream.end('Akhir dari writable stream!');