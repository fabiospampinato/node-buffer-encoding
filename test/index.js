
/* IMPORT */

import {describe} from 'fava';
import Encoding from '../dist/index.js';

/* MAIN */

describe ( 'Encoding', it => {

  it ( 'encodes an Uint8Array with the given encoding', t => {

    const result = Encoding.encode ( new Uint8Array ([ 0, 255 ]), 'hex' );

    t.is ( result, '00ff' );

  });

  it ( 'encodes a string with the given encoding', t => {

    const result = Encoding.encodeStr ( 'hello', 'base64' );

    t.is ( result, 'aGVsbG8=' );

  });

  it ( 'decodes a string with the given encoding to an Uint8Array', t => {

    const result = Encoding.decode ( '00ff', 'hex' );;

    t.deepEqual ( result, new Uint8Array ([ 0, 255 ]) );

  });

  it ( 'decodes a string with the given encoding to a string', t => {

    const result = Encoding.decodeStr ( 'aGVsbG8=', 'base64' );

    t.is ( result, 'hello' );

  });

});
