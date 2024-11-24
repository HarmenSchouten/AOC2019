import "../utils/index.ts"
const input = await Deno.readTextFile("./Day02/input.txt");

const ints = input
    .split(",")
    .map(Number);

ints.splice(1, 1, 12)
ints.splice(2, 1, 2)

let shouldRun = true;
let currentIdx = 0;
while (shouldRun) {
    
    const currentValue = ints[currentIdx]

    switch (currentValue) {
        case 1:
            {
                const values = ints.slice(currentIdx + 1, currentIdx + 4)
                ints.splice(values[2], 1, ints[values[0]] + ints[values[1]])
                currentIdx += 4
                break;
            }
        case 2:
            {
                const values = ints.slice(currentIdx + 1, currentIdx + 4)
                ints.splice(values[2], 1, ints[values[0]] * ints[values[1]])
                currentIdx += 4
                break;
            }
        case 99:
            shouldRun = false;
            break;
    }
}

console.log(ints[0])