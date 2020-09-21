/// <reference path="helpers.d.ts" />

const themes: { day: theme, night: theme } = {
    day: {
        fontColor: '#000',
        mainBgColor: '#f0f0f0',
        elementBgColor: '#f5f5f5',
        headerColor: '#6d6d6d'
    },
    night: {
        fontColor: '#e8eaf6',
        mainBgColor: '#000051',
        elementBgColor: '#3f51b5',
        headerColor: '#aab6fe'
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
