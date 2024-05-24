/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. 
 Call the function with the required information and two other name-value pairs, 
 such as a color or an optional feature. Print the Object that’s returned to make 
 sure all the information was stored correctly.*/

function store_car_info(manufacturer:string,model_name:string, ...extra_option:{[key:string ]:any

}[]){
    const car_info={
        manufacturer,
        model_name,
        // special method :object assign
        ...Object.assign({}, ...extra_option)
    }
    return car_info
};
let ans=store_car_info("honda","civic",{color:"black"},{feature:["navigation","power window"]})
console.log(ans);