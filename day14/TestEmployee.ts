import ContractEmployee from "./ContractEmployee";
import FTEmployee from "./FTEmployee";
import SalaryController from "./SalaryController";

const ce1 = new ContractEmployee('Alan')
const ce2 = new ContractEmployee('Maddy')
const fte1 = new FTEmployee('Emma')
const fte2 = new FTEmployee('Nolan')
const fte3 = new FTEmployee('Jason')

console.log(`The total salary is ${SalaryController.getTotalSalary([ce1,ce2,  fte1,fte2,fte3])}`);
console.log(`The employee with lowest salary is ${JSON.stringify(SalaryController.getLowestSalaryEmployee([ce1,ce2,  fte1,fte2,fte3]))}`);
console.log(`The employee with highest salary is ${JSON.stringify(SalaryController.getHighestSalaryEmployee([ce1,ce2,  fte1,fte2,fte3]))}`);
console.log(SalaryController.sortEmployeesBasedOnSalary([ce1,ce2,  fte1,fte2,fte3]));
 
