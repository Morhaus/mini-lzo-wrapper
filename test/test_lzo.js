var lzo = require('../build/Release/lzo.node');
var assert = require('assert');

var data, input, output, compressedLen, compressed, decompressedLen, decompressed;

data = "hello world";

input = new Buffer("hello world");
output = new Buffer(100);

compressedLen = lzo.compress(input, output);
compressed = output.slice(0, compressedLen);

input = compressed;
output = new Buffer(100);

decompressedLen = lzo.decompress(input, output);
decompressed = output.slice(0, decompressedLen);

assert.equal(data, decompressed.toString());
