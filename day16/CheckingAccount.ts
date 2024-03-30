import BankingAcc from "./BankingAcc"

export default class CheckingAccount extends BankingAcc{
    public overdraftLimit :number

    constructor (overdraftLimit :number) {
        super()
        this.overdraftLimit  = overdraftLimit 
    }

    getOverdraftLimit (): number {
        return this.overdraftLimit 
    }

    deposit(amount: number): void {
        if(amount <0) {
            throw new Error('Cannot deposit money with negative value')
        }
        this.overdraftLimit += amount
        console.log(`The current balance of checking acc after deposit ${amount} is ${this.overdraftLimit}`);
        
    }

    withdraw(amount: number): void {
        if(amount <0) {
            throw new Error('Cannot withdraw money with negative value')
        }else if(amount > this.overdraftLimit) {
            throw new Error('Cannot withdraw money with amount greater then current balance')
        }else if( (this.overdraftLimit - amount) < 50) {
            throw new Error('Cannot withdraw all money. Must leave 50 in account')
        }
        this.overdraftLimit -= amount 
        console.log(`The current balance of checking acc after withdraw ${amount} is ${this.overdraftLimit}`);
    }

    getBalance(): number {
        return this.overdraftLimit
    }
}