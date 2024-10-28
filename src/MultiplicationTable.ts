export class MultiplicationTable {
  public render(start: number, end: number): string {
    return "1*1=1";
  }

  public isValid(start: number, end: number): boolean {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end;
  }

  public cycleNumbers(start: number, end: number): string[] {
    let numbers: string[] | undefined = [];
    for (let i = start; i <= end; i++) {
      for (let j = i; j <= end; j++) {
        numbers.push(`${i} * ${j} = ${i * j}`);
      }
    }
    return numbers;
  }
}
