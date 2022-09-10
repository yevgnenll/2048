import Location from "./Location";

class NumberGenerator {

    constructor() {
    }

    generateInitValue(): number {
        return this.generateNumberByMax(999) % 2 == 0 ? 2 : 4
    }

    generateNumberByMax(max: number) {
        return Math.floor(Math.random() * max)
    }

    assignRandom(arr: number[][]) {
        let locations = this.exportNotAssignedLocation(arr)
        let pickedLocation = locations[this.generateNumberByMax(locations.length)]

        arr[pickedLocation.row][pickedLocation.column] = this.generateInitValue()
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
        console.log('assign', arr)
        return result
    }

}

export default NumberGenerator