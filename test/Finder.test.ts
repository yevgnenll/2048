import Finder from "../src/Finder"
import { it, describe, expect } from "vitest";

let finder = new Finder(4);

describe('find last', () => {
    let arr = [
        [0, 0, 0, 0],
        [0, 0, 0, 2],
    ]
    it('return 3', () => {
        let index = finder.rightLastColumn(arr, 0)
        expect(index).toEqual(3)
    })

    it('return 2', () => {
        let index = finder.rightLastColumn(arr, 1)
        expect(index).toEqual(2)
    })
})

describe('export only numbers', () => {

    let arr = [
        [0, 24, 0, 24],
        [8, 0, 0, 8],
        [4, 4, 4, 4],
        [2, 0, 0, 0],
        [0, 0, 0, 16],
    ]

    it('return [24, 24]', () => {
        let level = finder.exportNumber(arr, 0)
        expect(level).toEqual([24, 24])
    })

    it('return [8, 8]', () => {
        let level = finder.exportNumber(arr, 1)
        expect(level).toEqual([8, 8])
    })

    it('return [4, 4, 4, 4]', () => {
        let level = finder.exportNumber(arr, 2)
        expect(level.length).toEqual(4)
        expect(level).toEqual([4, 4, 4, 4])
    })

    it('return [2]', () => {
        let level = finder.exportNumber(arr, 3)
        expect(level).toEqual([2])
    })

    it('return [16]', () => {
        let level = finder.exportNumber(arr, 4)
        expect(level).toEqual([16])
    })

})
