import "../utils/index.ts"
const input = await Deno.readTextFile("./Day01/input.txt");

const answer = input
    .splitLb()
    .map(Number)
    .map(mass => {
        let totalFuel = 0;
        let currentMass = mass;

        while (true) {
            currentMass = Math.floor(currentMass / 3) - 2
            if (currentMass > 0) {
                totalFuel += currentMass
            } else {
                break;
            }
        }

        return totalFuel
    })
    .sum()

console.log(answer)