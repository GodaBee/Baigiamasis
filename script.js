
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

// var burger = document.getElementById("burger");
// var links2 = document.getElementById("links2");

// Add an event listener to the burger icon
// burger.addEventListener("click", function() {
//   links2.classList.toggle("translate");
//   this.classList.toggle("rotate");
// });

// Add an event listener to each anchor tag inside links2
// var anchorTags = links2.querySelectorAll("a");
// anchorTags.forEach(function(anchor) {
//   anchor.addEventListener("click", function() {
//     // Remove the translate class when an anchor is clicked
//     links2.classList.remove("translate");
//     burger.classList.remove("rotate");
//   });
// });

// Add a window resize event listener
// window.addEventListener("resize", function() {
//   if (this.innerWidth > 768) {
//     links2.classList.remove("translate");
//     burger.classList.remove("rotate");
//   }
// });

