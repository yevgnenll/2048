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
            expect(generated).toBeGreaterThanOrEqual(0)
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
        locations.find((a: Location, b: number) => {
            console.log("a", a, "index: ", b)
        })
        expect(locations.length).toEqual(4)

        expect(locations.find(() => new Location(1, 1))).toBeTruthy()
        expect(locations.find(() => new Location(1, 2))).toBeTruthy()
        expect(locations.find(() => new Location(2, 0))).toBeTruthy()
        expect(locations.find(() => new Location(3, 1))).toBeTruthy()
    })

    it('retry 4', () => {
        let arr = [
            [2, 8, 4, 16],
            [4, 0, 0, 4],
            [0, 8, 1024, 4],
            [4, 0, 1024, 4],
        ]

        // first
        let emptyLocations = generator.exportNotAssignedLocation(arr)
        expect(emptyLocations).toEqual([
            new Location(1, 1),
            new Location(1, 2),
            new Location(2, 0),
            new Location(3, 1),
        ])


        let pickedIndex = generator.generateNumberByMax(emptyLocations.length-1)
        let emptyLocationOne = emptyLocations[pickedIndex]

        arr[emptyLocationOne.row][emptyLocationOne.column] = 2

        // second
        console.log('second')
        emptyLocations = generator.exportNotAssignedLocation(arr)
        expect(emptyLocations.length).toEqual(3)

        console.log('empty locations', emptyLocations)
        pickedIndex = generator.generateNumberByMax(emptyLocations.length-1)
        // 3

        emptyLocationOne = emptyLocations[pickedIndex]
        console.log('empty location', emptyLocationOne, 'picked: ', pickedIndex, 'empty len', emptyLocations.length)

        arr[emptyLocationOne.row][emptyLocationOne.column] = 2

        // third
        console.log('third')
        emptyLocations = generator.exportNotAssignedLocation(arr)
        console.log('empty location', emptyLocationOne, 'picked: ', pickedIndex, 'empty len', emptyLocations.length)
        expect(emptyLocations.length).toEqual(2)


        pickedIndex = generator.generateNumberByMax(emptyLocations.length-1)
        emptyLocationOne = emptyLocations[pickedIndex]

        console.log('empty location', emptyLocationOne, 'picked: ', pickedIndex, 'empty len', emptyLocations.length)
        arr[emptyLocationOne.row][emptyLocationOne.column] = 2

        // 4th
        console.log('4th')
        emptyLocations = generator.exportNotAssignedLocation(arr)
        console.log('empty location', emptyLocationOne, 'picked: ', pickedIndex, 'empty len', emptyLocations.length)
        expect(emptyLocations.length).toEqual(1)
    })

})
