// external js file
// Write all JavaScript code here

// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An object with some properties 
let objEmployee = {'emp_name': 'Ashish', 'emp_addres': 'Mumbai', 'emp_id': '029', 'emp_age':22};

// Loop through all the properties in the object  
for (emp in objEmployee) {
  alert('Employee '+ emp + ' is: ' + objEmployee[emp]);
  document.write('<li>Employee '+ emp + ' is: ' + objEmployee[emp] + '</li>');
  console.log('Employee '+ emp + ' is: ' + objEmployee[emp]);
}
