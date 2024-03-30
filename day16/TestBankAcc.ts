import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

const savingAcc = new SavingAccount(100)
const checkingAcc = new CheckingAccount(300)

console.log('The current balance of saving acc is ', savingAcc.getBalance());
savingAcc.deposit(100)
savingAcc.withdraw(200)
console.log('----------------------');

console.log('The current balance of checking acc is ', checkingAcc.getOverdraftLimit());
checkingAcc.deposit(100)
checkingAcc.withdraw(350)