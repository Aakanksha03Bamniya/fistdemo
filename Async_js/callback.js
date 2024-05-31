// create am array 
const school = [
    {
        std_name : 'mike',
        std_rollno : 12345,
        
    },
    {
        std_name : 'jesse',
        std_rollno : 53791,
        
    },
    {
        std_name : 'flynn',
        std_rollno : 75292,
        
    }
]
 
function getStd() {
    
    setTimeout(()=>{
       let std_details = ''
       school.forEach((name , roll)=>{
        std_details += `<li> Hey ${name.std_name}</li>;`
       })
       document.body.innerHTML = std_details;
    },1000)


}
//getStd();

// new admission add 

function newAdmission(student, callback) {
    setTimeout(() => {
        school.push(student);
        callback();
    }, 2000);
}


newAdmission({std_name:'Harry', std_rollno:73136}, getStd)