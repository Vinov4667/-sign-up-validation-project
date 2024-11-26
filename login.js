function get(){
    var a=document.getElementById("login").Value;
    const key="email"+"password"+a;
    const json=localStorage.getItem(key);
    
}