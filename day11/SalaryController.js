class SalaryController {

    getTotalSalary(employees) {
        let totalSal = 0
        for (const employee of employees) {
            totalSal = totalSal + employee.salary
        }
        return totalSal
    }
}

module.exports = SalaryController