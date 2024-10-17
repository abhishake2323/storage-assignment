
let username= null;


function loadStorage(){
username=    window.localStorage.getItem("username");
document.getElementById("display-name").innerHTML=username;
}
function saveUserInputTolocalStorage(){
    username = document.getElementById("username").value;
    window.localStorage.setItem("username", username);
};


function clearInputs(){

    document.getElementById("username").value =""
    window.localStorage.clear();

}

loadStorage()
