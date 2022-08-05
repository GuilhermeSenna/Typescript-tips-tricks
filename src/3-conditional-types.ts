type Animal = {
    name: string;
}

type Human = {
    firstName: string;
    lastName: string;
}


// Logic in Javascript
// if(TType instanceof Animal) {
//     return {
//         age: 12,
//     }
// } else{
//     return {
//         socialSecurityNumber: number
//     }
// }


// Like a function
// GetRequiredInformation is the function
// TType is the argument for that function
// type GetRequiredInformation<TType> = TType extends Animal
//     ? { age: number }
//     : {
//         socialSecurityNumber: number
//     };

type GetRequiredInformation<TType> = TType extends Animal
    ? { age: number }
    : TType extends Human
    ? {
        socialSecurityNumber: number
    }
    : never;

export type RequiredInformationForAnimal =
    GetRequiredInformation<Animal>;

export type RequiredInformationForHuman =
    GetRequiredInformation<Human>;


export type RequiredInformationForAlien =
    GetRequiredInformation<{
        planet: string;
    }>;
