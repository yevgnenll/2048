class Calculator {

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

}

export default Calculator