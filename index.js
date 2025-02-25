
function sign() {
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let mob1 = document.querySelector('#mob1').value;
    let mob2 = document.querySelector('#mob2').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pass').value;


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
