const penghargaanContainers = document.querySelectorAll('.penghargaan-container');
const highlightedImage = document.getElementById('highlighted-image');
let currentImageIndex = 0;

function changeImageAutomatically() {
  const sourceImage = penghargaanContainers[currentImageIndex].querySelector('img').src;
  highlightedImage.src = sourceImage;
  currentImageIndex = (currentImageIndex + 1) % penghargaanContainers.length;
}
const interval = setInterval(changeImageAutomatically, 3000);

penghargaanContainers.forEach((container) => {
  container.addEventListener('click', () => {
    const sourceImage = container.querySelector('img').src;
    highlightedImage.src = sourceImage;
    clearInterval(interval);
  });
});

const radioButtons = document.querySelectorAll('input[name="star-option"]');
const labels = document.querySelectorAll('.star-box label');

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('change', () => {

    labels.forEach((label) => {
      label.style.filter = 'grayscale(1)';
    });

    for (let i = 0; i <= index; i++) {
      labels[i].style.filter = 'none';
    }
  });
});