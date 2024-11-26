function validate(){
    let v1=document.getElementById("name").value;
    let v2=document.getElementById("number").value;
    let v3=document.getElementById("email").value;
    let v4=document.getElementById("city").value;
    let v5=document.getElementById("message").value;

    
    number = /^([0-9]{5,})+$/
    email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    
    if((v1=="")||(v2=="")||(v3=="")||(v4=="")||(v5=="")){
        alert("Please Fill mark as(*) Fields");
    }
    else if((!number.test(v2))||(!email.test(v3))){
        alert("Enter Correct Details")
    }
    
    else{
        alert("success");
    }
}
    function store() {
        let user= document.getElementById("name").value;
        let phone= document.getElementById("number").value;
        let mail= document.getElementById("email").value;
        let place= document.getElementById("city").value;
        let msg=document.getElementById("message").value;
        const myObj = { n:user,mobile:phone,code:mail,native:place,value:msg };
        const myJSON = JSON.stringify(myObj);
        const key = "name" + msg;
        localStorage.setItem(key, myJSON);
    }
