export const expectInAnyOrderNested = (answer: unknown[][], result: unknown[][]) => expect(answer.every(numberSet =>
    result.findIndex((el) => numberSet.every(char => el.includes(char))) !== -1)).toBeTruthy()


export const expectInAnyOrder = (answer: unknown[], result: unknown[]) => expect(answer.every(answer => result.includes(answer))).toBeTruthy()