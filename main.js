import { parose } from "./fuggveny.js";

console.log(parose(5))

/* tesztesetek */
/* 1.teszteset - szam = 0 */
console.log(`1. teszteset: szam=0 | várt=true | kapott eredmény: ${parose(0)} | ${true === parose(0)? "jó" : "hibás"}`)

/* 2.teszteset - szam = 4 */
console.log(`2. teszteset: szam=4 | várt=true | kapott eredmény: ${parose(4)} | ${true === parose(4)? "jó" : "hibás"}`)

/* 3.teszteset - szam = 5 */
console.log(`3. teszteset: szam=5 | várt=false | kapott eredmény: ${parose(5)} | ${false === parose(5)? "jó" : "hibás"}`)

/* 4.teszteset - szam = -4 */
console.log(`4. teszteset: szam=-4 | várt=true | kapott eredmény: ${parose(-4)} | ${true === parose(-4)? "jó" : "hibás"}`)

/* 5.teszteset - szam = -5 */
console.log(`5. teszteset: szam=-5 | várt=false | kapott eredmény: ${parose(-5)} | ${false === parose(-5)? "jó" : "hibás"}`)

/* 6.teszteset - szam = 2.5 */
console.log(`6. teszteset: szam=2.5 | várt=nem egész szám | kapott eredmény: ${parose(2.5)} | ${false === parose(2.5)? "jó" : "hibás"}`)

/* 7.teszteset - szam = 4000000000000000000000000000000 */
console.log(`7. teszteset: szam=4000000000000000000000000000000 | várt=true | 
kapott eredmény: ${parose(4000000000000000000000000000000)} | ${true === parose(4000000000000000000000000000000)? "jó" : "hibás"}`)

/* 8.teszteset - szam = "valami" */
console.log(`7. teszteset: szam="valami" | várt=ez nem szám | kapott eredmény: ${parose("valami")} | ${false === parose("valami")? "jó" : "hibás"}`)

/* 9.teszteset - szam =  "7" */
console.log(`7. teszteset: szam="valami" | várt=ez nem szám | kapott eredmény: ${parose("valami")} | ${false === parose("valami")? "jó" : "hibás"}`)



