class Student {

    // special method which is called by default
    constructor (name, email, phoneno, course, address, username, password) {
        //  current object pointing -< this
       this.name = name
       this.email = email
       this.phoneno = phoneno
       this.course = course
       this.address = address
       this.username = username
       this.password = password
    }

    // class methods
    createAccount () {
        console.log("Create Account")
    }

    updatePassword (password) {
        console.log("Update Password")
        this.password = password
    }

    updateAddress () {
        console.log("Update Address")

    }

}

// object/instance creation
const sandeshStudent = new Student("Sandesh", "sandesh@gmail.com", 12121212, "react", "mulund", "Sr123", "sandesh@11111");
const smitaStudent = new Student("Smita", "smita@gmail.com", 1212121, "react", "thane", "smita222", 123444444);



console.log("Name ===> ", sandeshStudent.name);
console.log("Name ===> ", smitaStudent.name);

// sandeshStudent.createAccount();
// sandeshStudent.updateAddress();


console.log("Sandesh Password ===> ", sandeshStudent.password);
console.log("Smita Password ===> ", smitaStudent.password);


sandeshStudent.updatePassword("!212121");
smitaStudent.updatePassword("12121arae")

console.log("Sandesh Password ===> ", sandeshStudent.password);
console.log("Smita Password ===> ", smitaStudent.password);


// Task :- 
// BankAccount Class

class BankAccount{
    constructor(name,email,phoneno,address,balance,deposite){

        this.name = name
        this.email = email
        this.phoneno = phoneno
        this.address = address
        this.balance = balance
        this.deposite = deposite

    }

    //class method

    createAccount () {
        console.log("Create Account")
    }

    updatebalance (balance) {
        console.log("Update balance")
        this.balance = balance
    }

    updatedeposite (deposite) {
        console.log("Update deposite")
        this.deposite = deposite
    }

    updateaddress () {
        console.log("Update address")

    }     

}

const BankAccount = new BankAccount("Jayesh", "shindejay@gmail.com", 8928506435,  "mulund", "2000", "4000");
console.log("Name ===> ", JayeshBankAccount.name);
console.log("Jayesh balance ===> ", JayeshBankAccount.balance);
console.log("Jayesh deposite ===> ", JayeshBankAccount.deposite);


JayeshBankAccount.updatebalance("3000");
JayeshBankAccount.updatedeposite("2000");

console.log("jayesh balance ===> ", JayeshBankAccount.balance);
console.log("jayesh deposite ===> ", JayeshBankAccount.deposite);

