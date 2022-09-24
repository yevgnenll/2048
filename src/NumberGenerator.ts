import Location from "./Location";

class NumberGenerator {

    constructor() {
    }

    generateInitValue(): number {
        return this.generateNumberByMax(999) % 2 == 0 ? 2 : 4
    }

    generateNumberByMax(max: number) {
        max += 1
        return Math.floor(Math.random() * max)
    }

    assignRandom(arr: number[][]) {
        // find empty array
        let emptyLocations = this.exportNotAssignedLocation(arr)
        if (emptyLocations.length === 0) {
            console.log('game over')
            alert('game over')
            return
        }
        // pick an item from empty location
        let index = this.generateNumberByMax(emptyLocations.length-1)
        let pickedLocation = emptyLocations[index]

        if (pickedLocation !== null) {
            arr[pickedLocation.row][pickedLocation.column] = this.generateInitValue()
        }
    }

    exportNotAssignedLocation(arr: number[][]): Array<Location> {
        let result = Array<Location>()
        for (let i = 0; i < arr.length; i ++) {
            for (let j = 0; j < arr[i].length; j ++) {
                if (arr[i][j] !== 0) {
                    continue
                }
                result.push(new Location(i, j))
            }
        }
        return result
    }

}

export default NumberGenerator