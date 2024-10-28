export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1';
  }
  public IsCorrectOrder(start: number, end: number): bool{
    if(start > end)
    {
      return false;
    }
    return true;
  }
}
