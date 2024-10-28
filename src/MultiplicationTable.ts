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

  public render(start: number, end: number): string {
    let renderReslut: string = "";
    if (this.isValid(start, end)) return renderReslut;
    return renderReslut;
  }
}
