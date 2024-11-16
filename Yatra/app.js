// Array of image sources
const images = [
    "./images/Annapurna.jpg",
    "./images/dharan.jpg",
    "./images/daulaghiri.png",
    "./images/suklaphata.jpg",
    "./images/sudurpaschim.jpg",
    "./images/Karnali.jpg"
  ];
  
  let currentIndex = 0;
  
  // Open modal and display clicked image
  function openModal(index) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = images[index];
    currentIndex = index;
  }
  
  // Close modal
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  
  // Navigate to next or previous image
  function changeSlide(direction) {
    currentIndex += direction;
  
    if (currentIndex >= images.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
  
    document.getElementById("modalImage").src = images[currentIndex];
  }
  
  
        // Get the contact form and add an event listener for form submission
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Create a message object
            const messageData = {
                name: name,
                email: email,
                message: message,
                date: new Date().toLocaleString()
            };

            // Retrieve existing messages from localStorage or initialize an empty array
            const messages = JSON.parse(localStorage.getItem("messages")) || [];

            // Add the new message to the messages array
            messages.push(messageData);

            // Store the updated messages array back in localStorage
            localStorage.setItem("messages", JSON.stringify(messages));

            // Clear the form fields
            document.getElementById("contactForm").reset();

            // Confirm message was saved
            alert("Thank you! Your message has been sent and saved.");
        });
  