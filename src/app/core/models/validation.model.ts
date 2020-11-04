export class Validation {
    id: number
    dataType: DataType
    inputFileName: string
    inputFilePath: string
    runTime: Date
    status: Status
}

export class Report {
    id: number
    path: string
}

export class DataType {
    name: string
    step: Step
}

export enum Status {
    inprogress = "inprogress",
    passed = "passed",
    failed = "failed"
}

export enum Step {
    loading = "loading",
    matching = "matching",
    payment = "payment"
}
