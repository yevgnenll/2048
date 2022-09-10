export default class Finder {

    private readonly length: number

    constructor(length: number) {
        this.length = length
    }

    private isAvailable(arr: number[][], row: number, column: number): boolean {
        return (!(arr[row][column]) || arr[row][column] === 0)
    }

    rightLastColumn(arr: number[][], row: number): number {
        for (let i = this.length - 1; i > 0; i --) {
            if (!this.isAvailable(arr, row, i)) {
                continue
            }
            return i
        }
        return 1
    }

    exportNumber(arr: number[][], row: number): Array<number> {
        let level = Array<number>()

        for (let column = this.length - 1; column >= 0; column --) {
            if (arr[row][column] !== null && arr[row][column] !== 0) {
                level.push(arr[row][column])
            }
        }

        return level
    }

}
