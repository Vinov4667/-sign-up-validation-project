function validate() {
    var n1 = document.getElementById("name").value;
    var n2 = document.getElementById("mobile").value;
    var n3 = document.getElementById("email").value;
    var n4 = document.getElementById("password").value;
    var n5 = document.getElementById("confirm").value;
    alpha = /^[A-Za-z]+$/
    number = /^([0-9]{5,})+$/
    email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    pass = /^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[!@#$%^&*]).+$/

    if (n1 == "") {
        alert("Enter the name");
    }
    else if (!alpha.test(n1)) {
        alert("use only alphabets");
    }
    if (n2 == "") {
        alert("Enter the mobile");
    }
    else if (!number.test(n2)) {
        alert("Enter number only");
    }
    if (n3 == "") {
        alert("Enter the email");
    }
    else if (!email.test(n3)) {
        alert("Use only correct email");
    }
    if (n4 == "") {
        alert("Enter the password");
    }
    else if(n4!=n5){
        alert("password incorrect");
      }
    else { 
        alert("success"); 
        const myObj = { user:n1, mobile: n2,email:n3,password:n4 };
        const myJSON = JSON.stringify(myObj); 
        localStorage.setItem("data", myJSON);
        window.location="";
    }

    function store(){
       
    }
}
