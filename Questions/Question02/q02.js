var userDetails = {
    firstName: "Shahzaib",
    lastName: "Anees",
    email: "shahzaib123@gmail.com",
    password: "shahzaib123",
    age: 24,
    city: "Karachi",
    country: "Pakistan"
}

if ("age" in userDetails && "country" in userDetails) {
    document.write(`<div class="card">
       <h4>Checking if Age and Country exists in userDetails Object or not</h4>
        <span>The Property Age and Country are Present in UserDetails</span>     
    </div>`);
}else{
    document.write(`<div class="card">
       <h4>Checking if Age and Country exists in userDetails Object or not</h4>
        <span>The Property Age and Country are not Present in UserDetails</span>     
    </div>`);
}

if(userDetails.hasOwnProperty("firstName") && userDetails.hasOwnProperty("lastName")){
    document.write(`<div class="card">
       <h4>Checking if FirstName and LastName exists in userDetails Object or not</h4>
        <span>The Property FirstName and LastName are Present in UserDetails</span>     
    </div>`);
}else{
    document.write(`<div class="card">
       <h4>Checking if FirstName and LastName exists in userDetails Object or not</h4>
        <span>The Property FirstName and LastName are not Present in UserDetails</span>     
    </div>`);
}