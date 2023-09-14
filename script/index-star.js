const radioButtons = document.querySelectorAll('input[name="star-option"]');
const labels = document.querySelectorAll('.star-box label');

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('change', () => {
    // Hapus filter dari semua label
    labels.forEach((label) => {
      label.style.filter = 'grayscale(1)';
    });

    // Terapkan filter pada label yang sesuai dengan radio button yang dicentang
    for (let i = 0; i <= index; i++) {
      labels[i].style.filter = 'none';
    }
  });
});