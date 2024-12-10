export enum Actions {
  GET_REPORT = '[REPORT] Get blog report',
  CREATE_REPORT = '[REPORT] Create blog report',
  UPDATE_REPORT = '[REPORT] Update blog report',
}
export namespace ReportAction {
  export class GetReport {
    static type = Actions.GET_REPORT;
    constructor() {}
  }
  export class CreateReport {
    static type = Actions.CREATE_REPORT;
    constructor(
      public blogId: any,
      public reportForm: any,
    ) {}
  }
  export class UpdateReport {
    static type = Actions.UPDATE_REPORT;
    constructor(
      public reportId: any,
      public reportStatus: any,
    ) {}
  }
}
