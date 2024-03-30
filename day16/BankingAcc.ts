export default abstract class BankingAcc {
    
    abstract deposit(amount:number):void;
    abstract withdraw(amount:number):void;
    abstract getBalance():number;
}