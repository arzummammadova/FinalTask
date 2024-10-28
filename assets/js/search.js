// Get the modal
var searchModal = document.getElementById("searchModal");

// Get the button that opens the modal (the search icon)
var searchIcon = document.getElementById("searchIcon");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on the search icon, open the modal
searchIcon.onclick = function() {
    searchModal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    searchModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == searchModal) {
        searchModal.style.display = "none";
    }
}
