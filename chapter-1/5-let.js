var name = "shreya";

{
    /**
     * let is block scoped
     */
    let name = "bhavya";
    console.log(name); // bhavya   
    /**
     * name is bhavya because let is block scoped
     */
}

console.log(name); // shreya
/**
 * name is shreya because var is global scoped
 */