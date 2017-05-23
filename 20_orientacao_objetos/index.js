function Bank() {
    var name = '';
    var account = '';
    var amount = 0;

    this.setName = function(_name) {
        name = _name;
    };

    this.getName = function() {
        return name;
    };

    this.setAccount = function(_account) {
        account = _account;
    };

    this.getAccount = function() {
        return account;
    };

    this.setAmount = function(_amount) {
        amount = _amount;
    };

    this.getAmount = function() {
        return amount;
    };
}

function BankStrategy(stategy, bank) {
    this.strategy = stategy;
    this.bank = bank;
}

BankStrategy.prototype.doStrategy = function() {
    return this.strategy()
};


function Main() {
    var name = window.prompt('What is your bank name?');
    var account = window.prompt('What is your account ?');
    var amount = parseInt(window.prompt('How much do you have?'));

    var bank = new Bank();
    bank.setName(name);
    bank.setAccount(account);
    bank.setAmount(amount);

    var option = parseInt(window.prompt(' 1 - Deposit \n 2 - Withdraw'));
    var value = 0;

    while(option !== 0) {
        value = parseInt(window.prompt('Enter amount : '));

        if (option === 1) {
            return new BankStrategy(deposit(bank, value));
        }

        if (option === 2) {
            return new BankStrategy(withdraw(bank, value));
        }
    }

    console.log(bank.getAccount(), bank.getAmount(), bank.getName());
}

Main();