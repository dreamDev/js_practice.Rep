function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.toUpperCase();
}


interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

// Определяем потенциально возможные вызовы функции position
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

// a и b не обязательные параметры, поэтому ставим знак ?
function position(a?: number, b?:number) {
    if (!a && !b) return {x: undefined, y: undefined}
    if (a && !b) return {x: a, y: undefined, default: a.toString()}
    return {x: a, y: b}
}

console.log("Empty:", position());
console.log("One param:", position(42));
console.log("Two params:", position(10, 25));
