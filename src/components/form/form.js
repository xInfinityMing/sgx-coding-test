import './form.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9zdrP_kgDYAe5fzFsWCoiMsNwlPiGTLI",
  authDomain: "sgx-coding-test.firebaseapp.com",
  projectId: "sgx-coding-test",
  storageBucket: "sgx-coding-test.appspot.com",
  messagingSenderId: "576345164902",
  appId: "1:576345164902:web:3af01888be415d498cf1a7",
  measurementId: "G-SJ11BVKCH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let arrImage = [];

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
    
    console.log(arrImage);
  };

document.getElementById('form').addEventListener("submit", (e) => {
  e.preventDefault();
  let validationInput = document.querySelectorAll("form input");
  let validationTextarea = document.querySelectorAll("form textarea");
  let validationMsg = "";
  let validatedInput = true;
  let validatedTextarea = true;

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
  })
});

document.querySelectorAll(".form textarea").forEach((textarea) => {
  textarea.addEventListener("change", () => {
      if(textarea.parentNode.querySelector(".error")) {
          textarea.parentNode.querySelector(".error").remove();
      } 
  })
});
