const bufferSize = 26;
const buffer1 = Buffer.alloc(bufferSize);
for(var i=0; i<bufferSize; i++){
    buffer1[i] = i+97;
}

//output a~z
console.log(buffer1.toString('ascii'));

var buffer2Json = buffer1.toJSON();
console.log(buffer2Json);
