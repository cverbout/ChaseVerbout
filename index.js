const NASA_API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=ao43GovSAQJ1tbUUjK0aj3AUZ3G4Rwg3kH9bdDgu";

const fetchImage = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getImageData = async () => {
  try {
    let imageData = await fetchImage(NASA_API_URL);
    console.log(imageData);
    let container = document.getElementsByClassName("NASA")[0];
    let textCont = document.getElementsByClassName("NASA-text")[0];
    let name = document.createElement("h4");
    name.textContent = `${imageData.title}`;
    name;
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
