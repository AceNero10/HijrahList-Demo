// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close Mobile Menu if User Clicks Outside of It
document.addEventListener("click", (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickInsideToggle = menuToggle.contains(event.target);
  if (!isClickInsideMenu && !isClickInsideToggle) {
    mobileMenu.classList.add("hidden");
  }
});

// Email Subscription 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyqgC3LG0TZ1jZ0CLnGUzObB-wI5Kcupn5IvO0okmeRydMJrHlg_NNlpQMwt64tIu0y/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
 msg.innerHTML = "Thank You For Subscribing!"
    })
    setTimeout(function(){
        msg.innerHTML = ""
    }, 10000)
    form.reset()
    .catch(error => console.error('Error!', error.message))
})
//Tabs Js
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}








  
  