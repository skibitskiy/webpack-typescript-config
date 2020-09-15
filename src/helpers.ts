function multiply(nums: Array<number>): number {
    return nums.reduce((res, next) => res * next)
}

function sum(nums: Array<number>): number {
    return nums.reduce((res, next) => res + next)
}

export {
    multiply,
    sum
}
