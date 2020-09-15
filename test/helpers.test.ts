const { multiply, sum } = require('../src/helpers.ts');

test('Multiple 4 and 5 equals 20', () => {
    expect(multiply([4, 5])).toBe(20);
});

test('Sum 10 and 22 equal 32', () => {
    expect(sum([10, 22])).toBe(32);
})
