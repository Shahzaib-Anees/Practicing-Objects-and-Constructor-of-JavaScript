// Creating Constructor Function 
function UserDetails(firstName, lastName, age, gender) {
    this.FirstName = firstName,
        this.LastName = lastName,
        this.Age = age,
        this.Gender = gender,
        this.fullName = function () {
            return `${this.FirstName} ${this.LastName}`;
        }
}

var user1 = new UserDetails("Mohammad", "Shahzaib", 18, "Male");
document.write(`<div class="card">
<h4>Printing User Detail in Browser</h4>
<span>FullName : ${user1.fullName()}  </span>
<span>Age : ${user1.Age} </span>
<span>Gender : ${user1.Gender}</span>
</div>`);

var user2 = new UserDetails("Mohammad", "Ahmed", 16, "Male");
document.write(`<div class="card">
<h4>Printing User Detail in Browser</h4>
<span>FullName : ${user2.fullName()}  </span>
<span>Age : ${user2.Age} </span>
<span>Gender : ${user2.Gender}</span>
</div>`);

var user3 = new UserDetails("Sakeena", "Baji", 46, "Female");
document.write(`<div class="card">
<h4>Printing User Detail in Browser</h4>
<span>FullName : ${user3.fullName()}  </span>
<span>Age : ${user3.Age} </span>
<span>Gender : ${user3.Gender}</span>
</div>`);

