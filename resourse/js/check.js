
function validate() {
    let name = document.getElementById("name").value;
    let email1 = document.getElementById("email1").value;
    let email2 = document.getElementById("email2").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    let text;
    console.log("hahahah");
    if (name.length <= 0) {
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if (email1.length <= 0 || email2.length <= 0) {
        text = "Please enter valid email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 0) {
        text = "Please enter valid message";
        error_message.innerHTML = text;
        return false;
    }
    alert("Your form is submitted!! WOW!!!");
    return true;
}
