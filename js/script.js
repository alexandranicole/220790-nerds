     
     var button = document.querySelector(".red-big");
     var popup = document.querySelector(".feedback-content");
     var close = document.querySelector(".feedback-close");
     var form = popup.querySelector("form");
     var login = popup.querySelector("[name=write-name]");
     var email = popup.querySelector("[name=e-mail]");
     var storage = localStorage.getItem("login");
    
      button.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("feedback-content-show");
      
        if (storage) {
        login.value = storage;
        password.focus();} 
        else {
        login.focus();
        }
       });
    
        close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("feedback-content-show");
        popup.classList.remove("feedback-error");
        

      });
    
    form.addEventListener("submit", function (event) {
  
    if (!login.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;    
    popup.classList.add("feedback-error");} 
    else {
    localStorage.setItem("login", login.value);
  }
});
 
    window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-content-show")) {
        popup.classList.remove("feedback-content-show");
        popup.classList.remove("feedback-error");
          }
        }
      });