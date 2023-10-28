let form = document.querySelector("#form");
// declaring globally that can be access entire application
let FirstName, LastName, UserName, Email, Password, CPassword;
// for the first button click
document.addEventListener("DOMContentLoaded", () => {
  // first our content loads then it will run through
  const SignInbutton = document.querySelector("#firstButton");
  SignInbutton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload(); // it will reload the page
  });
});

// adding events
const handleSubmit = (e) => {
  e.preventDefault();
  FirstName = document.querySelector("#name").value;
  LastName = document.querySelector("#last_name").value;
  UserName = document.querySelector("#username").value;
  Email = document.querySelector("#email").value;
  Password = document.querySelector("#password").value;
  CPassword = document.querySelector("#cpassword").value;
  const NewData = {
    FirstName,
    LastName,
    UserName,
    Email,
    Password,
    CPassword,
  };
  // for making our submit button work only if there are no error message
  const ErrorMessage = ValidateInputs();
  if (ErrorMessage.length === 0) {
    const JsonData = JSON.stringify(NewData);
    // then only we call a api here
    fetch("https://boomersbackend.onrender.com/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JsonData,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
      })
      .then((data) => {
        alert(
          JSON.stringify({
            res: data.result,
            data: data.data,
          })
        );
        // remove all the input fields
        // target the form first
        const formData = document.querySelector("#form");
        formData.reset();
        // need to remove the success classlist on all inputs
        const inputs = document.querySelectorAll("input");
        inputs.forEach((ele) => {
          ele.classList.remove("input_success");
        });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
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
  const firstname = FirstName.trim();
  const lastname = LastName.trim();
  const username = UserName.trim();
  const email = Email.trim();
  const password = Password.trim();
  const cpassword = CPassword.trim();

  // for thee error message
  const ErrorMessage = [];
  if (firstname === "") {
    Seterror(document.querySelector("#name"), "First Name is required!");
    ErrorMessage.push("First Name is required!");
  } else {
    SetSuccess(document.querySelector("#name"));
  }

  if (lastname === "") {
    Seterror(document.querySelector("#last_name"), "Last Name is required!");
    ErrorMessage.push("Last Name is required!");
  } else {
    SetSuccess(document.querySelector("#last_name"));
  }

  if (username === "") {
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

  if (password === "") {
    Seterror(document.querySelector("#password"), "Password is required!");
    ErrorMessage.push("Password is required!");
  } else if (password.length < 2) {
    Seterror(
      document.querySelector("#password"),
      "Password must be at least two characters!"
    );
    ErrorMessage.push("Password is required!");
  } else if (password.length > 10) {
    Seterror(
      document.querySelector("#password"),
      "Password must be less than ten characters!"
    );
    ErrorMessage.push("Password is required!");
  } else {
    SetSuccess(document.querySelector("#password"));
  }

  if (cpassword === "") {
    Seterror(
      document.querySelector("#cpassword"),
      "Confirm password is required!"
    );
    ErrorMessage.push("Cpassword is required!");
  } else if (cpassword !== password) {
    Seterror(document.querySelector("#cpassword"), "Password does not match!");
    ErrorMessage.push("Cpassword is required!");
  } else {
    SetSuccess(document.querySelector("#cpassword"));
  }
  return ErrorMessage;
};

form.addEventListener("submit", handleSubmit);
