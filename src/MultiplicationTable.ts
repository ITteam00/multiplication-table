export class MultiplicationTable {

  public validateInputs(start: any, end: any): boolean {
    if (!(start && end)) {
      return false;
    }
    if (!(Number.isInteger(start) && Number.isInteger(end))) {
      return false;
    }
    if (start < 0 || start > 10 || end < 0 || end > 10) {
      return false;
    }
    if (start > end) {
      return false;
    }
    return true;
  }

  public generateFromIndex(start: number, main: number): string[] {
    let generatedList: string[] = [];
    for (let first = start; first <= main; first++) {
      let cur = `${first}*${main}=${first * main}`;
      generatedList.push(cur);
    }
    return generatedList;
  }

  public iterateFromStart(start: number, end: number): string[] {
    let multiplicationTable: string[] = [];
    for (let main = start; main <= end; main++) {
        let generatedList = this.generateFromIndex(start, main);
        for (let item of generatedList) {
          multiplicationTable.push(item);
        }
    }
    return multiplicationTable;
  }


  public render(start: any, end: any): string {
    let isValid: boolean = this.validateInputs(start, end);
    if (!isValid) {
        return "";
    }

    let multiplicationTable: string[] = this.iterateFromStart(start, end);
    let renderedRes: string = '';
    let currentIndex = 0;
    if (multiplicationTable.length > 6) {
      for (let i = start; i <= end; i++) {
          let currentLineArray = multiplicationTable.slice(currentIndex, currentIndex + i - start + 1);
          let currentLineArrayWithSpace = currentLineArray.map(item => item + ' '.repeat(9 - item.length));
          let currentLineString = currentLineArrayWithSpace.join("");
          renderedRes += currentLineString.trimEnd() + '\n';
          currentIndex += i - start + 1;
      }
    } else if (multiplicationTable.length <= 6) {
      for (let i = start; i <= end; i++) {
        let currentLineArray = multiplicationTable.slice(currentIndex, currentIndex + i - start + 1);
        let currentLineArrayWithSpace = currentLineArray.map(item => item + '  ');
        let currentLineString = currentLineArrayWithSpace.join("");
        renderedRes += currentLineString.trimEnd() + '\n';
        currentIndex += i - start + 1;
      }
    }
    let renderedMultiplicationTable =  renderedRes.trim();
    return renderedMultiplicationTable;
  }


}