export class MultiplicationTable {
  public inBoundary(value: number): boolean {
    return value >= 1 && value <= 10;
  }
  
  public isValid(start: number, end: number): boolean {
    if (start > end) return false;
    if (!this.inBoundary(start) || !this.inBoundary(end)) {
      return false;
    }
    return true;
  }
  public render(start: number, end: number): string{
    let renderReslut: string = "";
    if (this.isValid(start, end)) return renderReslut; 
    return renderReslut;
  }
}
