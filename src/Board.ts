import Finder from "./Finder"

class Board {

    // @ts-ignore
    private arr: number[number[]];
    private readonly width: number;
    private readonly height: number;
    private finder: Finder

    constructor(length: number) {
        this.width = length;
        this.height = length;
        this.event();
        this.init();
        this.finder = new Finder(length)
        console.log('init', this.arr)
    }

    init() {
        this.arr = [];
        for (let i = 0; i < this.width; i++) {
            this.arr[i] = [];
            for (let j = 0; j < this.height; j ++) {
                this.arr[i][j] = 0
                if (i ===0 && j === 2) {
                    this.arr[i][j] = 2
                }
                if (i === 1 && j === 3) {
                    this.arr[i][j] = 24
                }
                if (i === 1 && j === 2) {
                    this.arr[i][j] = 24
                }
            }
        }
    }

    arrowRight() {
        for (let i = 0; i < this.width; i ++) {
            let levelList = this.finder.exportNumber(this.arr, i)

            for (let lv = levelList.length - 1 ; lv > 0; lv --) {
                if (!(levelList) || levelList[lv] === 0) {
                    continue
                }

                if (lv > 0 && levelList[lv-1] == levelList[lv]) {
                    let lastIndex = this.finder.rightLastColumn(this.arr, i)
                    this.arr[i][lastIndex] = levelList[lv] * 2
                    levelList[lv] = 0
                    levelList[lv-1] = 0
                    console.log('arr', this.arr, i, lastIndex) // 1, 1이 왜 찍힘? // 1, 3 이 찍혀야함

                    this.assignValue(i, lastIndex, this.arr[i][lastIndex])
                    this.assignValue(i, lastIndex-1, 0)
                }
            }
        }
    }

    assignValue(row: number, column: number, calculated: number) {
        let id = this.buildId(row, column)
        console.log('assign start ---', id)
        let cell = document.querySelector(id)!!;
        console.log('assign', cell)
        cell.innerHTML = String(calculated)
        let value = cell.querySelector(id + ' > .value')!!
        console.log('cacul', calculated)
        // value.setAttribute("value", String(calculated))
        value.innerHTML = String(calculated)
    }

    moveLast() {

    }

    buildId(row: number, column: number): String {
        return '#id' + row + '_' + column
    }

    drawBoard(id: String) {
        var root = document.querySelector('#' + id);
        var board = this.createElementAddClassName('div', 'board');

        for (let i = 0; i < this.width; i++) {
            var row = this.createElementAddClassName('div', 'board-row');
            for (let j = 0; j < this.height; j ++) {
                var cell = this.createElementAddClassName('div', 'cell');
                cell.id =  this.buildId(i, j)

                const value = this.createElementAddClassName('div', 'value');
                value.innerText = (this.arr)[i][j];
                value.dataset.value = (this.arr)[i][j];

                cell.innerHTML = i +"-"+ j;
                cell.appendChild(value)
                row.appendChild(cell)
            }
            board.appendChild(row);
        }
        root.appendChild(board);
    }

    event() {
        window.addEventListener('keydown', (event) => {
            console.log('event', event.key)
            if (event.key === 'ArrowDown') {

            }
            if (event.key === 'ArrowRight') {
                this.arrowRight()
            }
        })
    }

    arrowDown() {

    }

    createElementAddClassName(tagName: string, className: string): HTMLElement {
        let element = this.createElementAddClassNames(tagName, [className])
        return element
    }

    createElementAddClassNames(tagName: string, className: string[]): HTMLElement {
        let element = document.createElement(tagName);
        this.addClassName(element, className)
        return element;
    }

    addClassName(htmlElement: HTMLElement, className: string[]): HTMLElement {
        className.forEach(name => {
            htmlElement.classList.add(name)
        })
        return htmlElement
    }

}

export default Board;