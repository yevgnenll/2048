import NumberGenerator from "../src/NumberGenerator";
import { it, describe, expect } from "vitest";
import Location from "../src/Location";

let generator = new NumberGenerator()

describe('generate value', () => {
    it('random must be 2 or 4', () => {
        for (let i = 0; i < 100; i ++) {
            let generated = generator.generateInitValue()

            expect(generated).toBeGreaterThanOrEqual(2)
            expect(generated).toBeLessThanOrEqual(4)
            expect(generated).not.toEqual(3)
        }
    })

    it('random must be less than equals max', () => {
        for (let i = 0; i < 100; i ++) {
            let generated = generator.generateNumberByMax(10)
            expect(generated).toBeLessThanOrEqual(10)
        }
    })
})

describe('assign random number only empty location', () => {

    it('get index', () => {
        let arr = [
            [2, 8, 4, 16],
            [4, 0, 0, 4],
            [0, 8, 1024, 4],
            [4, 0, 1024, 4],
        ]

        let locations = generator.exportNotAssignedLocation(arr)
        expect(locations.length).toEqual(4)

        expect(locations.find(() => new Location(1, 1))).toBeTruthy()
        expect(locations.find(() => new Location(1, 2))).toBeTruthy()
        expect(locations.find(() => new Location(2, 0))).toBeTruthy()
        expect(locations.find(() => new Location(3, 1))).toBeTruthy()

    })

})
