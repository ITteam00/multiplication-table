export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.isValid(start, end)) {
      return "";
    }
    let numbers = this.cycleNumbers(start, end);
    let lengths = this.countLinePadEndLengths(start, end);
    return this.formatNumbers(numbers, lengths);
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

  public formatNumbers(numbers: [number, number][], lengths: number[]): string {
    let res: string[] = [];

    let row: string[] = [];
    let currentLine = 1;

    numbers.forEach(([a, b]) => {
      if (a === b) {
        row.push(`${a}*${b}=${a * b}`);
        res.push(row.join(""));
        row = [];
        currentLine = 1;
      } else {
        row.push(
          `${a}*${b}=${a * b}`.padEnd(lengths[currentLine - 1] + 2, " ")
        );
        currentLine++;
      }
    });

    if (row.length > 0) {
      res.push(row.join(""));
    }

    return res.join("\n");
  }

  public countLinePadEndLengths(start: number, end: number): number[] {
    let result: number[] = [];
    for (let i = start; i <= end; i++) {
      let number = `${i}*${end}=${i * end}`.length;
      result.push(number);
    }
    console.log(result);
    return result;
  }
}
