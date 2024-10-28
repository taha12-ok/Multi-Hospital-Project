let menulist = document.getElementById("menuList");
let menuIcon = document.querySelector(".menu-icon");

// Initial menu state
menulist.style.maxHeight = "0px";

// Toggle menu on click of the menu icon
function toggleMenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "300px"; // Adjust as needed for your menu height
        menuIcon.classList.add("open"); // Add the open class to animate bars
    } else {
        menulist.style.maxHeight = "0px"; // Close the menu
        menuIcon.classList.remove("open"); // Remove the open class to reset animation
    }
}

// Close the menu when any link inside it is clicked
let menuLinks = document.querySelectorAll("#menuList a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menulist.style.maxHeight = "0px"; // Close the menu
        menuIcon.classList.remove("open"); // Reset the icon
    });
});

// Hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    
    // Get the navbar element
    var navbar = document.getElementById("navbar");
    
    // Check window width for mobile responsiveness
    if (window.innerWidth <= 600) {
        if (prevScrollpos > currentScrollpos) {
            navbar.style.top = "0px"; // Show navbar
        } else {
            navbar.style.top = "-100px"; // Hide navbar for mobile
        }
        // Automatically close the menulist when scrolling
        menulist.style.maxHeight = "0px"; // Close the menu
        menuIcon.classList.remove("open"); // Reset the icon
    } else {
        if (prevScrollpos > currentScrollpos) {
            navbar.style.top = "0px"; // Show navbar
        } else {
            navbar.style.top = "-90px"; // Hide navbar for desktop
        }
    }
    
    prevScrollpos = currentScrollpos;
};


// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000, // 3 seconds delay between slides
    disableOnInteraction: false, // Keeps autoplay running even after user interacts
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// email js
function sendMail(e) {
  e.preventDefault(); // Prevent the form from submitting the default way

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_qlyws57";
  const templateId = "template_24er3j7";

  emailjs.send(serviceId, templateId, params)
    .then(function (res) {
      console.log("Email sent successfully!", res.status, res.text);

      // Show success popup
      document.getElementById("successPopup").style.display = "block";

      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function (err) {
      console.log("Failed to send email. Error: ", err);
      alert("Failed to send your message. Please try again.");
    });
}

// Close popup
function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}


//  gsap animattions

const myText = new SplitType("#my-text")
const abtH1 = new SplitType("#abt-h1")

// function runGSAPAnimations() {
  

gsap.registerPlugin(ScrollTrigger);// Include GSAP and ScrollTrigger scripts in your HTML

gsap.from(".char", {
  x:80,        // Start the characters below their normal position
  duration:1,   // Animation duration in seconds
  delay: 0.3,    // Delay before the animation starts
  opacity:0,    // Start from invisible
  stagger:0.08, // Time between each character animation
  ease: "power4.out" // Use a smooth easing function
});

gsap.from(".img-left", {
  x:50,        // Start the characters below their normal position
  duration:1,   // Animation duration in seconds
  delay: 0.3,    // Delay before the animation starts
  opacity:0,    // Start from invisible
  stagger:0.03, // Time between each character animation
  ease: "power4.out" // Use a smooth easing function
});

gsap.from(".img-right", {
  x:-50,        // Start the characters below their normal position
  duration:1,   // Animation duration in seconds
  delay: 0.3,    // Delay before the animation starts
  ease: "power4.out" // Use a smooth easing function
});

gsap.from("#bracket-left", {
  x:50,        // Start the characters below their normal position
  duration:1,   // Animation duration in seconds
  delay: 0.3,    // Delay before the animation starts
  ease: "power4.out" // Use a smooth easing function
});

gsap.from("#bracket-right", {
  x:-50,        // Start the characters below their normal position
  duration:1,   // Animation duration in seconds
  delay: 0.3,    // Delay before the animation starts
  ease: "power4.out" // Use a smooth easing function
});

gsap.from(".img-side", {
  x:50,        // Start the characters below their normal position
  duration:1,   // Animation duration in seconds
  ease: "power4.out", // Use a smooth easing function
  stagger:0.1
});

