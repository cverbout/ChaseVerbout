// NASA Photo API
const NASA_API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=ao43GovSAQJ1tbUUjK0aj3AUZ3G4Rwg3kH9bdDgu";

// Fetches the image given the nasa url
const fetchImage = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Takes in the image and appropriately uses its data to add to the DOM
const getImageData = async () => {
  try {
    let imageData = await fetchImage(NASA_API_URL);
    console.log(imageData);
    let container = document.getElementsByClassName("NASA")[0];
    let textCont = document.getElementsByClassName("NASA-text")[0];
    let name = document.createElement("h4");
    name.textContent = `${imageData.title}`;
    textCont.append(name);
    let paragraph = document.createElement("p");
    paragraph.textContent = `${imageData.explanation}`;
    textCont.append(paragraph);
    let image = document.createElement("img");
    image.setAttribute("src", `${imageData.url}`);
    image.setAttribute("alt", `${imageData.title}`);
    image.style.maxWidth = "400px";
    container.append(image);
  } catch (error) {
    console.log(error);
  }
};

getImageData();

// Once everything has loaded in the DOM, run this function
document.addEventListener("DOMContentLoaded", function () {
  // Object to represent form input
  let formOutput = {
    fullname: null,
    email: null,
    message: null,
  };

  // Get the form object
  let form = document.querySelector(".signup-form");

  // Add submit functionality to form
  form.addEventListener("submit", (event) => {
    formOutput.fullname = form.elements.fullname.value;
    formOutput.email = form.elements.email.value;
    formOutput.message = form.elements.message.value;

    // If any of the values are invalid - alert user and prevent default
    if (!validate(formOutput)) {
      event.preventDefault();
      alert("Please fill out all of the fields");
    } else {
      console.log("========= Form Submission =========");
      console.log(`Full Name: ${formOutput.fullname}`);
      console.log(`Email: ${formOutput.email}`);
      console.log(`Message: ${formOutput.message}`);
    }
  });

  // Ensure that items in formData are valid
  function validate(formData) {
    let valid = true;
    for (let item in formData) {
      if (
        formData[item] === "" ||
        formData[item] === null ||
        formData[item] === undefined
      ) {
        valid = false;
      }
    }
    return valid;
  }
});
