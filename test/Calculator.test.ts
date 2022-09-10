import Calculator from "../src/Calculator"
import { it, describe, expect } from "vitest";

let calculator = new Calculator()

describe('calculator test', () => {

    // level has no zero value in its array
    it('return [4, 4]', () => {
        let level = [2, 2, 2, 2]
        let result = calculator.rightEventReduce(level)
        expect(result).toEqual([4, 4])
    })

    it('return [8, 2]', () => {
        let level = [4, 4, 2]
        let result = calculator.rightEventReduce(level)
        expect(result.length).toEqual(2)
        expect(result).toEqual([8, 2])
    })

    it('return [2, 4], size 2', () => {
        let level = [2, 4]
        let result = calculator.rightEventReduce(level)

        expect(result.length).toEqual(2)
        expect(result).toEqual([2, 4])
    })

    it('return [2, 8]', () => {
        let level = [2, 4, 4]
        let result = calculator.rightEventReduce(level)

        expect(result.length).toEqual(2)
        expect(result).toEqual([2, 8])
    })

    it('return not changed', () => {
        let level = [2, 4, 8, 16]
        let result = calculator.rightEventReduce(level)

        expect(result.length).toEqual(4)
        expect(result).toEqual([2, 4, 8, 16])
    })

})