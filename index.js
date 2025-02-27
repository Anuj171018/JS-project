



function sign() {
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let mob1 = document.querySelector('#mob1').value;
    let mob2 = document.querySelector('#mob2').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pass').value;

    let abc = {
        gmail: email,
        passw: password
    };

    localStorage.setItem("userdata", JSON.stringify(abc));
    console.log("User registered:", abc); // Debugging

    // Validation checks
    if (fname === '') {
        alert("Please enter your First Name");
        document.querySelector('#fname').focus();
        return false;
    }

    if (lname === '') {
        alert("Please enter your Last Name");
        document.querySelector('#lname').focus();
        return false;
    }

    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(mob1)) {
        alert("Please enter a valid 10-digit mobile number for Mobile Number 1");
        document.querySelector('#mob1').focus();
        return false;
    }
    if (!phoneRegex.test(mob2)) {
        alert("Please enter a valid 10-digit mobile number for Mobile Number 2");
        document.querySelector('#mob2').focus();
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        document.querySelector('#email').focus();
        return false;
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one number, and one special character.");
        document.querySelector('#pass').focus();
        return false;
    }

    if (!document.querySelector('#cb').checked) {
        alert("Please accept the terms and conditions");
        return false;
    }

    return true; 
}


const up = () => {
    let storedData = localStorage.getItem("userdata");

    if (!storedData) {
        alert("No user data found. Please sign up first.");
        return false;
    }

    let data = JSON.parse(storedData);
    console.log("Stored data:", data); 

    let enteredEmail = document.querySelector("#mail").value;
    let enteredPassword = document.querySelector("#pword").value;

    if (enteredEmail !== data.gmail) {
        alert("Incorrect Email!");
        return false;
    }

    if (enteredPassword !== data.passw) {
        alert("Incorrect Password!");
        return false;
    }

    alert("Login Successful!");
    return true; 
};


let fair 
// let a="M.P Nagar"
// let b="Ashoka Garden"

// function dist(){
//  let pick=document.querySelector("#pickup").value
//  let destination = document.querySelector("#destination").value

//  if(pick=""){
//     alert("Please enter the pickup")
//     return false
//  }
//  if(destination=""){
//     alert("Please enter the destination")
//     return false
//  }
//  if(pick==a && destination==b){
//     document.querySelector("#head").innerHTML="45"
//     // return true;
//  }

//  return true;

// }


// let a = "M.P Nagar";
// let b = "Ashoka Garden";

// function dist() {
//     let pick = document.querySelector("#pickup").value
//     let destination = document.querySelector("#destination").value

//      if(pick==""){
//     alert("Please enter the pickup")
//     return false
//  }
//  if(destination==""){
//     alert("Please enter the destination")
//     return false
//  }

//     if (pick === a && destination === b) {
//         let headElement = document.querySelector("#head");

//         if (headElement) {
//             headElement.innerHTML = "Distance: 45 km"; 
//             console.log("45");
            
//         } else {
//             alert("Distance: 45 km"); 
//         }

//         return false; 
//     }

//     return true; 
// }

let a = "M.P Nagar";
let b = "Ashoka Garden";

function dist() {
    let pick = document.querySelector("#pickup").value
    let destination = document.querySelector("#destination").value

    if (pick === "") {
        alert("Please enter the pickup location");
        return false;
    }

    if (destination === "") {
        alert("Please enter the destination");
        return false;
    }

    if (pick === a && destination === b) {
        localStorage.setItem("distance", "Distance: 45 km"); 
        return true; 
    } else {
        alert("Invalid pickup or destination");
        return false; 
    }
}
