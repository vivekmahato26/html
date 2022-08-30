var formRef = document.getElementsByClassName("contact_us_form")
var form_home = document.getElementById("contact-us-form-home")
var thank_home = document.getElementById("thank-you-home")

var home_send = document.getElementById("home-send");
var nameRef = document.getElementById("nameInput");
// home_send.addEventListener('click',handleSubmit);
function showThankyou() {
    form_home.style.display="none";
    thank_home.style.display="block";
}

    var validate = /^[a-zA-Z]{2,40}([a-zA-Z]{2,40})+$/;
    var validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validateNumber = /[0-9]/;

    function validationName(event) {
        const elem = event.target;
        var x = elem.value
        var test = false;
        if (x.match(validate)) {
            elem.parentNode.style.borderColor = 'green';
            test = true;
        }
        else {
            elem.parentNode.style.borderColor = 'red';
            test = false;
        }
        return test;
    }

    function validationEmail(event) {
        const elem = event.target;
        var x = elem.value
        var test = false;
        if (x.match(validateMail)) {
            elem.parentNode.style.borderColor = 'green';
            test = true;
        }
        else {
            elem.parentNode.style.borderColor = 'red';
            test = false;
        }
        return test;
    }

    function validationPhone(event) {
        const elem = event.target;
        var x = elem.value
        var test = false;
        if (x.match(validateNumber)) {
            elem.parentNode.style.borderColor = 'green';
            test = true;
        }
        else {
            elem.parentNode.style.borderColor = 'red';
            test = false;
        }
        return test;
    }


const handleSubmit = (event) => {
    if (formRef[0].name.value != "" && formRef[0].phone.value != "")
    {let date = new Date();
    const data = {
        name: formRef[0].name.value,
        phone: formRef[0].phone.value,
        email: formRef[0].email.value,
        message: formRef[0].message.value,
        sentDate: date.toLocaleString()
    }
    console.log(data)
    fetch("https://sheet.best/api/sheets/27502564-f90b-4486-ba03-72f80149559a", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'X-Api-Key': 'NQuE$RQn$QnjzjOw5qEOpR2e_Jp-anRM7FLI!IOFuzHuskc8rZBC!M7IDW_tySUt'
        },
        body: JSON.stringify(data),
    })
        .then((r) => r.json())
        .then((data) => {
            // The response comes here
           showThankyou()
        })
        .catch((error) => {
            // Errors are reported there
            console.log(error);
        });}
}
