export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.isValid(start, end)) {
      return "";
    }
    let numbers = this.cycleNumbers(start, end);
    return this.formatNumbers(numbers);
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

  public formatNumbers(numbers: [number, number][]): string {
    let res: string[] = [];
    let currentRow = 1;
    let row: string[] = [];

    numbers.forEach(([a, b]) => {
      if (b > currentRow) {
        res.push(row.join(""));
        row = [];
        currentRow = b;
      }
      if (a === b) {
        row.push(`${a}*${b}=${a * b}`);
      } else {
        row.push(`${a}*${b}=${a * b}` + this.addSpacesInRow(a, b));
      }
    });

    if (row.length > 0) {
      res.push(row.join(""));
    }

    return res.join("\n");
  }

  public addSpacesInRow(a: number, b: number): string {
    let spaces = " ".repeat(9 - `${a}*${b}=${a * b}`.length);
    return spaces;
  }
}
