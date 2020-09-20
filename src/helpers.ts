/// <reference path="helpers.d.ts" />

const themes: { day: theme, night: theme } = {
    day: {
        fontColor: '#000',
        mainBgColor: '#f0f0f0',
        elementBgColor: '#e8e8e8'
    },
    night: {
        fontColor: '#9fa8da',
        mainBgColor: '#000051',
        elementBgColor: '#534bae'
    }
}

function multiply(nums: Array<number>): number {
    return nums.reduce((res, next) => res * next)
}

function sum(nums: Array<number>): number {
    return nums.reduce((res, next) => res + next)
}

export {
    themes,
    multiply,
    sum
}
