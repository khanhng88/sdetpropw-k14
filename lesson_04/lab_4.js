const readLine = require('readline-sync')
let bankAcc1 = {
    accountNumber : "123",
    routingNumber : "abcABC",
    balance : 1500
}

let bankAcc2 = JSON.parse(JSON.stringify(bankAcc1))
bankAcc2.accountNumber = "456"
console.log('Bank acc 1:', bankAcc1);
console.log('Bank acc 2:', bankAcc2);

let bankAccs = [bankAcc1, bankAcc2]

let isCont = true

let selectedBankAcc
while(isCont) {
    printBankingAppMenu()
    
    let userOpt = readLine.questionInt('Please input your number: ')
    switch (userOpt) {
        case 0:
            isCont = false
            break

        case 1:
            selectedBankAcc = searchBankAccInfo(bankAccs)
            break

        case 2:
            if(selectedBankAcc == undefined) {
                console.log('Please search a bank account first with option 1');
            }else{
                handleWithDrawAmount(selectedBankAcc)
            }
            break

        default:
            console.log('Wrong input! Please input again.'); 
    }
    console.log('\n');
}

function printBankingAppMenu() {
    console.log('-----Banking Application-----');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit program');
}

function searchBankAccInfo(bankAccs) {
    let inputAccNum = readLine.question('Please input Account number to search: ')
    for (const bankAcc of bankAccs) {
        if(bankAcc.accountNumber == inputAccNum) {
            console.log(bankAcc);
            return bankAcc
        }
    }
    console.log(`bank account with number ${inputAccNum} does not exist.`);
}

function handleWithDrawAmount(selectedAcc) {
    console.log('You are withdrawing money from Bank Account number ', selectedAcc.accountNumber);
    let withdrawAmount = readLine.questionInt('please input withdraw amount: ')
    if(withdrawAmount <= 0) {
        console.log('Wrong withdraw amount!');
    }else if (withdrawAmount > selectedAcc.balance) {
        console.log('The withdraw amount is greater than the current balance. Not allow withdrawing!');
    }else{
        selectedAcc.balance = selectedAcc.balance - withdrawAmount
        console.log('Account update', selectedAcc);
    }
}