import { expectType } from 'tsd'
import { typedParams, Animal } from '.';

let val: typedParams<string, Animal> = {
    color: 'red',
    name: 'Johny'
};
type assertType = {
    name?: string;
    color?: string;
    legs?: never;
} 

expectType<assertType>(val);
