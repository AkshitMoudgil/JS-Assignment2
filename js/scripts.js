// Constants for querying elements in the DOM
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// Function to change background color based on user input and display student ID
function changeCustomColor() {
  const userInput = parseInt(customNumberInput.value);

  if (userInput < 0 || userInput > 100) {
    document.body.style.backgroundColor = "red";
  } else if (userInput >= 0 && userInput <= 20) {
    document.body.style.backgroundColor = "green";
  } else if (userInput > 20 && userInput <= 40) {
    document.body.style.backgroundColor = "blue";
  } else if (userInput > 40 && userInput <= 60) {
    document.body.style.backgroundColor = "orange";
  } else if (userInput > 60 && userInput <= 80) {
    document.body.style.backgroundColor = "purple";
  } else if (userInput > 80 && userInput <= 100) {
    document.body.style.backgroundColor = "yellow";
  }

  myStudentId.textContent = "Student Id: 200535888"; // Display student ID
}

// Function to change background color with a random number
function changeRandomColor() {
  const randomValue = Math.floor(Math.random() * 100) + 1;
  customNumberInput.value = randomValue;
  changeCustomColor();
}

// Function to generate options for the select list
function addList() {
  const imageNames = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
  ];
  for (let i = 0; i < imageNames.length; i++) {
    const option = document.createElement("option");
    option.value = imageNames[i];
    option.text = imageNames[i];
    imageSelect.appendChild(option); // Adding option to select list
  }
}

// Function to change displayed image
function changeImage() {
  const selectedImage = imageSelect.value;
  images.src = `./img/${selectedImage}`; // Setting image source
}

// Event listeners for button clicks
customColorButton.addEventListener("click", changeCustomColor); // changing custom color
randomColorButton.addEventListener("click", changeRandomColor); // changing color wit random number

// event listeners for on change event of select
addList(); // calling add list function
imageSelect.addEventListener("change", changeImage); // changing displayed image
