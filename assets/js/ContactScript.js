function printer(id, msg) {
    document.getElementById(id).innerHTML = msg;
}

function validateInquire() {
    
    var phone = document.form.phone.value;

    var  phone_err = inquire_err = true;

    if (phone == "") {
        printer("phone_err", "Phone number can't be empty");
    } else {
        var check = /^[1-9]\d{9}$/;
        if (check.test(phone) === false) {
            printer("phone_err", "Enter a valid phone number");
        } else {
            if (phone.length != 10) {
                printer("phone_err", "Enter a valid phone number");
            } else {
                phone_err = false;
            }
        }
    }

    if(document.getElementById('PersonalTraining').checked) {   
        document.getElementById("inquire_err").innerHTML   
            = document.getElementById("PersonalTraining").value   
            + " radio button is checked";   
    }   
    else if(document.getElementById('FreeDayPass').checked) {   
        document.getElementById("inquire_err").innerHTML   
            = document.getElementById("FreeDayPass").value   
            + " radio button is checked";     
    }   
    else if(document.getElementById('GuestPass').checked) {   
        document.getElementById("inquire_err").innerHTML   
            = document.getElementById("GuestPass").value   
            + " radio button is checked";     
    }   
    else if(document.getElementById('Memberships').checked) {   
        document.getElementById("inquire_err").innerHTML   
            = document.getElementById("Memberships").value   
            + " radio button is checked";     
    }
    else if(document.getElementById('GeneralQuestions').checked) {   
        document.getElementById("inquire_err").innerHTML   
            = document.getElementById("GeneralQuestions").value   
            + " radio button is checked";     
    }  
    else {   
        document.getElementById("inquire_err").innerHTML   
            = "You have not selected any option.";   
    }   

    if (( phone_err || inquire_err ) == true) {
        return false;
    } else {
        alert("form submitted for"+ document.getElementById("inquire_err").innerHTML +". We will contact you within 3 working days.");
    }
}