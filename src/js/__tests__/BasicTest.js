let arr = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'лучник', health: 10 },
]

test('should arr', () => {
    const received = arr;
    let arrClone = Array.from(arr);
    arrClone.sort(function (a, b) {
        return b.health - a.health;
    });
    const expected = arrClone;
    expect(received).toEqual(expected);
})


