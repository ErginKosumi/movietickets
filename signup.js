function saveAccount() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        alert("Your account has been created and your login information has been saved to local storage.");
        window.location.href = "index.html";
    } else {
        alert("Please fill out all fields.");
    }

}