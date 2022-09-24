import Finder from "./Finder"
import Calculator from "./Calculator";
import NumberGenerator from "./NumberGenerator";

class Board {

    // @ts-ignore
    private arr: number[number[]];
    private readonly width: number;
    private readonly height: number;
    private readonly finder: Finder
    private calculator: Calculator
    private randomGenerator: NumberGenerator

    constructor(length: number) {
        this.width = length;
        this.height = length;
        this.event();
        this.init();
        this.finder = new Finder(length)
        this.calculator = new Calculator(length, this.finder)
        this.randomGenerator = new NumberGenerator()
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
        for (let row = 0; row < this.width; row ++) {
            let onlyNumberList = this.finder.exportNumber(this.arr, row)
            let calculatedList = this.calculator.rightEventSumReduce(onlyNumberList)

            this.calculator.assignValueRightEvent(this.arr, calculatedList, row)
        }

        this.randomGenerator.assignRandom(this.arr)
        this.drawArrayToHtml()
    }

    drawArrayToHtml() {
        for (let row = 0; row < this.height; row ++) {
            for (let col = 0; col < this.width; col ++) {
                this.modifyHtmlRightEvent(row, col)
            }
        }
    }

    modifyHtmlRightEvent(row: number, column: number) {
        let id = this.buildCellId(row, column)
        let cell = document.getElementById(id)!!;
        let value = document.querySelector("#" + id + " > .value")
        cell.removeChild(value)

        let newValue = this.createElementAddClassName('div', 'value')
        newValue.innerHTML = this.arr[row][column]
        cell.appendChild(newValue)
    }

    buildCellId(row: number, column: number): string {
        return 'id' + row + '_' + column
    }

    drawBoard(id: String) {
        let root = document.querySelector('#' + id);
        let board = this.createElementAddClassName('div', 'board');

        for (let i = 0; i < this.width; i++) {
            let row = this.createElementAddClassName('div', 'board-row');
            for (let j = 0; j < this.height; j ++) {
                let cell = this.createElementAddClassName('div', 'cell');
                cell.id =  this.buildCellId(i, j)

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

    private addClassName(htmlElement: HTMLElement, className: string[]): HTMLElement {
        className.forEach(name => {
            htmlElement.classList.add(name)
        })
        return htmlElement
    }

}

export default Board;