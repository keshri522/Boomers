let form = document.querySelector("#form");
// declaring globally that can be access entire application
let Fname, Lname, username, email, password, cpassword;

// adding events
const handleSubmit = (e) => {
  e.preventDefault();
  Fname = document.querySelector("#name").value;
  Lname = document.querySelector("#last_name").value;
  username = document.querySelector("#username").value;
  email = document.querySelector("#email").value;
  password = document.querySelector("#password").value;
  cpassword = document.querySelector("#cpassword").value;
  const NewData = {
    Fname,
    Lname,
    username,
    email,
    password,
    cpassword,
  };
  // for making our submit button work only if there are no error message
  const ErrorMessage = ValidateInputs();
  if (ErrorMessage.length === 0) {
    // then only we call a api here
  }
};
// this is just for email matching patterns using regex
const emailregex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
// this function will run if there is ant error present
const Seterror = (element, message) => {
  const inputControl = element.parentElement;
  const errordisplay = inputControl.querySelector(".error");
  const input = inputControl.querySelector("input");
  errordisplay.innerHTML = message;
  input.classList.add("input_error");
  input.classList.remove("input_success");
};
// this will run and remove the error and add the classlist succes
const SetSuccess = (element) => {
  const inputControl = element.parentElement;
  const errordisplay = inputControl.querySelector(".error");
  const input = inputControl.querySelector("input");
  errordisplay.innerHTML = "";
  input.classList.add("input_success");
  input.classList.remove("input_error");
};
// validating the forms first remove the white spaces
const ValidateInputs = () => {
  const FirstName = Fname.trim();
  const LastName = Lname.trim();
  const Username = username.trim();
  const Email = email.trim();
  const Password = password.trim();
  const Cpassword = cpassword.trim();

  // for thee error message
  const ErrorMessage = [];
  if (FirstName === "") {
    Seterror(document.querySelector("#name"), "First Name is required!");
    ErrorMessage.push("First Name is required!");
  } else {
    SetSuccess(document.querySelector("#name"));
  }

  if (LastName === "") {
    Seterror(document.querySelector("#last_name"), "Last Name is required!");
    ErrorMessage.push("Last Name is required!");
  } else {
    SetSuccess(document.querySelector("#last_name"));
  }

  if (Username === "") {
    Seterror(document.querySelector("#username"), "Username is required!");
    ErrorMessage.push("UserName is required!");
  } else {
    SetSuccess(document.querySelector("#username"));
  }

  if (!emailregex.test(email)) {
    Seterror(document.querySelector("#email"), "Email format not matched!");
    ErrorMessage.push("Email is required!");
  } else {
    SetSuccess(document.querySelector("#email"));
  }

  if (Password === "") {
    Seterror(document.querySelector("#password"), "Password is required!");
    ErrorMessage.push("Password is required!");
  } else if (Password.length < 2) {
    Seterror(
      document.querySelector("#password"),
      "Password must be at least two characters!"
    );
    ErrorMessage.push("Password is required!");
  } else if (Password.length > 10) {
    Seterror(
      document.querySelector("#password"),
      "Password must be less than ten characters!"
    );
    ErrorMessage.push("Password is required!");
  } else {
    SetSuccess(document.querySelector("#password"));
  }

  if (Cpassword === "") {
    Seterror(
      document.querySelector("#cpassword"),
      "Confirm password is required!"
    );
    ErrorMessage.push("Cpassword is required!");
  } else if (Cpassword !== Password) {
    Seterror(document.querySelector("#cpassword"), "Password does not match!");
    ErrorMessage.push("Cpassword is required!");
  } else {
    SetSuccess(document.querySelector("#cpassword"));
  }
  return ErrorMessage;
};

form.addEventListener("submit", handleSubmit);
