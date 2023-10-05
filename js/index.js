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

var layanant = document.getElementsByClassName("card-layanan");

for (var i = 0; i < layanant.length; i++) {
    layanant[i].addEventListener("click", function () {
        var judulLayanan = this.querySelector(".judul-layanan");
        if (judulLayanan.style.display === "none" || judulLayanan.style.display === "") {
            judulLayanan.style.display = "block";
        } else {
            judulLayanan.style.display = "none";
        }
    });
}