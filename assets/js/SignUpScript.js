function printer(id, msg) {
    document.getElementById(id).innerHTML = msg;
}

function validate() {
    var fname = document.form.fname.value;
    var lname = document.form.lname.value;
    var email = document.form.email.value;
    var phone = document.form.phone.value;
    var address = document.form.address.value;
    var gender = document.form.gender.value;

    var username = document.form.username.value;
    var password = document.form.password.value;
    var C_password = document.form.C_password.value;

    var fname_err = lname_err = phone_err = email_err = address_err = gender_err = username = pass_err = c_pass_err = true;

    if (fname == "") {
        printer("fname_err", "First name can't be empty");
    } else {
        var check = /^[a-zA-Z\s]+$/;
        if (check.test(fname) === false) {
            printer("fname_err", "Name must contain alphabets only");
            alert("Name must contain alphabets only");
        }
        else {
            fname_err = false;
        }
    }

    if (lname == "") {
        printer("lname_err", "Last Name can't be empty");
    } else {
        var check = /^[a-zA-Z\s]+$/;
        if (check.test(lname) === false) {
            printer("fname_err", "Name must contain alphabets only");
        }
        else {
            lname_err = false;
        }
    }

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

    if (email == "") {
        printer("email_err", "Email can't be empty");
    } else {
        var check = /^\S+@\S+\.\S+$/;
        if (check.test(email) === false) {
            printer("email=err", "Enter a valid email");
        } else {
            email_err = false;
        }
    }

    if (address.length == 0) {
        printer("address_err", "Address can't be empty");
    } else {
        address_err = false;
    }

    if (gender == "") {
        printer("gender_err", "Please select gender.");
    } else {
        gender_err = false;
    }

    if (username == "") {
        printer("username_err", "username can't be empty");
    } else {
        if (username.length < 6) {
            printer("username_err", "Username must be at least 6 letters long");
        } else {
            username_err = false;
        }
    }

    if (password == "") {
        printer("pass_err", "Password can't be empty");
    } else {
        var checkpassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (checkpassw.test(password) === false) {
            printer("pass_err", "Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.");
        } else {
            pass_err = false;
        }
    }

    if (C_password == "") {
        printer("c_pass_err", "Password can't be empty !");
    } else {
        if (C_password == password) {
            c_pass_err = false;
        }
        else {
            printer("c_pass_err", "password does not match !");
        }
    }

    if ((fname_err || lname_err || phone_err || email_err || address_err || gender_err || username_err || pass_err || c_pass_err) == true) {
        return false;
    } else {
        alert("form submitted");
    }
}


function funPromo() {
    var promocode = document.form.promo.value;
    var promoMsg = true;

    if (promocode == "" ) {
        promoMsg = false;
    } else {
        if ( promocode == "FITPALACE200") {
            promoMsg = false;
            printer( "promoMsg", "10% Discount applied.")
        }
        else {
            printer( "promoMsg", "Invalid Code !" );
        }
    }

    if(promoMsg == true) {
        return false;
    }
}