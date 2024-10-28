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
    let res: string[] = [];
    for (let main = start; main <= end; main++) {
        let generatedList = this.generateFromIndex(start, main);
        for (let item of generatedList) {
            // let spaceLength: number = 9 - item.length;
            // res.push(item + ' '.repeat(spaceLength));
            res.push(item);
        }
    }
    console.log("res");
    console.log(res);
    return res;
  }


  public render(start: number, end: number): string {
    if (!this.validateInputs(start, end)) {
      return "";
    }
    let res: string[] = this.iterateFromStart(start, end);
    return res.toString();

  }


}