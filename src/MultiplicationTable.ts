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

  }

  public iterateFromStart(start: number, end: number): string[] {

  }


  public render(start: number, end: number): string {
    if (!this.validateInputs(start, end)) {
      return "";
    }
    return ""
  }


}