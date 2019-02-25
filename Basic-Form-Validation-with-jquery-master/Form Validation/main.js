$(document).ready(function() {
    $("#contactForm").submit(function() {
        console.log("form submit");
        
        $("#resultError").html("");
        var name = $("#name").val();
        var email = $("#email").val();
        var comments = $("#comments").val();

        var hasErrors = false;
        var errorMessages = [];
        
        if(name == "") {
            hasErrors = true;
            errorMessages.push("Name is required.");
        }
        if(email != "" && email.indexOf("@") <= 0)
        {
            hasErrors = true;
            errorMessages.push("If an email is specified, it must be an email address.");
        }
        if(comments === "") {
            hasErrors = true;
            errorMessages.push("Comments are required.");
        }
        if(hasErrors) {
            console.log(errorMessages);
            var errorStr = "<div class='alert alert-danger' role='alert' <strong> Please correct: </strong><ul> ";
            for(var i = 0 , len = errorMessages.length ; i<len ; i++) {
                errorStr += "<li>" + errorMessages[i] + "</li>";
            }
            errorStr += "</ul></div>";
            $("#resultError").html(errorStr);
            return false;
        }
        else return true;
    });
});