gsap.from("#btn", {
  duration:1.5,    // Animation duration in seconds
  scale:0,       // Start scale from 0 (small) to 1 (original size)
  opacity: 0,     // Start opacity from 0 to 1 (fade-in)
});
gsap.from(".hero-right img", {
  duration:1.5,    // Animation duration in seconds
  scale:0,       // Start scale from 0 (small) to 1 (original size)
  opacity: 0,     // Start opacity from 0 to 1 (fade-in)
});


gsap.from([".ser1", ".ser2", ".ser3", ".ser4", ".ser5"], {
  opacity: 0,             // Start with opacity 0
  duration: 1,          // Duration of each element's fade-in
  y: 50,                  // Move 50px from bottom to top
  ease: "power2.out",     // Smooth easing
  stagger:0.3,           // Stagger the animations by 0.3 seconds
  scrollTrigger: {
    trigger: ".ser1",      // Trigger animation when the first service comes into view
    start: "top 80%",      // Start when .ser1 is 80% from the top of the viewport
    toggleActions: "play none none none" // Play the animation only once when it reaches the viewport
  }
});


gsap.from(".images-2", {
  x:50,        // Start the characters below their normal position
  duration:2,   // Animation duration in seconds
  ease: "power4.out", // Use a smooth easing function
  stagger:0.1,
  scrollTrigger: {
    trigger: ".about-right",   // Trigger the animation when .about-right comes into view
    start: "top 80%",          // Starts when the top of .about-right is 80% from the top of the viewport
    toggleActions: "play none none none", // Only play the animation once
  }
  
});


gsap.from("#abt-h1", {
  opacity: 0,        // Start invisible
  duration: 2,       // Duration of the fade-in effect
  x: 100,             // Move 50px down and then back to position
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-right",   // Trigger the animation when .about-right comes into view
    start: "top 80%",          // Starts when the top of .about-right is 80% from the top of the viewport
    toggleActions: "play none none none", // Only play the animation once
  }
});
gsap.from("#abtbtn", {
  duration:2,    // Animation duration in seconds
  x:80,
  opacity:10,     // Start opacity from 0 to 1 (fade-in)
  scrollTrigger: {
    trigger: ".aboutus",   // Trigger the animation when .about-right comes into view
    start: "top 80%",          // Starts when the top of .about-right is 80% from the top of the viewport
  }
});

gsap.from(".about-left", {
  duration:1.5,    // Animation duration in seconds
  scale:0,       // Start scale from 0 (small) to 1 (original size)
  opacity: 0,     // Start opacity from 0 to 1 (fade-in)
  scrollTrigger: {
    trigger: ".about-right",   // Trigger the animation when .about-right comes into view
    start: "top 80%",          // Starts when the top of .about-right is 80% from the top of the viewport
    toggleActions: "play none none none", // Only play the animation once
  }
});
// Animation for the left column (image)
gsap.from(".left-column img", {
  duration:1.5,    // Animation duration in seconds
  scale:0,       // Start scale from 0 (small) to 1 (original size)
  opacity: 0,     // Start opacity from 0 to 1 (fade-in)
  scrollTrigger: {
    trigger: ".book-online-section",  // Animation starts when the section is in view
    start: "top 80%",   // Trigger animation when the top of the section hits 80% of the viewport
    toggleActions: "play none none none",  // Play once when triggered
  }
});

// Animation for the right column (form)
gsap.from(".booking-form,#form-h1",{
  opacity: 0,          // Start with opacity 0
  x: 100,              // Slide in from 100px to the right
  duration: 1.5,       // Duration of the animation
  ease: "power2.out",  // Smooth easing
  scrollTrigger: {
    trigger: ".book-online-section",  // Animation starts when the section is in view
    start: "top 80%",   // Trigger animation when the top of the section hits 80% of the viewport
    toggleActions: "play none none none",  // Play once when triggered
  }
});





// }

// if (window.innerWidth >= 1024) {
//   runGSAPAnimations();
// }

