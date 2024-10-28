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
    let formattedTable = "";
    let maxLength = 0;
    table.forEach((row) => {
      row.forEach(({ firstMultiplier, secondMultiplier, product }) => {
        maxLength = Math.max(
          maxLength,
          firstMultiplier.toString().length,
          secondMultiplier.toString().length,
          product.toString().length
        );
      });
    });

    table.forEach((row) => {
      let rowString = "";
      row.forEach(({ firstMultiplier, secondMultiplier, product }) => {
        const formattedFirst = firstMultiplier
          .toString()
          .padStart(maxLength, " ");
        const formattedSecond = secondMultiplier
          .toString()
          .padStart(maxLength, " ");
        const formattedProduct = product.toString().padStart(maxLength, " ");
        rowString += `${formattedFirst} * ${formattedSecond} = ${formattedProduct}  `;
      });
      formattedTable += (rowString + '\n');
    });
    return formattedTable;
  }

  public render(start: number, end: number): string {
    let renderReslut: string = "";
    if (!this.isValid(start, end)) return renderReslut;
    
    const expressionRows = this.getRows(start, end);

    console.log(111);

    renderReslut = this.renderRows(expressionRows);
    console.log(222);

    console.log(renderReslut);
    return renderReslut;
  }
}
