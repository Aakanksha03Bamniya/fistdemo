//  THIS KEY WORD


var a = 12;
console.log(this)


//normal function

let obj = {
    name : 'Anshu',
    lastname: 'Bamniya',
    fullname: function(){
        console.log(`hey welcome , ${this.name} ${this.lastname}`)
    }
}

console.log(obj.fullname())


// THIS KEYWORD IN FAT ARROW FUNCTION 

let object1 = {
    empid: 135800,
    empName: 'John',
    emp_details: function() {
        const emp = () => {
            // Using arrow function here to inherit 'this' from the emp_details context
            console.log(`Hi, ${this.empName} thanks for joining us and your employee ID is ${this.empid}`);
        }
        emp(); // Call the nested function
    }
}

object1.emp_details(); // Call the emp_details method


// THIS AND CALL KEYWORD

let obj1= {
    metal : 'silver',
    prize : 1200,
    sale: function(){
        console.log(` Hi , we are salling ${this.metal} and its prize for 10 grmas is ${this.prize}`)
    }
}
obj1.sale()


let obj2 = {
    metal : 'GOld',
    prize : 2100,
}

obj1.sale.call(obj2)


// THIS AND APPLY KEYWORD

obj1.sale.apply([obj2])


//THIS AND BIND KEYWORD 
// bind is used to invoke a funcation later means , its just used to create a fun but is can call by anyother project anytime



// Bind the sale method of obj1 to obj2
let boundSale = obj1.sale.bind(obj2);

// Call the bound function
boundSale(); // Outputs: Hi, we are selling gold and its price for 10 grams is 2100