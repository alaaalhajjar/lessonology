const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const searchInput = document.getElementById("search-input");
const leftnav = document.getElementById('leftNav');
const windowWidth = window.innerWidth;

searchIcon.addEventListener("click", () => {
    searchBox.style.display = (searchBox.style.display === "block") ? "none" : "block";
    (searchBox.style.display === "block") ?  searchIcon.src = "assets/images/colorSearch.svg": searchIcon.src = "assets/images/search.svg" ;
    if ((windowWidth > 767 && windowWidth< 992) &&(searchBox.style.display === "block")){
        document.getElementById("leftNav").style.marginRight = "235px";
    }else if((windowWidth > 767 && windowWidth< 992) &&(searchBox.style.display === "none")){
        document.getElementById("leftNav").style.marginRight = "400px";
    }
});

document.addEventListener("click", function (event) {
    // Check if the clicked element is not the searchBox or search icon
    if (event.target !== searchInput && event.target !== searchIcon && (searchBox.style.display ==="block")){
       { searchBox.style.display = "none";
        searchIcon.src = "assets/images/search.svg" ;
       }
        if((windowWidth >767 && windowWidth< 992) &&(searchBox.style.display === "none")){
            document.getElementById("leftNav").style.marginRight = "350px";
        }
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

$("#moveBtn").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function() {
    window.onscroll = function () {
        let height = $(window).scrollTop()
        let bacTopBtn = $("#moveBtn")
        let movebtnBG =$("#moveBtnbg")
        if(height > 4200){
            $(movebtnBG).css({background: "#fff"})
            $(bacTopBtn).css({fill: "#9A314F"})
            $(bacTopBtn).css({stroke: "#none"})

        }else{
            $(bacTopBtn).css({stroke: "#fff"})
            $(movebtnBG).css({background: "#9A314F"})
        }
    }
});

        const menu_toggle = document.querySelector('.navbar-toggler');
        const menu_close = document.querySelector('.close-sidebar');
		const sidebar = document.querySelector('.sidebar');

		menu_toggle.addEventListener('click', () => {
			menu_toggle.classList.toggle('is-active');
			sidebar.classList.toggle('is-active');
            sidebar.style.display="block";
            // sidebar.style.display= 'absolute';
           
            // sidebar.style.top="0px";
		});
        menu_close.addEventListener('click', () => {
			sidebar.style.display="none";
		});

        ///////Register page js ////////


        //show password 
        // function togglePasswordVisibility() {
        //     var passwordField = document.getElementById("password");
        //     var showPasswordButton = document.getElementById("showPasswordButton");

        //     if (passwordField.type === "password") {
        //         passwordField.type = "text";
        //         showPasswordButton.textContent = "Hide Password";
        //     } else {
        //         passwordField.type = "password";
        //         showPasswordButton.textContent = "Show Password";
        //     }
        // }
 const togglePassword = document.querySelector('#eye');
  const password = document.querySelector('#userPassword');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


const togglelginPassword = document.querySelector('#logineye');
const loginpassword = document.querySelector('#Password');
togglelginPassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = loginpassword.getAttribute('type') === 'password' ? 'text' : 'password';
  loginpassword.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
