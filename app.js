let id=999;

const Employee1 = {

    EmployeeID:0,
    
    FullName : "Ghazi Samer",
    
    Department:"Administration",

    Level:"Senior",

    ImageURL:"https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",

    salary:0,

    uniqueId:function(counter){
        this.EmployeeID=counter+1;
     id++;
    },

   
   getrRandomSalary:function() {
         let salary=Math.floor(Math.random() * (2000-1500)+1500);
         let netSalary=salary-(salary * 0.075);
         this.salary=netSalary;
    
    }

}

Employee1.uniqueId(id);

Employee1.getrRandomSalary();

// console.log(Employee1);

const Employee2= {

    EmployeeID:0,
    
    FullName : "Lana Ali",
    
    Department:"Finance",

    Level:"Senior",
    
    ImageURL:"",

    Salary:0,

    uniqueId:function(counter){
        this.EmployeeID=counter+1;
     id++;
    },

    getrRandomSalary : function(min , max) {
        let salary=Math.floor(Math.random()*(max-min)+min);
        let netSalary=salary-(salary*0.075);
        
    
    }
}
 
Employee2.uniqueId(id);

Employee2.getrRandomSalary();

const Employee3 = {

    EmployeeID:0,
    
    FullName : "Tamara Ayoub",
    
    Department:"Marketing",

    Level:"Senior",
    
    ImageURL:"https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",

    Salary:0,



    uniqueId:function(counter){
        this.EmployeeID=counter+1;
    id++;
    },

    getrRandomSalary:function() {
        let salary=Math.floor(Math.random() * (2000-1500)+1500);
        let netSalary=salary-(salary * 0.075);
        this.salary=netSalary;
       
   }
    
}
Employee3.uniqueId(id);

Employee3.getrRandomSalary();

// console.log(Employee3.uniqueId(id));
const Employee4 = {

    EmployeeID:0,
    
    FullName: "Safi Walid",
    
    Department:"Administration",

    Level:"Mid-Senior",
    
    ImageURL:"",

    Salary:0,

    uniqueId:function(counter){
        this.EmployeeID=counter+1;
     id++;
    },


    getrRandomSalary:function() {
        let salary=Math.floor(Math.random() * (1500-1000)+1000);
        let netSalary=salary-(salary * 0.075);
        this.salary=netSalary;
      
   }
    
}
Employee4.uniqueId(id);

Employee4.getrRandomSalary();

const Employee5 = {

    EmployeeID:0,
    
    FullName: "Omar Zaid",
    
    Department:"Development",

    Level:"Senior",
    
    ImageURL:"",

    Salary:0,

    uniqueId:function(counter){
        this.EmployeeID=counter+1;
     id++;
    },

    getrRandomSalary:function() {
        let salary=Math.floor(Math.random() * (2000-1500)+1500);
        let netSalary=salary-(salary * 0.075);
        this.salary=netSalary;
   
   }
}
Employee5.uniqueId(id);

Employee5.getrRandomSalary();

const Employee6 = {

    EmployeeID:0,
    
    FullName : "Rana Saleh",
    
    Department:"Development",

    Level:"Junior",
    
    ImageURL:"",

    Salary:0,

    uniqueId:function(counter){
        this.EmployeeID=counter+1;
     id++;
    },


    getrRandomSalary:function() {
        let salary=Math.floor(Math.random() * (1000-500)+500);
        let netSalary=salary-(salary * 0.075);
        this.salary=netSalary;
       
   }
}
Employee6.uniqueId(id);

Employee6.getrRandomSalary();

const Employee7 = {

    EmployeeID:"0",
    
    FullName : "Hadi Ahmad",
    
    Department:"Finance",

    Level:"Mid-Senior",
    
    ImageURL:"asdaas",

    Salary:0,
    
    uniqueId:function(counter){
        this.EmployeeID=counter+1;
    id++;
    },

    getrRandomSalary:function() {
        let salary=Math.floor(Math.random() * (1500-1000)+1000);
        let netSalary=salary-(salary * 0.075);
        this.salary=netSalary;
       
   }
}
Employee7.uniqueId(id);

Employee7.getrRandomSalary();




console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);
console.log(Employee6);
console.log(Employee7);
