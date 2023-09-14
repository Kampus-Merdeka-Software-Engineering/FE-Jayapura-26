var poliData = {
    poliumum: [
        { nama: "dr.Rudi Setiawan", spesialisasi: "Dokter Umum", exp:"5 Tahun", like:"90%" ,ppimg:"../image/Dokter Umum/16.png" },
        { nama: "dr.Dewi Handayani", spesialisasi: "Dokter Umum", exp:"3 Tahun", like:"98%" ,ppimg:"../image/Dokter Umum/25.png" },
        { nama: "dr.Aditya Prabowo", spesialisasi: "Dokter Umum", exp:"12 Tahun", like:"89%" ,ppimg:"../image/Dokter Umum/18.png" },
        { nama: "dr.Hendra Wijaya", spesialisasi: "Dokter Umum", exp:"8 Tahun", like:"87%" ,ppimg:"../image/Dokter Umum/19.png" },
        { nama: "dr.Yulia Safitri", spesialisasi: "Dokter Umum", exp:"10 Tahun", like:"89%" ,ppimg:"../image/Dokter Umum/22.png" },
    ],
    poligigi: [
        { nama: "dr. Budi Prasetyo, Sp.Ort", spesialisasi: "Spesialis Ortodonti", exp: "5 Tahun", like: "85%", ppimg: "../image/Dokter spesialis/dokter-gigi-1.png" },
        { nama: "dr. Siti Rahayu, Sp.Perio", spesialisasi: "Spesialis Periodonti", exp: "6 Tahun", like: "92%", ppimg: "../image/Dokter spesialis/dokter-gigi-2.png" },
        { nama: "dr. Andi Wibowo, Sp.Pros", spesialisasi: "Spesialis Prostodonti", exp: "12 Tahun", like: "98%", ppimg: "../image/Dokter spesialis/dokter-gigi-3.png" },
    ],
    polianak: [
        { nama: "dr. Anisa Indriani, Sp.A", spesialisasi: "Spesialis Anak", exp: "4 Tahun", like: "95%", ppimg: "../image/Dokter spesialis/dokter-anak-1.png" },
        { nama: "dr. Dian Purnama, Sp.KJ", spesialisasi: "Spesialis Kesehatan Jiwa", exp: "7 Tahun", like: "90%", ppimg: "../image/Dokter spesialis/dokter-anak-2.png" },
        { nama: "dr. Rini Cahyati, Sp.THT-KL", spesialisasi: "Spesialis Telinga Hidung Tenggorokan-Kepala Leher", exp: "5 Tahun", like: "93%", ppimg: "../image/Dokter spesialis/dokter-anak-3.png" },
    ],
    polipdalam: [
        { nama: "dr. Tri Haryanto, Sp.PD", spesialisasi: "Spesialis Penyakit Dalam", exp: "9 Tahun", like: "96%", ppimg: "../image/Dokter spesialis/dokter-penyakitdalam-1.png" },
        { nama: "dr. Rina Wijaya, Sp.GK", spesialisasi: "Spesialis Gizi Klinis", exp: "12 Tahun", like: "94%", ppimg: "../image/Dokter spesialis/dokter-penyakitdalam-2.png" },
        { nama: "dr. Siti Rahmawati, Sp.PD", spesialisasi: "Spesialis Penyakit Dalam", exp: "5 Tahun", like: "88%", ppimg: "../image/Dokter spesialis/dokter-penyakitdalam-3.png" },
    ],
    polimata: [
        { nama: "dr. Adi Nugraha, Sp.M", spesialisasi: "Spesialis Mata", exp: "9 Tahun", like: "87%", ppimg: "../image/Dokter spesialis/dokter-mata-1.png" },
        { nama: "dr. Maya Dewi, Sp.PA", spesialisasi: "Spesialis Patologi Anatomi", exp: "7 Tahun", like: "90%", ppimg: "../image/Dokter spesialis/dokter-mata-2.png" },
        { nama: "dr. Iwan Setiawan, Sp.M", spesialisasi: "Spesialis Mata", exp: "15 Tahun", like: "98%", ppimg: "../image/Dokter spesialis/dokter-mata-3.png" },
    ],
    polijantung: [
        { nama: "dr. Agus Santoso, Sp.JP", spesialisasi: "Spesialis Jantung dan Pembuluh Darah", exp: "22 Tahun", like: "94%", ppimg: "../image/Dokter spesialis/dokter-jantung-1.png" },
        { nama: "dr. Indah Wulandari, Sp.JP", spesialisasi: "Spesialis Jantung dan Pembuluh Darah", exp: "13 Tahun", like: "95%", ppimg: "../image/Dokter spesialis/dokter-jantung-2.png" },
        { nama: "dr. Yudi Pranata, Sp.BP", spesialisasi: "Spesialis Bedah Jantung dan Pembuluh Darah", exp: "18 Tahun", like: "98%", ppimg: "../image/Dokter spesialis/dokter-jantung-3.png" },
    ],
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function tampilkanDokter(poliId) {
    poliData[poliId].forEach(function(dokter) {
        var dokterElement = document.createElement("div");
        dokterElement.className = "dokter-container";
        dokterElement.innerHTML = `
            <img id="dokter-pp" src="${dokter.ppimg}" alt="Dokter1">
            <div class="dokter-about">
                <div class="dokter-nameetc">
                    <h1>${dokter.nama}</h1>
                    <h3>${dokter.spesialisasi}</h3>
                    <div class="dokter-inform">
                        <div>
                            <img src="../image/icon/briefcase.png" alt="Pengalaman Kerja">
                            <p>${dokter.exp}</p>
                        </div>
                        <div>
                            <img src="../image/icon/Like.png" alt="Feedback++">
                            <p>${dokter.like}</p>
                        </div>
                    </div>
                </div>
                <button onclick="tomboldokter('${dokter.nama}')">Pilih Dokter</button>
            </div>
        `;
        var allDokterContainer = document.getElementsByClassName("all-dokter-container")[0];
        allDokterContainer.appendChild(dokterElement);

        var dokterselect = document.createElement("option");
        dokterselect.value = dokter.nama;
        dokterselect.textContent = dokter.nama;
        var dokterlistselect = document.getElementById("dokterinput");
        dokterlistselect.appendChild(dokterselect);
    });
    
}

function tomboldokter(nama){
    var selecteddokter = document.getElementById("dokterinput");
    selecteddokter.value = nama 
    var form = document.getElementById("formdt");
    form.scrollIntoView();
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var selectedDate = new Date(document.getElementById("tanggaldaftar").value);
    var currentDate = new Date();

    // Cek apakah tanggal yang dipilih lebih kecil dari tanggal saat ini (tanggal lalu)
    if (selectedDate < currentDate) {
        alert("Anda tidak dapat memilih tanggal yang sudah lewat.");
        return;
    }

    // Cek apakah tanggal yang dipilih adalah hari Minggu (dalam hal ini, kode 0 adalah hari Minggu)
    if (selectedDate.getDay() === 0) {
        alert("Anda tidak dapat memilih hari Minggu.");
        return;
    }

    // Jika validasi berhasil, Anda dapat mengirimkan formulir atau melakukan tindakan lain sesuai kebutuhan.
    alert("Tanggal valid!");
    // this.submit(); // Uncomment this line to submit the form after validation
});

var poliTerpilih = getParameterByName('poli');
if (poliTerpilih) {
    console.log('Poli Terpilih:', poliTerpilih);
    const titletext = document.getElementById("titletext");
    titletext.textContent = 'DOKTER'+poliTerpilih.replace('poli',' ').toUpperCase();
    if (poliTerpilih=='polipdalam') {
        titletext.textContent = 'DOKTER PENYAKIT DALAM'
    };

    var poliinput = document.getElementById("poliinput");
    poliinput.value = poliTerpilih.replace('poli',' ').toUpperCase();
    tampilkanDokter(poliTerpilih);

    var formcont = document.getElementById("formct");
    formcont.style.display = "flex";
    var inputTanggal = document.getElementById("tanggaldaftar");
    var tanggalSaatIni = new Date();
    var tahun = tanggalSaatIni.getFullYear();
    var bulan = (tanggalSaatIni.getMonth() + 1).toString().padStart(2, '0');
    var tanggal = tanggalSaatIni.getDate().toString().padStart(2, '0');

    inputTanggal.value = tahun + "-" + bulan + "-" + tanggal;
}
else{
    var err = document.getElementById('maincontent');
    err.classList.add('error');

    var page = document.getElementById('errorpage');
    page.style.display = 'flex';
}