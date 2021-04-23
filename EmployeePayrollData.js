class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method

    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp("^[1-9][0-9]*$");
        if (idRegex.test(id))
            this._id = id;
        else throw 'ID is Incorrect!';
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}(a-z){3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp("^[1-9][0-9]*$");
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary is Incorrect!';
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp("[MF]{1}$");
        if (genderRegex.test(gender))
            this._gender = gender;
        else throw 'Gender is Incorrect!';
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    // method 
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + " , name=" + this.name + " , salary=" + this.salary + " ," +
            "gender=" + this.gender + " , startDate=" + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
}
catch (e) {
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
try {
    let employeePayrollDataNew = new EmployeePayrollData(0, "Peter", 0, "T", new Date());
    console.log(employeePayrollDataNew.toString());
}
catch (e) {
    console.error(e);
}