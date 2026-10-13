
document.getElementById("myForm").onsubmit = convertValue;
// هنا اخدت الفورم باسمها ماي فورم كلها وقولتله لما يحصل عندي سيبمت اعمل كذا 


function convertValue() {

    var doller = document.getElementById("doller").value;
    var result = document.getElementById("result");

    if (doller == "") {
        result.innerHTML = "Enter Data";
        // return false;
    }
    else if (isNaN(doller)) {
        result.innerHTML = "Enter Number Not Text";
        // return false;
    }
    else if (doller < 0) {
        result.innerHTML = "Enter Positive Number";
        // return false;
    }
    else if (doller == 0) {
        result.innerHTML = "Enter Number Rather Than Zero";
        // return false;
    }
    else {
        result.innerHTML = doller * 50 + "egp";
        // return false;
    }

    return false;
    // هنا عادي حطتها ف العام عشان هي كلهم واحد 
    // لكن الصح مع كل كيس 

}

// convertValue();
// هنا عشان لو عاوز استخدم الفانكيشن ديه بره