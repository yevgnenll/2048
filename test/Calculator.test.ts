import Calculator from "../src/Calculator"
import { it, describe, expect } from "vitest";
import Finder from "../src/Finder";

let calculator = new Calculator(4, new Finder(4))

describe('calculated List value test', () => {

    // level has no zero value in its array
    it('return [4, 4]', () => {
        let level = [2, 2, 2, 2]
        let result = calculator.rightEventSumReduce(level)
        expect(result).toEqual([4, 4])
    })

    it('return [8, 2]', () => {
        let level = [4, 4, 2]
        let result = calculator.rightEventSumReduce(level)
        expect(result.length).toEqual(2)
        expect(result).toEqual([8, 2])
    })

    it('return [2, 4], size 2', () => {
        let level = [2, 4]
        let result = calculator.rightEventSumReduce(level)

        expect(result.length).toEqual(2)
        expect(result).toEqual([2, 4])
    })

    it('return [2, 8]', () => {
        let level = [2, 4, 4]
        let result = calculator.rightEventSumReduce(level)

        expect(result.length).toEqual(2)
        expect(result).toEqual([2, 8])
    })

    it('return not changed', () => {
        let level = [2, 4, 8, 16]
        let result = calculator.rightEventSumReduce(level)

        expect(result.length).toEqual(4)
        expect(result).toEqual([2, 4, 8, 16])
    })

    it('return [16, 8, 2]', () => {
        let level = [16, 4, 4, 2]
        let result = calculator.rightEventSumReduce(level)

        expect(result.length).toEqual(3)
        expect(result).toEqual([16, 8, 2])
    })

    it('only zero filled array', () => {
        let level = [0, 0, 0, 0]
        let result = calculator.rightEventSumReduce(level)

        expect(result.length).toEqual(0)
        expect(result).toEqual([])
    })
})

describe('assign array test', () => {
    it('right pop', () => {
        let calculated = [2, 8]
        let pop = calculator.rightPop(calculated)

        expect(pop.popValue).toEqual(8)
        expect(pop.calculated.length).toEqual(1)
        expect(pop.calculated).toEqual([2])
    })


    it('0 row, [0, 0, 2, 8]', () => {
        let arr = initArray()
        let level = [2, 8]
        calculator.assignValueRightEvent(arr, level, 0)

        expect(arr).toEqual(
            [
                [0, 0, 2, 8],
                [0, 0, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        )
    })

    it('1 row, [0, 0, 0, 4]', () => {
        let arr = initArray()
        let level = [4]
        calculator.assignValueRightEvent(arr, level, 1)

        expect(arr).toEqual(
            [
                [2, 4, 4, 0],
                [0, 0, 0, 4],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        )
    })

    it('change nothing', () => {
        let arr = initArray()
        let level = []

        calculator.assignValueRightEvent(arr, level, 2)
        expect(arr).toEqual(initArray())
    })

})

function initArray(): number[][] {
    return [
        [2, 4, 4, 0],
        [0, 0, 0, 4],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
}
