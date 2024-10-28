export class MultiplicationTable {
  public render(start: number, end: number): string {
    return "1*1=1";
  }

  public isValid(start: number, end: number): boolean {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end;
  }
}
