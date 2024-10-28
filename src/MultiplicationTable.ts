interface MultiplicationExpression {
  firstMultiplier: number;
  secondMultiplier: number;
  product: number;
}
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

  public getExpression(
    firstMultiplier: number,
    secondMultiplier: number
  ): MultiplicationExpression {
    return {
      firstMultiplier: firstMultiplier,
      secondMultiplier: secondMultiplier,
      product: firstMultiplier * secondMultiplier,
    };
  }

  public getRow(
    secondMultiplier: number,
    firstMultiplierStart: number
  ): MultiplicationExpression[] {
    const expressions: MultiplicationExpression[] = [];
    for (let first = firstMultiplierStart; first <= secondMultiplier; first++) {
      expressions.push(this.getExpression(first, secondMultiplier));
    }
    return expressions;
  }

  public getRows(start: number, end: number): MultiplicationExpression[][] {
    const expressionRows: MultiplicationExpression[][] = [];
    for (
      let secondMultiplier: number = start;
      secondMultiplier <= end;
      secondMultiplier++
    ) {
      expressionRows.push(this.getRow(secondMultiplier, start));
    }
    return expressionRows;
  }

  public renderRows(table: MultiplicationExpression[][]): string {
    const rowLength = table.length;
    const result: string[] = [];
    const columnLengths: number[] = [];

    table.forEach((row) => {
      row.forEach(
        ({ firstMultiplier, secondMultiplier, product }, colIndex) => {
          const expressionLength =
            `${firstMultiplier}*${secondMultiplier}=${product}`.length;
          if (!columnLengths[colIndex]) {
            columnLengths[colIndex] = expressionLength;
          } else {
            columnLengths[colIndex] = Math.max(
              columnLengths[colIndex],
              expressionLength
            );
          }
        }
      );
    });

    table.forEach((row) => {
      let rowString = "";
      row.forEach(
        ({ firstMultiplier, secondMultiplier, product }, colIndex) => {
          const expression = `${firstMultiplier}*${secondMultiplier}=${product}`;
          rowString += expression.padEnd(columnLengths[colIndex] + 2, " ");
        }
      );
      result.push(rowString.trim());
    });

    return result.join('\n');
  }

  public render(start: number, end: number): string {
    let renderReslut: string = "";
    if (!this.isValid(start, end)) return renderReslut;
    const expressionRows = this.getRows(start, end);
    renderReslut = this.renderRows(expressionRows);
    return renderReslut;
  }
}
