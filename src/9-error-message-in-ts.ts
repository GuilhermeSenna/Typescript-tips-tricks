export const deepEqualCompare = <Arg>(
    a: Arg extends any[] ? `Don't pass an array!` : Arg,
    b: Arg extends any[] ? `Don't pass an array!` : Arg,
): boolean => {
    // if (Array.isArray(a) || Array.isArray(b)) {
    //     throw new Error(
    //         "You cannot compare two arrays using deepEqualCompare"
    //     );
    // }
    return a === b;
}

// Custom message error on hover
console.log(deepEqualCompare('a', 'b'));
console.log(deepEqualCompare([], []));

