import BankingAcc from "./BankingAcc"

export default class SavingAccount extends BankingAcc{
    public minimumBalance:number

    constructor (minimumBalance:number) {
        super()
        this.minimumBalance = minimumBalance
    }

    deposit(amount: number): void {
        if(amount <0) {
            throw new Error('Cannot deposit money with negative value')
        }
        this.minimumBalance += amount
        console.log(`YOur current balance after deposit ${amount} is ${this.minimumBalance}`);
        
    }

    withdraw(amount: number): void {
        if(amount <0) {
            throw new Error('Cannot withdraw money with negative value')
        }else if(amount > this.minimumBalance) {
            throw new Error('Cannot withdraw money with amount greater then current balance')
        }
        this.minimumBalance -= amount
        console.log(`YOur current balance after withdraw ${amount} is ${this.minimumBalance}`);
    }

    getBalance(): number {
        return this.minimumBalance
    }
}