export class MultiplicationTable {
  public render(start: number, end: number): string {
    let res = ""
    let multiplicationList = this.multiplicationTable(start, end)
    let padCount: number[] = []
    for (let i = 0; i < multiplicationList.length; i++) {
      padCount.push(multiplicationList[multiplicationList.length - 1][i].length)
    }
    for (let i = 0; i < multiplicationList.length; i++) {
      for (let j = 0; j < multiplicationList[i].length; j++) {
        if (j < i) {
          res += multiplicationList[i][j].padEnd(padCount[j] + 2, ' ')
        }
        else {
          res += multiplicationList[i][j]
        }
      }
      if (i < multiplicationList.length - 1) {
        res += '\n'
      }
    }
    return res
  }

  public isValidInput(startNum: number, endNum: number): boolean {
    if (this.isValidNumber(startNum) && this.isValidNumber(endNum) && this.isValidRange(startNum, endNum)) {
      return true
    }
    else {
      return false
    }
  }

  public isValidNumber(num: number): boolean {
    if (Number.isInteger(num) && num >= 1 && num <= 10) {
      return true
    }
    else {
      return false
    }
  }

  public isValidRange(startNum: number, endNum: number): boolean {
    if (startNum <= endNum) {
      return true
    }
    else {
      return false
    }
  }

  public multiplicationTable(startNum: number, endNum: number): string[][] {
    let res: string[][] = []
    if (this.isValidInput(startNum, endNum)) {
      for (let i = startNum; i <= endNum; i++) {
        res.push(this.multiplicationRow(startNum, i))
      }
    }
    return res
  }

  public multiplicationRow(startNum: number, endNumber: number): string[] {
    let res: string[] = []
    for (let num = startNum; num <= endNumber; num++) {
      res.push(`${num}*${endNumber}=${endNumber * num}`)
    }
    return res
  }
}
