export const expectInAnyOrderNested = (answer: unknown[][], result: unknown[][]) => expect(answer.every(numberSet =>
    result.findIndex((el) => numberSet.every(char => el.includes(char))) !== -1)).toBeTruthy()


export const expectInAnyOrder = (answer: unknown[], attempt: unknown[]) => expect(answer.every(answer => attempt.includes(answer))).toBeTruthy()
