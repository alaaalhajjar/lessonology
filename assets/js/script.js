const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const searchInput = document.getElementById("search-input");


searchIcon.addEventListener("click", () => {
    searchBox.style.display = (searchBox.style.display === "block") ? "none" : "block";
    (searchBox.style.display === "block") ?  searchIcon.src = "assets/images/colorSearch.svg"  :  searchIcon.src = "assets/images/search.svg" ;
});



document.addEventListener("click", function (event) {
    // Check if the clicked element is not the searchBox or search icon
    if (event.target !== searchInput && event.target !== searchIcon) {
        searchBox.style.display = "none";
        searchIcon.src = "assets/images/search.svg" ;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('moveBtn');

    scrollButton.addEventListener('click', function () {
        // Scroll to the bottom of the content
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    });
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $("#btn").addClass('show');
  } else {
    $("#btn").removeClass('show');
  }
});

$("#btn").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// $(document).ready(function() {
//     window.onscroll = function () {
//         let height = $(window).scrollTop()
//         let bacTopBtn = $("#moveBtn")
//         if(height > 4400){
//             $(bacTopBtn).css({background: "#fff"})
//         }else{
//             $(bacTopBtn).css({background: "#9A314F"})
//         }
//     }
// });








// const sidebar =document.getElementById("sidebar");
// const listIocn =document.getElementById("list");

// listIocn.addEventListener("click", () => {
//     sidebar.style.display = (sidebar.style.display === "block") ? "none" : "block";
//     document.body.style.opacity = 0.5;
//     sidebar.style.opacity=1;
// });