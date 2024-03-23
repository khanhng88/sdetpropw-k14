import Employee from "./Employee";

export default class FTEmployee extends Employee{
    constructor(name:string) {
        super(name, 50000)
    }
}