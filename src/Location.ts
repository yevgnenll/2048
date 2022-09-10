class Location {

    private readonly _row: number
    private readonly _column: number

    constructor(row: number, column: number) {
        this._row = row
        this._column = column
    }

    get row(): number {
        return this._row;
    }

    get column(): number {
        return this._column;
    }

    public equals(obj): boolean {
        if (this == obj) {
            return true
        }
        if (!(obj instanceof Location)) {
            return false
        }
        let object = obj as Location
        return object.row == this.row && object.column == this.column
    }

}

export default Location
