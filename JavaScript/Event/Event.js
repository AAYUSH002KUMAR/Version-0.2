const form = document.getElementById('form');

form.addEventListener("click", ()=>{
    e.preventDefault();

    const username = document.querySelector('#username').value;

    if(username === ""){
        alert("username is required")
    }
    if(username.length >= 5 && username.length <= 15){
        alert("required minimum length of username input")
    }
    const emailvalid = document.querySelector('#emailvalidate');
    if(emailvalid.includes('@')){

    }
})

Regular Expression
/      /

const name1 = /helloindia/;

// name (min 5 and max upto 18 and not type anynumber inside username)
// email (include @ and with com)
// phone (not more 10 and not start=12345)
// password
// confirm oassword
// gender (check compulsory
// checkbox (minimu item includes and not more then 2)
// address => city, landmark, pincode
// country
// dob => 1 jan 2000
// submit
// )
