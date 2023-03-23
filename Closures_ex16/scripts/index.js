function CDM(){
    var accounts = [
        {
            accountNo:"001",
            cardNumber:"9001",
            pin:"1234",
            balance:1000
        },
        {
            accountNo:"002",
            cardNumber:"9002",
            pin:"1234",
            balance:1000
        },
        {
            accountNo:"003",
            cardNumber:"9003",
            pin:"1234",
            balance:2000
        },
        {
            accountNo:"004",
            cardNumber:"9004",
            pin:"1234",
            balance:3000
        }
    
    ]

    
    const deposit= (index) => {
        let cardNo = window.prompt("Enter the CardNo");
        if(cardNo == accounts[index].cardNumber){
            let pin = window.prompt("Enter the pin");
            if(pin == accounts[index].pin){
                let ammount = parseInt(window.prompt("Enter the amount to deposit"));
                
                    accounts[index].balance+= ammount;
                    window.alert(ammount + " deposited\n Balance : "+accounts[index].balance);
                }else{
                    window.alert("Invalid Pin.");
            }
            }else{
                window.alert("Invalid account number");
            }
    }
    const Withdraw= (index) => {
        
       let cardNo = window.prompt("Enter the CardNo");
        if(cardNo == accounts[index].cardNumber){
            let pin = window.prompt("Enter the pin");
            if(pin == accounts[index].pin){
                let ammount = parseInt(window.prompt("Enter the amount to be withdrawn."));
                if(ammount<=accounts[index].balance){
                    accounts[index].balance-= ammount;
                    window.alert(ammount + " Withdrawn\n Balance : "+accounts[index].balance);
                }else{
                    window.alert("Insufficient Balance!!");
                }
            }else{
                window.alert("Invalid Pin.");
            }
        }else{
            window.alert("Invalid account number");
        }

    }

    const executeCDM = () => {

        let flag1 = false;
        var user = 0;
        while(!flag1){
            var getAccountNo = window.prompt("Enter the Account Number to Login:");
        accounts.forEach((i , index) => {
            if( i.accountNo == getAccountNo){
                flag1 = true;
                user =  index;
                return;
            }
             });

        }

        while(true){
            var userSelection = window.prompt("Enter the Operation: \n1.Withdraw\n2.Deposit\n3.Exit");
            switch (userSelection) {
                case "1":
                    Withdraw(user);
                    break;
                case "2":
                    deposit(user);   
                    break;    
            }
            if(userSelection == "3"){
                break;
            }
        }
        
    }

   
    
    while(true){
       
        executeCDM();
    }
}
CDM();




   