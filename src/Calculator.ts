import Finder from "./Finder"
import Pop from "./Pop"

class Calculator {

    private readonly length
    private readonly finder

    constructor(length: number, finder: Finder) {
        this.length = length
        this.finder = finder
    }

    /**
     * levelList has no zero
     * @param levelList
     */
    rightEventReduce(levelList: number[]): Array<number> {
        let result = Array<number>()

        for(let i = levelList.length - 1 ; i >= 0; i --) {
            if (levelList[i] !== levelList[i-1]) {
                result.push(levelList[i])
                continue
            }

            result.push(levelList[i] * 2)
            levelList[i-1] = 0
            i --
        }

        return result.reverse()
    }

    assignValueRightEvent(arr: number[][], calculated: number[], row: number) {
        let lastIndex = this.finder.getLastColumnRight(arr, row)

        for(let i = this.length - 1; i >= 0; i --) {
            let pop = this.rightPop(calculated)
            arr[row][i] = pop.popValue
            calculated = pop.calculated
        }

        lastIndex = this.finder.getLastColumnRight(arr, row)
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
