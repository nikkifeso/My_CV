// get modal element
var form_modal = document.getElementById("form_modal");

// get element to open the modal
var buttn = document.getElementById("buttn");

// get element to close the modal
var exit = document.getElementsByClassName("exit")[0];

// opens the modal after button is clicked
buttn.onclick = function() {
    form_modal.style.display = "block";
}

//  closes the modal after button is clicked
exit.onclick = function (){
    form_modal.style.display = "none";
}
