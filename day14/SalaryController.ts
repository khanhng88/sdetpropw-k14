import Employee from "./Employee";

export default class SalaryController{

    //calculate total salary
    static getTotalSalary(employeeList: Employee[]): number {
        let total = 0

        employeeList.forEach(employee => {
            total = total + employee.getSalary()
        })
        return total
    }

    static getLowestSalaryEmployee(employeeList: Employee[]): Employee {
        let lowestEmployee = employeeList[0]
        employeeList.forEach(employee => {
            if(employee.getSalary() < lowestEmployee.getSalary()) {
                lowestEmployee = employee
            }
        })
        return lowestEmployee
    }

    static getHighestSalaryEmployee(employeeList: Employee[]): Employee {
        let highestEmployee = employeeList[0]
        employeeList.forEach(employee => {
            if(employee.getSalary() > highestEmployee.getSalary()) {
                highestEmployee = employee
            }
        })
        return highestEmployee
    }

    static sortEmployeesBasedOnSalary(employeeList: Employee[]) {
        for (let i = 0; i < employeeList.length - 1; i++){
    
            let swapped = false
    
            for (let j = 0; j < employeeList.length - i - 1; j++){
                // swapping the elements
                if (employeeList[j].getSalary() > employeeList[j+1].getSalary()){
                    let temp = employeeList[j]
                    employeeList[j] = employeeList[j+1]
                    employeeList[j+1] = temp
                    swapped = true
                }
            }
    
            // if no elements are swapped
            // that means our array is sorted
            if(!swapped) break;
        }
    
       return employeeList;
    }
}