import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
const base64Image = await qrcode("bobob"); // data:image/gif;base64,...

const encoder = new TextEncoder()
const data = encoder.encode(`<img src="${base64Image}"/>`)
await Deno.writeFile('deno-qr-code', data)