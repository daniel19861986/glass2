var button = document.createElement("Daniel");
button.innerHTML = "Fa ceva";

//append somewhere
var body = document.getElementsByTagName("body")[0];
button.appendChild(button);

//add event handler
button.addEventListener("click", function() {
   alert("Eng");
});