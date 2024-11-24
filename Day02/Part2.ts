import "../utils/index.ts"
const input = await Deno.readTextFile("./Day02/input.txt");

const ints = input
    .split(",")
    .map(Number);

let answer = 0;
for (let noun = 0; noun <= 99; noun++)
for (let verb = 0; verb <= 99; verb++) {
    
    const intsRun = [...ints];

    intsRun.splice(1, 1, noun)
    intsRun.splice(2, 1, verb)

    let shouldRun = true;
    let currentIdx = 0;
    while (shouldRun) {

        const currentValue = intsRun[currentIdx]

        switch (currentValue) {
            case 1:
                {
                    const values = intsRun.slice(currentIdx + 1, currentIdx + 4)
                    intsRun.splice(values[2], 1, intsRun[values[0]] + intsRun[values[1]])
                    currentIdx += 4
                    break;
                }
            case 2:
                {
                    const values = intsRun.slice(currentIdx + 1, currentIdx + 4)
                    intsRun.splice(values[2], 1, intsRun[values[0]] * intsRun[values[1]])
                    currentIdx += 4
                    break;
                }
            case 99:
                shouldRun = false;
                break;
        }
    }

    if (intsRun[0] === 19690720) {
        answer = 100 * noun + verb
        break;
    }

}

console.log(answer)