import './form.scss';

let arrImage = [];
const validationInput = document.querySelectorAll("form input");
const validationTextarea = document.querySelectorAll("form textarea");
let validationMsg = "";
let validatedInput = false, validatedTextarea  = false;

document.getElementById('file').onchange = function () {
    var src = URL.createObjectURL(this.files[0]);
    let imageContainer = document.querySelector(".add-image-container");
    let imageRowContainer = document.querySelector(".add-image-container .row");
    let rowImage = document.createElement("div");
    let image = document.createElement("img");
    
    rowImage.classList.add("row");
    image.src = src;
    image.classList.add("col-6");
    arrImage.push(src);

    if(imageRowContainer) {
        imageRowContainer.append(image);    
    } else {
        imageContainer.append(rowImage);
        rowImage.append(image);
    }
  };

document.getElementById('form').addEventListener("submit", (e) => {
  e.preventDefault();

  validationInput.forEach((input) => {
      let error = document.createElement("span");
      error.classList.add("error");

      if(input.parentNode.querySelector(".error"))
          input.parentNode.querySelector(".error").remove();

      if(input.value === "" && input.type !== "file") {
          validationMsg = "Please enter a valid field.";
          error.innerHTML = validationMsg;

          if(!input.parentNode.querySelector(".error"))
              input.parentNode.append(error);

              validatedInput = false;
      } else {
          if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value) && input.type === "email") {
              validationMsg = "Please enter a valid email field.";
              error.innerHTML = validationMsg;

              if(!input.parentNode.querySelector(".error"))
                  input.parentNode.append(error);

              validatedInput = false;
          } else {
              if(input.value === "") {
                  validationMsg = "Please upload a image.";
                  error.innerHTML = validationMsg;

                  if(!input.parentNode.querySelector(".error"))
                      input.parentNode.append(error);

                  validatedInput = false;
              } else {
                  validatedInput = true;
              }
          }
      }
  });

  validationTextarea.forEach((textarea) => {
      let error = document.createElement("span");
      error.classList.add("error");
      
      if(textarea.value === "") {

          validationMsg = "Please enter a valid field.";
          error.innerHTML = validationMsg;

          if(!textarea.parentNode.querySelector(".error"))
              textarea.parentNode.append(error);

          validatedTextarea = false;
      } else {
          validatedTextarea = true;
      }
  });

  if(validatedInput && validatedTextarea) {
      document.getElementById('form').submit();
  }
});

document.querySelectorAll(".form input").forEach((input) => {
  input.addEventListener("change", () => {
    if(input.parentNode.querySelector(".error")) {
        input.parentNode.querySelector(".error").remove();
    }

    validationInput.forEach((input) => {
        let error = document.createElement("span");
        error.classList.add("error");
  
        if(input.parentNode.querySelector(".error"))
            input.parentNode.querySelector(".error").remove();
  
        if(input.value === "" && input.type !== "file") {
            validationMsg = "Please enter a valid field.";
            error.innerHTML = validationMsg;
  
            if(!input.parentNode.querySelector(".error"))
                input.parentNode.append(error);
        } else {
            if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value) && input.type === "email") {
                validationMsg = "Please enter a valid email field.";
                error.innerHTML = validationMsg;
  
                if(!input.parentNode.querySelector(".error"))
                    input.parentNode.append(error);
            } else {
                if(input.value === "") {
                    validationMsg = "Please upload a image.";
                    error.innerHTML = validationMsg;
  
                    if(!input.parentNode.querySelector(".error"))
                        input.parentNode.append(error);
                }
            }
        }
    });
  
    validationTextarea.forEach((textarea) => {
        let error = document.createElement("span");
        error.classList.add("error");
        
        if(textarea.value === "") {
  
            validationMsg = "Please enter a valid field.";
            error.innerHTML = validationMsg;
  
            if(!textarea.parentNode.querySelector(".error"))
                textarea.parentNode.append(error);
  
        }
    });

    if(document.getElementById("firstName").value != "" && 
           document.getElementById("lastName").value != "" && 
           document.getElementById("description").value != "" &&
           document.getElementById("email").value != "" &&
           document.getElementById("file").value != "") {
        document.querySelector('button[type="submit"]').removeAttribute("disabled");
    } else {
        document.querySelector('button[type="submit"]').setAttribute("disabled", true);
    }
  })
});

document.querySelectorAll(".form textarea").forEach((textarea) => {
  textarea.addEventListener("change", () => {
    if(textarea.parentNode.querySelector(".error")) {
        textarea.parentNode.querySelector(".error").remove();
    }

    validationInput.forEach((input) => {
        let error = document.createElement("span");
        error.classList.add("error");
  
        if(input.parentNode.querySelector(".error"))
            input.parentNode.querySelector(".error").remove();
  
        if(input.value === "" && input.type !== "file") {
            validationMsg = "Please enter a valid field.";
            error.innerHTML = validationMsg;
  
            if(!input.parentNode.querySelector(".error"))
                input.parentNode.append(error);
        } else {
            if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value) && input.type === "email") {
                validationMsg = "Please enter a valid email field.";
                error.innerHTML = validationMsg;
  
                if(!input.parentNode.querySelector(".error"))
                    input.parentNode.append(error);
            } else {
                if(input.value === "") {
                    validationMsg = "Please upload a image.";
                    error.innerHTML = validationMsg;
  
                    if(!input.parentNode.querySelector(".error"))
                        input.parentNode.append(error);
                }
            }
        }
    });
  
    validationTextarea.forEach((textarea) => {
        let error = document.createElement("span");
        error.classList.add("error");
        
        if(textarea.value === "") {
  
            validationMsg = "Please enter a valid field.";
            error.innerHTML = validationMsg;
  
            if(!textarea.parentNode.querySelector(".error"))
                textarea.parentNode.append(error);
  
        }
    });
     
    if(document.getElementById("firstName").value != "" && 
        document.getElementById("lastName").value != "" && 
        document.getElementById("description").value != "" &&
        document.getElementById("email").value != "" &&
        document.getElementById("file").value != "") {
        document.querySelector('button[type="submit"]').removeAttribute("disabled");
    } else {
        document.querySelector('button[type="submit"]').setAttribute("disabled", true);
    }
  })
});
