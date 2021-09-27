let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
    email = id("email");
    password = id("password");
    form = id("form");
    errorMsg = classes("error");
    successIcon = classes("success-icon");
    failureIcon = classes("failure-icon");

/* add submit event */
form.addEventListener("submit" ,(e) => {
    e .preventDefault();

    engine(username ,0,"username cannot be blank");
    engine(email ,1,"email cannot be blank");
    engine(password ,2,"password cannot be blank");
});

/* function which will sort the work of form validation*/

let engine = (id,serial,message) => {
 
if (id.value.trim() === ""){
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red" ;

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";

                                                                 /* create a if else statement */
}
    else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

    }

 };                                 
