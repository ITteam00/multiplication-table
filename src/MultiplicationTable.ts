export class MultiplicationTable {
  public render(start: number, end: number): string{
    this.multiplicationTable(start,end)
  }

  public isValidInput(startNum:number,endNum:number):boolean{
    if (this.isValidNumber(startNum)&&this.isValidNumber(endNum)&&this.isValidRange(startNum,endNum)){
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
