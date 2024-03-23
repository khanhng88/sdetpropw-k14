// Create a class Employee with a method salary to return employee’s salary
// There are 2 types of employee: Full time employee and contract employee
// Full time employee has salary is 50000 and contract employee has salary 40000
// Write a method to accept a list of Employee and calculate total salary
// Please print out the employee with highest/lowest salary
// For example, company has 3 FTE and 2 contractor

export default class Employee {
    protected salary: number
    protected name: string

    constructor(name:string, salary:number) {
        this.name = name
        this.salary = salary
    }

    getSalary(): number {
        return this.salary
    }

    getName(): string {
        return this.name
    }
}