// this is the javascript file make it dynamic

let form = document.querySelector("#form");

const handleSubmit = (e) => {
  e.preventDefault();
  // getting all the input value here
  var Fname = document.querySelector("#name").value;
  var Lname = document.querySelector("#last_name").value;
  var username = document.querySelector("#username").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var cpassword = document.querySelector("#cpassword").value;
  const NewDarta = {
    Fname,
    Lname,
    username,
    email,
    password,
    cpassword,
  };
  //   console.log(NewDarta);
};
// here form validation for each and every  input fields
//adding events
form.addEventListener("submit", handleSubmit);
