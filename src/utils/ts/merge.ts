export function merge<O extends object>(obj1: O) {
    return <O extends object>(obj2: O) => ({
       ...obj1,
       ...obj2
    });
}