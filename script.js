
   function showButtons() {
    var buttonsDiv = document.querySelector(".buttons");
    if (buttonsDiv) {
        buttonsDiv.style.display = "block";
    }
    var showButtonsButton = document.getElementById("showButtons");
    if (showButtonsButton) {
        showButtonsButton.style.display = "none";
    }

    var contentDivs = document.querySelectorAll(".buttonContent");
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = "none";
    }
}
showButtons();

function pakeisk(id) {
    var divs = document.querySelectorAll(".buttonContent");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    var selectedDiv = document.getElementById(id);
    if (selectedDiv) {
        selectedDiv.style.display = "block";
    }
}



