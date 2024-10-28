export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
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

  }

  public isValidRange(startNum:number,endNum:number):boolean{

  }

  public multiplicationTable(startNum:number,endNum:number):string[]{
    let res:string[]=[]
    if(this.isValidInput(startNum,endNum)){
      for(let i=startNum;i++;i<=endNum){
        for(let j=i;j++;j<=endNum)
        res.push(this.multiplicationRow(i,j))
      }
    }
  }

  public multiplicationRow(startNum:number,endNumber:number):string{

  }


}
