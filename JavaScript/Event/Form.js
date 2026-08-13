const form = document.getElementById('form');
form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.getElementById("gender").value;
    const subject = document.getElementById("checkbox").value;
    const address = document.getElementById("address").value;
    const country = document.getElementById("country").value;
    const dob = document.getElementById("dob").value;

    if (username === "") {
        alert("Please enter your name");
    }
    else if (username.length < 5) {
        alert("Name must contain at least 5 characters");
    }
    else if (username.length > 18) {
        alert("Name cannot contain more than 18 characters");
    }
    else {
        let hasNumber = false;
        for (let i = 0; i < username.length; i++) {
            if (username[i] >= "0" && username[i] <= "9") {
                hasNumber = true;
                break;
            }
        }
        if (hasNumber) {
            alert("Name cannot contain numbers");
        }
        else {
            if (email === "") {
                alert("Please enter your email");
            }
            else if (!email.includes("@")) {
                alert("Email must contain @");
            }
            else if (!email.includes(".com")) {
                alert("Email must contain .com");
            }
            else {
                if (phoneNumber === "") {
                    alert("Please enter your phone number");
                }
                else if (phoneNumber.length > 10) {
                    alert("Phone number cannot be more than 10 digits");
                }
                else if (phoneNumber.length < 10) {
                    alert("Phone number must contain 10 digits");
                }
                else if (phoneNumber.startsWith("12345")) {
                    alert("Phone number cannot start with 12345");
                }
                else {
                    if (password === "") {
                        alert("Please enter your password");
                    }
                    else if (password.length < 8) {
                        alert("Password must contain at least 8 characters");
                    }
                    else {
                        if (confirmPassword === "") {
                            alert("Please confirm your password");
                        }
                        else if (password !== confirmPassword) {
                            alert("Passwords do not match");
                        }
                        else {
                            if (gender === "") {
                                alert("Please select your gender");
                            }
                            else {
                                if (subject === "") {
                                    alert("Please select a subject");
                                }
                                else {
                                    if (address === "") {
                                        alert("Please enter your address");
                                    }
                                    else {
                                        if (country === "") {
                                            alert("Please select your country");
                                        }
                                        else {
                                            if (dob === "") {
                                                alert("Please enter your date of birth");
                                            }
                                            else {
                                                alert("Form submitted successfully!");
                                                form.reset();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});