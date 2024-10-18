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
  