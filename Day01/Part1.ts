import "../utils/index.ts"
const input = await Deno.readTextFile("./Day01/input.txt");

const answer = input
    .splitLb()
    .map(Number)
    .map(mass => Math.floor(mass / 3) - 2)
    .sum()

console.log(answer)