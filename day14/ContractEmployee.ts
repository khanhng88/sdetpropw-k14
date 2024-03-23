import Employee from "./Employee";

export default class ContractEmployee extends Employee{
    constructor(name:string) {
        super(name, 40000)
    }
}