// Call a Timeout
setTimeout(myFunction, 3000);

// The callback function
function myFunction() {
  myDisplayer("Hello!");
}

// Function to display any text
function myDisplayer(text) {
  let demo = document.getElementById("demo"); 
  demo.innerHTML += text + "<br>";
}