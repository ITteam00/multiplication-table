export class MultiplicationTable {
  public isCorrectOrder(start: number, end: number): boolean {
    if (start > end) {
      return false;
    }
    return true;
  }
  public isRangeInTen(validNum: number): boolean {
    if (validNum < 1 || validNum > 10) {
      return false;
    }
    return true;
  }
  public isvalid(start: number, end: number): boolean {
    if (
      this.isCorrectOrder(start, end) &&
      this.isRangeInTen(start) &&
      this.isRangeInTen(end)
    ) {
      return true;
    }
    return false;
  }

  public generateMultiplicationEquation(
    multiplerRow: number,
    multiplerColumn: number
  ): string {
    return `${multiplerRow}*${multiplerColumn}=${
      multiplerRow * multiplerColumn
    }`;
  }

  public generateMultiplicationRow(
    start: number,
    rowMultiplier: number
  ): string[] {
    let multiplicationRow: string[] = [];
    for (let i = start; i <= rowMultiplier; i++) {
      let multiplicationNum: string = this.generateMultiplicationEquation(
        start,
        i
      );
      multiplicationRow.push(multiplicationNum);
    }
    return multiplicationRow;
  }

  public generateMultiplicationTable(start: number, end: number): string[][] {
    let multiplicationTable: string[][] = [];
    for (let i = start; i <= end; i++) {
      let multiplicationRow: string[] = this.generateMultiplicationRow(
        start,
        i
      );
      multiplicationTable = [...multiplicationTable, multiplicationRow];
    }
    return multiplicationTable;
  }
  public render(start: number, end: number): string {
    if (!this.isvalid(start, end)) {
      return "";
    }

  }

  public renderMultiplicationTable(multiplicationTable: string[][]): string {
    let table: string = "";
    for (let i = 0; i < multiplicationTable.length; i++) {
      for (let j = 0; j < multiplicationTable[i].length; j++) {
        table += multiplicationTable[i][j];
        table += "\t";
        if (j < multiplicationTable[i].length - 1) {
          table += "\n";
        }
      }
    }
    return table;
  }
}
