/**
 * Like pair data structure
 * popValue is popped number
 * calculated is removed pop item list
 */
class Pop {

    protected _popValue: number
    private readonly _calculated: number[]

    constructor(popValue: number, calculated: number[]) {
        this._popValue = popValue
        this._calculated = calculated
    }

    get calculated(): number[] {
        return this._calculated;
    }
    get popValue(): number {
        return this._popValue;
    }

}

export default Pop