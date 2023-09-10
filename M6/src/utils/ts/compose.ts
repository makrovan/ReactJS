
//not debugged!!!
export function compose <U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

//не типизирована
//альтернатива: ramdajs.com
export function pipe<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

//Example:
//onChange = {preventDefault(stopPropagation(getValue(onChange)))}
//onChange = {compose(onChange, getValue, stopPropagation, preventDefault)}
//onChange = {pipe(preventDefault, stopPropagation, getValue, onChange)}

export function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}
//const some = pick('value')({value: 1}) // -> 1

export function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

export function cond(b: boolean){
    return !b;
}

//EXAMPLE:
const comments = [{id: 22, text: 'comment1'}, {id: 33, text: 'comment2'}];
// const filteredComments = comments.filter(({id}) => id !==22 );
// const filteredComments = comments.filter(pipe(pick('id'), isEqual(22), cond));
const filterWithoutId = (id: number) => pipe(pick('id'), isEqual(id), cond);
const filteredComments = comments.filter(filterWithoutId(22));
const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id));
const filteredWithId22 = comments.filter(createFilterBy('id')(22));

//в функциональном программировании наследование заменяется на композиции
//собираем из функций как из кубиков композицию