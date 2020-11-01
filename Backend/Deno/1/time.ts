import {
  parseDate,
  parseDateTime,
} from "https://deno.land/std/datetime/mod.ts";

const a = parseDate("20-01-2019", "dd-mm-yyyy"); // output : new Date(2019, 0, 20)
const b = parseDate("2019-01-20", "yyyy-mm-dd"); // output : new Date(2019, 0, 20)

console.log(a, b);
