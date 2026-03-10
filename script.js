AOS.init();

function sendMail(){
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userSubject = document.getElementById("userSubject").value;
    var emailMessage = document.getElementById("emailMessage").value;

    var params = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        title: document.getElementById("userSubject").value,
        message: document.getElementById("emailMessage").value,
    };

    const serviceID = "service_8ht93b8";
    const templateID = "template_5hsqpf1";

    if (userName == "" || userEmail == "" || userSubject == "" || emailMessage== ""){
        alert("Please fill out all fields.");
    } else {
        emailjs.send(serviceID, templateID, params) .then((res) => {
        document.getElementById("userName").value ="";
        document.getElementById("userEmail").value ="";
        document.getElementById("userSubject").value ="";
        document.getElementById("emailMessage").value ="";
        console.log(res);
        alert("Email sent successfully!");
    })
    .catch((err) => console.log(err));

    }

 
}

const largeScreen = window.matchMedia("(min-width: 992px)");
function handleScreenChange(event) {
  if (event.matches) {
    // Screen is large or wider, remove the class
    document.getElementById("navigationBar").classList.remove("sticky-top");
  } else {
    // Screen is smaller than large, add the class
    document.getElementById("navigationBar").classList.add("sticky-top");
  }
}

// Initial check
handleScreenChange(largeScreen);

// Add listener for future changes
largeScreen.addListener(handleScreenChange); 

// back to top button code
var btn = $('#backToTopButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});