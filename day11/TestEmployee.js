const Employee = require('./Employee')
const SalaryController = require('./SalaryController')

const teo= new Employee(50)
const ti = new Employee(40)

const salaryController = new SalaryController();
const totalSal = salaryController.getTotalSalary([teo, ti])
console.log(totalSal);