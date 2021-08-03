function valid(){
    var fn = document.forms['feedback']['fn'].value;
    var ln = document.forms['feedback']['ln'].value;
    var user = document.forms['feedback']['user'].value;
    var email = document.forms['feedback']['email'].value;
    var gender = document.forms['feedback']['gender'].value;
    if(gender=="male"){
        var gender = "male";
    }
    else{
        var gender = "female";
    }
    var txtarea = document.forms['feedback']['txtarea'].value;
    if(fn==""){
        alert("Please enter your first name.");
    }
    else if(ln==""){
        alert("Please enter your last name.");
    }
    else if(user==fn){
        if(user==""){
            alert("Please enter your user name.");
        }
        else{
            alert("You cannot use your name as you username");
        }
    }
    else if(txtarea==""){
        alert("Please give us some feedback.");
    }
    else{
        alert("Thanks for your feedback "+fn+" "+ln);
    }
}