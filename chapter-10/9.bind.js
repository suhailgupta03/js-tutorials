function userName(){
    
    function newFunc(){ 
        // Inside newFunc this is global object
        // and not the superAdmin object
        // because bind() method only binds the function called
        return("user Name: "+ this.name+ " "+ this.userType)
    }
    const f = newFunc.bind(this)
    console.log(f())

    return("user Name: "+ this.name+ " "+ this.userType)
   
}

var superAdmin={
    userType : 'Super Admin',
    name:'John Doe'
}
var userNameFnc= userName.bind(superAdmin)
console.log(userNameFnc())