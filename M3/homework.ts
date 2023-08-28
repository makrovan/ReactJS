function concat(string1: string, string2: string): string {
    return string1 + string2;
}

concat('Hello ', 'World') // -> Hello World;

interface IMyHomeTask {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: [{
        howIDoIt: string,
        simeArray: [string, number]
    }]
}

const MyHometask: IMyHomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;

    reduce(fn: (accumulator: T, value: T, currentIndex: number, array: T[])=>T, initialValue: T): T;
}

const array: MyArray<number> = [1, 2, 3];
const initialValue = 0;
let ar = array.reduce((accumulator, value) => accumulator + value, initialValue);

// [1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6




interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}