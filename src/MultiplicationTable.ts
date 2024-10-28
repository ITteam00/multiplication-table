export class MultiplicationTable {
  public render(start: number, end: number): string{
  }

  public isValidInput(startNum:number,endNum:number):boolean{
    if (this.isValidNumber(startNum)&&this.isValidNumber(endNum)&&this.isValidRange(startNum,endNum)){
      return true
    }
    else{
      return false
    }
  }

  public isValidNumber(num:number):boolean{
    if(Number.isInteger(num)&&num>=1&&num<=10){
      return true
    }
    else{
      return false
    }

  }

  public isValidRange(startNum:number,endNum:number):boolean{
    if(startNum<=endNum){
      return true
    }
    else{
      return false
    }

  }

  public multiplicationTable(startNum:number,endNum:number):string[][]{

  }

  public multiplicationRow(startNum:number,endNumber:number):string[]{
    let res:string[]=[]
    for(let i=startNum;i<=endNumber;i++){
      res.push(`${startNum}*${i}=${startNum*i}`)
    }
  }
}
