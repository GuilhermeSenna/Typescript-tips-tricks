export const getDeepValue = (
    obj: any,
    firstKey: string,
    secondKey: string
) => {
    return obj[firstKey][secondKey]
}

const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: "12",
        d: 18,
    },
};

const value = getDeepValue(obj, "foo", "b");

typeof value === 'number';
