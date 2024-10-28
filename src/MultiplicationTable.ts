export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1';
  }
  public isCorrectOrder(start: number, end: number): boolean{
    if(start > end)
    {
      return false;
    }
    return true;
  }
  public isRangeInTen(validNum: number): boolean{
    if(validNum < 1 || validNum >10)
    {
      return false;
    }
    return true;
  }
  public isvalid(start: number, end: number): boolean{
    if(this.isCorrectOrder(start, end) && 
    this.isRangeInTen(start) &&
    this.isRangeInTen(end))
    {
      return true;
    }
    return false;
  }

  public generateMultiplicationEquation(multiplerRow: number, multiplerColumn: number): string{
    return `${multiplerRow}*${multiplerColumn}=${multiplerRow*multiplerColumn}`;
  }

  public generateMultiplicationRow(start: number, rowMultiplier: number): string{
    const multiplicationRow: string[] = [];
    for(let i = start; i <= rowMultiplier; i++){
      let multiplicationNum: string = this.generateMultiplicationEquation(start, i);
      multiplicationRow.push(multiplicationNum);
    }
  }
}
