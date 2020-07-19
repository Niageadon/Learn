import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {sub, summ} from './calc.ts'

Deno.test('summ function', () => {
    const result = summ(3, 5)
    assertEquals(result, 8);
})
Deno.test('sub function', () => {
    const result = sub(6, 1)
    assertEquals(result, 5);
})