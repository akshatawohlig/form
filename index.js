function validate(){
    let userName=document.getElementById("uname");
    let phoneNo=document.getElementById("phoneNo");
    let emailId=document.getElementById("email");


    if(userName.value=="" || phoneNo.value=="" || emailId.value=="")
    {
        alert("Text Field is blank!!!!!!")
        return false;
    }
    else if(isNaN(phoneNo.value)){
        document.getElementById("error").innerHTML=("*Only digits are allowd in Phone Number text field");
        return false;
    }
    else if(!emailId.value.endsWith(".com") || !emailId.value.endsWith(".co") || emailId.value.endsWith(".in"))
    {
        document.getElementById("error").innerHTML="*Invalid Eamil Address!!!"
        return false;
    }
    // else if(userName.lengths<"3")
    // {
    //     document.getElementById("error").innerHTML=alert("Name should be greater than three character!")
    //     return false;
    // }
    
    // else if(phoneNo.value<"10")
    // {
    //     document.getElementById("error").innerHTML=alert("Phone No should be equal to 10 digits");
    //     return false;
    // }
    // else if(isNaN(phoneNo.value)){
    //     document.getElementById("error").innerHTML=("*Only digits are allowd in Phone Number text field");
    //     return false;
    // }
    // else if(phoneNo.value=[a-zA-Z])
    // {
    //     document.getElementById("error").innerHTML=alert("Alphabates are not allowd");
    //     return false;
    // }
    return true;
    
}