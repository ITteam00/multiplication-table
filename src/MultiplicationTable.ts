export class MultiplicationTable {
  public render(start: number, end: number): string {
    return "1*1=1";
  }

  public isValid(start: number, end: number): boolean {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end;
  }

  public cycleNumbers(start: number, end: number): [number, number][] {
    let numbers: [number, number][] = [];
    for (let i = start; i <= end; i++) {
      for (let j = start; j <= i; j++) {
        numbers.push([j, i]);
      }
    }
    return numbers;
  }

  public formatNumbers(numbers: string[]): string {
    return "";
  }
}
