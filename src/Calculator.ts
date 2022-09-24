import Finder from "./Finder"
import Pop from "./Pop"

class Calculator {

    private readonly length
    private readonly finder

    constructor(length: number, finder: Finder) {
        this.length = length
        this.finder = finder
    }

    private isZero(array: number[]): Boolean {
        let sum = 0
        for (let i = 0; i < array.length; i ++) {
            sum += array[i]
        }
        return sum === 0
    }


    /**
     * levelList has no zero
     * @param levelList
     */
    rightEventSumReduce(levelList: number[]): Array<number> {
        let result = Array<number>()

        if (this.isZero(levelList)) {
            return result
        }

        for(let i = levelList.length - 1 ; i >= 0; i --) {
            if (levelList[i] === 0) {
                continue
            }
            if (levelList[i] !== levelList[i-1]) {
                result.push(levelList[i])
                continue
            }

            // sum because of same
            result.push(levelList[i] * 2)
            levelList[i-1] = 0
        }

        return result.reverse()
    }

    assignValueRightEvent(arr: number[][], calculated: number[], row: number) {
        for(let i = this.length - 1; i >= 0; i --) {
            let pop = this.rightPop(calculated)
            arr[row][i] = pop.popValue
            calculated = pop.calculated
        }

        let lastIndex = this.finder.getLastColumnRight(arr, row)
        for (let i = 0; i <= lastIndex; i ++) {
            arr[row][i] = 0
        }
    }

    rightPop(calculated: number[]): Pop {
        let index = calculated.length - 1
        let result = calculated[index]
        let sliced = calculated.slice(0, index)

        return new Pop(result, sliced)
    }

}

export default Calculator
